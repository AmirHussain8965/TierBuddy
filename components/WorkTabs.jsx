"use client";

// ✅ Import Bootstrap CSS in _app.js or layout.js — NOT here:
// import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";

const tabData = {
  today: [
    {
      id: 1,
      rank: 1,
      title: "Best Horror Movies of All Time",
      author: "Huntsman Leon",
      items: 45,
      timeAgo: "5 hrs ago",
      avatars: [
        { label: "S", rank: 1 },
        { label: "A", rank: 2 },
        { label: "B", rank: 2 },
        { label: "C", rank: 2 },
      ],
    },
    {
      id: 2,
      rank: 2,
      title: "F126 Cars Ranking",
      author: "Huntsman Leon",
      items: 45,
      timeAgo: "5 hrs ago",
      avatars: [
        { label: "S", rank: 1 },
        { label: "A", rank: 2 },
        { label: "B", rank: 2 },
        { label: "C", rank: 2 },
      ],
    },
    {
      id: 3,
      rank: 3,
      title: "Best Pizza Toppings",
      author: "Huntsman Leon",
      items: 45,
      timeAgo: "5 hrs ago",
      avatars: [
        { label: "S", rank: 1 },
        { label: "A", rank: 2 },
        { label: "B", rank: 2 },
        { label: "C", rank: 2 },
      ],
    },
    {
      id: 4,
      rank: 4,
      title: "Video Game Characters",
      author: "Huntsman Leon",
      items: 45,
      timeAgo: "5 hrs ago",
      avatars: [
        { label: "S", rank: 1 },
        { label: "A", rank: 2 },
        { label: "B", rank: 2 },
        { label: "C", rank: 2 },
      ],
    },
  ],
  yesterday: [
    {
      id: 1,
      rank: 1,
      title: "Top Anime Series",
      author: "Huntsman Leon",
      items: 32,
      timeAgo: "1 day ago",
      avatars: [
        { label: "S", rank: 1 },
        { label: "A", rank: 2 },
        { label: "B", rank: 2 },
        { label: "C", rank: 2 },
      ],
    },
    {
      id: 2,
      rank: 2,
      title: "Best Coffee Brands",
      author: "Huntsman Leon",
      items: 18,
      timeAgo: "1 day ago",
      avatars: [
        { label: "S", rank: 1 },
        { label: "A", rank: 2 },
        { label: "B", rank: 2 },
        { label: "C", rank: 2 },
      ],
    },
    {
      id: 3,
      rank: 3,
      title: "Greatest NBA Players",
      author: "Huntsman Leon",
      items: 25,
      timeAgo: "1 day ago",
      avatars: [
        { label: "S", rank: 1 },
        { label: "A", rank: 2 },
        { label: "B", rank: 2 },
        { label: "C", rank: 2 },
      ],
    },
    {
      id: 4,
      rank: 4,
      title: "Best Rock Albums Ever",
      author: "Huntsman Leon",
      items: 40,
      timeAgo: "1 day ago",
      avatars: [
        { label: "S", rank: 1 },
        { label: "A", rank: 2 },
        { label: "B", rank: 2 },
        { label: "C", rank: 2 },
      ],
    },
  ],
  thisweek: [
    {
      id: 1,
      rank: 1,
      title: "Best Superhero Movies",
      author: "Huntsman Leon",
      items: 60,
      timeAgo: "3 days ago",
      avatars: [
        { label: "S", rank: 1 },
        { label: "A", rank: 2 },
        { label: "B", rank: 2 },
        { label: "C", rank: 2 },
      ],
    },
    {
      id: 2,
      rank: 2,
      title: "Top Travel Destinations",
      author: "Huntsman Leon",
      items: 55,
      timeAgo: "4 days ago",
      avatars: [
        { label: "S", rank: 1 },
        { label: "A", rank: 2 },
        { label: "B", rank: 2 },
        { label: "C", rank: 2 },
      ],
    },
    {
      id: 3,
      rank: 3,
      title: "Best Programming Languages",
      author: "Huntsman Leon",
      items: 22,
      timeAgo: "5 days ago",
      avatars: [
        { label: "S", rank: 1 },
        { label: "A", rank: 2 },
        { label: "B", rank: 2 },
        { label: "C", rank: 2 },
      ],
    },
    {
      id: 4,
      rank: 4,
      title: "Greatest TV Shows",
      author: "Huntsman Leon",
      items: 38,
      timeAgo: "6 days ago",
      avatars: [
        { label: "S", rank: 1 },
        { label: "A", rank: 2 },
        { label: "B", rank: 2 },
        { label: "C", rank: 2 },
      ],
    },
  ],
};

function RankingCard({ card }) {
  return (
    <div className="ranking_card">
      <div className="ranking_card_top">
        <div className="ranking_card_header">
          <h3 className="ranking_card_title">{card.title}</h3>
          <p className="ranking_card_author">by {card.author}</p>
        </div>
        <div className="ranking_card_badge">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          #{card.rank}
        </div>
      </div>

      <div className="ranking_card_avatars">
        {card.avatars.map((avatar, idx) => (
          <div key={idx} className="ranking_avatar_wrap">
            <span className="ranking_avatar_rank">{avatar.rank}</span>
            <div className="ranking_avatar">{avatar.label}</div>
          </div>
        ))}
      </div>

      <div className="ranking_card_footer">
        <div className="ranking_card_meta">
          <div className="ranking_meta_item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
            {card.items} Items
          </div>
          <div className="ranking_meta_item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {card.timeAgo}
          </div>
        </div>
        <button className="ranking_view_btn">
          View List
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function WorkTabs() {
  const [activeTab, setActiveTab] = useState("today");

  const cards = tabData[activeTab] || [];

  return (
    <>
      <style>{`
        /* ── Override Bootstrap nav-pills to match design ── */
        .worktabs_nav_wrap {
          display: flex;
          justify-content: center;
          margin-top: 40px;
        }

        .worktabs_nav_wrap .nav-pills {
          background: #1a1a1c;
          border-radius: 50px;
          padding: 5px;
          gap: 2px;
          border: 1px solid #2a2a2e;
          flex-wrap: nowrap;
        }

        .worktabs_nav_wrap .nav-pills .nav-link {
          color: #888;
          font-size: 14px;
          font-weight: 500;
          padding: 8px 22px;
          border-radius: 50px;
          background: none;
          border: none;
          white-space: nowrap;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .worktabs_nav_wrap .nav-pills .nav-link:hover {
          color: #ccc;
          background: none;
        }

        .worktabs_nav_wrap .nav-pills .nav-link.active {
          background: #f5a623 !important;
          color: #1a0f00 !important;
          font-weight: 700;
        }

        /* ── Grid ── */
        .ranking_grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 50px;
        }

        @media (max-width: 640px) {
          .ranking_grid {
            grid-template-columns: 1fr;
          }
        }

        /* ── Card ── */
        .ranking_card {
          background: #1a1a1c;
          border-radius: 14px;
          padding: 18px 20px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          border: 1px solid #242426;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          cursor: pointer;
        }

        .ranking_card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.45);
        }

        .ranking_card_top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
        }

        .ranking_card_header {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .ranking_card_title {
          font-size: 15px;
          font-weight: 700;
          color: #f0f0f0;
          margin: 0;
          line-height: 1.3;
        }

        .ranking_card_author {
          font-size: 12px;
          color: #666;
          margin: 0;
        }

        .ranking_card_badge {
          background: #2a2200;
          color: #f5a623;
          font-size: 12px;
          font-weight: 700;
          padding: 5px 10px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 4px;
          white-space: nowrap;
          flex-shrink: 0;
          border: 1px solid #3d3000;
        }

        /* Avatars */
        .ranking_card_avatars {
          display: flex;
          align-items: flex-end;
          gap: 6px;
        }

        .ranking_avatar_wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
        }

        .ranking_avatar_rank {
          font-size: 10px;
          color: #555;
          font-weight: 600;
          line-height: 1;
        }

        .ranking_avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #2e2300;
          border: 2px solid #3d3000;
          color: #c8840a;
          font-size: 14px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Footer */
        .ranking_card_footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .ranking_card_meta {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .ranking_meta_item {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
          color: #555;
        }

        .ranking_meta_item svg {
          width: 13px;
          height: 13px;
          opacity: 0.6;
          flex-shrink: 0;
        }

        .ranking_view_btn {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 13px;
          font-weight: 600;
          color: #f5a623;
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 0;
          white-space: nowrap;
          transition: opacity 0.2s ease, transform 0.2s ease;
          letter-spacing: 0.01em;
        }

        .ranking_view_btn:hover {
          opacity: 0.75;
          transform: translateX(2px);
        }

        .ranking_view_btn svg {
          transition: transform 0.2s ease;
        }

        .ranking_view_btn:hover svg {
          transform: translateX(3px);
        }
      `}</style>

      {/* ✅ Bootstrap nav nav-pills — controlled by React state */}
      <div className="worktabs_nav_wrap">
        <ul className="nav nav-pills" role="tablist">
          {[
            { key: "today", label: "Today" },
            { key: "yesterday", label: "Yesterday" },
            { key: "thisweek", label: "This Week" },
          ].map((tab) => (
            <li className="nav-item" key={tab.key} role="presentation">
              <button
                className={`nav-link${activeTab === tab.key ? " active" : ""}`}
                onClick={() => setActiveTab(tab.key)}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.key}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Cards Grid */}
      <div className="ranking_grid">
        {cards.map((card) => (
          <RankingCard key={card.id} card={card} />
        ))}
      </div>
    </>
  );
}