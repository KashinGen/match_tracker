import cls from './MatchCard.module.css';
import cn from 'classnames';
import { Match } from '../../types';
import { TeamBadge } from '../TeamBadge/TeamBadge';
import { GameStatus } from '../GameStatus/GameStatus';
import { TeamInfo } from '../TeamInfo/TeamInfo';
import { useAccordion } from '../../hooks/useAccordion';
import { Icon } from './Icon';
import { useWindowWidth } from '../../hooks/useWindowSize';
import ScoreAnimation from '../ScoreAnimation/ScoreAnimation';

interface MatchCardProps {
  className?: string;
  match: Match;
}

export const MatchCard = ({ className = '', match }: MatchCardProps) => {
  const { isExpanded, height, contentRef, parentRef, toggleAccordion, handleKeyDown } =
    useAccordion();

  const { status, awayScore, awayTeam, homeScore, homeTeam } = match;
  const width = useWindowWidth();
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
        {width > 612 && <Icon className={cls.chevron} />}
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
          {width <= 612 && (
            <span className={cls.versus}>
              <span>VS</span>
            </span>
          )}
          <TeamInfo
            place={homeTeam.place}
            players={homeTeam.players}
            points={homeTeam.points}
            total_kills={homeTeam.total_kills}
          />
        </div>
      </div>
      {width <= 612 && (
        <div className={cls.iconWrapper}>
          <Icon className={cls.chevron} />
        </div>
      )}
    </div>
  );
};
