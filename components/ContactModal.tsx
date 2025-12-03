
import React, { useState, useEffect } from 'react';
import { IconX, IconSend, IconMail, IconPhone, IconUser, IconEdit, IconMessageCircle } from './Icons';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
  phone?: string;
  location?: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, email, phone, location }) => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);

  // Handle animation states
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300); // Wait for animation
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, subject, message } = formData;
    
    // Construct mailto link
    const subjectLine = encodeURIComponent(subject || `Portfolio Contact from ${name}`);
    const bodyContent = encodeURIComponent(
      `Hi Mohan,\n\n${message}\n\nBest regards,\n${name}`
    );
    
    window.location.href = `mailto:${email}?subject=${subjectLine}&body=${bodyContent}`;
    
    // Optional: Reset form or close modal after a delay
    // onClose(); 
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div 
        className={`relative w-full max-w-lg bg-[#0f172a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors z-10"
        >
          <IconX className="w-5 h-5" />
        </button>

        <div className="p-8 relative z-0">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
            Let's Connect
          </h2>
          <p className="text-gray-400 mb-8 text-sm">
            Fill out the form below to send me an email directly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Input */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <IconUser className="w-5 h-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
              </div>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-black/40 transition-all"
              />
            </div>

            {/* Subject Input */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <IconEdit className="w-5 h-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
              </div>
              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-black/40 transition-all"
              />
            </div>

            {/* Message Input */}
            <div className="relative group">
              <div className="absolute top-3 left-0 pl-4 pointer-events-none">
                <IconMessageCircle className="w-5 h-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
              </div>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message..."
                className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-black/40 transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-4 rounded-xl shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <IconSend className="w-5 h-5" />
              <span>Send Message</span>
            </button>
          </form>

          {/* Direct Contact Info */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4 justify-between text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-white/5 rounded-full text-purple-400">
                <IconMail className="w-4 h-4" />
              </div>
              <span>{email}</span>
            </div>
            {phone && (
              <div className="flex items-center gap-2">
                <div className="p-2 bg-white/5 rounded-full text-blue-400">
                  <IconPhone className="w-4 h-4" />
                </div>
                <span>{phone}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
