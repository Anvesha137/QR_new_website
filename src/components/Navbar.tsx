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
          width: 15rem;
          height: 4rem;
        }

        .navbar-nav {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex: 1;
          justify-content: center;
        }

        .navbar-link {
          color: #374151;
          text-decoration: none;
          font-size: 1rem;
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
            gap: 1rem;
          }
        }

        @media (max-width: 768px) {
          .navbar-container {
            padding: 0.5rem 1rem;
            flex-wrap: wrap;
          }
          
          .navbar-nav {
            gap: 0.75rem;
            order: 3;
            width: 100%;
            justify-content: center;
            margin-top: 0.5rem;
          }
          
          .navbar-link {
            font-size: 0.875rem;
          }
          
          .navbar-logo-icon {
            width: 12rem;
            height: 3.5rem;
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
          <a href="#products" className="navbar-link">Products</a>
          <a href="#solutions" className="navbar-link">Solutions</a>
          <a href="#integrations" className="navbar-link">Integrations</a>
          <a href="#pricing" className="navbar-link">Pricing</a>
          <a href="#analytics" className="navbar-link">Analytics</a>
        </nav>

        <div className="navbar-actions">
          <button className="navbar-btn-demo" onClick={handleBookDemoClick}>Book a Free Demo</button>
          <button className="navbar-btn-start" onClick={handleStartChatClick}>Chat with us</button>
        </div>
      </div>
    </>
  );
}