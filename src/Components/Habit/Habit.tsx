import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Habit = () => {
    const scaleRef = useRef<HTMLDivElement | null>(null);
    const habitRef = useRef<HTMLDivElement | null>(null);
    const [inViewRef, inView] = useInView();
    let ticking = useRef(false);
    // const [scale, setScale] = useState(1);

    const setRefs = useCallback(
        (node) => {
            habitRef.current = node;
            inViewRef(node);
        },
        [inViewRef]
    );

    const update = useCallback(() => {
        ticking.current = false;

        if (habitRef.current && scaleRef.current) {
            const screenHeight = window.innerHeight;
            const habitTop = habitRef.current.getBoundingClientRect().top;

            const dimensions = Math.max(1, (screenHeight - habitTop - 200) / 30);

            // console.log(dimensions);

            scaleRef.current.style.transform = `scale(${dimensions})`;
        }
    }, []);

    const requestTick = useCallback(() => {
        if (!ticking.current && inView) {
            requestAnimationFrame(update);
        }
        ticking.current = true;
    }, [inView, update]);

    const animateHabit = useCallback(() => {
        if (inView) {
            requestTick();
        }
    }, [inView, requestTick]);

    useEffect(() => {
        window.addEventListener('scroll', animateHabit);

        return () => {
            window.removeEventListener('scroll', animateHabit);
        };
    }, [animateHabit]);

    return (
        <div
            ref={setRefs}
            style={{
                width: 300,
                height: 80,
                background: 'red',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                margin: '1rem auto',
            }}>
            <div
                ref={scaleRef}
                style={{
                    height: 40,
                    width: 40,
                    borderRadius: 50,
                    position: 'absolute',
                    left: 10,
                    background: 'green',
                    // transition: '0.25s transform',
                    // transform: `scale(${scale})`,
                }}
            />
            BRRRRUH
        </div>
    );
};

export default Habit;
