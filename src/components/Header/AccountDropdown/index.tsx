import React, { useState, useRef, useCallback } from 'react';

import { useHistory } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { FiLogOut } from 'react-icons/fi';

import { Container, AnimatedDropdown, NavButton } from './styles';
import { DROP_DOWN_ANIMATION } from './animations';
import useAuth from '../../../contexts/auth';
import useEventListener from '../../../hooks/useEventListener';

const removeHashFromColor = (color: string): string => color.slice(1);

const AccountDropdown: React.FC = () => {
  const history = useHistory();
  const { account, signOut } = useAuth();
  const { lightGrey, secondary } = useTheme().colors;
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownVisibility = (): void => {
    setIsDropdownVisible(true);
  };

  const handleCloseDropdown = useCallback(
    ({ target }: Event): void => {
      if (dropdownRef.current?.contains(target as Node)) {
        return;
      }

      setIsDropdownVisible(false);
    },
    [setIsDropdownVisible],
  );

  useEventListener('click', handleCloseDropdown, {
    enabled: isDropdownVisible,
  });

  const handleSignOut = (): void => {
    signOut();
    history.push('/');
  };

  return (
    <Container onClick={handleDropdownVisibility}>
      <img
        src={`https://ui-avatars.com/api/?rounded=true&format=svg&background=${removeHashFromColor(
          lightGrey,
        )}&color=${removeHashFromColor(secondary)}&name=${account.user.name}`}
        alt={`Conta de ${account.user.name}`}
      />
      <AnimatePresence>
        {isDropdownVisible && (
          <AnimatedDropdown
            variants={DROP_DOWN_ANIMATION}
            initial="hidden"
            animate="visible"
            exit="hidden"
            ref={dropdownRef}
          >
            <ul>
              <NavButton>Upload Modelo</NavButton>
              <NavButton onClick={handleSignOut}>
                <FiLogOut />
                Logout
              </NavButton>
            </ul>
          </AnimatedDropdown>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default AccountDropdown;
