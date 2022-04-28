import React, { useState } from 'react';

import PreviewImg from './PreviewImg';
import { Container } from './styles';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const PreviewCertificate: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState(options[0].value);
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
          <h4>Tipografia: {selectedOption}</h4>
          <select
            name="typografia"
            id="typo"
            placeholder="Please choose"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            {options.map((item) => (
              <option value={item.value}>{item.label}</option>
            ))}
          </select>
        </div>
        <div>
          {' '}
          <h4>Nombre: </h4>
          <input type="text" placeholder=" " />
        </div>
      </div>
      <PreviewImg />
    </Container>
  );
};

export default PreviewCertificate;
