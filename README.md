
# Assignment 15.7 

This project contains three core sections:
1. A full-stack job board mini web application built using Node.js, Express, MongoDB, React, and TypeScript.
2. AI prompt engineering for a SaaS sales assistant.
3. Social media content strategy for the wellness brand Hedamo.

---

## 📁 Folder Structure

```
Assignment15.7/
├── backend/                 # Express server + MongoDB models + API routes
├── frontend/                # React + TypeScript frontend with job listing UI
├── prompts/
│   └── ai_sales_prompts.md # Prompt engineering templates, iterations, reflection
├── social_media/
│   └── hedamo_social.md    # Social media content strategy and posts for Hedamo
└── README.md                # This file
```

---

## 🚀 How to Run the Full-Stack App

### Backend Setup

```bash
cd backend
npm install
npm run seed        # Optional: Seed initial job data
npm run dev         # Starts the backend server on http://localhost:5000
```

### Frontend Setup

```bash
cd frontend
npm install
npm start           # Starts the React app on http://localhost:3000
```

Make sure MongoDB is running locally at `mongodb://127.0.0.1:27017`.

---

## ✅ Technical Approach

### 1. Full-Stack Job Board (React + Node + MongoDB)

- **Backend**: Built with Express.js and connected to MongoDB using Mongoose. Three core APIs are implemented:
  - `GET /api/jobs` — list all jobs
  - `GET /api/jobs/:id` — get job detail by ID
  - `POST /api/applications` — submit job application
- **Database Models**: Two Mongoose schemas — `Job` and `Application`
- **Frontend**: Built using React with TypeScript and React Router.
  - `Home.tsx` lists jobs using Axios
  - `JobPage.tsx` displays job details and application form
  - Styled using inline CSS for clean and responsive design
- **Form Submission**: Application data is posted to backend and stored in MongoDB
- **Testing**: Thunder Client was used to test API calls, and MongoDB Compass to inspect saved applications

---

### 2. AI Prompt Engineering for SaaS Sales Assistant

- Defined a **system prompt** setting the tone and goal of the AI assistant
- Created **3 reusable prompt templates**:
  1. Cold Call Introduction
  2. Objection Handling (pricing concerns)
  3. Closing Prompt
- Performed **iterative testing** on each template
  - Included original prompt, improved version, and rationale
- Wrote a short **reflection** on what makes a prompt effective

File: `prompts/ai_sales_prompts.md`

---

### 3. Social Media Content Strategy for Hedamo

- Developed content for **two platforms**:
  - **Instagram**: Lifestyle-focused, visual content
  - **LinkedIn**: Professional, purpose-driven messaging
- Each platform includes:
  - One brand storytelling post
  - One product spotlight post
  - Each post contains:
    - Caption
    - Visual suggestion
    - Call-to-action
    - Hashtags
    - Engagement tactic
- Wrote a visual style guide and short reflection on strategic choices

File: `social_media/hedamo_social.md`

---

## 🧠 Tools & Stack Used

- **Languages**: JavaScript, TypeScript, HTML/CSS, Markdown
- **Frontend**: React, React Router, Axios
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **AI Prompting**: Manual design and iterative testing
- **Content**: Brand-focused copywriting and visual strategy

---

## 📌 Submission Notes

This project is organized, self-contained, and tested locally on:
- Node.js v20+
- npm v10+
- MongoDB Community Edition
- Visual Studio Code with ESLint, Thunder Client, GitLens

To submit: ZIP the `Assignment15.7/` folder and upload it as required.

---

## 👤 Author

**Nandishwar Bhojanapu**  
Assignment completed on: **16th July 2025**  
