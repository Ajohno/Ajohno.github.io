import React, { useEffect, useRef, useState } from 'react';
import './LanyardCard.css';

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function LanyardCard() {
  const wrapperRef = useRef(null);
  const [tilt, setTilt] = useState({ x: -4, y: 8, shineX: 50, shineY: 40 });

  useEffect(() => {
    const node = wrapperRef.current;

    if (!node) {
      return undefined;
    }

    const handlePointerMove = (event) => {
      const rect = node.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;

      setTilt({
        x: clamp((0.5 - py) * 18, -12, 12),
        y: clamp((px - 0.5) * 24, -14, 14),
        shineX: clamp(px * 100, 0, 100),
        shineY: clamp(py * 100, 0, 100),
      });
    };

    const handlePointerLeave = () => {
      setTilt({ x: -4, y: 8, shineX: 50, shineY: 40 });
    };

    node.addEventListener('pointermove', handlePointerMove);
    node.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      node.removeEventListener('pointermove', handlePointerMove);
      node.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return (
    <div className="lanyard-scene" ref={wrapperRef}>
      <div className="lanyard-orbit"></div>
      <div className="lanyard-strap lanyard-strap-left"></div>
      <div className="lanyard-strap lanyard-strap-right"></div>
      <div className="lanyard-neck"></div>
      <div className="lanyard-ring">
        <span className="lanyard-clip"></span>
      </div>

      <div className="lanyard-swing">
        <article
          className="lanyard-card"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) rotateZ(${tilt.y * 0.18}deg)`,
            '--shine-x': `${tilt.shineX}%`,
            '--shine-y': `${tilt.shineY}%`,
          }}
        >
          <div className="lanyard-card-glow"></div>
          <div className="lanyard-card-top">
            <div className="lanyard-card-hole"></div>
          </div>

          <div className="lanyard-portrait-frame">
            <div className="lanyard-portrait-bg"></div>
            <div className="lanyard-portrait-head"></div>
            <div className="lanyard-portrait-face"></div>
            <div className="lanyard-portrait-neck"></div>
            <div className="lanyard-portrait-shirt"></div>
          </div>

          <div className="lanyard-card-copy">
            <h2>Jordan Doe</h2>
            <p>Lead UX Designer</p>
          </div>

          <div className="lanyard-card-meta">
            <span>ID: FL-2026-104</span>
            <span>Verified Access</span>
          </div>

          <div className="lanyard-barcode-row">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </article>
      </div>

      <div className="lanyard-talent-badge">Industry Verified · Top 1% Talent</div>
    </div>
  );
}

export default LanyardCard;
