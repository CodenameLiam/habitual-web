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
            transform: translate(-5vw, -3vw);
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
 * Component
 */
type Size = [string, string, string];

interface CircleProps {
    gradient: ColourType;
    size: Size;
    top?: Size;
    left?: Size;
    right?: Size;
    bottom?: Size;
    animation: keyof typeof animations;
}

const Circle = styled.div<CircleProps>`
    background: ${(props) => Gradient(props.gradient)};
    height: ${(props) => `clamp(${props.size[0]}, ${props.size[1]}, ${props.size[2]})`};
    width: ${(props) => `clamp(${props.size[0]}, ${props.size[1]}, ${props.size[2]})`};
    border-radius: ${(props) => `clamp(${props.size[0]}, ${props.size[1]}, ${props.size[2]})`};
    top: ${(props) =>
        props.top ? `clamp(${props.top[0]}, ${props.top[1]}, ${props.top[2]})` : 'unset'};
    left: ${(props) =>
        props.left ? `clamp(${props.left[0]}, ${props.left[1]}, ${props.left[2]})` : 'unset'};
    right: ${(props) =>
        props.right ? `clamp(${props.right[0]}, ${props.right[1]}, ${props.right[2]})` : 'unset'};
    bottom: ${(props) =>
        props.bottom
            ? `clamp(${props.bottom[0]}, ${props.bottom[1]}, ${props.bottom[2]})`
            : 'unset'};
    position: absolute;
    animation: ${(props) => animations[props.animation]} 30s ease-in-out infinite;

    @media only screen and (max-width: 600px) {
        animation: ${(props) => animations[props.animation]} 15s ease-in-out infinite;
    }
`;

export default Circle;
