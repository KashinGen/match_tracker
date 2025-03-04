import { Logo } from '../../components/Logo/Logo';
import cls from './MatchScreen.module.css';
import cn from 'classnames';
import { useMatchesState } from '../../hooks/useMatchesState';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import { MatchList } from '../MatchList/MatchList';
import { RefetchButton } from '../../components/RefetchButton/RefetchButton';

interface MatchScreenProps {
  className?: string;
}

export const MatchScreen = ({ className = '' }: MatchScreenProps) => {
  const { matches, error, loading, onReset } = useMatchesState();

  return (
    <div className={cn(cls.screen, className)}>
      <div className="container">
        <div className={cn(cls.inner)}>
          <div className={cls.top}>
            <Logo />
            <div className={cls.controls}>
              {error && <ErrorMessage error={error} />}
              <RefetchButton
                onClick={onReset}
                disabled={loading}
              />
            </div>
          </div>
          <MatchList
            loading={loading}
            matches={matches}
          />
        </div>
      </div>
    </div>
  );
};
