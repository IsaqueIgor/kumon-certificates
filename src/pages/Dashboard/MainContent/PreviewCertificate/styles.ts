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
    position: relative;
    overflow: hidden;

    img {
      object-fit: cover;
      height: 320px;
    }


    h1 {
    font-size: 50px;
    color: #000;
    text-align: center;
    position: absolute;
    top: 13.5px;
    bottom: 0;
    left: 20.5px;
    right: 0;
    height: fit-content;
    margin: auto;
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

export const TextTotal = styled.h4`
  font-weight: bold;
`;

export const TextPrice = styled.h4`
  font-weight: bold;
  font-size: 26px;
`;

export const PriceContainer = styled.div`
  display: flex;
`

export const customStyles = styled.div`
  },`

export const InvoiceContainer = styled.div`
  z-index: 9999;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 5px;
  padding: 1px 1em;
  min-height: 15em;
  width: 23em;
  box-shadow: 0px 10px 30px 5px rgba(0, 0, 0, 0.15);
`
export const InvoiceTitle = styled.div`
flex: 3;
`
export const MainTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2em;
`

export const InvoiceFooter = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    margin: 0 12px;
    cursor: pointer;
  }
`

export const InvoiceDetails = styled.div`
flex: 1;
  border-top: 0.5px dashed grey;
  border-bottom: 0.5px dashed grey;
  display: flex;
  align-items: center;
`
export const InvoiceTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead tr td {
    font-size: 12px;
    letter-spacing: 1px;
    color: grey;
    padding: 8px 0;
  }
`
