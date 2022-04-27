import React from 'react';

import { FiShoppingCart, FiArrowRight, FiChevronRight } from 'react-icons/fi';
import { useTheme } from 'styled-components';
import { darken } from 'polished';

import {
  Container,
  ShoppingButton,
  Products,
  ProductCard,
  EquityButton,
  LoanButton,
} from './styles';
import Button from '../../../../components/Button';
import { bankProducts } from '../../../../constants';

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
