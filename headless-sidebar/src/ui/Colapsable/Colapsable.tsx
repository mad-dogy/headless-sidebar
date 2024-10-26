import React, { ReactNode } from 'react';

import { classNames } from '../../model/lib/helpers/classNames/classNames';

import styles from './Colapsable.module.css';

export type ColapsableProps = {
  className?: string;
  children?: ReactNode;
  openByDefault?: boolean;
  label: string;
};

export const Colapsable = (props: ColapsableProps) => {
  const { className, children, openByDefault } = props;
  openByDefault;
  return <ul className={classNames(styles.container, {}, [className])}>{children}</ul>;
};
