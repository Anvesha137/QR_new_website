import { useState } from 'react';

export default function Methodology() {
  const [activeTab, setActiveTab] = useState('Work Flow');

  const tabContent = {
    'Work Flow': {
      title: 'Data Processing Pipeline',
      subtitle: 'From ingestion to intelligent responses',
      content: (
        <div className="methodology-workflow">
          <div className="methodology-steps">
            <div className="methodology-step-card">
              <div className="methodology-step-number">1</div>
              <div className="methodology-step-content">
                <h3 className="methodology-step-title">Data Ingestion</h3>
                <p className="methodology-step-desc">Secure Google Drive connection via OAuth. Auto-fetch PDFs, Docs, Sheets, and images.</p>
              </div>
            </div>
            
            <div className="methodology-step-card">
              <div className="methodology-step-number">2</div>
              <div className="methodology-step-content">
                <h3 className="methodology-step-title">Extraction & Cleaning</h3>
                <p className="methodology-step-desc">Extract text from documents and apply OCR to images. Normalize and clean all data.</p>
              </div>
            </div>
            
            <div className="methodology-step-card">
              <div className="methodology-step-number">3</div>
              <div className="methodology-step-content">
                <h3 className="methodology-step-title">Indexing</h3>
                <p className="methodology-step-desc">Convert to structured formats and build semantic embeddings for fast search.</p>
              </div>
            </div>
            
            <div className="methodology-step-card">
              <div className="methodology-step-number">4</div>
              <div className="methodology-step-content">
                <h3 className="methodology-step-title">AI Processing</h3>
                <p className="methodology-step-desc">Handle user queries via chatbots, apps, or portals with contextual understanding.</p>
              </div>
            </div>
            
            <div className="methodology-step-card">
              <div className="methodology-step-number">5</div>
              <div className="methodology-step-content">
                <h3 className="methodology-step-title">Deployment</h3>
                <p className="methodology-step-desc">Multi-channel availability with analytics for performance tracking.</p>
              </div>
            </div>
            
            <div className="methodology-step-card">
              <div className="methodology-step-number">6</div>
              <div className="methodology-step-content">
                <h3 className="methodology-step-title">Continuous Learning</h3>
                <p className="methodology-step-desc">Auto-sync new files and improve responses through user feedback loops.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    'Features': {
      title: 'Core Capabilities',
      subtitle: 'Essential features for business success',
      content: (
        <div className="methodology-features-grid">
          <div className="methodology-feature-card">
            <div className="methodology-feature-icon">📤</div>
            <h3 className="methodology-feature-title">Automated Extraction</h3>
            <p className="methodology-feature-desc">Multi-format support without manual uploading</p>
          </div>
          
          <div className="methodology-feature-card">
            <div className="methodology-feature-icon">🔍</div>
            <h3 className="methodology-feature-title">Smart Search</h3>
            <p className="methodology-feature-desc">AI-powered retrieval with semantic understanding</p>
          </div>
          
          <div className="methodology-feature-card">
            <div className="methodology-feature-icon">📱</div>
            <h3 className="methodology-feature-title">Multi-Channel Access</h3>
            <p className="methodology-feature-desc">Web, mobile, portals, and CRM integration</p>
          </div>
          
          <div className="methodology-feature-card">
            <div className="methodology-feature-icon">📈</div>
            <h3 className="methodology-feature-title">Continuous Learning</h3>
            <p className="methodology-feature-desc">Improvement through user interactions</p>
          </div>
          
          <div className="methodology-feature-card">
            <div className="methodology-feature-icon">📊</div>
            <h3 className="methodology-feature-title">Analytics Dashboard</h3>
            <p className="methodology-feature-desc">Performance tracking and insights</p>
          </div>
          
          <div className="methodology-feature-card">
            <div className="methodology-feature-icon">🔒</div>
            <h3 className="methodology-feature-title">Secure Integration</h3>
            <p className="methodology-feature-desc">Google OAuth with enterprise-grade security</p>
          </div>
        </div>
      )
    },
    'AI Assistants': {
      title: 'Intelligent Assistants',
      subtitle: 'Specialized virtual experts',
      content: (
        <div className="methodology-ai-section">
          <div className="methodology-ai-card">
            <div className="methodology-ai-icon">🧠</div>
            <h3 className="methodology-ai-title">Function</h3>
            <p className="methodology-ai-desc">Answer queries using client's proprietary data</p>
          </div>
          
          <div className="methodology-ai-card">
            <div className="methodology-ai-icon">⚡</div>
            <h3 className="methodology-ai-title">Capabilities</h3>
            <p className="methodology-ai-desc">Document summarization, step-by-step guidance, and FAQ automation</p>
          </div>
          
          <div className="methodology-ai-card">
            <div className="methodology-ai-icon">🚀</div>
            <h3 className="methodology-ai-title">Deployment</h3>
            <p className="methodology-ai-desc">Websites, mobile apps, portals, and CRM systems</p>
          </div>
        </div>
      )
    },
    'Voice AI': {
      title: 'Voice Interaction',
      subtitle: 'Natural conversational interface',
      content: (
        <div className="methodology-voice-section">
          <div className="methodology-voice-card">
            <div className="methodology-voice-icon">🎤</div>
            <h3 className="methodology-voice-title">Voice Interface</h3>
            <p className="methodology-voice-desc">Speech-to-text and text-to-speech capabilities</p>
          </div>
          
          <div className="methodology-voice-card">
            <div className="methodology-voice-icon">🔄</div>
            <h3 className="methodology-voice-title">Integration</h3>
            <p className="methodology-voice-desc">Works with mobile apps, websites, and smart devices</p>
          </div>
          
          <div className="methodology-voice-card">
            <div className="methodology-voice-icon">🎁</div>
            <h3 className="methodology-voice-title">Benefits</h3>
            <p className="methodology-voice-desc">Hands-free interaction with natural conversation flow</p>
          </div>
        </div>
      )
    },
    'AI Powered Search': {
      title: 'Semantic Search',
      subtitle: 'Intelligent document retrieval',
      content: (
        <div className="methodology-search-section">
          <div className="methodology-search-card">
            <div className="methodology-search-icon">🔎</div>
            <h3 className="methodology-search-title">Semantic Search</h3>
            <p className="methodology-search-desc">Search across all uploaded documents by meaning, not keywords</p>
          </div>
          
          <div className="methodology-search-card">
            <div className="methodology-search-icon">💬</div>
            <h3 className="methodology-search-title">Natural Queries</h3>
            <p className="methodology-search-desc">Understand context and intent with natural language processing</p>
          </div>
          
          <div className="methodology-search-card">
            <div className="methodology-search-icon">🏆</div>
            <h3 className="methodology-search-title">Ranked Results</h3>
            <p className="methodology-search-desc">Results ranked by relevance and confidence for accuracy</p>
          </div>
        </div>
      )
    }
  };

  return (
    <div id="methodology">
      <style>{`
        .methodology-container {
          width: 100%;
          background: #ffffff;
          padding: 3rem 1.5rem;
          position: relative;
          overflow: hidden;
        }

        .methodology-header {
          text-align: center;
          margin-bottom: 2rem;
          position: relative;
          z-index: 1;
        }

        .methodology-badge {
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

        .methodology-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #0f172a;
          margin: 0 0 1rem 0;
        }

        .methodology-title-highlight {
          color: #6366f1;
        }

        .methodology-description {
          font-size: 0.875rem;
          color: #64748b;
          max-width: 40rem;
          margin: 0 auto;
          line-height: 1.5;
        }

        .methodology-tabs {
          background: white;
          border-radius: 0.75rem;
          padding: 1rem;
          margin: 2rem auto;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          max-width: 64rem;
          position: relative;
          z-index: 1;
          border: 1px solid #e2e8f0;
        }

        .methodology-tab-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          list-style: none;
          padding: 0;
          margin: 0;
          justify-content: center;
        }

        .methodology-tab {
          padding: 0.5rem 1rem;
          background: transparent;
          border: none;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
        }

        .methodology-tab.active {
          background: #6366f1;
          color: white;
          box-shadow: 0 2px 6px rgba(99, 102, 241, 0.2);
        }

        .methodology-tab:hover:not(.active) {
          background: #f1f5f9;
          color: #334155;
        }

        .methodology-content {
          background: white;
          border-radius: 0.75rem;
          padding: 2rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          max-width: 64rem;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          border: 1px solid #e2e8f0;
        }

        .methodology-workflow-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .methodology-workflow-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #0f172a;
          margin: 0 0 0.75rem 0;
        }

        .methodology-workflow-subtitle {
          font-size: 1rem;
          color: #64748b;
          margin: 0;
          font-weight: 500;
        }

        /* Workflow Steps */
        .methodology-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .methodology-step-card {
          display: flex;
          gap: 1rem;
          padding: 1.5rem;
          border-radius: 0.75rem;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          transition: all 0.2s ease;
        }

        .methodology-step-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          border-color: #cbd5e1;
        }

        .methodology-step-number {
          min-width: 2rem;
          height: 2rem;
          border-radius: 50%;
          background: #6366f1;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 1rem;
        }

        .methodology-step-content {
          flex: 1;
        }

        .methodology-step-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #0f172a;
          margin: 0 0 0.5rem 0;
        }

        .methodology-step-desc {
          font-size: 0.875rem;
          color: #64748b;
          margin: 0;
          line-height: 1.5;
        }

        /* Features Grid */
        .methodology-features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .methodology-feature-card {
          padding: 1.5rem;
          border-radius: 0.75rem;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          text-align: center;
          transition: all 0.2s ease;
        }

        .methodology-feature-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          border-color: #cbd5e1;
        }

        .methodology-feature-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .methodology-feature-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #0f172a;
          margin: 0 0 0.5rem 0;
        }

        .methodology-feature-desc {
          font-size: 0.875rem;
          color: #64748b;
          margin: 0;
          line-height: 1.5;
        }

        /* AI Section */
        .methodology-ai-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .methodology-ai-card {
          padding: 1.5rem;
          border-radius: 0.75rem;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          text-align: center;
          transition: all 0.2s ease;
        }

        .methodology-ai-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          border-color: #cbd5e1;
        }

        .methodology-ai-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .methodology-ai-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #0f172a;
          margin: 0 0 0.5rem 0;
        }

        .methodology-ai-desc {
          font-size: 0.875rem;
          color: #64748b;
          margin: 0;
          line-height: 1.5;
        }

        /* Voice Section */
        .methodology-voice-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .methodology-voice-card {
          padding: 1.5rem;
          border-radius: 0.75rem;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          text-align: center;
          transition: all 0.2s ease;
        }

        .methodology-voice-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          border-color: #cbd5e1;
        }

        .methodology-voice-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .methodology-voice-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #0f172a;
          margin: 0 0 0.5rem 0;
        }

        .methodology-voice-desc {
          font-size: 0.875rem;
          color: #64748b;
          margin: 0;
          line-height: 1.5;
        }

        /* Search Section */
        .methodology-search-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .methodology-search-card {
          padding: 1.5rem;
          border-radius: 0.75rem;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          text-align: center;
          transition: all 0.2s ease;
        }

        .methodology-search-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          border-color: #cbd5e1;
        }

        .methodology-search-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .methodology-search-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #0f172a;
          margin: 0 0 0.5rem 0;
        }

        .methodology-search-desc {
          font-size: 0.875rem;
          color: #64748b;
          margin: 0;
          line-height: 1.5;
        }

        @media (min-width: 768px) {
          .methodology-container {
            padding: 4rem 2rem;
          }

          .methodology-title {
            font-size: 1.75rem;
          }

          .methodology-description {
            font-size: 1rem;
          }

          .methodology-tabs {
            border-radius: 1rem;
            padding: 1.5rem;
            margin: 3rem auto;
          }

          .methodology-tab-list {
            gap: 1rem;
          }

          .methodology-tab {
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
            border-radius: 0.75rem;
          }

          .methodology-content {
            border-radius: 1rem;
            padding: 3rem;
          }

          .methodology-workflow-header {
            margin-bottom: 3rem;
          }

          .methodology-workflow-title {
            font-size: 1.5rem;
          }

          .methodology-workflow-subtitle {
            font-size: 1.125rem;
          }

          .methodology-steps {
            gap: 2rem;
          }

          .methodology-step-card {
            padding: 2rem;
            border-radius: 1rem;
          }

          .methodology-step-title {
            font-size: 1.25rem;
          }

          .methodology-step-desc {
            font-size: 1rem;
          }

          .methodology-features-grid {
            gap: 2rem;
          }

          .methodology-feature-card {
            padding: 2rem;
            border-radius: 1rem;
          }

          .methodology-feature-title {
            font-size: 1.25rem;
          }

          .methodology-feature-desc {
            font-size: 1rem;
          }

          .methodology-ai-section {
            gap: 2rem;
          }

          .methodology-ai-card {
            padding: 2rem;
            border-radius: 1rem;
          }

          .methodology-ai-title {
            font-size: 1.25rem;
          }

          .methodology-ai-desc {
            font-size: 1rem;
          }

          .methodology-voice-section {
            gap: 2rem;
          }

          .methodology-voice-card {
            padding: 2rem;
            border-radius: 1rem;
          }

          .methodology-voice-title {
            font-size: 1.25rem;
          }

          .methodology-voice-desc {
            font-size: 1rem;
          }

          .methodology-search-section {
            gap: 2rem;
          }

          .methodology-search-card {
            padding: 2rem;
            border-radius: 1rem;
          }

          .methodology-search-title {
            font-size: 1.25rem;
          }

          .methodology-search-desc {
            font-size: 1rem;
          }
        }

        @media (max-width: 768px) {
          .methodology-container {
            padding: 2rem 1rem;
          }

          .methodology-title {
            font-size: 1.25rem;
          }

          .methodology-description {
            font-size: 0.75rem;
          }

          .methodology-tabs {
            padding: 0.75rem;
          }

          .methodology-tab-list {
            gap: 0.5rem;
          }

          .methodology-tab {
            padding: 0.5rem 0.75rem;
            font-size: 0.75rem;
            border-radius: 0.375rem;
          }

          .methodology-content {
            padding: 1rem;
            border-radius: 0.75rem;
          }

          .methodology-workflow-header {
            margin-bottom: 1.5rem;
          }

          .methodology-workflow-title {
            font-size: 1.125rem;
          }

          .methodology-workflow-subtitle {
            font-size: 0.875rem;
          }

          .methodology-steps {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .methodology-step-card {
            padding: 1rem;
            border-radius: 0.5rem;
          }

          .methodology-step-number {
            min-width: 1.5rem;
            height: 1.5rem;
            font-size: 0.75rem;
          }

          .methodology-step-title {
            font-size: 1rem;
          }

          .methodology-step-desc {
            font-size: 0.75rem;
          }

          .methodology-features-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .methodology-feature-card {
            padding: 1rem;
            border-radius: 0.5rem;
          }

          .methodology-feature-icon {
            font-size: 1.5rem;
            margin-bottom: 0.75rem;
          }

          .methodology-feature-title {
            font-size: 1rem;
          }

          .methodology-feature-desc {
            font-size: 0.75rem;
          }

          .methodology-ai-section {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .methodology-ai-card {
            padding: 1rem;
            border-radius: 0.5rem;
          }

          .methodology-ai-icon {
            font-size: 1.5rem;
            margin-bottom: 0.75rem;
          }

          .methodology-ai-title {
            font-size: 1rem;
          }

          .methodology-ai-desc {
            font-size: 0.75rem;
          }

          .methodology-voice-section {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .methodology-voice-card {
            padding: 1rem;
            border-radius: 0.5rem;
          }

          .methodology-voice-icon {
            font-size: 1.5rem;
            margin-bottom: 0.75rem;
          }

          .methodology-voice-title {
            font-size: 1rem;
          }

          .methodology-voice-desc {
            font-size: 0.75rem;
          }

          .methodology-search-section {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .methodology-search-card {
            padding: 1rem;
            border-radius: 0.5rem;
          }

          .methodology-search-icon {
            font-size: 1.5rem;
            margin-bottom: 0.75rem;
          }

          .methodology-search-title {
            font-size: 1rem;
          }

          .methodology-search-desc {
            font-size: 0.75rem;
          }
        }
      `}</style>

      <div className="methodology-container">
        <div className="methodology-header">
          <div className="methodology-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            How It Works
          </div>
          <h2 className="methodology-title">
            Our <span className="methodology-title-highlight">Methodology</span>
          </h2>
          <p className="methodology-description">
            Discover how Quickrevert transforms your business with AI-powered solutions designed for maximum efficiency and results.
          </p>
        </div>

        <div className="methodology-tabs">
          <ul className="methodology-tab-list">
            {Object.keys(tabContent).map((tab) => (
              <li key={tab}>
                <button 
                  className={`methodology-tab ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="methodology-content">
          <div className="methodology-workflow-header">
            <h3 className="methodology-workflow-title">{tabContent[activeTab].title}</h3>
            <p className="methodology-workflow-subtitle">{tabContent[activeTab].subtitle}</p>
          </div>

          {tabContent[activeTab].content}
        </div>
      </div>
    </div>
  );
}
