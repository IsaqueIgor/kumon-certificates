import React from 'react';

import { Container } from './styles';

interface AccordionProps {
  icon: React.ReactNode;
  sectionName: string;
  id: string;
  onClickSubject(classId: string): void;
}

const Accordion: React.FC<AccordionProps> = ({
  icon,
  id,
  sectionName,
  onClickSubject,
}) => {
  return (
    <Container onClick={() => onClickSubject(id)}>
      <div>{icon}</div>
      {sectionName}
    </Container>
  );
};

export default Accordion;
