import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { ColourType } from '../../Styles/Colours';
import Gradient from '../../Styles/Gradient';

/*
 * Animations
 */

const animations = {
    1: keyframes`
        50% {
            transform: translate(10vw, -2vw);
        }
        100% {
            transform: translate(0rem, 0rem);
            
        }
    `,
    2: keyframes`
        60% {
			transform: translate(6vw, 8vw);
		}
		100% {
			transform: translate(0rem, 0rem);
		}
    `,
    3: keyframes`
        40% {
            transform: translate(10vw, -2vw);
        }
        100% {
            transform: translate(0rem, 0rem);
        }
    `,
    4: keyframes`
        40% {
            transform: translate(6vw, -2vw);
        }
        100% {
            transform: translate(0rem, 0rem);
            
        }
    `,
    5: keyframes`
        60% {
            transform: translate(-5vw, -5vw);
        }
        100% {
            transform: translate(0rem, 0rem);
            
        }
    `,
    6: keyframes`
        40% {
            transform: translate(-4vw, -2vw);
        }
        100% {
            transform: translate(0rem, 0rem);
            
        }
 `,
};

/*
 * Circle
 */
type Size = [string, string, string];

interface CircleProps {
    gradient: ColourType;
    size: Size;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    animation: keyof typeof animations;
}

const Circle = styled.div<CircleProps>`
    background: ${(props) => Gradient(props.gradient)};
    height: ${(props) => `clamp(${props.size[0]}, ${props.size[1]}, ${props.size[2]})`};
    width: ${(props) => `clamp(${props.size[0]}, ${props.size[1]}, ${props.size[2]})`};
    border-radius: ${(props) => `clamp(${props.size[0]}, ${props.size[1]}, ${props.size[2]})`};
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    right: ${(props) => props.right};
    bottom: ${(props) => props.bottom};
    position: absolute;
    animation: ${(props) => animations[props.animation]} 30s ease-in-out infinite;
`;

export default Circle;
