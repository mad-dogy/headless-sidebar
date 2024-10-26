import React from 'react';

import { classNames } from '../../model/lib/helpers/classNames/classNames';
import AngleLeft from '../../assets/arrowLeft.svg';

import styles from './ToggleButton.module.css';

type ToggleButtonProps = {
  className?: string;
  isSidebarOpen?: boolean;
};

export const ToggleButton = (props: ToggleButtonProps) => {
  const { className } = props;

  return (
    <div className={classNames(styles.title, {}, [className])}>
      <AngleLeft />
    </div>
  );
};
