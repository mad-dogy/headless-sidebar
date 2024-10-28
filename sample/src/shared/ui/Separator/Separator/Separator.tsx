import { HorisontalSeparator } from '../HorisontalSeparator/HorisontalSeparator';
import { VerticalSeparator } from '../VerticalSeparator/VerticalSeparator';

type Props = {
  className?: string;
  direction?: 'vertical' | 'horizontal';
};

export const Separator = (props: Props) => {
  const { className, direction = 'horizontal' } = props;

  return direction === 'vertical' ? (
    <VerticalSeparator className={className} />
  ) : (
    <HorisontalSeparator className={className} />
  );
};
