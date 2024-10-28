import React, { useCallback } from 'react';

import { classNames as classNamesHelper } from '../../model/lib/helpers/classNames/classNames';

import styles from './Backdrop.module.css';

type Props = {
  isActive?: boolean;
  onClick?: () => void;
};

export const Backdrop = (props: Props) => {
  const { isActive, onClick } = props;

  const onClickHandler = useCallback(() => {
    onClick?.();
  }, [onClick]);

  return (
    <div
      className={classNamesHelper(styles.backdrop, { [styles.backdrop_active]: isActive }, [])}
      onClick={onClickHandler}
    ></div>
  );
};
