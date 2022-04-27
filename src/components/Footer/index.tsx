import React from 'react';

import { useTheme } from 'styled-components';

import { AnimatedContainer, FooterSection, Wrapper } from './styles';
import { CONTAINER_ANIMATION } from './animations';

const Footer: React.FC = () => {
  const { colors } = useTheme();

  return (
    <AnimatedContainer
      variants={CONTAINER_ANIMATION}
      initial="unMounted"
      animate="mounted"
      exit="unMounted"
    >
      <FooterSection as="section" background={colors.background}>
        <Wrapper>
          <div>
            <span>
              <span>
                Copyright 2022 Kumon North America, Inc. Todos los derechos
                reservados.
              </span>
            </span>
          </div>
        </Wrapper>
      </FooterSection>
    </AnimatedContainer>
  );
};

export default Footer;
