import React, { ReactNode } from 'react';

import { classNames as classNames } from '../../model/lib/helpers/classNames/classNames';

import styles from './Dropdown.module.css';

type Props = {
  className?: string;
  children?: ReactNode;

  show?: boolean;
};

export const Dropdown = (props: Props) => {
  const { children, className, show } = props;

  return (
    <div className={styles.dropdownContainer}>
      <ul className={classNames(styles.dropdown, { [styles.dropdown_visible]: show }, [className])}>
        {children}
      </ul>
    </div>
  );
};
