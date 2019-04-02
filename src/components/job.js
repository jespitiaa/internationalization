import React from 'react';
import {FormattedDate, FormattedRelative, FormattedPlural} from 'react-intl';

export default class Job extends React.Component {

  	render() {
  		return (
  			<tr>
  				<th scope="row">{this.props.offer.id}</th>
      			<td>{this.props.offer.name}</td>
  				<td>{this.props.offer.company}</td>
				<td>
					{this.props.offer.salary}
					<FormattedPlural
						value = {this.props.offer.salary}
						one = {(navigator.language === "es-ES")?" millón":" million"}
						other = {(navigator.language === "es-ES")?" millones":" millions"}
					/>
					
				</td>
      			<td>{this.props.offer.city}</td>
      			<td>
					<FormattedDate
						value={new Date(this.props.offer.date)}
						year='numeric'
						month='long'
						day='numeric'
						weekday='long'
					/>
					<span>{" ("}</span>
					<FormattedRelative value = {new Date(this.props.offer.date)}></FormattedRelative>
					<span>{")"}</span>
					
				</td>
				<td>
					{this.props.offer.visits}
				</td>
  			</tr>
  		);
	}
}