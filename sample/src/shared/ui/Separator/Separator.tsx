import { classNames } from '../../lib/classNames/classNames';

type SeparatorProps = {
  className?: string;
};

export const Separator = (props: SeparatorProps) => {
  const { className } = props;

  return <div className={classNames('h-px w-full bg-gray-400 m-2', {}, [className])} />;
};
