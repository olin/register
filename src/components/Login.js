import React from 'react'
import LoginLocal from './LoginLocal'
import RegisterNewUser from './RegisterNewUser'
export default class Login extends React.Component{
	render() {
		return(
			<div className="wrapper">
				<LoginLocal getuser={this.props.getuser}/>
				<br/>
				<RegisterNewUser/>
			</div>
		)
	}
}
