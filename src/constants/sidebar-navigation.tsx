import React from 'react';

import {
  FiBarChart2,
  FiHexagon,
  FiCreditCard,
  FiSmartphone,
  FiFileText,
  FiUmbrella,
  FiShield,
} from 'react-icons/fi';

export default {
  'Digital Account': {
    icon: <FiSmartphone />,
    label: 'Lectura',
  },
  Cards: {
    icon: <FiCreditCard />,
    label: 'Matemáticas',
  },
  Investments: {
    icon: <FiBarChart2 />,
    label: 'Inglés',
  },
} as const;
