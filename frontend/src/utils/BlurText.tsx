import React, { useRef, useEffect, useState } from 'react';
import { useSprings, animated } from '@react-spring/web';

interface BlurTextProps {
  text: string;
  threshold?: number;
  rootMargin?: string;
  delay?: number;
  easing?: any;
  onAnimationComplete?: () => void;
  animationFrom?: any;
  animationTo?: any[];
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  threshold = 0.5,
  rootMargin = '0px',
  delay = 100,
  easing = (t: number) => t,
  onAnimationComplete,
  animationFrom,
  animationTo,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const animatedCount = useRef(0);
  const [inView, setInView] = useState(false);
  
  const elements = text.split('');
  
  const defaultFrom = { opacity: 0, filter: 'blur(10px)' };
  const defaultTo = [{ opacity: 1, filter: 'blur(0px)' }];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const springs = useSprings(
    elements.length,
    elements.map((_, i) => ({
      from: animationFrom || defaultFrom,
      to: inView
        ? async (next:any) => {
            for (const step of animationTo || defaultTo) {
              await next(step);
            }
            animatedCount.current += 1;
            if (animatedCount.current === elements.length && onAnimationComplete) {
              onAnimationComplete();
            }
          }
        : animationFrom || defaultFrom,
      delay: i * delay,
      config: { easing },
    }))
  );

  return (
    <div ref={ref}>
      {springs.map((props, i) => (
        <animated.span key={i} style={props}>
          {elements[i]}
        </animated.span>
      ))}
    </div>
  );
};

export default BlurText;
