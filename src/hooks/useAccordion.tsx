import { useState, useRef, useEffect } from 'react';

export const useAccordion = (initialState: boolean = false) => {
  const [isExpanded, setIsExpanded] = useState(initialState);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isExpanded) {
      const contentEl = contentRef.current;

      if (contentEl) {
        setHeight(contentEl.scrollHeight);
      }
    } else {
      setHeight(0);
    }
  }, [isExpanded]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(event.key);
    switch (event.key) {
      case ' ':
      case 'Enter':
        event.preventDefault();
        setIsExpanded((prev) => !prev);
        break;
      case 'ArrowUp':
      case 'ArrowDown':
        event.preventDefault();
        // Здесь можно добавить логику для перемещения фокуса между элементами аккордеона
        break;
      case 'Home':
        event.preventDefault();
        // Переместить фокус на первый элемент аккордеона
        break;
      case 'End':
        event.preventDefault();
        // Переместить фокус на последний элемент аккордеона
        break;
      default:
        break;
    }
  };

  // useEffect(() => {
  //   const accordionElement = parentRef.current;
  //   if (accordionElement) {
  //     accordionElement.addEventListener('keydown', handleKeyDown as any);
  //   }
  //   return () => {
  //     if (accordionElement) {
  //       accordionElement.removeEventListener('keydown', handleKeyDown as any);
  //     }
  //   };
  // }, []);

  const toggleAccordion = () => {
    setIsExpanded((prev) => !prev);
  };

  return {
    isExpanded,
    height,
    contentRef,
    parentRef,
    toggleAccordion,
    handleKeyDown,
  };
};
