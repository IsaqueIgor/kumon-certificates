import React, { useContext, useState } from 'react';
import { ClassContext } from '../../../../contexts/class';

import { Button } from '../../../../components';
import { Container, AddItemWrapper , ItemList, ListWrapper} from './styles';

interface AddItemProps {
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: () => void;
}

interface StudentList {
  name: string
}

interface ListProps {
  list: {
    name: string;
  }[];
  onRemove: (nameToBeRemove: string) => void;
}

const AddItem: React.FC<AddItemProps> = ({ name, onChange, onAdd }) => (
  <AddItemWrapper>
    <input type="text" value={name} onChange={onChange} />
    <Button type="button" onClick={onAdd} variant="secondary">
      Añadir participante
    </Button>
  </AddItemWrapper>
);

const List: React.FC<ListProps> = ({ list, onRemove  }) => (
  <ListWrapper>
    <h3>Participantes</h3>
    <ul>
      {list.map((item) => (
        <ItemList key={item.name}>
          <p>{item.name}</p>
          <button onClick={() => onRemove(item.name)}>X</button>
        </ItemList>
      ))}
    </ul>
  </ListWrapper>
);

const StudentsList: React.FC = () => {
  const { studentList,handleStudentList, handleRemoveStudent } = useContext(ClassContext);
  const [name, setName] = React.useState<string>('');

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const handleAdd = (): void => {
    handleStudentList(name)
    setName('');
  };

  return (
    <Container>
      <AddItem name={name} onChange={handleChangeName} onAdd={handleAdd}  />
      <List list={studentList}  onRemove={handleRemoveStudent}/>
    </Container>
  );
};

export default StudentsList;
