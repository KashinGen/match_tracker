import React, { useState, useRef, useEffect } from 'react';
import cls from './Select.module.css';
import { SelectOption } from '../../types';
import { Icon } from './Icon';
import cn from 'classnames'

interface CustomSelectProps {
  options: SelectOption[];
  placeholder?: string;
  onChange: (selectedOption: SelectOption) => void;
  value: SelectOption ;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  placeholder = 'Select an option',
  onChange,
  value
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const selectRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: SelectOption) => {
    onChange(option);
    setIsOpen(false);
    setSearchTerm('');
  };

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Сделал через кнопки, чтобы не мучаться с tab-index
  return (
    <div className={cls.selectContainer} ref={selectRef}>
      <button className={cn(cls.selectHeader, {[cls.open]: isOpen})} onClick={toggleOpen}>
        {value ? value.label : placeholder}
        <Icon/>
      </button>
      {/* В идеале лучше через портал*/}
      {isOpen && (
        <div className={cls.selectDropdown}>
          {filteredOptions.map(option => (
            <button
              key={option.value}
              disabled={option.value === value.value}
              className={cls.selectOption}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
