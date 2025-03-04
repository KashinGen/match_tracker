import cls from './MatchCard.module.css';
import cn from 'classnames';
import { Match } from '../../types';
import { TeamBadge } from '../TeamBadge/TeamBadge';
import { GameStatus } from '../GameStatus/GameStatus';

interface MatchCardProps {
  className?: string;
  match: Match;
}

export const MatchCard = ({ className = '', match }: MatchCardProps) => {
  const { status, awayScore, awayTeam, homeScore, homeTeam } = match;
  return (
    <div className={cn(cls.match, className)}>
      <TeamBadge name={awayTeam.name} />
      <div className={cls.scoreWrapper}>
        <div className={cls.score}>
          {awayScore} : {homeScore}
        </div>
        <GameStatus status={status} />
      </div>
      <TeamBadge name={homeTeam.name} />
    </div>
  );
};
