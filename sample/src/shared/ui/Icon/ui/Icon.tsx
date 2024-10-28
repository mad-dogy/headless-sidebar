import { memo } from 'react';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;

type Props = SvgProps & {
  className?: string;
  Svg: React.FC<React.SVGProps<SVGSVGElement>> | string;
};

export const Icon = memo((props: Props) => {
  const { className, Svg, width = 24, height = 24, ...otherProps } = props;

  return <Svg className={className} width={width} height={height} {...otherProps} />;
});
