import React, { ReactNode } from 'react';

import { classNames } from '../../model/lib/helpers/classNames/classNames';

import styles from './Sidebar.module.css';

type Props = {
  children?: ReactNode;
  className?: string;
  isOpen?: boolean;
};

export const Sidebar = (props: Props) => {
  const { children, className } = props;

  /*   const { isOpen } = useSidebar(); */

  return <div className={classNames(styles.container, {}, [className])}>{children}</div>;
};
