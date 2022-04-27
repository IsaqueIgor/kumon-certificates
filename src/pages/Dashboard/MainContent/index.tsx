import React from 'react';

import { Container } from './styles';
import NavigationCards from './NavigationCards';
import BankProducts from './BankProducts';

const MainContent: React.FC = () => {
  return (
    <Container>
      <NavigationCards />
      <BankProducts />
    </Container>
  );
};

export default MainContent;
