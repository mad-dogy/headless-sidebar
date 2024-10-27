import React from 'react';

import { useSidebar } from '../../model/hooks/useSidebarContext';

type Props = {
  className?: string;
  closedClassName?: string;
  title: string;
  closedTitle?: string;
};

export const Title = (props: Props) => {
  const { title, closedTitle, className, closedClassName } = props;

  const { isOpen } = useSidebar();

  const getTitle = () => {
    if (!isOpen && closedTitle) {
      return closedTitle;
    }

    return title;
  };

  return <div className={isOpen ? className : closedClassName}>{getTitle()}</div>;
};
