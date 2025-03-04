import cls from './GameStatus.module.css';
import cn from 'classnames';
import { Status } from '../../types';

interface GameStatusProps {
  className?: string;
  status: Status;
}

const getStyleFromStatus = (status: Status) => {
  switch (status) {
    case 'Finished':
      return cls.finished;
    case 'Scheduled':
      return cls.scheduled;
    case 'Ongoing':
      return cls.ongoing;
    default:
      return '';
  }
};

export const GameStatus = ({ className = '', status }: GameStatusProps) => {
  return <span className={cn(cls.status, getStyleFromStatus(status), className)}>{status}</span>;
};
