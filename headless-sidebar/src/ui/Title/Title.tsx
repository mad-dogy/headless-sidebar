import React from 'react';

import { useSidebar } from '../../model/hooks/useSidebarContext';

type ClassNames = {
  opened?: string;
  closed?: string;
};

type Props = {
  classNames?: ClassNames;
  title: string;
  closedTitle?: string;
};

export const Title = (props: Props) => {
  const { title, closedTitle, classNames } = props;

  const { isOpen } = useSidebar();

  const getTitle = () => {
    if (!isOpen && closedTitle) {
      return closedTitle;
    }

    return title;
  };

  return <div className={isOpen ? classNames?.opened : classNames?.closed}>{getTitle()}</div>;
};
