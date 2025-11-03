import { useEffect, useRef, useState } from "react";
import "./fade.css";

export default function FadeSection({ children }) {
  const ref = useRef(null);
  const [visivel, setVisivel] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entradas) => {
        const [entrada] = entradas;
        if (entrada.isIntersecting) setVisivel(true);
      },
      { threshold: 0.2 }
    );

    const elemento = ref.current;
    if (elemento) observer.observe(elemento);

    return () => {
      if (elemento) observer.unobserve(elemento);
    };
  }, []);

  return (
    <div ref={ref} className={`fade-scroll ${visivel ? "visible" : ""}`}>
      {children}
    </div>
  );
}
