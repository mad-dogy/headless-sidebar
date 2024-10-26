import React from 'react';

import { classNames } from '../../model/lib/helpers/classNames/classNames';

import styles from './Title.module.css';

type TitleProps = {
  className?: string;
  title: string;
  isSidebarOpen?: boolean;
};

export const Title = (props: TitleProps) => {
  const { title, className } = props;

  return <div className={classNames(styles.title, {}, [className])}>{title}</div>;
};
