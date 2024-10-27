import React, { ReactNode } from 'react';

import AngleLeft from '../../assets/angleLeft.svg';
import AngleRight from '../../assets/angleRight.svg';
import { useSidebar } from '../../model/hooks/useSidebarContext';

type ToggleButtonProps = {
  className?: string;
  openStateButton?: ReactNode;
  closeStateButton?: ReactNode;
  onClick: () => void;
};

export const ToggleButton = (props: ToggleButtonProps) => {
  const { className, openStateButton, closeStateButton, onClick } = props;

  const { isOpen } = useSidebar();

  const getOpenStateButton = () => {
    if (openStateButton) {
      return openStateButton;
    }

    return <AngleLeft width={24} height={24} />;
  };

  const getCloseStateButton = () => {
    if (openStateButton) {
      return closeStateButton;
    }

    return <AngleRight width={24} height={24} />;
  };

  return (
    <button aria-pressed className={className} onClick={onClick}>
      {isOpen ? getOpenStateButton() : getCloseStateButton()}
    </button>
  );
};
