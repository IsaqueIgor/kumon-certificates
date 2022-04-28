import React from 'react';

import { Container } from './styles';
import NavigationCards from './NavigationCards';
import PreviewCertificate from './PreviewCertificate';

const MainContent: React.FC = () => {
  return (
    <Container>
      <NavigationCards />
      <PreviewCertificate />
    </Container>
  );
};

export default MainContent;
