import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    border-radius: ${theme.radii.default};
    box-shadow: ${theme.shadows.flat};
    padding: 2.4rem;
    width: 100%;

    > div {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      + div {
        margin-top: 2.4rem;
        display: grid;
        grid-gap: 2.4rem;
        grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
        min-height: 6.4rem;
      }

      input {
        top: 0;
        left: 0;
        width: 100%;
        height: 35px;
        border: 1px solid #859edf;
        border-radius: 0.5rem;
        outline: none;
        padding: 1rem;
        background: ${theme.colors.grey}
        z-index: 1;
        }

      select {
        top: 0;
        left: 0;
        width: 100%;
        border-radius: 0.5rem;
        border: 1px solid #859edf;
        height: 35px;
        padding: 0.5rem;
      }
    }
  `}
`;

export const PreviewContainer = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.lightGrey};
    border-radius: ${theme.radii.default};
    box-shadow: ${theme.shadows.flat};
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 1.4rem;

    img {
      object-fit: cover;
      height: 320px;
    }
  `}
`;

export const ConfirmWrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin-top: 1.4rem;

    button {
      background: ${theme.colors.green};
      border-radius: ${theme.radii.default};
      color: ${theme.colors.label};
    }
  `}
`;

export const TextUpdock = styled.h1`
  font-family: 'Updock', cursive;
`;

export const TextWater = styled.h1`
  font-family: 'Pacifico', cursive;
`;

export const TextWhisper = styled.h1`
  font-family: 'Whisper', cursive;
`;
