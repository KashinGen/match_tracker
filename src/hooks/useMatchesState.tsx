import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { api } from '../services/api';
import { Match, SelectOption } from '../types';
import { ERROR_API_MESSAGE } from '../const';
import { connectWebSocket } from '../services/webSocket';

export const useMatchesState = ({ value }: SelectOption) => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);
  const socket = useRef<WebSocket>(null);

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

  useEffect(() => {
    if (!error) {
      socket.current = connectWebSocket(setError, setMatches);
    } else if (socket.current) {
      socket.current.close();
    }
    return () => {
      if (socket.current) {
        socket.current.close();
      }
    };
  }, [error]);

  const filteredMatches = useMemo(() => {
    if (!value || value === 'All') {
      return matches;
    }
    return matches.filter((match) => match.status === value);
  }, [matches, value]);

  return {
    matches: filteredMatches,
    error,
    loading,
    onReset: getMatches,
  };
};
