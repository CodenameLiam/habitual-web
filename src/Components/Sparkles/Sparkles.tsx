import React, { FC, useState } from 'react';
import { random, useRandomInterval } from '../../Hooks/useRandomInterval';
import { Colours } from '../../Styles/Colours';
import { SparkleInstance } from './SparkleInstance';
import * as Styles from './Sparkles.styles';

interface Sparkle {
    id: string;
    size: string;
    top: string;
    left: string;
    createdAt: number;
    colour: string;
}

export const Sparkles: FC = ({ children }) => {
    const [sparkles, setSparkles] = useState<Sparkle[]>([]);

    useRandomInterval(
        () => {
            const now = Date.now();
            // Create a new sparkle
            const sparkle: Sparkle = generateSparkle();
            // Clean up any "expired" sparkles
            const nextSparkles = sparkles.filter((sparkle: Sparkle) => {
                const delta = now - sparkle.createdAt;
                return delta < 2000;
            });
            // Include our new sparkle
            nextSparkles.push(sparkle);
            // Make it so!
            setSparkles(nextSparkles);
        },
        400,
        800
    );

    return (
        <Styles.Container>
            {sparkles.map((sparkle) => (
                <SparkleInstance
                    key={sparkle.id}
                    size={sparkle.size}
                    top={sparkle.top}
                    left={sparkle.left}
                    colour={sparkle.colour}
                />
            ))}
            {children}
        </Styles.Container>
    );
};

const generateSparkle = (): Sparkle => ({
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    size: random(20, 100) + 'px',
    top: random(2, 98) + '%',
    left: random(2, 98) + '%',
    colour: Object.values(Colours)[random(0, Object.keys(Colours).length)].solid,
});
