import axios from 'axios';

const API_KEY = '546434454b71b281b3be15ddf7fb0574';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);
	return{
		type: FETCH_WEATHER,
		payload: request
	}
}