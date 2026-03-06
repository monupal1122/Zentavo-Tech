"use client";

import { useMemo, useEffect, useState, useRef } from 'react';
import { useSprings, animated } from '@react-spring/web';

export default function SplitText({
    text = '',
    className = '',
    delay = 100,
    animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
    animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
    easing = 'easeOutCubic',
    threshold = 0.1,
    rootMargin = '-50px',
    onLetterAnimationComplete,
}) {
    const words = text.split(' ').map(word => word.split(''));
    const letters = words.flat();
    const [inView, setInView] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(ref.current);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    const springs = useSprings(
        letters.length,
        letters.map((_, i) => ({
            from: animationFrom,
            to: inView
                ? async (next) => {
                    await next(animationTo);
                    animated.onRest;
                    if (onLetterAnimationComplete && i === letters.length - 1) {
                        onLetterAnimationComplete();
                    }
                }
                : animationFrom,
            delay: i * delay,
            config: { easing },
        }))
    );

    return (
        <p
            ref={ref}
            className={`split-parent ${className}`}
            style={{ display: 'inline', whiteSpace: 'normal', wordWrap: 'break-word' }}
        >
            {words.map((word, wordIndex) => (
                <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                    {word.map((char, charIndex) => {
                        const index = words
                            .slice(0, wordIndex)
                            .reduce((acc, w) => acc + w.length, 0) + charIndex;
                        return (
                            <animated.span
                                key={index}
                                style={{
                                    ...springs[index],
                                    display: 'inline-block',
                                    willChange: 'transform, opacity',
                                }}
                            >
                                {char}
                            </animated.span>
                        );
                    })}
                    <span style={{ display: 'inline-block' }}>&nbsp;</span>
                </span>
            ))}
        </p>
    );
}
