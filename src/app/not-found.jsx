"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotFound() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Space+Mono:wght@400;700&display=swap');

        .nf-root {
          --bg: #080808;
          --fg: #f0ece3;
          --accent: #ff3c2e;
          --line: rgba(240,236,227,0.1);
          background: var(--bg);
          color: var(--fg);
          font-family: 'Space Mono', monospace;
          min-height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .nf-noise {
          position: fixed;
          inset: -50%;
          width: 50%;
          height: 50%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.03;
          pointer-events: none;
          z-index: 100;
        }

        .nf-grid {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(var(--line) 1px, transparent 1px),
            linear-gradient(90deg, var(--line) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .nf-container {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2rem;
        }

        .nf-big {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(120px, 22vw, 260px);
          line-height: 0.85;
          color: transparent;
          -webkit-text-stroke: 2px rgba(240,236,227,0.15);
          position: relative;
          letter-spacing: -4px;
          user-select: none;
        }

        .nf-big::before {
          content: '404';
          position: absolute;
          inset: 0;
          color: #ff3c2e;
          -webkit-text-stroke: 0;
          clip-path: polygon(0 45%, 100% 45%, 100% 55%, 0 55%);
          animation: nf-glitch1 3s infinite;
        }

        .nf-big::after {
          content: '404';
          position: absolute;
          inset: 0;
          color: #00e5ff;
          -webkit-text-stroke: 0;
          clip-path: polygon(0 30%, 100% 30%, 100% 38%, 0 38%);
          animation: nf-glitch2 3s infinite;
          mix-blend-mode: screen;
        }

        @keyframes nf-glitch1 {
          0%, 90%, 100% { transform: translateX(0); opacity: 0; }
          91% { transform: translateX(-6px); opacity: 1; }
          93% { transform: translateX(6px); opacity: 1; }
          95% { transform: translateX(-3px); opacity: 1; }
          97% { transform: translateX(0); opacity: 0; }
        }

        @keyframes nf-glitch2 {
          0%, 88%, 100% { transform: translateX(0); opacity: 0; }
          89% { transform: translateX(8px); opacity: 1; }
          92% { transform: translateX(-4px); opacity: 1; }
          94% { transform: translateX(2px); opacity: 1; }
          96% { transform: translateX(0); opacity: 0; }
        }

        .nf-divider {
          width: 100%;
          max-width: 480px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #ff3c2e, transparent);
          margin: 8px 0 28px;
          animation: nf-pulse 2s ease-in-out infinite;
        }

        @keyframes nf-pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        .nf-label {
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #ff3c2e;
          margin-bottom: 16px;
          animation: nf-fadeup 0.6s ease both 0.2s;
        }

        .nf-headline {
          font-family: 'Syne', sans-serif;
          font-size: clamp(22px, 3vw, 32px);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 14px;
          animation: nf-fadeup 0.6s ease both 0.35s;
        }

        .nf-sub {
          font-size: 13px;
          color: rgba(240,236,227,0.4);
          line-height: 1.7;
          max-width: 340px;
          animation: nf-fadeup 0.6s ease both 0.5s;
          margin-bottom: 40px;
        }

        .nf-actions {
          display: flex;
          gap: 14px;
          animation: nf-fadeup 0.6s ease both 0.65s;
          flex-wrap: wrap;
          justify-content: center;
        }

        @keyframes nf-fadeup {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .nf-btn-primary {
          background: #f0ece3;
          color: #080808;
          border: none;
          padding: 14px 32px;
          font-family: 'Space Mono', monospace;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.2s;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
        }

        .nf-btn-primary:hover {
          background: #ff3c2e;
          color: #fff;
          transform: translateY(-2px);
        }

        .nf-btn-secondary {
          background: transparent;
          color: #f0ece3;
          border: 1px solid rgba(240,236,227,0.2);
          padding: 14px 32px;
          font-family: 'Space Mono', monospace;
          font-size: 12px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.2s;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
        }

        .nf-btn-secondary:hover {
          border-color: #ff3c2e;
          color: #ff3c2e;
          transform: translateY(-2px);
        }

        .nf-status {
          position: fixed;
          bottom: 0; left: 0; right: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 32px;
          border-top: 1px solid rgba(240,236,227,0.1);
          font-size: 10px;
          letter-spacing: 2px;
          color: rgba(240,236,227,0.2);
          z-index: 20;
        }

        .nf-dot {
          display: inline-block;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #ff3c2e;
          margin-right: 8px;
          animation: nf-blink 1.2s step-end infinite;
        }

        @keyframes nf-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .nf-corner {
          position: fixed;
          width: 20px; height: 20px;
          border-color: rgba(240,236,227,0.2);
          border-style: solid;
        }
        .nf-tl { top: 20px; left: 20px; border-width: 1px 0 0 1px; }
        .nf-tr { top: 20px; right: 20px; border-width: 1px 1px 0 0; }
        .nf-bl { bottom: 40px; left: 20px; border-width: 0 0 1px 1px; }
        .nf-br { bottom: 40px; right: 20px; border-width: 0 1px 1px 0; }
      `}</style>

      <div className="nf-root">
        <div className="nf-noise" />
        <div className="nf-grid" />
        <div className="nf-corner nf-tl" />
        <div className="nf-corner nf-tr" />
        <div className="nf-corner nf-bl" />
        <div className="nf-corner nf-br" />

        <div className="nf-container">
          <div className="nf-big">404</div>
          <div className="nf-divider" />
          <p className="nf-label">⚡ Page not found</p>
          <h1 className="nf-headline">
            You&apos;ve entered<br />the void.
          </h1>
          <p className="nf-sub">
            The page you&apos;re looking for doesn&apos;t exist, was moved,
            or you may have mistyped the URL.
          </p>
          <div className="nf-actions">
            <button className="nf-btn-primary" onClick={() => router.push("/")}>
              ← Go Home
            </button>
            <button className="nf-btn-secondary" onClick={() => router.back()}>
              Go Back
            </button>
          </div>
        </div>

        <div className="nf-status">
          <span><span className="nf-dot" />ERROR 404</span>
          <span>NOT_FOUND</span>
          <span>HTTP/1.1</span>
        </div>
      </div>
    </>
  );
}