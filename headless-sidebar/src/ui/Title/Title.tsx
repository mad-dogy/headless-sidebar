import React from 'react';

type TitleProps = {
  className?: string;
  title: string;
  isSidebarOpen?: boolean;
};

export const Title = (props: TitleProps) => {
  const { title, className } = props;

  return <div className={className}>{title}</div>;
};
