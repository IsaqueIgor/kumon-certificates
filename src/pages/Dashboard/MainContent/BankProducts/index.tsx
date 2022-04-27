import React from 'react';

import { useTheme } from 'styled-components';

import { Container } from './styles';

const BankProducts: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <div>
        <div>
          <h3>Preview</h3>
          Vista previa del modelo de certificado
        </div>
      </div>
    </Container>
  );
};

export default BankProducts;
