import React, { useContext, useState } from 'react';

import PreviewImg from './PreviewImg';
import { Container, ConfirmWrapper } from './styles';
import { Button } from '../../../../components';
import { ClassContext, Tipografia } from '../../../../contexts/class';
import StudentsList from '../StudentList';
import { options } from '../../../../constants';

interface PreviewCertificate {
  modeloImg: string;
}

const PreviewCertificate: React.FC<PreviewCertificate> = ({ modeloImg }) => {
  const { handleTipografia, tipografia } = useContext(ClassContext);
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
            value={tipografia}
            onChange={(e) => handleTipografia(e.target.value as Tipografia)}
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
        </div>
      </div>
      <PreviewImg certificateImg={modeloImg} namePreview={namePreview}  selectedTipografia={tipografia} />
      <StudentsList />
      <ConfirmWrapper>
        <Button>Enviar</Button>
      </ConfirmWrapper>
    </Container>
  );
};

export default PreviewCertificate;
