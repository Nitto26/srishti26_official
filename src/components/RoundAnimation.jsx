import { useState } from "react";
import "../roundAnimation.css";

const items = [
  "KSFE",
  "LOAN",
  "CHIT",
  "GOLD",
  "SAVINGS",
  "INSURANCE",
];

export default function RoundAnimation() {
  const [active, setActive] = useState(false);

  return (
    <div className="scene">
      <div
        className={`orbit ${active ? "rotate" : ""}`}
        onClick={() => setActive(true)}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="orbit-item"
            style={{
              transform: `rotate(${(360 / items.length) * index}deg) translate(180px) rotate(-${(360 / items.length) * index}deg)`
            }}
          >
            {item}
          </div>
        ))}
      </div>

      {!active && <p className="hint">Click to Start</p>}
    </div>
  );
}
