import { Player } from '../../types';
import { UserBadge } from '../UserBadge/UserBadge';
import cls from './TeamInfo.module.css';
import cn from 'classnames';

interface TeamInfoProps {
  className?: string;
  place: number;
  players: Player[];
  points: number;
  total_kills: number;
}

export const TeamInfo = (props: TeamInfoProps) => {
  const { className, place, players, points, total_kills } = props;
  return (
    <div className={cn(cls.wrapper, className)}>
      <ul className={cls.users}>
        {players.map((player) => (
          <li key={player.username}>
            <UserBadge {...player} />
          </li>
        ))}
      </ul>
      <div className={cls.row}>
        <div className={cls.info}>
          <div className="label">Points:</div>
          <div className="count">{points}</div>
        </div>
        <div className={cls.hr}></div>
        <div className={cls.info}>
          <div className="label">Место:</div>
          <div className="count">{place}</div>
        </div>
        <div className={cls.hr}></div>
        <div className={cls.info}>
          <div className="label">Всего убийств:</div>
          <div className="count">{total_kills}</div>
        </div>
      </div>
    </div>
  );
};
