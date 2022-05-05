import React from 'react';

import { BockIcon, InglesIcon, MathIcon } from '../assets/images/icons';

export default {
  Lectura: {
    icon: <BockIcon />,
    id: 'Lec',
    label: 'Lectura',
  },
  Ingles: {
    icon: <InglesIcon />,
    id: 'Ing',
    label: 'Inglés',
  },
  Math: {
    icon: <MathIcon />,
    id: 'Mat',
    label: 'Matemáticas',
  },
} as const;
