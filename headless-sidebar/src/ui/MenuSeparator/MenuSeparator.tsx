import React from 'react';

import { classNames } from '../../model/lib/helpers/classNames/classNames';

import styles from './MenuSeparator.css';

export type MenuSeparatorProps = {
  className?: string;
};

export const MenuSeparator = (props: MenuSeparatorProps) => {
  const { className } = props;

  // const {  } = useSidebar();

  return <div className={classNames(styles.separator, {}, [className])} />;
};
