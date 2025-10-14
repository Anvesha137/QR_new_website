import { useState, useEffect } from 'react';

const PlatformIcons = {
  Website: () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  WhatsApp: () => (
    <img src="/whatsapp.png" alt="WhatsApp" width="48" height="48" />
  ),
  Instagram: () => (
    <img src="/instagram.png" alt="Instagram" width="48" height="48" />
  ),
  Telegram: () => (
    <img src="/telegram.png" alt="Telegram" width="48" height="48" />
  ),
  VoiceAssistance: () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
      <line x1="12" y1="19" x2="12" y2="23"/>
      <line x1="8" y1="23" x2="16" y2="23"/>
    </svg>
  ),
  VoiceBots: () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2"/>
      <circle cx="12" cy="5" r="2"/>
      <path d="M12 7v4"/>
      <line x1="8" y1="16" x2="8" y2="16"/>
      <line x1="16" y1="16" x2="16" y2="16"/>
    </svg>
  ),
};

export default function Multichannel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const platforms = [
    {
      name: 'Website',
      color: '#3b82f6',
      iconKey: 'Website' as keyof typeof PlatformIcons,
      description: 'Embed intelligent chatbots directly on your website for instant customer support and engagement.',
    },
    {
      name: 'WhatsApp',
      color: '#25D366',
      iconKey: 'WhatsApp' as keyof typeof PlatformIcons,
      description: 'Engage customers directly on WhatsApp with real-time responses and automation.',
    },
    {
      name: 'Instagram',
      color: '#7f278c',
      iconKey: 'Instagram' as keyof typeof PlatformIcons,
      description: 'Connect with your audience on Instagram through automated DMs and interactive stories.',
    },
    {
      name: 'Telegram',
      color: '#0088cc',
      iconKey: 'Telegram' as keyof typeof PlatformIcons,
      description: 'Deploy smart bots on Telegram for seamless group management and customer interactions.',
    },
    {
      name: 'Voice Assistance',
      color: '#8b5cf6',
      iconKey: 'VoiceAssistance' as keyof typeof PlatformIcons,
      description: 'Coming soon: AI-powered voice assistants for hands-free customer interactions.',
      comingSoon: true,
    },
    {
      name: 'Voice Bots',
      color: '#f59e0b',
      iconKey: 'VoiceBots' as keyof typeof PlatformIcons,
      description: 'Coming soon: Advanced voice bots for phone support and automated calling systems.',
      comingSoon: true,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % platforms.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(timer);
  }, [platforms.length]);

  const handleDotClick = (index: number) => {
    if (index !== currentIndex) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  const currentPlatform = platforms[currentIndex];
  const IconComponent = PlatformIcons[currentPlatform.iconKey];

  return (
    <div id="platforms">
      <style>{`
        .multichannel-container {
          width: 100%;
          background: #ffffff;
          padding: 3rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          position: relative;
          overflow: hidden;
        }

        .multichannel-content {
          flex: 1;
          max-width: 32rem;
          position: relative;
          z-index: 1;
        }

        .multichannel-badge {
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

        .multichannel-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #0f172a;
          margin: 0 0 1rem 0;
          line-height: 1.3;
        }

        .multichannel-title-highlight {
          color: #6366f1;
        }

        .multichannel-description {
          font-size: 0.875rem;
          color: #64748b;
          line-height: 1.5;
          margin: 0 0 1.5rem 0;
        }

        .multichannel-features {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .multichannel-feature {
          background: white;
          border-radius: 0.75rem;
          padding: 1rem;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          transition: all 0.2s ease;
          border: 1px solid #e2e8f0;
        }

        .multichannel-feature:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
          border-color: #cbd5e1;
        }

        .multichannel-feature-icon {
          width: 2.5rem;
          height: 2.5rem;
          background: #ede9fe;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6366f1;
          font-size: 1.25rem;
          flex-shrink: 0;
          box-shadow: 0 2px 4px rgba(99, 102, 241, 0.1);
        }

        .multichannel-feature-content {
          flex: 1;
        }

        .multichannel-feature-title {
          font-size: 1rem;
          font-weight: 500;
          color: #0f172a;
          margin: 0 0 0.25rem 0;
        }

        .multichannel-feature-desc {
          font-size: 0.875rem;
          color: #64748b;
          margin: 0;
          line-height: 1.5;
        }

        .multichannel-cta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #94a3b8;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .multichannel-visual {
          flex: 1;
          max-width: 28rem;
          position: relative;
          z-index: 1;
        }

        .multichannel-card {
          background: #10b981;
          border-radius: 1rem;
          padding: 2rem 1.5rem;
          color: white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
        }

        .multichannel-card-icon {
          width: 3.5rem;
          height: 3.5rem;
          background: white;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .multichannel-card-icon svg {
          width: 1.75rem;
          height: 1.75rem;
          stroke: #10b981;
          stroke-width: 1.5;
          fill: none;
        }

        .multichannel-card-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0 0 0.75rem 0;
        }

        .multichannel-card-desc {
          font-size: 0.875rem;
          line-height: 1.5;
          margin: 0;
          opacity: 0.95;
        }

        .multichannel-badge-coming-soon {
          display: inline-block;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 0.125rem 0.5rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 500;
          margin-left: 0.5rem;
        }

        .multichannel-dots {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1.5rem;
        }

        .multichannel-dot {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .multichannel-dot.active {
          background: white;
          width: 1.5rem;
          border-radius: 0.25rem;
        }

        @media (max-width: 1024px) {
          .multichannel-container {
            padding: 2rem 1rem;
            flex-direction: column;
            text-align: center;
          }

          .multichannel-content {
            max-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .multichannel-title {
            font-size: 1.25rem;
          }

          .multichannel-description {
            font-size: 0.75rem;
          }

          .multichannel-features {
            align-items: center;
          }

          .multichannel-feature {
            text-align: left;
          }

          .multichannel-visual {
            max-width: 100%;
            margin-top: 1.5rem;
          }

          .multichannel-card {
            padding: 1.5rem 1rem;
          }

          .multichannel-card-title {
            font-size: 1.125rem;
          }

          .multichannel-card-desc {
            font-size: 0.75rem;
          }
        }

        @media (max-width: 768px) {
          .multichannel-container {
            padding: 1.5rem 0.75rem;
            gap: 1.5rem;
          }

          .multichannel-title {
            font-size: 1.125rem;
          }

          .multichannel-description {
            font-size: 0.625rem;
          }

          .multichannel-features {
            gap: 0.75rem;
            margin-bottom: 1rem;
          }

          .multichannel-feature {
            padding: 0.75rem;
            border-radius: 0.5rem;
          }

          .multichannel-feature-icon {
            width: 2rem;
            height: 2rem;
            font-size: 1rem;
            border-radius: 0.375rem;
          }

          .multichannel-feature-title {
            font-size: 0.875rem;
          }

          .multichannel-feature-desc {
            font-size: 0.625rem;
          }

          .multichannel-cta {
            font-size: 0.625rem;
            gap: 0.375rem;
          }

          .multichannel-card {
            border-radius: 0.75rem;
            padding: 1rem 0.75rem;
          }

          .multichannel-card-icon {
            width: 2.5rem;
            height: 2.5rem;
            margin-bottom: 1rem;
            border-radius: 0.5rem;
          }

          .multichannel-card-icon svg {
            width: 1.25rem;
            height: 1.25rem;
          }

          .multichannel-card-title {
            font-size: 1rem;
            margin: 0 0 0.5rem 0;
          }

          .multichannel-card-desc {
            font-size: 0.625rem;
          }

          .multichannel-dots {
            gap: 0.375rem;
            margin-top: 1rem;
          }

          .multichannel-dot {
            width: 0.375rem;
            height: 0.375rem;
          }

          .multichannel-dot.active {
            width: 1.25rem;
          }
        }

        .platform-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          position: absolute;
          animation: float 2s ease-in-out infinite;
          background: white;
          padding: 8px;
        }

        .platform-icon img {
          border-radius: 50%;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>

      <div className="multichannel-container">
        <div className="multichannel-content">
          <div className="multichannel-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
            Multi-Platform
          </div>
          <h2 className="multichannel-title">
            Available Across Your <span className="multichannel-title-highlight">Favorite Platforms</span>
          </h2>
          <p className="multichannel-description">
            Deploy intelligent bots across multiple platforms. Engage your customers wherever they are - from websites to social media and voice assistants.
          </p>

          <div className="multichannel-features">
            <div className="multichannel-feature">
              <div className="multichannel-feature-icon">🌐</div>
              <div className="multichannel-feature-content">
                <h3 className="multichannel-feature-title">Multi-Platform Support</h3>
                <p className="multichannel-feature-desc">Seamlessly integrate with 6+ platforms</p>
              </div>
            </div>

            <div className="multichannel-feature">
              <div className="multichannel-feature-icon">💬</div>
              <div className="multichannel-feature-content">
                <h3 className="multichannel-feature-title">Smart Conversations</h3>
                <p className="multichannel-feature-desc">AI-powered responses that feel natural</p>
              </div>
            </div>

            <div className="multichannel-feature">
              <div className="multichannel-feature-icon">🔄</div>
              <div className="multichannel-feature-content">
                <h3 className="multichannel-feature-title">Always Evolving</h3>
                <p className="multichannel-feature-desc">New platforms and features coming soon</p>
              </div>
            </div>
          </div>

          <div className="multichannel-cta">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="5,3 19,12 5,21"/>
            </svg>
            Watch the cards auto-rotate or click dots to explore
          </div>
        </div>

        <div className="multichannel-visual">
          <div className="multichannel-card-wrapper">
            <div 
              className={`multichannel-card ${isAnimating ? 'animating' : ''}`}
              style={{ background: currentPlatform.color }}
            >
              <div className="multichannel-card-icon" style={{ color: currentPlatform.color }}>
                <IconComponent />
              </div>
              <h3 className="multichannel-card-title">
                {currentPlatform.name}
                {currentPlatform.comingSoon && (
                  <span className="multichannel-badge-coming-soon">Coming Soon</span>
                )}
              </h3>
              <p className="multichannel-card-desc">
                {currentPlatform.description}
              </p>
            </div>
          </div>

          <div className="multichannel-dots">
            {platforms.map((_, index) => (
              <div 
                key={index}
                className={`multichannel-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}