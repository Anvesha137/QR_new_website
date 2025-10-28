export default function Hero() {
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
        .hero-container {
          width: 100%;
          background: #ffffff;
          padding: 2rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          position: relative;
          overflow: hidden;
        }

        .hero-content {
          flex: 1;
          max-width: 32rem;
          position: relative;
          z-index: 1;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(99, 102, 241, 0.1);
          color: #6366f1;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .hero-title {
          font-size: 1.75rem;
          font-weight: 600;
          color: #0f172a;
          line-height: 1.3;
          margin: 0 0 1rem 0;
        }

        .hero-title-highlight {
          color: #6366f1;
        }

        .hero-subtitle {
          font-size: 1rem;
          font-weight: 500;
          color: #334155;
          margin: 0 0 1rem 0;
          line-height: 1.5;
        }

        .hero-description {
          font-size: 0.875rem;
          color: #64748b;
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
        }

        .hero-buttons {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .hero-btn-primary {
          padding: 0.5rem 1.25rem;
          background: #6366f1;
          border: none;
          border-radius: 0.375rem;
          color: white;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .hero-btn-primary:hover {
          background: #4f46e5;
        }

        .hero-btn-secondary {
          padding: 0.5rem 1.25rem;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 0.375rem;
          color: #334155;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .hero-btn-secondary:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
        }

        .hero-note {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          color: #94a3b8;
          font-weight: 400;
        }

        .hero-image {
          flex: 1;
          max-width: 28rem;
          position: relative;
          z-index: 1;
        }

        .hero-image-container {
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          position: relative;
        }

        .hero-image-container img {
          width: 100%;
          height: auto;
          display: block;
        }

        .hero-features {
          width: 100%;
          background: #f8fafc;
          padding: 1rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 1rem;
          border-radius: 0.75rem;
          margin-top: -1.5rem;
          position: relative;
          z-index: 2;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .hero-feature {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #0f172a;
        }

        .hero-feature-icon {
          width: 2rem;
          height: 2rem;
          background: #6366f1;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .hero-feature-text {
          font-size: 0.75rem;
          font-weight: 500;
          line-height: 1.4;
        }

        @media (max-width: 1024px) {
          .hero-container {
            padding: 1.5rem 1rem;
            flex-direction: column;
            text-align: center;
          }

          .hero-content {
            max-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .hero-title {
            font-size: 1.5rem;
          }

          .hero-subtitle {
            font-size: 0.875rem;
          }

          .hero-description {
            font-size: 0.75rem;
          }

          .hero-buttons {
            justify-content: center;
          }

          .hero-image {
            max-width: 100%;
            margin-top: 1.5rem;
          }

          .hero-features {
            margin-top: 1.5rem;
            flex-wrap: wrap;
            padding: 1rem;
          }
        }

        @media (max-width: 768px) {
          .hero-container {
            padding: 1rem;
          }

          .hero-title {
            font-size: 1.25rem;
          }

          .hero-subtitle {
            font-size: 0.875rem;
          }

          .hero-description {
            font-size: 0.75rem;
          }

          .hero-buttons {
            flex-direction: column;
            gap: 0.75rem;
            width: 100%;
          }

          .hero-btn-primary,
          .hero-btn-secondary {
            width: 100%;
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
          }

          .hero-note {
            font-size: 0.625rem;
          }

          .hero-features {
            gap: 0.75rem;
            padding: 0.75rem;
          }

          .hero-feature {
            flex-direction: column;
            text-align: center;
            gap: 0.25rem;
          }

          .hero-feature-text {
            font-size: 0.625rem;
          }
        }
      `}</style>

      <div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              AI-Powered Solutions
            </div>
            <h1 className="hero-title">
              Scale Your Business. Automate Your Conversations using <span className="hero-title-highlight">QuickRevert</span>
            </h1>
            <h2 className="hero-subtitle">
              Intelligent Chatbots that Sell, Support & Convert 24/7
            </h2>
            <p className="hero-description">
              Never miss a lead again. Quickrevert's AI chatbots engage customers instantly, provide personalized support, and drive conversions around the clock.
            </p>
            <div className="hero-buttons">
              <button className="hero-btn-primary" onClick={handleBookDemoClick}>Book a Free Demo</button>
              <button className="hero-btn-secondary" onClick={handleStartChatClick}>Chat with us</button>
            </div>
            <div className="hero-note">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4"/>
                <path d="M12 8h.01"/>
              </svg>
              No credit card required. Start your free trial today.
            </div>
          </div>

          <div className="hero-image">
            <div className="hero-image-container">
              <img src="/HeroImg.png" alt="QuickRevert Dashboard" />
            </div>
          </div>
        </div>

        <div style={{padding: '0 1.5rem', marginTop: '1.5rem'}}>
          <div className="hero-features">
            <div className="hero-feature">
              <div className="hero-feature-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22,4 12,14.01 9,11.01"/>
                </svg>
              </div>
              <div className="hero-feature-text">
                99.9% Uptime<br/>Guarantee
              </div>
            </div>
            <div className="hero-feature">
              <div className="hero-feature-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <div className="hero-feature-text">
                24/7<br/>Availability
              </div>
            </div>
            <div className="hero-feature">
              <div className="hero-feature-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div className="hero-feature-text">
                10,000+<br/>Happy Customers
              </div>
            </div>
            <div className="hero-feature">
              <div className="hero-feature-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <polyline points="23,6 13.5,15.5 8.5,10.5 1,18"/>
                  <polyline points="17,6 23,6 23,12"/>
                </svg>
              </div>
              <div className="hero-feature-text">
                40% Increase<br/>in Conversions
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}