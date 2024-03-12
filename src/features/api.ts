export const url = 'https://geosource-api.p.rapidapi.com/locationByCity.php';
export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8f52747013msh1c17e61bfbcd9f7p1e1e36jsna789c864ab2c',
    'X-RapidAPI-Host': 'geosource-api.p.rapidapi.com',
  },
};

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
