import React, { useState, useEffect, useRef } from "react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface Option {
  id: number;
  text: string;
}

const MenuChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState<Option[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Main menu options
  const mainMenu = {
    text: `Hey 👋 Welcome to QuickRevert AI — your 24/7 business automation assistant.
I can help you with meetings, automations, or learning what we do best 🚀

Choose an option below 👇`,
    options: [
      "📅 Book a Meeting / Demo",
      "💡 About Our Services",
      "🏢 Industry Use Cases",
      "📈 Why Businesses Choose QuickRevert",
      "🆘 Get Support or Learn More"
    ]
  };

  // Service details submenu
  const servicesMenu = {
    text: `We solve business inefficiencies using AI automation.
Here’s what we offer:

🤖 Automated FAQ Handling (24/7 instant replies)

📅 Direct Calendar Integration (zero scheduling friction)

🎯 Lead Qualification & Insights

🧠 AI-Powered Customer Flow Optimization

Would you like to:`,
    options: [
      "🧩 Explore Industry-Specific Solutions",
      "🧑‍💼 Talk to an Expert",
      "🔙 Return to Main Menu"
    ]
  };

  // Industry use cases submenu
  const industryMenu = {
    text: `QuickRevert transforms workflows across multiple domains.
Choose your industry 👇

🎓 Universities & Education – Automate admissions queries, book campus visits, engage applicants instantly.

🏠 Real Estate – Qualify leads 24/7, auto-book site visits, answer property FAQs.

🛒 E-commerce & Retail – Real-time product help, order tracking, and conversion boosting.

💼 General Business – Streamline support, qualify leads, and increase conversions instantly.

Would you like to:`,
    options: [
      "📄 View detailed case studies",
      "💬 Talk to a consultant",
      "🔙 Return to Main Menu"
    ]
  };

  // Why QuickRevert submenu
  const whyQuickRevertMenu = {
    text: `Here’s what clients experience after adopting our AI chatbot:
✅ 30–50% lower support costs
⚡ Instant responses → happier customers
💼 Faster conversions → more deals closed
🧠 Higher staff productivity and morale

Would you like to:`,
    options: [
      "📊 See ROI breakdown",
      "🤝 Book demo to discuss your case",
      "🔙 Return to Main Menu"
    ]
  };

  // Support submenu
  const supportMenu = {
    text: `Need help or have a question?

💬 Chat with Support: t.me/QuickRevertSupport

📧 Email: support@quickrevert.ai

📘 FAQs: quickrevert.ai/help`,
    options: [
      "🔙 Return to Main Menu"
    ]
  };

  // Industry-specific solutions
  const industrySolutions = {
    "🎓 Universities & Education": `🎓 Universities & Education Solutions:

✅ Automated Admissions Queries - Answer FAQs about programs, requirements, deadlines 24/7
✅ Campus Visit Booking - Auto-schedule tours and send calendar invites
✅ Applicant Engagement - Proactively engage prospective students with personalized messages
✅ Course Information - Provide instant access to course catalogs and prerequisites
✅ Financial Aid Assistance - Guide students through application processes

Would you like to:
1️⃣ Book a Demo for Education
2️⃣ View Case Studies
3️⃣ Return to Main Menu`,
    
    "🏠 Real Estate": `🏠 Real Estate Solutions:

✅ Lead Qualification - Automatically qualify leads based on budget, location preferences, and timeline
✅ Property FAQs - Answer questions about listings, amenities, pricing instantly
✅ Site Visit Scheduling - Auto-book appointments and send calendar invites
✅ Follow-up Automation - Send personalized follow-ups based on property interest
✅ Market Updates - Share relevant market data and new listings

Would you like to:
1️⃣ Book a Demo for Real Estate
2️⃣ View Case Studies
3️⃣ Return to Main Menu`,
    
    "🛒 E-commerce & Retail": `🛒 E-commerce & Retail Solutions:

✅ Product Assistance - Help customers find products, check availability, and compare features
✅ Order Tracking - Provide real-time order status updates without manual intervention
✅ Cart Recovery - Automatically reach out to customers who abandon their carts
✅ Personalized Recommendations - Suggest products based on browsing and purchase history
✅ Instant Support - Handle returns, exchanges, and customer service inquiries 24/7

Would you like to:
1️⃣ Book a Demo for E-commerce
2️⃣ View Case Studies
3️⃣ Return to Main Menu`,
    
    "💼 General Business": `💼 General Business Solutions:

✅ Support Automation - Reduce repetitive inquiries and free up your team for complex tasks
✅ Lead Qualification - Automatically score and route leads to the right team members
✅ Appointment Scheduling - Eliminate back-and-forth emails with auto-booking
✅ Customer Insights - Gather valuable data through conversational interactions
✅ Conversion Optimization - Guide prospects through your sales funnel with intelligent prompts

Would you like to:
1️⃣ Book a Demo for General Business
2️⃣ View Case Studies
3️⃣ Return to Main Menu`
  };

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Initialize chat with welcome message
  useEffect(() => {
    setMessages([
      {
        id: 1,
        text: mainMenu.text,
        sender: "bot",
        timestamp: new Date()
      }
    ]);
    
    setOptions(mainMenu.options.map((opt, index) => ({ id: index + 1, text: opt })));
  }, []);

  // Handle sending a message
  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Process bot response
    setTimeout(() => {
      processBotResponse(text);
    }, 500);
  };

  // Process bot response based on user input
  const processBotResponse = (userInput: string) => {
    let botResponse = "";
    let newOptions: Option[] = [];

    // Handle main menu selections
    if (userInput === "📅 Book a Meeting / Demo" || 
        userInput === "🤝 Book demo to discuss your case" ||
        userInput.includes("Book a Demo")) {
      // Google Calendar link
      const googleCalendarUrl = "https://calendar.app.google/vxx53dF3chEmrwtV8";
      botResponse = `Great! You can schedule a meeting with our team instantly.
      
Click the link below to book your slot on Google Calendar:
${googleCalendarUrl}

Looking forward to our demo!`;
      newOptions = [{ id: 1, text: "🔙 Return to Main Menu" }];
    }
    else if (userInput === "💡 About Our Services") {
      botResponse = servicesMenu.text;
      newOptions = servicesMenu.options.map((opt, index) => ({ id: index + 1, text: opt }));
    }
    else if (userInput === "🧩 Explore Industry-Specific Solutions") {
      botResponse = `We automate three key business areas:

FAQ Handling

Scheduling

Lead Qualification

This means you can reduce repetitive work and focus on what truly matters.
Would you like to:`;
      newOptions = [
        { id: 1, text: "🎓 Universities & Education" },
        { id: 2, text: "🏠 Real Estate" },
        { id: 3, text: "🛒 E-commerce & Retail" },
        { id: 4, text: "💼 General Business" },
        { id: 5, text: "🔙 Return to Main Menu" }
      ];
    }
    else if (userInput === "🏢 Industry Use Cases") {
      botResponse = industryMenu.text;
      newOptions = industryMenu.options.map((opt, index) => ({ id: index + 1, text: opt }));
    }
    else if (userInput === "🎓 Universities & Education" || 
             userInput === "🏠 Real Estate" || 
             userInput === "🛒 E-commerce & Retail" || 
             userInput === "💼 General Business") {
      botResponse = industrySolutions[userInput];
      newOptions = [
        { id: 1, text: "Book a Demo" },
        { id: 2, text: "View Case Studies" },
        { id: 3, text: "🔙 Return to Main Menu" }
      ];
    }
    else if (userInput === "📈 Why Businesses Choose QuickRevert") {
      botResponse = whyQuickRevertMenu.text;
      newOptions = whyQuickRevertMenu.options.map((opt, index) => ({ id: index + 1, text: opt }));
    }
    else if (userInput === "📊 See ROI breakdown") {
      botResponse = `Here's what our clients typically experience:

✅ 30-50% reduction in support costs
⚡ 95% faster response times (under 2 seconds)
💼 25-40% increase in lead conversion rates
🧠 60% improvement in staff productivity
📈 20-30% boost in customer satisfaction scores

Would you like to:
1️⃣ Book a Demo to discuss your specific ROI potential
2️⃣ Return to Main Menu`;
      newOptions = [
        { id: 1, text: "Book a Demo" },
        { id: 2, text: "🔙 Return to Main Menu" }
      ];
    }
    else if (userInput === "🆘 Get Support or Learn More") {
      botResponse = supportMenu.text;
      newOptions = supportMenu.options.map((opt, index) => ({ id: index + 1, text: opt }));
    }
    else if (userInput === "🧑‍💼 Talk to an Expert" || 
             userInput === "💬 Talk to a consultant" ||
             userInput === "View Case Studies") {
      botResponse = `You can reach our experts through:

💬 Telegram: t.me/QuickRevertSupport

📧 Email: support@quickrevert.ai

We typically respond within 2 hours during business hours.

Would you like to:
1️⃣ Return to Main Menu
2️⃣ Book a Demo`;
      newOptions = [
        { id: 1, text: "🔙 Return to Main Menu" },
        { id: 2, text: "📅 Book a Meeting / Demo" }
      ];
    }
    else if (userInput.includes("Return to Main Menu") || 
             userInput.includes("Return to main menu") ||
             userInput === "🔙 Return to Main Menu") {
      botResponse = mainMenu.text;
      newOptions = mainMenu.options.map((opt, index) => ({ id: index + 1, text: opt }));
    }
    // Default response
    else {
      botResponse = "I'm here to help! Please select an option from the menu below:";
      newOptions = mainMenu.options.map((opt, index) => ({ id: index + 1, text: opt }));
    }

    setMessages(prev => [...prev, { id: prev.length + 1, text: botResponse, sender: "bot", timestamp: new Date() }]);
    setOptions(newOptions);
  };

  // Handle option click
  const handleOptionClick = (optionText: string) => {
    sendMessage(optionText);
  };

  // Handle input submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      sendMessage(inputValue);
    }
  };

  // Toggle chat window
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat window */}
      {isOpen && (
        <div className="w-80 h-96 bg-white rounded-lg shadow-xl flex flex-col border border-gray-200">
          {/* Header */}
          <div className="bg-gray-900 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-2">
                <span className="text-white font-bold">🤖</span>
              </div>
              <h3 className="font-semibold">QuickRevert AI</h3>
            </div>
            <button 
              onClick={toggleChat}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Messages container */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-3 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.sender === "user"
                      ? "bg-blue-500 text-white rounded-br-none"
                      : "bg-white text-gray-800 border border-gray-200 rounded-bl-none"
                  }`}
                >
                  <div className="text-sm whitespace-pre-wrap">{message.text}</div>
                  <div className={`text-xs mt-1 ${message.sender === "user" ? "text-blue-100" : "text-gray-500"}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Options */}
          {options.length > 0 && (
            <div className="px-4 py-2 border-t border-gray-200 bg-white">
              <div className="flex flex-wrap gap-2">
                {options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleOptionClick(option.text)}
                    className="text-xs bg-blue-100 hover:bg-blue-200 text-blue-800 px-2 py-1 rounded-full transition-colors"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input area */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 bg-white">
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg text-sm font-medium transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Chat toggle button */}
      <button
        onClick={toggleChat}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-colors"
      >
        {isOpen ? (
          <span className="text-xl">✕</span>
        ) : (
          <div className="flex flex-col items-center">
            <span className="text-xl">🤖</span>
          </div>
        )}
      </button>
    </div>
  );
};

export default MenuChatbotWidget;