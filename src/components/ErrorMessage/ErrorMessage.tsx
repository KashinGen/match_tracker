import { ERROR_UNKNOWN_MESSAGE } from '../../const';
import cls from './ErrorMessage.module.css';
import cn from 'classnames';

interface ErrorMessageProps {
  className?: string;
  error?: string;
}

export const ErrorMessage = ({
  className = '',
  error = ERROR_UNKNOWN_MESSAGE,
}: ErrorMessageProps) => {
  return (
    <span className={cn(cls.wrapper, className)}>
      <img
        className={cls.icon}
        alt="error"
        src="/images/error.svg"
      />
      <span>{error}</span>
    </span>
  );
};
