# 💬 Realtime Chat Application (Node.js + Socket.io)

🚀 A realtime group chat backend built using **Node.js**, **Express**, and **Socket.io** that enables instant bidirectional communication between multiple users using WebSockets.

---

## ✨ Features

* ⚡ Realtime messaging
* 👥 Multiple users support
* ✍️ Typing indicator
* 🟢 User join / leave notifications
* 🌐 CORS enabled for frontend integration
* 🔄 Automatic socket reconnection
* 📡 WebSocket based fast communication

---

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **Socket.io**

---

## 📁 Project Structure

```
chatify_backend/
│
├── index.js
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
```

### 2️⃣ Navigate to project folder

```
cd chatify_backend
```

### 3️⃣ Install dependencies

```
npm install
```

---

## ▶️ Run the Server

### Using Node

```
node index.js
```

### Using Nodemon (Recommended)

```
npm run dev
```

Server will start at:

```
http://localhost:3000
```

---

## 🔌 Socket Events

### ✅ User Connected

Socket automatically connects when client loads.

### ✅ Send Message

```
socket.emit("send_message", messageData)
```

### ✅ Receive Message

```
socket.on("receive_message", (data) => {})
```

### ✅ Typing Indicator

```
socket.emit("typing")
socket.on("typing")
```

### ✅ User Disconnect

Server broadcasts when a user leaves.

---

## 🚀 Future Improvements

* 🔐 Authentication using JWT
* 💾 Message storage (MongoDB / PostgreSQL)
* 🧑‍🤝‍🧑 Private chat rooms
* ✅ Message read / delivered status
* 📎 File & image sharing
* 🔔 Push notifications

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

## 👨‍💻 Author

**Ashish Yadav**

If you like this project ⭐ give it a star on GitHub 🙂
