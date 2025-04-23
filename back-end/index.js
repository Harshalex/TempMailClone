import express from 'express';
import cors from 'cors';
import { MailSlurp } from 'mailslurp-client';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const mailslurp = new MailSlurp({ apiKey: process.env.MAILSLURP_API_KEY });

let currentInbox = null;

// Create a new temporary email address
app.get('/generate-email', async (req, res) => {
  try {
    const inbox = await mailslurp.createInbox();
    currentInbox = inbox;
    res.json({ address: inbox.emailAddress, id: inbox.id });
  } catch (err) {
    res.status(500).json({ error: 'Error generating email', details: err.message });
  }
});

// Get all messages from the inbox
app.get('/messages', async (req, res) => {
  try {
    if (!currentInbox) return res.status(400).json({ error: 'Inbox not created' });

    const emails = await mailslurp.inboxController.getInboxEmailsPaginated({
      inboxId: currentInbox.id,
      size: 10,
    });
    res.json(emails.content);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching messages', details: err.message });
  }
});

// Get a specific message by ID
app.get('/messages/:id', async (req, res) => {
  try {
    const message = await mailslurp.emailController.getEmail({ emailId: req.params.id });
    res.json(message);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching message', details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
