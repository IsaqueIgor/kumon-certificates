import React from 'react';

import { AnimatedContainer, Navigation, AnimatedCard } from './styles';
import { CONTAINER_ANIMATION, CARDS_ANIMATION } from './animations';
import { DEFAULT_TRANSITION } from '../../../../constants';
import {
  Ingles,
  Math,
  Lite,
  Imodels,
} from '../../../../constants/cards-navigation';

interface NavigationCards {
  models: Imodels[];
  onChange: (item: any) => void;
}

const NavigationCards: React.FC<NavigationCards> = ({ models, onChange }) => {
  return (
    <AnimatedContainer variants={CONTAINER_ANIMATION}>
      <Navigation>
        {Object.entries(models).map(([key, value]) => (
          <AnimatedCard
            key={`card-${key}`}
            variants={CARDS_ANIMATION}
            transition={DEFAULT_TRANSITION}
            onClick={() => onChange(value)}
            whileHover={{ y: -2, transition: DEFAULT_TRANSITION }}
            whileTap={{ y: 2, transition: DEFAULT_TRANSITION }}
          >
            <img src={value.icon} alt="certificateModel" />
            {value.label}
          </AnimatedCard>
        ))}
      </Navigation>
    </AnimatedContainer>
  );
};

export default NavigationCards;
