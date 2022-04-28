import React from 'react';

import { BockIcon, InglesIcon, MathIcon } from '../assets/images/icons';

export default {
  Lectura: {
    icon: <BockIcon />,
    label: 'Lectura',
  },
  Ingles: {
    icon: <InglesIcon />,
    label: 'Inglés',
  },
  Math: {
    icon: <MathIcon />,
    label: 'Matemáticas',
  },
} as const;
