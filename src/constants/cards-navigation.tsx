import React from 'react';

import {
  FiBarChart2,
  FiCreditCard,
  FiGift,
  FiUmbrella,
  FiRepeat,
} from 'react-icons/fi';

import { BoletoIcon } from '../assets/images/icons';
import Modelo1 from '../assets/images/modelos/modelo.jpg';

export default {
  Transferring: {
    label: 'fdcc',
    icon: Modelo1,
  },
  Payments: {
    label: 'ssd',
    icon: Modelo1,
  },
  Investments: {
    label: 'dsdsd',
    icon: Modelo1,
  },
  Cards: {
    label: 'dsdsd',
    icon: Modelo1,
  },
  'Gift Card': {
    label: 'dsdsds',
    icon: Modelo1,
  },
  Insurances: {
    label: 'dsdsds',
    icon: Modelo1,
  },
} as const;
