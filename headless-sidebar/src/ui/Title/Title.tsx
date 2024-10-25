import React, { useContext } from 'react';

export type TitleProps = {
  className?: string;
  title: string;
  isSidebarOpen?: boolean;
};

export const Title = (props: TitleProps) => {
  const { title, className, isSidebarOpen } = props;

  return <div className={className}>{title}</div>;
};
