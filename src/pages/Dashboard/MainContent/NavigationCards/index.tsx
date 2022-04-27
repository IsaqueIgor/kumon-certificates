import React from 'react';

import { AnimatedContainer, Navigation, AnimatedCard } from './styles';
import { CONTAINER_ANIMATION, CARDS_ANIMATION } from './animations';
import { cardsNavigation, DEFAULT_TRANSITION } from '../../../../constants';

const NavigationCards: React.FC = () => {
  return (
    <AnimatedContainer variants={CONTAINER_ANIMATION}>
      <Navigation>
        {Object.entries(cardsNavigation).map(([key, value]) => (
          <AnimatedCard
            key={`card-${key}`}
            variants={CARDS_ANIMATION}
            transition={DEFAULT_TRANSITION}
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
