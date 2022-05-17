import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  margin-top: 2rem;
  flex-wrap: wrap
  width: 100%;
  justify-content: space-between;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const AddItemWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 35px;

  input {
    margin-right: 5px;
  }
`;

export const ListWrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;

h3 {
  margin-bottom: 1rem;
}

`

export const ItemList = styled.li`
display: flex;
border-radius: 1em;
box-shadow: 0 0 1em rgba(0, 0, 0, 0.0625);
justify-content: space-between;
padding: 0.8rem;

button {
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  text-decoration: none;
  background: transparent;
}
`
