import { ButtonProps } from './types';
import { mergeStyles } from '../../utilities';
import { StylesButtonVariants, StylesButtonSizes } from './styles';
import { MouseEventHandler } from 'react';

function Button({
  children,
  size = 'base',
  variant = 'solid',
  color = 'primary',
  classNames = '',
  handleClick, // Add onClick prop
}: ButtonProps) {
  return (
    <button
      className={mergeStyles([
        'button',
        StylesButtonSizes[size],
        StylesButtonVariants[variant].Colors[color],
        classNames,
      ])}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
Button.displayName = 'Button';

export default Button;
