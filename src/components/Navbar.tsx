import React from "react";

export default function Navbar() {
  const handleBookDemoClick = () => {
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
        .navbar-container {
          width: 100%;
          background: white;
          border-bottom: 1px solid #e5e7eb;
          padding: 0.5rem 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          font-size: 1.125rem;
          font-weight: 600;
          color: #1f2937;
          text-decoration: none;
        }

        .navbar-logo-icon {
          width: 10rem;
          height: 3rem;
        }

        .navbar-nav {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex: 1;
          justify-content: center;
        }

        .navbar-link {
          color: #374151;
          text-decoration: none;
          font-size: 0.8125rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
          padding: 0.25rem 0;
        }

        .navbar-link:hover {
          color: #6366f1;
        }

        .navbar-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: #6366f1;
          transition: width 0.3s ease;
        }

        .navbar-link:hover::after {
          width: 100%;
        }

        .navbar-link-dropdown {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .navbar-btn-demo {
          padding: 0.375rem 0.75rem;
          background: #6366f1;
          border: none;
          border-radius: 0.375rem;
          color: white;
          font-size: 0.8125rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .navbar-btn-demo:hover {
          background: #4f46e5;
        }

        .navbar-secondary {
          width: 100%;
          background: #f9fafb;
          border-bottom: 1px solid #e5e7eb;
          padding: 0.5rem 1rem;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .navbar-secondary-title {
          font-size: 1rem;
          font-weight: 600;
          color: #1f2937;
        }

        .navbar-secondary-title span {
          color: #6366f1;
        }

        .navbar-btn-start {
          padding: 0.375rem 0.75rem;
          background: #6366f1;
          border: none;
          border-radius: 0.375rem;
          color: white;
          font-size: 0.8125rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-left: 0.5rem;
        }

        .navbar-btn-start:hover {
          background: #4f46e5;
        }

        @media (max-width: 1024px) {
          .navbar-nav {
            gap: 0.75rem;
          }
        }

        @media (max-width: 768px) {
          .navbar-container {
            padding: 0.5rem 1rem;
            flex-wrap: wrap;
          }
          
          .navbar-nav {
            gap: 0.5rem;
            order: 3;
            width: 100%;
            justify-content: center;
            margin-top: 0.5rem;
          }
          
          .navbar-link {
            font-size: 0.75rem;
          }
        }
      `}</style>

      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          <img 
            src="/QR_white_logo.png" 
            alt="Quickrevert Logo" 
            className="navbar-logo-icon object-contain"
          />
        </a>

        <nav className="navbar-nav">
          <a href="#methodology" className="navbar-link">Methodology</a>
          <a href="#platforms" className="navbar-link">Platforms</a>
          <a href="#features" className="navbar-link">Features</a>
          <a href="#pricing" className="navbar-link">Pricing</a>
        </nav>

        <div className="navbar-actions">
          <button className="navbar-btn-demo" onClick={handleBookDemoClick}>Book A Demo</button>
          <button className="navbar-btn-start" onClick={handleStartChatClick}>Start With Chat Agent</button>
        </div>
      </div>

      <div className="navbar-secondary">
        <div className="navbar-secondary-title">
          <span>Chat</span> Agent
        </div>
      </div>
    </>
  );
}