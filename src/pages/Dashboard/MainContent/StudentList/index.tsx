import React, { useState } from 'react';

import { Button } from '../../../../components';
import { Container, AddItemWrapper } from './styles';

interface AddItemProps {
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: () => void;
}

interface ListProps {
  list: {
    name: string;
  }[];
}

const AddItem: React.FC<AddItemProps> = ({ name, onChange, onAdd }) => (
  <AddItemWrapper>
    <input type="text" value={name} onChange={onChange} />
    <Button type="button" onClick={onAdd} variant="secondary">
      Añadir participante
    </Button>
  </AddItemWrapper>
);

const List: React.FC<ListProps> = ({ list }) => (
  <div>
    <h3>Participantes</h3>
    <ul>
      {list.map((item) => (
        <li key={item.name}>{item.name}</li>
      ))}
    </ul>
  </div>
);

const StudentsList: React.FC = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const handleAdd = (): void => {
    const newList = students.concat({ name });

    setStudents(newList);
    setName('');
  };

  return (
    <Container>
      <AddItem name={name} onChange={handleChange} onAdd={handleAdd} />
      <List list={students} />
    </Container>
  );
};

export default StudentsList;
