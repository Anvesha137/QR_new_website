import { Brain, Languages, Users, Mail, Calendar, MessageSquare, UserCheck, LayoutDashboard, Sparkles, ArrowRight, Zap, Database } from 'lucide-react';

export default function Features() {
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
    <div id="features">
      <style>{`
        .features-section {
          width: 100%;
          max-width: 80rem;
          margin: 0 auto;
          padding: 3rem 1.5rem;
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .features-header {
          text-align: center;
          margin-bottom: 2rem;
          position: relative;
          z-index: 1;
        }

        .features-badge {
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

        .features-title {
          font-size: 1.5rem;
          font-weight: 600;
          line-height: 1.3;
          margin-bottom: 1rem;
          color: #0f172a;
        }

        .features-subtitle {
          color: #64748b;
          font-size: 0.875rem;
          max-width: 40rem;
          margin: 0 auto;
          line-height: 1.5;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          gap: 1.5rem;
          position: relative;
          z-index: 1;
        }

        @media (min-width: 768px) {
          .features-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        .feature-card {
          border-radius: 0.75rem;
          padding: 1.5rem;
          position: relative;
          overflow: hidden;
          transition: all 0.2s ease;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .feature-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          border-color: #cbd5e1;
        }

        .feature-content {
          position: relative;
          z-index: 1;
        }

        .smart-training-card {
          background: #f1f5f9;
        }

        .training-icon-wrapper {
          width: 3rem;
          height: 3rem;
          margin-bottom: 1rem;
          background: #6366f1;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .ai-model-card {
          background: #4f46e5;
          position: relative;
          overflow: hidden;
        }

        .ai-model-content {
          position: relative;
          z-index: 1;
        }

        .ai-model-title {
          color: white;
          margin-bottom: 0.75rem;
          font-weight: 500;
          font-size: 1.125rem;
        }

        .ai-model-description {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.875rem;
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        .ai-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .ai-badge {
          padding: 0.375rem 0.75rem;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          font-size: 0.75rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .ai-badge:hover {
          background: rgba(255, 255, 255, 0.25);
        }

        .ai-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4ade80;
        }

        .multichannel-card {
          background: #fef3c7;
        }

        .multichannel-icon {
          width: 3rem;
          height: 3rem;
          background: #fbbf24;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          transition: transform 0.2s ease;
        }

        .feature-card:hover .multichannel-icon {
          transform: scale(1.05);
        }

        .feature-title {
          margin-bottom: 0.75rem;
          font-weight: 500;
          color: #0f172a;
          font-size: 1.125rem;
        }

        .feature-description {
          font-size: 0.875rem;
          line-height: 1.5;
          color: #64748b;
        }

        .cta-card {
          background: #4f46e5;
          position: relative;
          overflow: hidden;
          border: none;
        }

        @media (min-width: 1024px) {
          .cta-card {
            grid-column: span 2 / span 2;
          }
        }

        .cta-content {
          position: relative;
          z-index: 10;
        }

        .cta-title {
          color: white;
          margin-bottom: 1.5rem;
          font-weight: 600;
          font-size: 1.25rem;
          line-height: 1.4;
        }

        .cta-button {
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          background-color: white;
          color: #4f46e5;
          font-weight: 500;
          transition: all 0.2s ease;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          font-size: 0.875rem;
        }

        .cta-button:hover {
          background-color: #f0f0ff;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .handoff-card {
          background: #f3f4f6;
        }

        .icon-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0.75rem;
          margin-top: 1rem;
        }

        .icon-box {
          aspect-ratio: 1 / 1;
          border-radius: 0.5rem;
          background: white;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .icon-box:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .email-card {
          background: #ffffff;
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
        }

        .email-illustration {
          flex-shrink: 0;
          width: 5rem;
          height: 5rem;
          background: #e0e7ff;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          box-shadow: 0 2px 8px rgba(99, 102, 241, 0.1);
        }

        .dashboard-card {
          background: #fef3c7;
        }

        .dashboard-icon {
          width: 3rem;
          height: 3rem;
          background: #dbeafe;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          transition: all 0.2s ease;
        }

        .feature-card:hover .dashboard-icon {
          transform: scale(1.05);
        }

        @media (max-width: 1024px) {
          .features-section {
            padding: 2rem 1rem;
          }
          
          .features-title {
            font-size: 1.25rem;
          }
          
          .features-subtitle {
            font-size: 0.75rem;
          }
          
          .feature-card {
            padding: 1.25rem;
            border-radius: 0.5rem;
          }
          
          .training-icon-wrapper {
            width: 2.5rem;
            height: 2.5rem;
            margin-bottom: 0.75rem;
            border-radius: 0.375rem;
          }
          
          .feature-title {
            font-size: 1rem;
            margin-bottom: 0.5rem;
          }
          
          .feature-description {
            font-size: 0.75rem;
          }
          
          .ai-model-title {
            font-size: 1rem;
            margin-bottom: 0.5rem;
          }
          
          .ai-model-description {
            font-size: 0.75rem;
            margin-bottom: 0.75rem;
          }
          
          .ai-badge {
            padding: 0.25rem 0.5rem;
            font-size: 0.625rem;
            gap: 0.375rem;
          }
          
          .ai-badge-dot {
            width: 5px;
            height: 5px;
          }
          
          .multichannel-icon {
            width: 2.5rem;
            height: 2.5rem;
            margin-bottom: 0.75rem;
            border-radius: 0.375rem;
          }
          
          .cta-title {
            font-size: 1.125rem;
            margin-bottom: 1rem;
          }
          
          .cta-button {
            padding: 0.5rem 1rem;
            font-size: 0.75rem;
            border-radius: 0.375rem;
          }
          
          .email-card {
            gap: 1rem;
          }
          
          .email-illustration {
            width: 4rem;
            height: 4rem;
            border-radius: 0.5rem;
          }
          
          .dashboard-icon {
            width: 2.5rem;
            height: 2.5rem;
            margin-bottom: 0.75rem;
            border-radius: 0.375rem;
          }
        }

        @media (max-width: 768px) {
          .features-section {
            padding: 1.5rem 0.75rem;
          }
          
          .features-badge {
            padding: 0.25rem 0.5rem;
            font-size: 0.625rem;
            margin-bottom: 0.75rem;
          }
          
          .features-title {
            font-size: 1.125rem;
            margin-bottom: 0.75rem;
          }
          
          .features-subtitle {
            font-size: 0.75rem;
          }
          
          .features-grid {
            gap: 1rem;
          }
          
          .feature-card {
            padding: 1rem;
            border-radius: 0.5rem;
          }
          
          .training-icon-wrapper {
            width: 2.25rem;
            height: 2.25rem;
            margin-bottom: 0.5rem;
            border-radius: 0.25rem;
          }
          
          .feature-title {
            font-size: 0.875rem;
            margin-bottom: 0.5rem;
          }
          
          .feature-description {
            font-size: 0.625rem;
          }
          
          .ai-model-title {
            font-size: 0.875rem;
            margin-bottom: 0.5rem;
          }
          
          .ai-model-description {
            font-size: 0.625rem;
            margin-bottom: 0.5rem;
          }
          
          .ai-badge {
            padding: 0.25rem 0.5rem;
            font-size: 0.5rem;
            gap: 0.25rem;
          }
          
          .ai-badge-dot {
            width: 4px;
            height: 4px;
          }
          
          .multichannel-icon {
            width: 2.25rem;
            height: 2.25rem;
            margin-bottom: 0.5rem;
            border-radius: 0.25rem;
          }
          
          .cta-title {
            font-size: 1rem;
            margin-bottom: 0.75rem;
          }
          
          .cta-button {
            padding: 0.5rem 1rem;
            font-size: 0.625rem;
            border-radius: 0.25rem;
            gap: 0.25rem;
          }
          
          .email-card {
            flex-direction: column;
            gap: 0.75rem;
          }
          
          .email-illustration {
            width: 3.5rem;
            height: 3.5rem;
            border-radius: 0.375rem;
          }
          
          .dashboard-icon {
            width: 2.25rem;
            height: 2.25rem;
            margin-bottom: 0.5rem;
            border-radius: 0.25rem;
          }
          
          .icon-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0.5rem;
            margin-top: 0.75rem;
          }
        }
      `}</style>
      
      <section className="features-section">
        {/* Section Header */}
        <div className="features-header">
          <div className="features-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            Powerful Features
          </div>
          <h2 className="features-title">
            Achieve Your Business Goals
          </h2>
          <p className="features-subtitle">
            Powerful AI-driven features designed to transform your customer engagement and drive results
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {/* Smart Training Module */}
          <div className="feature-card smart-training-card">
            <div className="feature-content">
              <div className="training-icon-wrapper">
                <Brain style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} />
              </div>
              <h3 className="feature-title">Smart Training Module</h3>
              <p className="feature-description">
                Train your AI with custom data and documents for intelligent, context-aware responses that understand your business.
              </p>
            </div>
          </div>

          {/* AI Model Integration */}
          <div className="feature-card ai-model-card">
            <div className="ai-model-content">
              <div style={{ marginBottom: '0.75rem' }}>
                <Zap style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} />
              </div>
              <h3 className="ai-model-title">AI Model Integration</h3>
              <p className="ai-model-description">
                Powered by leading AI models for advanced conversational capabilities
              </p>
              <div className="ai-badges">
                <div className="ai-badge">
                  <span className="ai-badge-dot"></span>
                  GPT-4
                </div>
                <div className="ai-badge">
                  <span className="ai-badge-dot"></span>
                  DeepSeek
                </div>
                <div className="ai-badge">
                  <span className="ai-badge-dot"></span>
                  Gemini
                </div>
              </div>
            </div>
          </div>

          {/* Multi-channel Chatbots */}
          <div className="feature-card multichannel-card">
            <div className="feature-content">
              <div className="multichannel-icon">
                <Languages style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} />
              </div>
              <h3 className="feature-title">Multi-channel Chatbots</h3>
              <p className="feature-description">
                Deploy chatbots across web, mobile, WhatsApp, and social media platforms seamlessly.
              </p>
            </div>
          </div>

          {/* CTA Card - Spans 2 columns on larger screens */}
          <div className="feature-card cta-card">
            <div className="cta-content">
              <h3 className="cta-title">
                See more of what we can do<br />for your business
              </h3>
              <button className="cta-button" onClick={handleBookDemoClick}>
                Book Demo Now
                <ArrowRight className="cta-button-icon" style={{ width: '1rem', height: '1rem' }} />
              </button>
            </div>
          </div>

          {/* Human Handoff */}
          <div className="feature-card handoff-card">
            <div className="feature-content">
              <div style={{ marginBottom: '0.75rem' }}>
                <Users style={{ width: '1.5rem', height: '1.5rem', color: '#6366f1' }} />
              </div>
              <h3 className="feature-title">Human Handoff</h3>
              <p className="feature-description">
                Seamlessly transfer complex queries to human agents when needed.
              </p>
              <div className="icon-grid">
                <div className="icon-box">
                  <Calendar style={{ width: '1rem', height: '1rem', color: '#3b82f6' }} />
                </div>
                <div className="icon-box">
                  <MessageSquare style={{ width: '1rem', height: '1rem', color: '#8b5cf6' }} />
                </div>
                <div className="icon-box">
                  <UserCheck style={{ width: '1rem', height: '1rem', color: '#ec4899' }} />
                </div>
                <div className="icon-box">
                  <LayoutDashboard style={{ width: '1rem', height: '1rem', color: '#f59e0b' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Email and Book Meeting */}
          <div className="feature-card email-card">
            <div className="email-illustration">
              <div>
                <Mail style={{ width: '1.5rem', height: '1.5rem', color: '#6366f1' }} />
              </div>
            </div>
            <div className="feature-content">
              <h3 className="feature-title">Email & Book Meeting</h3>
              <p className="feature-description">
                Automated email responses and intelligent meeting scheduling capabilities powered by AI.
              </p>
            </div>
          </div>

          {/* Client Dashboard */}
          <div className="feature-card dashboard-card">
            <div className="feature-content">
              <div className="dashboard-icon">
                <LayoutDashboard style={{ width: '1.5rem', height: '1.5rem', color: '#3b82f6' }} />
              </div>
              <h3 className="feature-title">Client Dashboard</h3>
              <p className="feature-description">
                Comprehensive analytics and insights with real-time conversation monitoring and performance metrics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}