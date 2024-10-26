import React, { ReactNode } from 'react';

type CustomProps = {
  className?: string;
  children?: ReactNode;
};

export const Custom = (props: CustomProps) => {
  const { className, children } = props;

  return <div className={className}>{children}</div>;
};
