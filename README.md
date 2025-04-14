# 🤖 MyChatBot

MyChatBot is a lightweight, browser-based AI assistant that uses the OpenAI GPT API to simulate intelligent chat conversations. The app features a Node.js backend for secure API communication and a simple, responsive HTML/JS frontend.

## 🚀 Features

- 💬 Chat with OpenAI’s GPT-3.5 model in real-time
- 🔐 Secure backend using Express and dotenv for API key management
- 🌐 Clean, responsive frontend (HTML/CSS/JavaScript)
- ⚠️ Rate-limiting handling to prevent OpenAI 429 errors
- 📦 Environment variable support (.env)

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **API:** OpenAI GPT-3.5-turbo
- **Others:** CORS, dotenv, body-parser

## 📁 Folder Structure

```
/mychatbot
│
├── server.js          # Node.js backend
├── index.html         # Chat UI frontend
├── .env               # Contains OpenAI API key
└── package.json       # Project dependencies
```

## 🧪 How to Run Locally

1. Clone the repo
```bash
git clone https://github.com/your-username/mychatbot.git
cd mychatbot
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file with your OpenAI key:
```
OPENAI_API_KEY=your-api-key-here
```

4. Start the server
```bash
node server.js
```

5. Open `index.html` in your browser.

## 📷 Screenshot
![MyChatBot UI](screenshot.png)

## 📜 License
This project is for educational and demo purposes.

---
Created with ❤️ by Avineesh Sikarwar
