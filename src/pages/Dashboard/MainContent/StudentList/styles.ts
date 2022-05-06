import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  margin-top: 1.4rem;
  flex-wrap: wrap
  width: 100%;
  justify-content: space-between;
`;

export const AddItemWrapper = styled.div`
  display: flex;
  height: 35px;

  input {
    margin-right: 5px;
  }
`;

export const ListWrapper = styled.div`
display: flex;
flex-direction: column;

`

export const ItemList = styled.li`
display: flex;
border-radius: 1em;
box-shadow: 0 0 1em rgba(0, 0, 0, 0.0625);
justify-content: space-between;

button {
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  text-decoration: none;
  background: transparent;
}
`
