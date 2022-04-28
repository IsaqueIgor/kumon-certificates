import React from 'react';

import { PreviewContainer } from './styles';
import Modelo3 from '../../../../assets/images/modelos/modelo3.jpg';

const PreviewImg: React.FC = () => {
  return (
    <PreviewContainer>
      <img src={Modelo3} alt="certificateModel" />
    </PreviewContainer>
  );
};

export default PreviewImg;
