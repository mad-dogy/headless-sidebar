import { classNames } from '../../../lib/classNames/classNames';

type Props = {
  className?: string;
};

export const VerticalSeparator = (props: Props) => {
  const { className } = props;

  return <div className={classNames('w-px h-full bg-gray-400 mr-1 ml-1', {}, [className])} />;
};
