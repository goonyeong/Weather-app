import React from 'react';
import { IWeatherData } from '../../Global/Types';
import useGetData from './useGetData';
import WeatherBox from '../../Components/WeatherBox';
import { Title, SectionCity, Container } from './HomeStyle';
import Login from '../../Components/Login';

function Home(): JSX.Element {
  const result = useGetData();

  return (
    <Container>
      <Title>Worldwide Weather</Title>
      <Login />
      <SectionCity>
        {!result
          ? 'no data'
          : result.map((region: IWeatherData) => (
              <WeatherBox
                key={region.id}
                name={region.name}
                temp={region.main.temp}
                weather={region.weather[0].main}
                windSpeed={region.wind.speed}
              />
            ))}
      </SectionCity>
    </Container>
  );
}

export default Home;
