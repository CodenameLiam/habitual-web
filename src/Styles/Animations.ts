import { keyframes } from '@emotion/react';

export const fadeUp = keyframes`
from {
  opacity: 0;
  transform: translateY(50px);\
}

to {
  opacity: 1;
  transform: translateY(0);
}
`;
