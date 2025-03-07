import { Logo } from '../../components/Logo/Logo';
import cls from './MatchScreen.module.css';
import cn from 'classnames';
import { useMatchesState } from '../../hooks/useMatchesState';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import { MatchList } from '../MatchList/MatchList';
import { RefetchButton } from '../../components/RefetchButton/RefetchButton';
import { CustomSelect } from '../../components/Select/Select';
import { useWindowWidth } from '../../hooks/useWindowSize';
import { useFilter } from '../../hooks/useFilter';

interface MatchScreenProps {
  className?: string;
}

export const MatchScreen = ({ className = '' }: MatchScreenProps) => {
  const { selectedOption, setSelectedOption, options } = useFilter();
  const { matches, error, loading, onReset } = useMatchesState(selectedOption);
  const width = useWindowWidth();
  console.log(width);
  return (
    <div className={cn(cls.screen, className)}>
      <div className="container">
        <div className={cn(cls.inner)}>
          <div className={cls.top}>
            <div className={cls.controls}>
              <Logo />
              {width > 1280 && (
                <CustomSelect
                  options={options}
                  onChange={setSelectedOption}
                  value={selectedOption}
                />
              )}
            </div>
            {width <= 1280 && (
              <div className={cls.controls}>
                <CustomSelect
                  options={options}
                  onChange={setSelectedOption}
                  value={selectedOption}
                />
                <RefetchButton
                  onClick={onReset}
                  disabled={loading}
                />
              </div>
            )}

            <div className={cls.controls}>
              {error && <ErrorMessage error={error} />}
              {width > 1280 && (
                <RefetchButton
                  onClick={onReset}
                  disabled={loading}
                />
              )}
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
