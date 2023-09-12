import { GenericProps } from '../../types';

export interface ButtonProps extends GenericProps {
  variant?: 'solid';
  color?: 'primary' | 'secondary';
  size?: 'sm' | 'base' | 'lg';
  classNames?: '';
  handleClick?: VoidFunction;
}
