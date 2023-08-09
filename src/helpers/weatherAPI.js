// Remova os comentários a medida que for implementando as funções

const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  const url = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`;
  try {
    const response = await fetch(url);
    const resolveData = await response.json();
    console.log(resolveData);
    if (resolveData.length === 0) {
      alert('Nenhuma cidade encontrada');
    }
    return resolveData;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherByCity = (/* cityURL */) => {
//   seu código aqui
};
