"use client";
import { useEffect, useState, useRef } from 'react';
import { useInView, motion, useSpring, useTransform } from 'framer-motion';

export default function Counter({ value, duration = 2, suffix = "" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const springValue = useSpring(0, {
        stiffness: 100,
        damping: 30,
        duration: duration * 1000
    });

    const displayValue = useTransform(springValue, (current) =>
        Math.floor(current).toLocaleString()
    );

    useEffect(() => {
        if (isInView) {
            springValue.set(value);
        }
    }, [isInView, value, springValue]);

    return (
        <span ref={ref}>
            <motion.span>{displayValue}</motion.span>
            {suffix}
        </span>
    );
}
