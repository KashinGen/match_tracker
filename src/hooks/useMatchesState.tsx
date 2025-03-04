import { useState, useEffect, useCallback } from 'react';
import { api } from '../services/api';
import { Match } from '../types';
import { ERROR_API_MESSAGE } from '../const';

export const useMatchesState = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  const getMatches = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.getMatches();
      setMatches(data);
    } catch (err) {
      console.log(err);
      setError(ERROR_API_MESSAGE);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    //eslint-disable-next-line @typescript-eslint/no-floating-promises
    getMatches();
  }, []);

  return {
    matches,
    error,
    loading,
    onReset: getMatches,
  };
};
