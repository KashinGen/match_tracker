import cls from './MatchCard.module.css';
import cn from 'classnames';
import { Match } from '../../types';
import { TeamBadge } from '../TeamBadge/TeamBadge';
import { GameStatus } from '../GameStatus/GameStatus';
import { TeamInfo } from '../TeamInfo/TeamInfo';
import { useAccordion } from '../../hooks/useAccordion';
import { Icon } from './Icon';
import ScoreAnimation from '../ScoreAnimation/ScoreANimation';

interface MatchCardProps {
  className?: string;
  match: Match;
}

export const MatchCard = ({ className = '', match }: MatchCardProps) => {
  const { isExpanded, height, contentRef, parentRef, toggleAccordion, handleKeyDown } =
    useAccordion();

  const { status, awayScore, awayTeam, homeScore, homeTeam } = match;

  return (
    <div
      className={cn(cls.match, className, { [cls.expanded]: isExpanded })}
      ref={parentRef}
      role="region"
      aria-label="Аккордеон"
    >
      <div
        className={cn(cls.row, cls.header)}
        onClick={toggleAccordion}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        aria-expanded={isExpanded}
        role="button"
      >
        <div className={cls.topContent}>
          <TeamBadge name={awayTeam.name} />
          <div className={cls.scoreWrapper}>
            <ScoreAnimation
              awayScore={awayScore}
              homeScore={homeScore}
            />
            <GameStatus status={status} />
          </div>
          <TeamBadge name={homeTeam.name} />
        </div>
        <Icon className={cls.chevron} />
      </div>

      <div
        className={cn(cls.info)}
        ref={contentRef}
        style={{ height: `${height}px` }}
      >
        <div className={cls.content}>
          <TeamInfo
            place={awayTeam.place}
            players={awayTeam.players}
            points={awayTeam.points}
            total_kills={awayTeam.total_kills}
          />
          <TeamInfo
            place={homeTeam.place}
            players={homeTeam.players}
            points={homeTeam.points}
            total_kills={homeTeam.total_kills}
          />
        </div>
      </div>
    </div>
  );
};
