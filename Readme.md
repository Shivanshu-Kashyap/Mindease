# MindEase Platform 🧠💚

A comprehensive mental health platform that bridges the gap between individuals and mental health professionals, making mental health care accessible, affordable, and convenient for everyone.

## 🌟 About MindEase

MindEase is your trusted partner in managing your mental health conveniently and efficiently. We understand the challenges individuals face when seeking mental health support and resources, and we're committed to excellence in mental health technology.

### Our Vision
To create a seamless mental health experience for every user, bridging the gap between individuals and mental health professionals, making it easier for you to access the care you need, when you need it.

## ✨ Key Features

### 🏥 Licensed Professionals
- All therapists are licensed and verified professionals with years of experience
- Comprehensive doctor profiles and specialization information

### 📅 Flexible Scheduling
- Book sessions at your convenience, 7 days a week
- Morning or evening appointments available
- Easy appointment management system

### 🔒 Secure Sessions
- All sessions are private, confidential, and HIPAA compliant
- Secure payment processing with Stripe and Razorpay integration

### 🤖 24/7 AI Mental Health Support
- Immediate support from our AI chatbot trained on mental health resources
- Evidence-based coping strategies and emotional support
- Private and confidential conversations
- Available 24/7 between professional sessions

## 🏗️ System Architecture

The MindEase platform consists of three main components:

### 1. Admin Panel
**Tech Stack:** React.js, Vite, Tailwind CSS

**Features:**
- **Admin Dashboard:** Complete overview of bookings, doctors, appointments, and patient statistics
- **Doctor Management:** Add new doctors, view doctor list, and manage profiles
- **Appointment Management:** Monitor all patient appointments and their status
- **Doctor Portal:** Individual dashboards for doctors with earnings, appointments, and patient details

### 2. User Frontend
**Tech Stack:** React.js, Vite, Tailwind CSS, Lucide React

**Pages & Features:**
- **Home:** Landing page with header, speciality menu, top doctors, and chatbot information
- **About:** Information about MindEase and our mission
- **Contact:** Contact form and support information
- **Doctors:** Browse doctors by speciality and view profiles
- **Appointments:** Book appointments with preferred doctors
- **My Profile:** User profile management
- **My Appointments:** View and manage scheduled appointments
- **Login/Signup:** User authentication system
- **Chatbot:** AI-powered mental health support
- **Verify:** Account verification system

### 3. Backend API
**Tech Stack:** Node.js, Express.js, MongoDB, Mongoose

**Features:**
- RESTful API endpoints for all platform functionality
- User authentication with JWT tokens
- Password hashing with bcrypt
- File upload handling with Multer and Cloudinary
- Payment processing with Stripe and Razorpay
- Data validation and security measures

### 4. AI Chatbot Service
**Tech Stack:** Python, FastAPI, LangChain, ChromaDB, Groq API

**Features:**
- Mental health document processing using RAG (Retrieval-Augmented Generation)
- HuggingFace embeddings for semantic search
- Llama3-8b model for conversational responses
- Vector database for efficient document retrieval
- CORS enabled for frontend integration

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB
- Python 3.8+
- Groq API key
- Cloudinary account
- Stripe/Razorpay account

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/mindease-platform.git
cd mindease-platform
```

#### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

Start the backend server:
```bash
npm run server
```

#### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

#### 4. Admin Panel Setup
```bash
cd admin
npm install
npm run dev
```

#### 5. Chatbot API Setup
```bash
cd mental-health-chatbot-api
pip install -r requirements.txt
```

Create a `config.py` file in the chatbot directory:
```python
GROQ_API_KEY = "your_groq_api_key"
CHROMA_DB_PATH = "./chroma_db"
PDF_DIR = "./data"
```

Add your mental health PDF documents to the `data` directory, then start the chatbot API:
```bash
python -m uvicorn main:app --reload --port 8000
```

## 📁 Project Structure

```
mindease-platform/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── utils/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   └── App.jsx
│   └── package.json
├── admin/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   └── package.json
└── mental-health-chatbot-api/
    ├── chatbot/
    │   ├── __init__.py
    │   ├── config.py
    │   └── qa_chain.py
    ├── data/
    ├── requirements.txt
    └── main.py
```

## 🔧 API Endpoints

### User Authentication
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `POST /api/user/verify` - Account verification

### Doctor Management
- `GET /api/doctors` - Get all doctors
- `GET /api/doctors/:id` - Get doctor by ID
- `POST /api/doctors` - Add new doctor (Admin only)

### Appointments
- `POST /api/appointments/book` - Book appointment
- `GET /api/appointments/user` - Get user appointments
- `PUT /api/appointments/:id` - Update appointment status

### Chatbot
- `POST /ask` - Ask question to AI chatbot
- `GET /health` - Health check endpoint

## 🛠️ Technologies Used

### Frontend
- **React.js** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Axios** - HTTP client
- **React Toastify** - Notifications
- **Lucide React** - Icons

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Multer** - File uploads
- **Cloudinary** - Image storage

### AI Chatbot
- **FastAPI** - Web framework
- **LangChain** - LLM framework
- **ChromaDB** - Vector database
- **HuggingFace** - Embeddings
- **Groq API** - LLM inference

## 🔐 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- CORS protection
- Input validation
- HIPAA compliant data handling
- Secure file uploads

## 📱 Responsive Design

The platform is fully responsive and works seamlessly across:
- Desktop computers
- Tablets
- Mobile devices



**MindEase** - Making mental health care accessible, affordable, and convenient for everyone. 💚