import React from 'react';
import { Tipografia } from '../../../../contexts/class';

import { PreviewContainer } from './styles';
import TextPreview from './TextPreview';

interface PreviewImg {
  certificateImg: string;
  namePreview: string;
  selectedTipografia: Tipografia;
}

const PreviewImg: React.FC<PreviewImg> = ({ certificateImg, namePreview , selectedTipografia}) => {
  return (
    <PreviewContainer>
      <img src={certificateImg} alt="certificateModel" />
      <TextPreview name={namePreview} tipografia={selectedTipografia} />
    </PreviewContainer>
  );
};

export default PreviewImg;
