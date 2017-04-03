import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine};

class WeatherList extends Component{

renderWeather(cityData){

const name = cityData.city.name;
const temps = cityData.list.map(weather => weather.main.temp);
//const temps = cityData.list.map(weather => weather.main.temp);

console.log(temps);

return(
	<tr key={name}><td>{name}</td></tr>
	);
}
	render(){
		return(
			<div>
			<table>
			<thead>
				<tr>
					<th>city</th>
					<th>temperature</th>
					<th>pressure</th>
					<th>humidity</th>

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