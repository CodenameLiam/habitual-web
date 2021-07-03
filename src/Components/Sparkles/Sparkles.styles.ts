import styled from '@emotion/styled';
import { ReactComponent as Sparkle } from './../../Media/Graphics/Check.svg';

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;

    animation: component-fade-in 3s linear forwards;
    @keyframes component-fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const Wrapper = styled.div`
    position: absolute;
    animation: star-animation-size 2s ease-in-out forwards;
    @keyframes star-animation-size {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(2);
        }
        100% {
            transform: scale(0);
        }
    }
`;

interface InstanceProps {
    colour: string;
}

export const Instance = styled(Sparkle)<InstanceProps>`
    /* width: 100%; */
    animation: star-animation-rotation 2s linear forwards;
    @keyframes star-animation-rotation {
        from {
            transform: rotate(-20deg);
        }
        to {
            transform: rotate(20deg);
        }
    }

    path {
        fill: ${(props) => props.colour};
    }
`;
