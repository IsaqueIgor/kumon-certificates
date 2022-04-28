import React, { memo } from 'react';

import {
  AnimatedContainer,
  Wrapper,
  AnimatedLeftNav,
  AnimatedRightNav,
} from './styles';
import { KumonLogo } from '../../assets/images';
import AccountDropdown from './AccountDropdown';
import useAuth from '../../contexts/auth';
import Gradient from './Gradient';
import { CONTAINER_ANIMATION, NAVS_ANIMATION } from './animations';

const Header: React.FC = () => {
  return (
    <AnimatedContainer
      variants={CONTAINER_ANIMATION}
      initial="unMounted"
      animate="mounted"
      exit="unMounted"
    >
      <Wrapper>
        <AnimatedLeftNav variants={NAVS_ANIMATION}>
          <KumonLogo />
        </AnimatedLeftNav>
        <AnimatedRightNav variants={NAVS_ANIMATION}>
          <AccountDropdown />
        </AnimatedRightNav>
      </Wrapper>
      <Gradient />
    </AnimatedContainer>
  );
};
export default memo(Header);
