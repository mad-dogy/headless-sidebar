import React from 'react';

import AngleLeft from '../../assets/arrowLeft.svg';

type ToggleButtonProps = {
  className?: string;
  isSidebarOpen?: boolean;
};

export const ToggleButton = (props: ToggleButtonProps) => {
  const { className } = props;

  return (
    <div className={className}>
      <AngleLeft />
    </div>
  );
};
