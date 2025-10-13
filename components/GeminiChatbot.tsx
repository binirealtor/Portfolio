import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import { motion, AnimatePresence } from 'framer-motion';
import type { ChatMessage } from '../types';
import { BotIcon, SendIcon, CloseIcon } from './icons/IconComponents';

const GeminiChatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [chat, setChat] = useState<Chat | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isOpen) return;

        const initChat = async () => {
            try {
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
                const newChat = ai.chats.create({
                    model: 'gemini-2.5-flash',
                    config: {
                        systemInstruction: `You are a friendly and professional AI assistant for Binyam G., a talented 2D/3D Animator and Video Editor with over 8 years of experience. Your goal is to answer visitor questions about Binyam's skills, services, availability, and portfolio. You can also help them navigate the site. Be concise, helpful, and encourage them to use the contact form or the AI Quote Estimator for formal inquiries. Here is some context:
                        - Skills: 2D/3D Animation, Video Editing, Motion Graphics, VFX, Character Animation, Social Media Content (TikTok, YouTube), Wedding Videos.
                        - Tools: After Effects, Premiere Pro, Blender, AI Tools.
                        - Status: Available for new projects.
                        - Location: Addis Ababa, Ethiopia (EAT, UTC+3).
                        - Key achievements: 100% Job Success on Upwork, over 580K TikTok followers.
                        Keep your answers brief and to the point.`,
                    },
                });
                setChat(newChat);

                // Initial greeting from the assistant
                if (messages.length === 0) {
                   setMessages([{ role: 'model', content: "Hello! I'm Binyam's AI assistant. How can I help you today? Feel free to ask about his skills, services, or portfolio." }]);
                }

            } catch (error) {
                console.error("Failed to initialize AI Chat:", error);
                setMessages([{ role: 'model', content: "Sorry, I'm having trouble connecting right now. Please try again later." }]);
            }
        };

        if (!chat) {
            initChat();
        }

    }, [isOpen, chat, messages.length]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);


    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading || !chat) return;

        const userMessage: ChatMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await chat.sendMessageStream({ message: input });
            
            let currentModelMessage = '';
            setMessages(prev => [...prev, { role: 'model', content: '' }]);

            for await (const chunk of response) {
                currentModelMessage += chunk.text;
                setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1].content = currentModelMessage;
                    return newMessages;
                });
            }
        } catch (error) {
            console.error("Error sending message:", error);
            setMessages(prev => [...prev, { role: 'model', content: "Oops! Something went wrong. Please try again." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Chat Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-[60] w-16 h-16 bg-gradient-to-r from-accent-start to-accent-end rounded-full text-white flex items-center justify-center shadow-lg shadow-accent-start/30"
                aria-label="Toggle AI Assistant"
                data-cursor-variant="link"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                         <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}><CloseIcon className="w-8 h-8" /></motion.div>
                    ) : (
                         <motion.div key="bot" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}><BotIcon className="w-8 h-8" /></motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 30, scale: 0.95 }}
                    transition={{ ease: "easeInOut", duration: 0.3 }}
                    className="fixed bottom-28 right-6 z-[60] w-[calc(100vw-3rem)] max-w-sm h-[60vh] max-h-[500px] bg-secondary/80 dark:bg-[#11111F]/80 backdrop-blur-xl rounded-2xl shadow-2xl flex flex-col border border-border-default/50 dark:border-[#11111F]/50"
                >
                    <header className="flex-shrink-0 p-4 border-b border-border-default dark:border-gray-700">
                        <h3 className="font-bold text-lg text-text-primary dark:text-white text-center">AI Assistant</h3>
                    </header>
                    
                    <div className="flex-grow p-4 overflow-y-auto space-y-4">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] px-4 py-2 rounded-2xl ${msg.role === 'user' ? 'bg-gradient-to-r from-accent-start to-accent-end text-white rounded-br-none' : 'bg-primary dark:bg-[#0A0A14] text-text-primary dark:text-[#F1F5F9] rounded-bl-none'}`}>
                                    <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                                </div>
                            </div>
                        ))}
                         {isLoading && (
                            <div className="flex justify-start">
                                <div className="max-w-[85%] px-4 py-3 rounded-2xl bg-primary dark:bg-[#0A0A14] text-text-primary dark:text-[#F1F5F9] rounded-bl-none">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-accent-start rounded-full animate-pulse"></span>
                                        <span className="w-2 h-2 bg-accent-start rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></span>
                                        <span className="w-2 h-2 bg-accent-start rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <footer className="flex-shrink-0 p-4 border-t border-border-default dark:border-gray-700">
                        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask me anything..."
                                disabled={isLoading}
                                className="w-full bg-primary dark:bg-[#0A0A14] border border-border-default dark:border-[#334155] rounded-full py-2 px-4 text-sm text-text-primary dark:text-[#F1F5F9] focus:outline-none focus:ring-2 focus:ring-accent-start disabled:opacity-50"
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !input.trim()}
                                className="w-10 h-10 flex items-center justify-center bg-accent-start rounded-full text-white transition-opacity disabled:opacity-50 hover:bg-accent-end"
                                aria-label="Send message"
                            >
                                <SendIcon className="w-5 h-5" />
                            </button>
                        </form>
                    </footer>
                </motion.div>
            )}
            </AnimatePresence>
        </>
    );
};

export default GeminiChatbot;
