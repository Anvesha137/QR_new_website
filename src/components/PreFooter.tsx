import React from 'react';

export default function PreFooter() {
  const handleBookDemoClick = () => {
    window.open("https://calendar.app.google/7sNSsJgarZS4Kzd37", "_blank");
  };

  const handleFreeTrialClick = () => {
    window.open("https://calendar.app.google/7sNSsJgarZS4Kzd37", "_blank");
  };

  const handleStartChatClick = () => {
    // Toggle the chat widget visibility
    const chatContainer = document.getElementById('n8n-chat-container');
    if (chatContainer) {
      chatContainer.classList.add('active');
    }
  };

  return (
    <>
      <style>{`
        .pre-footer-container {
          display: grid;
          grid-template-columns: 1fr 1.8fr;
          gap: 1rem;
          padding: 1.5rem 1rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .left-card {
          background: #dde3f5;
          border-radius: 1rem;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          min-height: 200px;
        }

        .platforms-wrapper {
          position: relative;
          width: 100%;
          max-width: 250px;
          height: 100%;
          min-height: 180px;
        }

        .platform-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          position: absolute;
          animation: float 2s ease-in-out infinite;
        }

        .platform-icon:nth-child(1) {
          top: 15px;
          left: 15px;
          animation-delay: 0s;
        }

        .platform-icon:nth-child(2) {
          top: 15px;
          right: 15px;
          animation-delay: 0.5s;
        }

        .platform-icon:nth-child(3) {
          bottom: 70px;
          left: 15px;
          animation-delay: 1s;
        }

        .platform-icon:nth-child(4) {
          bottom: 70px;
          right: 15px;
          animation-delay: 1.5s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .chatbot-card {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -60%);
          background: white;
          border-radius: 0.75rem;
          padding: 0.75rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          z-index: 10;
          min-width: 120px;
        }

        .chatbot-header {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          margin-bottom: 0.375rem;
        }

        .chatbot-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #ff6b6b;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 0.625rem;
        }

        .chatbot-info h4 {
          margin: 0;
          font-size: 0.75rem;
          font-weight: 600;
          color: #1a1a2e;
        }

        .chatbot-info p {
          margin: 0;
          font-size: 0.5rem;
          color: #9ca3af;
        }

        .chat-divider {
          height: 1px;
          background: #e5e7eb;
          margin: 0.375rem 0;
        }

        .chat-graph {
          width: 100%;
          height: 30px;
        }

        .live-chat-card {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          border-radius: 0.75rem;
          padding: 0.5rem 0.75rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          gap: 0.375rem;
          z-index: 10;
          min-width: 140px;
        }

        .facebook-icon {
          width: 24px;
          height: 24px;
          background: #1877f2;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .live-chat-info h4 {
          margin: 0;
          font-size: 0.75rem;
          font-weight: 600;
          color: #1a1a2e;
        }

        .live-chat-info p {
          margin: 0;
          font-size: 0.5rem;
          color: #9ca3af;
        }

        .right-card {
          background: #5b6ef5;
          border-radius: 1rem;
          padding: 1.5rem 1.5rem 1.5rem 2rem;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          min-height: 200px;
        }

        .cta-content {
          position: relative;
          z-index: 1;
          max-width: 400px;
        }

        .cta-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: white;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .cta-description {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 1rem;
          line-height: 1.4;
        }

        .cta-buttons {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .cta-btn {
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          font-size: 0.75rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          border: 1px solid white;
        }

        .cta-btn-primary {
          background: white;
          color: #5b6ef5;
        }

        .cta-btn-primary:hover {
          background: rgba(255, 255, 255, 0.9);
          transform: translateY(-1px);
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
        }

        .cta-btn-secondary {
          background: transparent;
          color: white;
        }

        .cta-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-1px);
        }

        .illustration-wrapper {
          position: absolute;
          right: 20px;
          bottom: 15px;
          width: 100px;
          height: 100px;
          z-index: 1;
        }

        .illustration-person {
          stroke: white;
          stroke-width: 2;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
          opacity: 0.9;
        }

        .illustration-bulb {
          fill: #fbbf24;
          opacity: 0.9;
        }

        @media (max-width: 968px) {
          .pre-footer-container {
            grid-template-columns: 1fr;
          }

          .cta-title {
            font-size: 1rem;
          }

          .illustration-wrapper {
            display: none;
          }

          .right-card {
            padding: 1rem 1rem;
          }
        }

        @media (max-width: 640px) {
          .left-card {
            padding: 1rem;
            min-height: 180px;
          }

          .platforms-wrapper {
            min-height: 160px;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .cta-btn {
            width: 100%;
            text-align: center;
          }

          .chatbot-card {
            min-width: 100px;
            padding: 0.5rem;
          }

          .live-chat-card {
            min-width: 120px;
          }
        }
      `}</style>

      <div className="pre-footer-container">
        <div className="left-card">
          <div className="platforms-wrapper">
            {/* Platform Icons */}
            {/* Website/Globe Icon */}
            <div className="platform-icon" style={{ background: '#5b6ef5' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </div>

            {/* Instagram Icon */}
            <div className="platform-icon" style={{ background: 'linear-gradient(135deg, #833AB4 0%, #E1306C 50%, #F77737 100%)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </div>

            {/* WhatsApp Icon */}
            <div className="platform-icon" style={{ background: '#25D366' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </div>

            {/* Telegram Icon */}
            <div className="platform-icon" style={{ background: '#0088cc' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
              </svg>
            </div>

            {/* Chatbot Card */}
            <div className="chatbot-card">
              <div className="chatbot-header">
                <div className="chatbot-avatar">AI</div>
                <div className="chatbot-info">
                  <h4>Chatbot</h4>
                  <p>100 mails</p>
                </div>
              </div>
              <div className="chat-divider"></div>
              <svg className="chat-graph" viewBox="0 0 180 50">
                <path 
                  d="M 0 35 Q 30 25 60 30 Q 90 35 120 20 Q 150 10 180 15" 
                  fill="none" 
                  stroke="#5b6ef5" 
                  strokeWidth="2.5"
                />
                <circle cx="0" cy="35" r="3" fill="#5b6ef5"/>
                <circle cx="60" cy="30" r="3" fill="#5b6ef5"/>
                <circle cx="120" cy="20" r="3" fill="#5b6ef5"/>
                <circle cx="180" cy="15" r="3" fill="#5b6ef5"/>
              </svg>
            </div>

            {/* Live Chat Card */}
            <div className="live-chat-card">
              <div className="facebook-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div className="live-chat-info">
                <h4>Live Chat</h4>
                <p>1000 Leads</p>
              </div>
            </div>
          </div>
        </div>

        <div className="right-card">
          <div className="cta-content">
            <h2 className="cta-title">
              Capture, Engage & Support Your<br />
              Customers Across platforms
            </h2>
            <p className="cta-description">
              Build Customizable Conversational AI Chatbots<br />
              For All Your Business Processes.
            </p>
            <div className="cta-buttons">
              <button className="cta-btn cta-btn-primary" onClick={handleBookDemoClick}>Book Demo</button>
              <button className="cta-btn cta-btn-secondary" onClick={handleFreeTrialClick}>Free Trial</button>
            </div>
          </div>

          {/* Illustration */}
          <div className="illustration-wrapper">
            <svg viewBox="0 0 180 180" fill="none">
              {/* Person outline */}
              <g className="illustration-person">
                {/* Head */}
                <circle cx="90" cy="50" r="20"/>
                
                {/* Body */}
                <path d="M 90 70 L 90 115"/>
                
                {/* Arms */}
                <path d="M 90 80 L 65 100"/>
                <path d="M 90 80 L 115 95 L 130 85"/>
                
                {/* Legs */}
                <path d="M 90 115 L 75 150"/>
                <path d="M 90 115 L 105 150"/>
                
                {/* Hand pointing */}
                <circle cx="130" cy="85" r="4" fill="white"/>
              </g>
              
              {/* Light bulb */}
              <g>
                <circle cx="145" cy="55" r="12" className="illustration-bulb"/>
                <rect x="141" y="67" width="8" height="4" rx="1" fill="#fbbf24" opacity="0.9"/>
                <rect x="142" y="71" width="6" height="2" rx="1" fill="#fbbf24" opacity="0.9"/>
                
                {/* Bulb rays */}
                <line x1="145" y1="35" x2="145" y2="30" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" opacity="0.9"/>
                <line x1="160" y1="45" x2="165" y2="40" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" opacity="0.9"/>
                <line x1="165" y1="55" x2="170" y2="55" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" opacity="0.9"/>
                <line x1="130" y1="45" x2="125" y2="40" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" opacity="0.9"/>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}