import React from 'react';

import { Container } from './styles';

interface AccordionProps {
  icon: React.ReactNode;
  sectionName: string;
}

const Accordion: React.FC<AccordionProps> = ({ icon, sectionName }) => {
  return (
    <Container>
      <div>{icon}</div>
      {sectionName}
    </Container>
  );
};

export default Accordion;
