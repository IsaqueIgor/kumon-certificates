import React, { useState } from 'react';

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
  const [students, setStudents] = useState<StudentList[]>([]);
  const [name, setName] = React.useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const handleAdd = (): void => {
    setStudents([...students, {name: name}])
    setName('');
  };

  const handleonRemove = (nameToBeRemove: string): void => {
    students.filter((student) => {
      return student.name !== nameToBeRemove;
   })
  };

  return (
    <Container>
      <AddItem name={name} onChange={handleChange} onAdd={handleAdd}  />
      <List list={students}  onRemove={handleonRemove}/>
    </Container>
  );
};

export default StudentsList;
