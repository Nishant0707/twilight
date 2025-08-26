// backend/controllers/chat.controller.js
export const defaultChatReply = (req, res) => {
  const { question } = req.body;

  // Simple keyword-based static responses
  const lower = question.toLowerCase();
  let answer = "I'm not sure how to answer that.";

  if (lower.includes("hello") || lower.includes("hi")) {
    answer = "Hello! How can I assist you today?";
  } else if (lower.includes("services")) {
    answer = "We offer web development, design, and automation services.";
  } else if (lower.includes("contact")) {
    answer = "You can contact us at support@example.com.";
  } else if (lower.includes("thank")) {
    answer = "You're welcome! 😊";
  } else if (lower.includes("help")) {
    answer = "Sure, I'm here to help. Ask me anything!";
  }

  res.json({ answer });
};
