import React from 'react';

import { TextUpdock, TextWater, TextWhisper } from './styles';

// eslint-disable-next-line no-shadow
enum Tipografia {
  tipo1 = 'tipo1',
  tipo2 = 'tipo2',
  tipo3 = 'tipo3',
}

interface TextPreview {
  name: string;
  tipografia: Tipografia;
}

const TextPreview: React.FC<TextPreview> = ({ tipografia, name }) => {
  return (
    <div>
      {tipografia === Tipografia.tipo1 && <TextUpdock>{name}</TextUpdock>}
      {tipografia === Tipografia.tipo2 && <TextWater>{name}</TextWater>}
      {tipografia === Tipografia.tipo3 && <TextWhisper>{name}</TextWhisper>}
    </div>
  );
};

export default TextPreview;
