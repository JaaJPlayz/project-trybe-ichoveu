// Remova os comentários a medida que for implementando as funções

const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  const url = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`;
  try {
    const response = await fetch(url);
    const resolveData = await response.json();
    if (resolveData.length === 0) {
      alert('Nenhuma cidade encontrada');
    }
    return resolveData;
  } catch (error) {
    console.log(error.message);
  }
};

searchCities('Rio');

export const getWeatherByCity = async (cityURL) => {
  const url = `http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${cityURL}`;
  try {
    const response = await fetch(url);
    const resolveData = await response.json();
    return {
      temp: resolveData.current.temp_c,
      condition: resolveData.current.condition.text,
      icon: resolveData.current.condition.icon,
      name: resolveData.location.name,
      country: resolveData.location.country,
    };
  } catch (error) {
    console.log(error.message);
  }
};
