import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const AnimatedContainer = styled(motion.div)`
  ${({ theme }) => css`
    width: 100%;
    min-height: 12rem;
    height: auto;
    display: flex;
    flex-shrink: 0;
    margin-bottom: 1.2rem;
  `}
`;

export const Navigation = styled.nav`
  ${() => css`
    display: grid;
    grid-template-columns: repeat(4, minmax(10.4rem, 1fr));
    column-gap: 0.8rem;
    row-gap: 0.8rem;
  `}
`;

export const AnimatedCard = styled(motion.button)`
  ${({ theme }) => css`
    min-height: 12rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.background};
    color: ${theme.colors.primary};
    border-radius: ${theme.radii.default};
    padding: 1.2rem;
    box-shadow: ${theme.shadows.default};
    font-size: ${theme.fontSizes.default};
    div {
      background: ${theme.colors.primary};
      max-width: 6.4rem;
      max-height: 6.4rem;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      margin-bottom: 0.8rem;
    }
    img {
      object-fit: cover;
      max-width:100%;
      height: 120px;
    }
    svg {
      stroke: ${theme.colors.primary};
      stroke-width: 1.5;
      max-height: 2.4rem;
      height: 100%;
      width: auto;
    }
    :nth-child(2) {
      svg {
        stroke: none;
      }
    }
  `}
`;
