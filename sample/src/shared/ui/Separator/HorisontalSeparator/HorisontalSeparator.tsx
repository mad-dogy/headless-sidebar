import { classNames } from '../../../lib/classNames/classNames';

type Props = {
  className?: string;
};

export const HorisontalSeparator = (props: Props) => {
  const { className } = props;

  return <div className={classNames('h-px w-full bg-gray-400 mt-2 mb-1', {}, [className])} />;
};
