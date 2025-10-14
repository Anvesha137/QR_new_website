const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Mock data
const mockChatHistories = [
  {
    id: "1",
    user_email: "annierohatgi13@gmail.com",
    message: "How does QuickRevert work?",
    created_at: "2025-10-10T14:30:00Z"
  },
  {
    id: "2",
    user_email: "annierohatgi13@gmail.com",
    message: "Can you explain the dashboard features?",
    created_at: "2025-10-09T10:15:00Z"
  },
  {
    id: "3",
    user_email: "annierohatgi13@gmail.com",
    message: "How do I access my analytics?",
    created_at: "2025-10-08T16:45:00Z"
  }
];

// API Routes
app.get('/api/chat-histories/:userEmail', (req, res) => {
  try {
    const { userEmail } = req.params;
    const userChats = mockChatHistories.filter(chat => chat.user_email === userEmail);
    res.json(userChats);
  } catch (error) {
    console.error('Error fetching chat histories:', error);
    res.status(500).json({ error: 'Failed to fetch chat histories' });
  }
});

app.get('/api/chat-histories', (req, res) => {
  try {
    // In a real app, this would be protected and only accessible by admins
    res.json(mockChatHistories);
  } catch (error) {
    console.error('Error fetching chat histories:', error);
    res.status(500).json({ error: 'Failed to fetch chat histories' });
  }
});

app.get('/', (req, res) => {
  res.json({ message: 'QuickRevert Backend API' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API endpoints available at http://localhost:${PORT}/api`);
});