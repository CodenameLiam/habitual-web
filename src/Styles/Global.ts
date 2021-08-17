import { css } from '@emotion/react';
import { GreyColours } from './Colours';

const GlobalStyles = css`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    body {
        margin: 0;
        font-family: 'Montserrat', sans-serif;
    }

    p {
        font-family: 'Poppins', sans-serif;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: ${GreyColours.GREY1};
    }

    ::-webkit-scrollbar-thumb {
        background: ${GreyColours.GREY3};
        border-radius: 100rem;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${GreyColours.GREY4};
    }
`;

export default GlobalStyles;
