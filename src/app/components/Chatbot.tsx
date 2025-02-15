"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, X } from "lucide-react";

export default function Chatbot() {
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { text: input, sender: "user" }]);
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "I'm an AI assistant. How can I help?", sender: "bot" }]);
    }, 1000);
    
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <motion.div
          className="w-80 h-96 bg-gray-900 text-white rounded-lg shadow-xl flex flex-col overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="bg-purple-700 p-4 flex justify-between items-center">
            <h2 className="text-lg font-semibold">AI Chatbot</h2>
            <button onClick={() => setIsOpen(false)}>
              <X className="text-white w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-2">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                className={`p-2 max-w-[75%] rounded-lg ${msg.sender === "user" ? "bg-blue-600 ml-auto" : "bg-gray-700"}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {msg.text}
              </motion.div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 flex items-center border-t border-gray-700">
            <input
              type="text"
              className="flex-1 p-2 bg-gray-800 text-white rounded-lg focus:outline-none"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button onClick={handleSendMessage} className="ml-2 bg-blue-500 p-2 rounded-full hover:bg-blue-600">
              <Send className="text-white w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}

      {/* Floating Chat Button */}
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          className="bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
}
