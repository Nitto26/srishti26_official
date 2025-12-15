"use client";
import { useState } from "react";
import "../styles/ksfeCircle.css";

const data = [
  {
    title: "One Piece",
    text:
      "One Piece is a Japanese manga series written and illustrated by Eiichiro Oda.",
    image: "/op.jpg",
  },
  {
    title: "Naruto",
    text:
      "Naruto tells the story of Naruto Uzumaki, a young ninja who seeks recognition.",
    image: "/n.jpg",
  },
  {
    title: "Dragon Ball Z",
    text:
      "Dragon Ball Z follows the adventures of Goku and the Z Warriors.",
    image: "/g.jpg",
  },
  {
    title: "Demon Slayer",
    text:
      "Demon Slayer is a Japanese manga series written by Koyoharu Gotouge.",
    image: "/ds.jpg",
  },
];

export default function RoundAnimation() {
  const [active, setActive] = useState(0);
  const total = data.length;
  const angle = 360 / total;

  return (
    <section className="ksfe-section">
      <div className="ksfe-wrapper">
        {/* TEXT SLIDES */}
        <div className="ksfe-text">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">{data[active].title}</h2>
          <p className="text-lg text-foreground/80">{data[active].text}</p>
        </div>

        {/* CIRCLE */}
        <div
          className="ksfe-circle"
          style={{
            transform: `rotate(-${active * angle}deg)`,
          }}
        >
          {data.map((item, i) => (
            <div
              key={i}
              className={`ksfe-dot ${active === i ? "active" : ""}`}
              style={{
                transform: `rotate(${i * angle}deg) translate(200px) rotate(-${i *
                  angle}deg)`,
              }}
              onClick={() => setActive(i)}
            >
              <img src={item.image} alt={item.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
