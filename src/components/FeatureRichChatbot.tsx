import React, { useEffect } from "react";

export const FeatureRichChatbot: React.FC = () => {
  useEffect(() => {
    console.log("FeatureRichChatbot: Starting to load n8n chat...");

    // 1️⃣ Load Montserrat font dynamically
    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap";
    document.head.appendChild(fontLink);

    // 2️⃣ Load n8n's stylesheet
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
    link.onload = () => console.log("FeatureRichChatbot: CSS loaded successfully");
    link.onerror = () => console.error("FeatureRichChatbot: Failed to load CSS");
    document.head.appendChild(link);

    // 3️⃣ Load n8n chat script
    const script = document.createElement("script");
    script.type = "module";
    script.innerHTML = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

      const getNextFiveWeekdays = () => {
        const days = [];
        const today = new Date();
        let currentDate = new Date(today);
        currentDate.setDate(currentDate.getDate() + 1);
        
        while (days.length < 5) {
          const dayOfWeek = currentDate.getDay();
          if (dayOfWeek !== 0 && dayOfWeek !== 6) {
            days.push(new Date(currentDate));
          }
          currentDate.setDate(currentDate.getDate() + 1);
        }
        
        return days.map(date => 
          date.toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'short', 
            day: 'numeric' 
          })
        );
      };

      const predefinedResponses = {
        'Book a Meeting': () => {
          const weekdays = getNextFiveWeekdays();
          return {
            text: 'I can help you schedule a meeting with our team. Please select a date that works for you:',
            options: weekdays
          };
        },
        'Services': () => ({
          text: 'Quickrevert offers comprehensive solutions:\\n\\n• AI-Powered Chatbots\\n• Workflow Automation\\n• Data Integration\\n• Custom Web Applications\\n• Analytics & Reporting\\n\\nAll our services are designed to streamline your business operations. Would you like more details about any specific service?'
        }),
        'Pricing': () => ({
          text: 'Our Flexible Pricing Options:\\n\\n📋 Plans:\\n• Starter: $99/month (Basic chatbot features)\\n• Professional: $299/month (Advanced automation)\\n• Enterprise: Custom pricing (Full suite of services)\\n\\n💡 All plans include:\\n• 24/7 Support\\n• Regular Updates\\n• Security Patches\\n\\nContact us for a custom quote based on your specific needs.'
        }),
        'About Us': () => ({
          text: 'Quickrevert transforms businesses through:\\n\\n🚀 Innovation: Cutting-edge AI technology\\n🎯 Expertise: Experienced development team\\n💡 Solutions: Tailored to your business needs\\n📈 Results: Measurable improvements\\n\\nWe help companies automate processes, enhance customer experience, and drive growth through intelligent solutions. What would you like to know more about?'
        }),
        'Support': () => ({
          text: 'Quickrevert Support Services:\\n\\n🛠️ Available Help:\\n• Technical Assistance\\n• Implementation Support\\n• Training Resources\\n• Documentation\\n\\n📅 Support Hours:\\n• 24/7 for Enterprise clients\\n• Business hours for other plans\\n\\n📧 Email: support@quickrevert.tech\\n🌐 Knowledge Base: docs.quickrevert.tech\\n\\nHow can we assist you today?'
        }),
        'Contact Information': () => ({
          text: 'Get in Touch with Quickrevert:\\n\\n📍 Address: 123 Innovation Drive, Tech City\\n📞 Phone: +1 (555) 123-4567\\n📧 Email: hello@quickrevert.tech\\n\\n🌐 Website: www.quickrevert.tech\\n💼 LinkedIn: linkedin.com/company/quickrevert\\n\\nWe typically respond within 2 hours during business hours. Would you like to schedule a call?'
        })
      };

      // Create the chat widget
      createChat({
        webhookUrl: 'https://n8n.quickrevert.tech/webhook/766deb44-03ba-409e-b9e8-2fb6cf898862/chat',
        target: '#n8n-chat',
        mode: 'window',
        chatInputPlaceholder: 'Ask about our services...',
        chatWindowTitle: 'Quickrevert Assistant',
        initialMessages: [
          "Hello, I'm Quickrevert — your AI assistant here to answer questions about our services, pricing, and solutions."
        ],
        triggerButtonText: 'Chat with Quickrevert',
        triggerTooltip: '24/7 Support Assistant',
        welcomeMessage: "You can ask about our services, pricing, booking, or anything else related to Quickrevert.",
        getStarted: 'Get Started',
        robotAvatar: '🤖',
        // Custom handler for predefined responses
        onMessage: (message) => {
          // Check if the message matches a predefined response
          if (predefinedResponses[message]) {
            const response = predefinedResponses[message]();
            return response;
          }
          
          // For booking, redirect to Google Calendar
          if (message.includes('schedule') || message.includes('book') || message.includes('meeting') || message.includes('appointment')) {
            window.open('https://calendar.app.google/vxx53dF3chEmrwtV8', '_blank');
            return {
              text: "I've opened our Google Calendar for you to select a time that works best. You can also email us at hello@quickrevert.tech to schedule a meeting."
            };
          }
          
          // Default response
          return null;
        }
      });

      console.log('FeatureRichChatbot: Chat initialized successfully');
    `;
    script.onerror = () =>
      console.error("FeatureRichChatbot: Failed to load script");
    document.body.appendChild(script);

    // 4️⃣ Custom styles (matching website theme)
    const customStyles = document.createElement("style");
    customStyles.innerHTML = `
      :root {
        /* Colors - Matching Quickrevert theme */
        --chat--color-primary: #6366f1;
        --chat--color-primary-shade-50: #4f46e5;
        --chat--color-primary-shade-100: #4338ca;
        --chat--color-secondary: #818cf8;
        --chat--color-secondary-shade-50: #6366f1;
        --chat--color-white: #ffffff;
        --chat--color-light: #f8fafc;
        --chat--color-light-shade-50: #f1f5f9;
        --chat--color-light-shade-100: #e2e8f0;
        --chat--color-medium: #94a3b8;
        --chat--color-dark: #0f172a;
        --chat--color-disabled: #cbd5e1;
        --chat--color-typing: #64748b;

        /* Layout & Font */
        --chat--spacing: 1rem;
        --chat--border-radius: 0.5rem;
        --chat--transition-duration: 0.15s;
        --chat--font-family: 'Montserrat', sans-serif !important;

        /* Header */
        --chat--header--background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
        --chat--header--color: var(--chat--color-white);
      }

      /* Force Montserrat on all chat UI elements */
      .n8n-chat * {
        font-family: 'Montserrat', sans-serif !important;
      }

      /* Force tooltip single-line behavior */
      .n8n-chat .chat-widget-tooltip,
      .n8n-chat [data-tooltip],
      .n8n-chat .tooltip,
      .n8n-chat .hover-message,
      .n8n-chat .chat-trigger-tooltip {
        white-space: nowrap !important;
        max-width: none !important;
        width: auto !important;
        word-wrap: normal !important;
        overflow: visible !important;
        text-overflow: clip !important;
      }

      /* 🧨 Remove default "Hi there! 👋 Start a chat..." tooltip & trigger text */
      .n8n-chat .chat-trigger-text,
      .n8n-chat .chat-trigger-tooltip,
      .n8n-chat .hover-message,
      .n8n-chat [data-tooltip]::after {
        display: none !important;
        content: '' !important;
        visibility: hidden !important;
        opacity: 0 !important;
      }
      
      /* Custom button hover effect */
      .n8n-chat-trigger-button:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 6px 16px rgba(99, 102, 241, 0.4) !important;
      }
    `;
    document.head.appendChild(customStyles);
  }, []);

  return null;
};