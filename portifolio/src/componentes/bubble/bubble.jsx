import './bubble.css'

import { useEffect, useState } from "react";

export default function FloatingBubbles() {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles = Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        size: Math.random() * 80 + 40, 
        left: Math.random() * 100,
        delay: Math.random() * 5,
        img: `/imagens/bolha${(i % 3) + 1}.png`, 
      }));
      setBubbles(newBubbles);
    };
    generateBubbles();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {bubbles.map((b) => (
        <img
          key={b.id}
          src={b.img}
          alt=""
          style={{
            width: b.size,
            height: b.size,
            left: `${b.left}%`,
            animationDelay: `${b.delay}s`,
          }}
          className="absolute bottom-[-150px] animate-bubble opacity-70"
        />
      ))}
    </div>
  );
}
