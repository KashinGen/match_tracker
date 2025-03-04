import cls from './Logo.module.css';
import cn from 'classnames';

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = '' }: LogoProps) => {
  return <h1 className={cn(cls.title, className)}>Match Tracker</h1>;
};
