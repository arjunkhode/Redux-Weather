import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component{

renderWeather(cityData){

const name = cityData.city.name;
const temps = cityData.list.map(weather => weather.main.temp);
const pressures = cityData.list.map(weather => weather.main.pressure);
const humidities = cityData.list.map(weather => weather.main.humidity);
const lon = cityData.city.coord.lon;
const lat = cityData.city.coord.lat;
//console.log(temps);

return(
	<tr key={name}>
	<td>{name}</td>
	<td>
		<Chart data={temps} color="mistyrose" units="K"></Chart>
	</td>
	<td>
		<Chart data={pressures} color="lightcoral" units="hPa"></Chart>
	</td>
	<td>
		<Chart data={humidities} color="goldenrod" units="%"></Chart>
	</td>
	<td><GoogleMap lon={lon} lat={lat}/></td>
	</tr>
	);
}
	render(){
		return(
			<div>
			<table>
			<thead>
				<tr>
					<th>city</th>
					<th>temperature (K)</th>
					<th>pressure (hPa)</th>
					<th>humidity %</th>
					<th>map</th>

				</tr>
			</thead>
			<tbody>
				{this.props.weather.map(this.renderWeather)}
			</tbody>
			</table>
			</div>
			);
	}
}

function mapStateToProps({weather}){
	return ({weather});
}

export default connect (mapStateToProps)(WeatherList);