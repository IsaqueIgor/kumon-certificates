import React from 'react';

import { PreviewContainer } from './styles';

interface PreviewImg {
  certificateImg: string;
}

const PreviewImg: React.FC<PreviewImg> = ({ certificateImg }) => {
  return (
    <PreviewContainer>
      <img src={certificateImg} alt="certificateModel" />
    </PreviewContainer>
  );
};

export default PreviewImg;
