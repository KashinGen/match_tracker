import { ComponentPropsWithoutRef } from 'react';
import cls from './RefetchButton.module.css';
import cn from 'classnames';
import { Icon } from './Icon';

interface RefetchButtonProps {
  className?: string;
  onClick: () => void;
}

export const RefetchButton = ({
  className = '',
  onClick,
  ...rest
}: RefetchButtonProps & ComponentPropsWithoutRef<'button'>) => {
  return (
    <button
      className={cn(cls.btn, className)}
      onClick={onClick}
      {...rest}
    >
      Обновить
      <Icon />
    </button>
  );
};
