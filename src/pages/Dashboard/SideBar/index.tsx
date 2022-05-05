import React from 'react';

import { Wrapper, AnimatedContainer } from './styles';
import { sideBarNavigation } from '../../../constants';
import Accordion from './Accordion';

const DEFAULT_TRANSITION = { type: 'spring', mass: 1.3 };

const animation = {
  unMounted: { opacity: 0, y: -50 },
  mounted: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.5, ...DEFAULT_TRANSITION },
  },
};

interface SideBarProps {
  onChange(classId: string): void;
}

const SideBar: React.FC<SideBarProps> = ({ onChange }) => {
  return (
    <Wrapper>
      <AnimatedContainer variants={animation}>
        <h3>Materias</h3>
        {Object.entries(sideBarNavigation).map(([key, value]) => (
          <Accordion
            key={key}
            icon={value.icon}
            sectionName={value.label}
            id={value.id}
            onClickSubject={onChange}
          />
        ))}
      </AnimatedContainer>
    </Wrapper>
  );
};
export default SideBar;
