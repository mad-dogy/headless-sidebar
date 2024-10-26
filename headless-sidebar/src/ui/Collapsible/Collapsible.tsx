import React, { ReactNode } from 'react';

import { classNames } from '../../model/lib/helpers/classNames/classNames';
import { MenuItem } from '../MenuItem/MenuItem';

import styles from './Collapsible.module.css';

type CollapsibleProps = {
  className?: string;
  children?: ReactNode;
  label: string;
  icon: ReactNode;
  isActive?: boolean;
};

export const Collapsible = (props: CollapsibleProps) => {
  const { className, children, icon, label } = props;

  return (
    <li>
      <MenuItem icon={icon} label={label} />

      <ul className={classNames(styles.subitems, {}, [className])} title={label}>
        {children}
      </ul>
    </li>
  );
};
