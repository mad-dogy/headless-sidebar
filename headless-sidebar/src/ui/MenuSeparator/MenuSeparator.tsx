import React from 'react';

import { classNames } from '../../model/lib/helpers/classNames/classNames';

import './MenuSeparator.css';

export type MenuSeparatorProps = {
  className?: string;
};

export const MenuSeparator = (props: MenuSeparatorProps) => {
  const { className } = props;

  return <div className={classNames('separator', {}, [className])} />;
};
