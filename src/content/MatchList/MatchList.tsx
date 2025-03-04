import cls from './MatchList.module.css';
import { Match } from '../../types';
import { MatchCard } from '../../components/MatchCard/MatchCard';
import cn from 'classnames';
import { SkeletonCard } from '../../components/SkeletonCard/SkeletonCard';

interface MatchListProps {
  className?: string;
  loading: boolean;
  matches: Match[];
}

export const MatchList = ({ className = '', loading, matches }: MatchListProps) => {
  if (loading) {
    return (
      <ul className={cn(cls.list, className)}>
        {Array.from({ length: 7 }).map((_, i) => {
          return (
            <li key={'skeleton' + i}>
              <SkeletonCard />
            </li>
          );
        })}
      </ul>
    );
  }
  return (
    <ul className={cn(cls.list, className)}>
      {matches.map((match) => {
        return (
          <li key={match.title}>
            <MatchCard match={match} />
          </li>
        );
      })}
    </ul>
  );
};
