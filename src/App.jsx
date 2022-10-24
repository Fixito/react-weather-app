import { useEffect, useState, useCallback } from 'react';
import './style.css';
import axios from 'axios';
import Header from './components/Header';
import Card from './components/Card';
import Loading from './components/Loading';

const API_KEY = '349b948b344f9bb3790f9dfd015f1d50';
const url = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=imperial&q=`;

export default function App() {
  const [city, setCity] = useState({});
  const [query, setQuery] = useState('London');
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    try {
      const { data } = await axios(`${url}${query}`);
      const {
        name,
        main: { temp }
      } = data;
      setCity({ name, temp });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [query]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className={'container'}>
      <Header setQuery={setQuery} />
      <main>{isLoading ? <Loading /> : <Card {...city} />}</main>
    </div>
  );
}
