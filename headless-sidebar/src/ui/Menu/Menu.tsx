import React, { ReactNode } from 'react';

import { classNames } from '../../model/lib/helpers/classNames/classNames';

import styles from './Menu.module.css';

type MenuProps = {
  className?: string;
  children?: ReactNode;
};

export const Menu = (props: MenuProps) => {
  const { className, children } = props;

  return <ul className={classNames(styles.container, {}, [className])}>{children}</ul>;
};
