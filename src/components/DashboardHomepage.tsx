import React from 'react';

export default function DashboardHomepage() {
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
        .dashboard-container {
          display: flex;
          gap: 1.5rem;
          padding: 1.5rem 1rem;
          max-width: 80rem;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 1rem;
          position: relative;
          overflow: hidden;
        }

        .left-section {
          flex: 0 0 14rem;
          position: relative;
          z-index: 1;
        }

        .dashboard-badge {
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

        .dashboard-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }

        .dashboard-title .highlight {
          color: #6366f1;
        }

        .dashboard-description {
          font-size: 0.875rem;
          color: #64748b;
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }

        .book-demo-btn {
          background: #6366f1;
          color: white;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 2px 6px rgba(99, 102, 241, 0.2);
          width: 100%;
          margin-bottom: 1.5rem;
        }

        .book-demo-btn:hover {
          background: #4f46e5;
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(99, 102, 241, 0.3);
        }

        .analytics-icon {
          width: 3rem;
          height: 3rem;
          background: #5b6ef5;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(91, 110, 245, 0.2);
          margin: 0 auto;
        }

        .analytics-icon svg {
          width: 1.5rem;
          height: 1.5rem;
          color: white;
        }

        .right-section {
          flex: 1;
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          position: relative;
          z-index: 1;
          border: 1px solid #e2e8f0;
        }

        .browser-header {
          display: flex;
          gap: 0.375rem;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .browser-dot {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
        }

        .dot-red { background: #ff5f56; }
        .dot-yellow { background: #ffbd2e; }
        .dot-green { background: #27c93f; }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .metric-card {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          background: #f8fafc;
          border-radius: 0.75rem;
          padding: 1rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);
          border: 1px solid #e2e8f0;
          transition: all 0.2s ease;
        }

        .metric-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06);
          border-color: #cbd5e1;
        }

        .metric-label {
          font-size: 0.75rem;
          color: #64748b;
          font-weight: 500;
        }

        .metric-value {
          font-size: 1.25rem;
          font-weight: 600;
          color: #0f172a;
        }

        .metric-change {
          font-size: 0.75rem;
          color: #10b981;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.125rem;
        }

        .metric-change.negative {
          color: #ef4444;
        }

        .metric-chart {
          width: 100%;
          height: 2rem;
          margin-top: 0.25rem;
        }

        .chart-section {
          margin-bottom: 1.5rem;
        }

        .chart-title {
          font-size: 1rem;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 1rem;
        }

        .line-chart {
          width: 100%;
          height: 8rem;
          background: linear-gradient(180deg, #e8ebff 0%, transparent 100%);
          border-radius: 0.75rem;
          position: relative;
          margin-bottom: 1.5rem;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
          padding: 0.75rem;
        }

        .bottom-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .visitors-chart {
          padding: 1rem;
          background: #fafbfc;
          border-radius: 0.75rem;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
        }

        .chart-bar {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .bar-label {
          font-size: 0.75rem;
          color: #64748b;
          width: 2.5rem;
          font-weight: 500;
        }

        .bar-container {
          flex: 1;
          height: 1rem;
          background: #e2e8f0;
          border-radius: 0.5rem;
          overflow: hidden;
        }

        .bar-fill {
          height: 100%;
          border-radius: 0.5rem;
        }

        .bar-value {
          font-size: 0.75rem;
          font-weight: 500;
          color: #0f172a;
          min-width: 2rem;
          text-align: right;
        }

        .pie-chart-section {
          display: flex;
          gap: 1rem;
          align-items: center;
          padding: 1rem;
          background: #fafbfc;
          border-radius: 0.75rem;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
        }

        .pie-chart {
          width: 8rem;
          height: 8rem;
          flex-shrink: 0;
        }

        .pie-legend {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          color: #64748b;
        }

        .legend-dot {
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 50%;
        }

        .analytics-list {
          position: absolute;
          right: -12rem;
          top: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .analytics-item {
          background: white;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          font-weight: 500;
          color: #0f172a;
          max-width: 12rem;
          transition: all 0.2s ease;
          border: 1px solid #e2e8f0;
        }

        .analytics-item:hover {
          transform: translateX(-3px);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
          border-color: #cbd5e1;
        }

        .analytics-icon-sm {
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        @media (max-width: 1200px) {
          .analytics-list {
            position: static;
            flex-direction: row;
            flex-wrap: wrap;
            margin-top: 1.5rem;
            gap: 0.75rem;
            justify-content: center;
          }
          
          .analytics-item {
            max-width: 10rem;
          }
        }

        @media (max-width: 968px) {
          .dashboard-container {
            flex-direction: column;
            padding: 1rem;
            border-radius: 0.75rem;
          }

          .left-section {
            flex: 1;
            text-align: center;
          }

          .dashboard-title {
            font-size: 1.125rem;
          }

          .dashboard-description {
            font-size: 0.75rem;
          }

          .metrics-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
          }

          .bottom-section {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .analytics-list {
            position: static;
            flex-direction: row;
            flex-wrap: wrap;
            margin-top: 1.5rem;
            gap: 0.75rem;
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .dashboard-container {
            padding: 0.75rem;
          }

          .dashboard-title {
            font-size: 1rem;
          }

          .dashboard-description {
            font-size: 0.625rem;
          }

          .book-demo-btn {
            padding: 0.5rem 1rem;
            font-size: 0.75rem;
          }

          .analytics-icon {
            width: 2.5rem;
            height: 2.5rem;
            margin: 0 auto 0.75rem auto;
          }

          .analytics-icon svg {
            width: 1.25rem;
            height: 1.25rem;
          }

          .right-section {
            padding: 1rem;
            border-radius: 0.75rem;
          }

          .browser-header {
            gap: 0.25rem;
            margin-bottom: 0.75rem;
            padding-bottom: 0.375rem;
          }

          .browser-dot {
            width: 0.375rem;
            height: 0.375rem;
          }

          .metrics-grid {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }

          .metric-card {
            padding: 0.75rem;
            border-radius: 0.5rem;
          }

          .metric-label {
            font-size: 0.625rem;
          }

          .metric-value {
            font-size: 1rem;
          }

          .metric-change {
            font-size: 0.625rem;
          }

          .metric-chart {
            height: 1.5rem;
            margin-top: 0.125rem;
          }

          .chart-section {
            margin-bottom: 1rem;
          }

          .chart-title {
            font-size: 0.875rem;
            margin-bottom: 0.75rem;
          }

          .line-chart {
            height: 6rem;
            border-radius: 0.5rem;
            padding: 0.5rem;
            margin-bottom: 1rem;
          }

          .bottom-section {
            gap: 0.75rem;
          }

          .visitors-chart {
            padding: 0.75rem;
            border-radius: 0.5rem;
          }

          .chart-bar {
            gap: 0.5rem;
            margin-bottom: 0.5rem;
          }

          .bar-label {
            font-size: 0.625rem;
            width: 2rem;
          }

          .bar-container {
            height: 0.75rem;
            border-radius: 0.375rem;
          }

          .bar-fill {
            border-radius: 0.375rem;
          }

          .bar-value {
            font-size: 0.625rem;
            min-width: 1.5rem;
          }

          .pie-chart-section {
            padding: 0.75rem;
            border-radius: 0.5rem;
            gap: 0.75rem;
          }

          .pie-chart {
            width: 6rem;
            height: 6rem;
          }

          .pie-legend {
            gap: 0.375rem;
          }

          .legend-item {
            font-size: 0.625rem;
            gap: 0.375rem;
          }

          .legend-dot {
            width: 0.5rem;
            height: 0.5rem;
          }

          .analytics-list {
            display: none;
          }
        }
      `}</style>

      <div className="dashboard-container">
        <div className="left-section">
          <div className="dashboard-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 3v18h18"/>
              <path d="M18 17V9"/>
              <path d="M13 17V5"/>
              <path d="M8 17v-3"/>
            </svg>
            Analytics Dashboard
          </div>
          <h1 className="dashboard-title">
            Analyse<br />
            <span className="highlight">Core Metrics</span>
          </h1>
          <p className="dashboard-description">
            Track important metrics, patterns, and download reports for detailed insights.
          </p>
          <button className="book-demo-btn" onClick={handleBookDemoClick}>Book Demo</button>
          
          <div className="analytics-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 3v18h18" />
              <path d="M18 17V9" />
              <path d="M13 17V5" />
              <path d="M8 17v-3" />
            </svg>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <div className="right-section">
            <div className="browser-header">
              <div className="browser-dot dot-red"></div>
              <div className="browser-dot dot-yellow"></div>
              <div className="browser-dot dot-green"></div>
            </div>

            <div className="metrics-grid">
              <div className="metric-card">
                <div className="metric-label">Total Visitors</div>
                <div className="metric-value">14,000</div>
                <div className="metric-change">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="23,6 13.5,15.5 8.5,10.5 1,18"/>
                    <polyline points="17,6 23,6 23,12"/>
                  </svg>
                  +8%
                </div>
                <svg className="metric-chart" viewBox="0 0 100 20">
                  <path d="M 0 15 Q 25 10 50 12 T 100 8" fill="none" stroke="#10b981" strokeWidth="2"/>
                </svg>
              </div>

              <div className="metric-card">
                <div className="metric-label">Website Engagements</div>
                <div className="metric-value">9,000</div>
                <div className="metric-change">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="23,6 13.5,15.5 8.5,10.5 1,18"/>
                    <polyline points="17,6 23,6 23,12"/>
                  </svg>
                  +5%
                </div>
                <svg className="metric-chart" viewBox="0 0 100 20">
                  <path d="M 0 15 Q 25 12 50 10 T 100 5" fill="none" stroke="#10b981" strokeWidth="2"/>
                </svg>
              </div>

              <div className="metric-card">
                <div className="metric-label">Daily Leads</div>
                <div className="metric-value">12,000</div>
                <div className="metric-change">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="23,6 13.5,15.5 8.5,10.5 1,18"/>
                    <polyline points="17,6 23,6 23,12"/>
                  </svg>
                  +12%
                </div>
                <svg className="metric-chart" viewBox="0 0 100 20">
                  <path d="M 0 18 Q 25 14 50 10 T 100 4" fill="none" stroke="#10b981" strokeWidth="2"/>
                </svg>
              </div>

              <div className="metric-card">
                <div className="metric-label">Lead Generation Rate</div>
                <div className="metric-value">95%</div>
                <div className="metric-change">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="23,6 13.5,15.5 8.5,10.5 1,18"/>
                    <polyline points="17,6 23,6 23,12"/>
                  </svg>
                  +2%
                </div>
                <svg className="metric-chart" viewBox="0 0 100 20">
                  <path d="M 0 12 L 20 12 L 40 10 L 60 11 L 80 10 L 100 9" fill="none" stroke="#10b981" strokeWidth="2"/>
                </svg>
              </div>

              <div className="metric-card">
                <div className="metric-label">Appointment Booked</div>
                <div className="metric-value">7,234</div>
                <div className="metric-change">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="23,6 13.5,15.5 8.5,10.5 1,18"/>
                    <polyline points="17,6 23,6 23,12"/>
                  </svg>
                  +4%
                </div>
                <svg className="metric-chart" viewBox="0 0 100 20">
                  <path d="M 0 16 L 20 14 L 40 15 L 60 12 L 80 13 L 100 11" fill="none" stroke="#10b981" strokeWidth="2"/>
                </svg>
              </div>
            </div>

            <div className="chart-section">
              <div className="chart-title">Daily Leads Trend</div>
              <svg className="line-chart" viewBox="0 0 800 200">
                <path d="M 0 120 Q 100 100 200 90 T 400 70 T 600 50 T 800 60" fill="url(#gradient)" />
                <path d="M 0 120 Q 100 100 200 90 T 400 70 T 600 50 T 800 60" fill="none" stroke="#5b6ef5" strokeWidth="3"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#5b6ef5', stopOpacity: 0.3 }} />
                    <stop offset="100%" style={{ stopColor: '#5b6ef5', stopOpacity: 0 }} />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="bottom-section">
              <div className="visitors-chart">
                <div className="chart-title">Visitors Testing Chart</div>
                <div className="chart-bar">
                  <div className="bar-label">10</div>
                  <div className="bar-container">
                    <div className="bar-fill" style={{ width: '90%', background: '#a855f7' }}></div>
                  </div>
                  <div className="bar-value">90</div>
                </div>
                <div className="chart-bar">
                  <div className="bar-label">20</div>
                  <div className="bar-container">
                    <div className="bar-fill" style={{ width: '75%', background: '#3b82f6' }}></div>
                  </div>
                  <div className="bar-value">75</div>
                </div>
                <div className="chart-bar">
                  <div className="bar-label">30</div>
                  <div className="bar-container">
                    <div className="bar-fill" style={{ width: '60%', background: '#fbbf24' }}></div>
                  </div>
                  <div className="bar-value">60</div>
                </div>
                <div className="chart-bar">
                  <div className="bar-label">40</div>
                  <div className="bar-container">
                    <div className="bar-fill" style={{ width: '85%', background: '#5b6ef5' }}></div>
                  </div>
                  <div className="bar-value">85</div>
                </div>
              </div>

              <div className="pie-chart-section">
                <svg className="pie-chart" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="50" fill="#ef4444" />
                  <path d="M 60 60 L 60 10 A 50 50 0 0 1 110 60 Z" fill="#f97316" />
                  <path d="M 60 60 L 110 60 A 50 50 0 0 1 60 110 Z" fill="#fbbf24" />
                  <path d="M 60 60 L 60 110 A 50 50 0 0 1 10 60 Z" fill="#8b5cf6" />
                </svg>
                <div className="pie-legend">
                  <div className="chart-title">Visitors Most Breakdown</div>
                  <div className="legend-item">
                    <div className="legend-dot" style={{ background: '#ef4444' }}></div>
                    <span>Interested</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-dot" style={{ background: '#f97316' }}></div>
                    <span>Captured Request</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-dot" style={{ background: '#fbbf24' }}></div>
                    <span>Appointment Scheduled</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-dot" style={{ background: '#8b5cf6' }}></div>
                    <span>Not Interested</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-dot" style={{ background: '#10b981' }}></div>
                    <span>Purchase priority</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="analytics-list">
            <div className="analytics-item">
              <div className="analytics-icon-sm" style={{ background: '#5b6ef5' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                </svg>
              </div>
              Chatbot & Live Chat Analytics
            </div>
            <div className="analytics-item">
              <div className="analytics-icon-sm" style={{ background: '#10b981' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                </svg>
              </div>
              WhatsApp Broadcasting Metrics
            </div>
            <div className="analytics-item">
              <div className="analytics-icon-sm" style={{ background: '#5b6ef5' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              Real Time Analytics
            </div>
          </div>
        </div>
      </div>
    </>
  );
}