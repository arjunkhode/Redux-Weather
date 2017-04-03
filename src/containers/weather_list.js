import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component{

renderWeather(cityData){

const name = cityData.city.name;
const temps = cityData.list.map(weather => weather.main.temp);
const pressures = cityData.list.map(weather => weather.main.pressure);
const humidities = cityData.list.map(weather => weather.main.humidity);

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