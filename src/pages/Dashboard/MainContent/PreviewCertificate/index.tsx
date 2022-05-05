import React, { useState } from 'react';

import PreviewImg from './PreviewImg';
import { Container, ConfirmWrapper } from './styles';
import { Button } from '../../../../components';
import TextPreview from './TextPreview';
import StudentsList from '../StudentList';

const options = [
  { value: 'tipo1', label: 'Updock Regular' },
  { value: 'tipo2', label: 'Water Brush' },
  { value: 'tipo3', label: 'Whisper Regular' },
];

enum Tipografia {
  tipo1 = 'tipo1',
  tipo2 = 'tipo2',
  tipo3 = 'tipo3',
}
interface PreviewCertificate {
  modeloImg: string;
}

const PreviewCertificate: React.FC<PreviewCertificate> = ({ modeloImg }) => {
  const [selectedTipografia, setSelectedTipografia] = useState<Tipografia>(
    options[0].value,
  );
  const [namePreview, setNamePreview] = useState('');

  const onChangeText = (event: any) => {
    setNamePreview(event.target.value);
  };

  return (
    <Container>
      <div>
        <div>
          <h3>Preview</h3>
          Vista previa del modelo de certificado
        </div>
      </div>
      <div>
        <div>
          {' '}
          <h4>Tipografía:</h4>
          <select
            name="typografia"
            id="typo"
            placeholder="Please choose"
            value={selectedTipografia}
            onChange={(e) => setSelectedTipografia(e.target.value)}
          >
            {options.map((item) => (
              <option value={item.value}>{item.label}</option>
            ))}
          </select>
        </div>
        <div>
          {' '}
          <h4>Previa del nombre: </h4>
          <input
            type="text"
            placeholder=" "
            value={namePreview}
            onChange={onChangeText}
          />
          <TextPreview name={namePreview} tipografia={selectedTipografia} />
        </div>
      </div>
      <PreviewImg certificateImg={modeloImg} />
      <StudentsList />
      <ConfirmWrapper>
        <Button>Enviar</Button>
      </ConfirmWrapper>
    </Container>
  );
};

export default PreviewCertificate;
