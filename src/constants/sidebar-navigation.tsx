import React from 'react';

import { BockIcon, InglesIcon, MathIcon } from '../assets/images/icons';

export default {
  'Digital Account': {
    icon: <BockIcon />,
    label: 'Lectura',
  },
  Cards: {
    icon: <InglesIcon />,
    label: 'Matemáticas',
  },
  Investments: {
    icon: <MathIcon />,
    label: 'Inglés',
  },
} as const;
