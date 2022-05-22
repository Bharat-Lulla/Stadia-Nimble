const API_KEY = "c15b75ed-94bf-4eba-906f-7ca049301c46";

//get list of top 25 matchs
export const getMatches = () => {
  const url = `https://api.cricapi.com/v1/matches?apikey=${API_KEY}`;
  console.log("URL", url);
  return fetch(url)
    .then((response) => {
      console.log(response)
      return response.json();
    })
    .catch((error) => {
      console.log("ERROR ", error);
    });
};

//get the score of the current match

export const getMatchDetail = (id) => {
  const url = `https://api.cricapi.com/v1/match_info?id=${id}&apikey=${API_KEY}`;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
