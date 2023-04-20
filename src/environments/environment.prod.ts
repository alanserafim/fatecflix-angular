export const environment = {
  production: false,
  baseUrl: 'https://alanserafim.github.io/fatecflix-angular/',
  //@ts-expect-error
  api_url: process.env.API_URL ||'https://fatecflix.herokuapp.com' //https://fatecflix.onrender.com
};
