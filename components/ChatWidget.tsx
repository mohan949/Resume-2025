import React, { useState, useRef, useEffect } from 'react';
import { sendChatMessage } from '../services/geminiService';
import { ChatMessage } from '../types';
import { IconMessageCircle, IconX, IconSend, IconBot, IconUser, IconSparkles } from './Icons';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi there! I'm an AI assistant trained on this resume. Ask me anything about my experience or skills.", timestamp: new Date() }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: inputText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      // Send message to Gemini Service
      const responseText = await sendChatMessage(userMessage.text, messages.map(m => ({ role: m.role, text: m.text })));
      
      const botMessage: ChatMessage = {
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage: ChatMessage = {
        role: 'model',
        text: "Sorry, I encountered an error connecting to the AI service.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[90vw] md:w-96 h-[500px] glass rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 duration-300 border border-white/10">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-md p-4 flex justify-between items-center text-white border-b border-white/10">
            <div className="flex items-center gap-2">
              <IconSparkles className="w-5 h-5 animate-pulse" />
              <div>
                <h3 className="font-bold text-sm">Resume Assistant</h3>
                <p className="text-[10px] text-blue-100 opacity-80 uppercase tracking-wider">Powered by Gemini</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors bg-white/10 p-1 rounded-full hover:bg-white/20"
            >
              <IconX className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-900/50 scrollbar-hide">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-white/10 shadow-lg ${
                  msg.role === 'model' ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white' : 'bg-gray-700 text-gray-300'
                }`}>
                  {msg.role === 'model' ? <IconBot className="w-4 h-4" /> : <IconUser className="w-4 h-4" />}
                </div>
                <div className={`max-w-[75%] p-3 rounded-2xl text-sm leading-relaxed shadow-md backdrop-blur-sm ${
                  msg.role === 'user' 
                    ? 'bg-blue-600/80 text-white rounded-tr-none border border-blue-500/50' 
                    : 'bg-gray-800/80 text-gray-200 border border-white/10 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                 <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center shrink-0 border border-white/10">
                  <IconBot className="w-4 h-4" />
                </div>
                <div className="bg-gray-800/80 p-3 rounded-2xl rounded-tl-none border border-white/10 backdrop-blur-sm">
                  <div className="flex gap-1.5">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-gray-900/80 border-t border-white/10 backdrop-blur-md">
            <div className="relative flex items-center">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask me anything..."
                className="w-full bg-gray-800/50 text-white rounded-full pl-4 pr-12 py-3 text-sm border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-gray-800 transition-all placeholder-gray-500"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isLoading}
                className="absolute right-2 p-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                <IconSend className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-white/20 ${
          isOpen ? 'bg-gray-800 rotate-90' : 'bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse'
        } text-white`}
      >
        {isOpen ? <IconX className="w-6 h-6" /> : <IconMessageCircle className="w-7 h-7" />}
      </button>
    </div>
  );
};

export default ChatWidget;