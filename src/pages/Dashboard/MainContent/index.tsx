import React, { useState } from 'react';

import { Container } from './styles';
import NavigationCards from './NavigationCards';
import PreviewCertificate from './PreviewCertificate';
import { Imodels } from '../../../constants/cards-navigation';

interface MainContentProps {
  model: Imodels[];
}

const MainContent: React.FC<MainContentProps> = ({ model }) => {
  const [selectedModel, setSelectedModel] = useState(model[0].icon);

  const handleChangeModel = (item: Imodels): void => {
    setSelectedModel(item.icon);
  };

  return (
    <Container>
      <NavigationCards models={model} onChange={handleChangeModel} />
      <PreviewCertificate modeloImg={selectedModel} />
    </Container>
  );
};

export default MainContent;
