import { ColourType } from './Colours';

const Gradient = (colour: ColourType, deg?: number): string => {
    return `linear-gradient(${deg ?? '45'}deg, ${colour.start} 0%, ${colour.end} 100%)`;
};

export default Gradient;
