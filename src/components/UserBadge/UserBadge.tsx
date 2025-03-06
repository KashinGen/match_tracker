import cls from './UserBadge.module.css';
import cn from 'classnames';

interface UserBadgeProps {
  className?: string;
  username: string;
  kills: number;
}

export const UserBadge = ({ kills, username, className = '' }: UserBadgeProps) => {
  return (
    <div className={cn(cls.badge, className)}>
      <div className={cls.infoWrapper}>
        <img
          src="/images/user.png"
          alt={username}
          className={cls.avatar}
        />
        <span className={cls.name}>{username}</span>
      </div>
      <div className={cls.killsWrapper}>
        <div className="label">Убийств:</div>
        <div className="count">{kills}</div>
      </div>
    </div>
  );
};
