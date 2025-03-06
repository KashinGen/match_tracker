import { Logo } from '../../components/Logo/Logo';
import cls from './MatchScreen.module.css';
import cn from 'classnames';
import { useMatchesState } from '../../hooks/useMatchesState';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import { MatchList } from '../MatchList/MatchList';
import { RefetchButton } from '../../components/RefetchButton/RefetchButton';
import { CustomSelect } from '../../components/Select/Select';
import { SelectOption } from '../../types';
import { useState } from 'react';

interface MatchScreenProps {
  className?: string;
}

const options: SelectOption[] = [
  {
    value: 'All',
    label: 'Все статусы',
  },
  {
    value: 'Ongoing',
    label: 'Ongoing',
  },
  {
    value: 'Scheduled',
    label: 'Scheduled',
  },
  {
    value: 'Finished',
    label: 'Finished',
  },
];

export const MatchScreen = ({ className = '' }: MatchScreenProps) => {
  const { matches, error, loading, onReset } = useMatchesState();
  const [selectedOption, setSelectedOption] = useState<SelectOption>(options[0]);
  return (
    <div className={cn(cls.screen, className)}>
      <div className="container">
        <div className={cn(cls.inner)}>
          <div className={cls.top}>
            <div className={cls.controls}>
              <Logo />
              <CustomSelect
                options={options}
                onChange={(sel: SelectOption) => setSelectedOption(sel)}
                value={selectedOption}
              />
            </div>

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
