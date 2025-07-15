from langchain_huggingface import HuggingFaceEmbeddings
from langchain_chroma import Chroma
from langchain.chains import RetrievalQA
from langchain.prompts import PromptTemplate
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_groq import ChatGroq
from langchain_community.document_loaders import PyPDFLoader, DirectoryLoader
import os

from .config import GROQ_API_KEY, CHROMA_DB_PATH, PDF_DIR

# ... rest of the code unchanged ...

def initialize_llm():
    llm = ChatGroq(
        temperature=0,
        groq_api_key=GROQ_API_KEY,
        model_name="llama3-8b-8192"
    )
    return llm

def create_vector_db():
    loader = DirectoryLoader(PDF_DIR, glob="*.pdf", loader_cls=PyPDFLoader)
    documents = loader.load()
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
    texts = text_splitter.split_documents(documents)
    embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
    vector_db = Chroma.from_documents(texts, embeddings, persist_directory=CHROMA_DB_PATH)
    vector_db.persist()
    return vector_db

def get_vector_db():
    if not os.path.exists(CHROMA_DB_PATH):
        return create_vector_db()
    embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
    return Chroma(persist_directory=CHROMA_DB_PATH, embedding_function=embeddings)
def setup_qa_chain():
    llm = initialize_llm()
    vector_db = get_vector_db()
    retriever = vector_db.as_retriever()

    prompt_templates = """You are a compassionate mental health chatbot. Respond thoughtfully:
{context}
User: {question}
Chatbot:"""

    PROMPT = PromptTemplate(template=prompt_templates, input_variables=["context", "question"])

    qa_chain = RetrievalQA.from_chain_type(
        llm=llm,
        chain_type="stuff",
        retriever=retriever,
        chain_type_kwargs={"prompt": PROMPT},
        return_source_documents=False
    )
    return qa_chain
