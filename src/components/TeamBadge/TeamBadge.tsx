import cls from './TeamBadge.module.css';
import cn from 'classnames';

interface TeamBadgeProps {
  className?: string;
  name: string;
}

export const TeamBadge = ({ className = '', name }: TeamBadgeProps) => {
  return (
    <div className={cn(cls.badge, className)}>
      <img
        alt={name}
        src={'/images/team-icon.svg'}
        className={cls.image}
      />
      <span className={cls.name}>{name}</span>
    </div>
  );
};
