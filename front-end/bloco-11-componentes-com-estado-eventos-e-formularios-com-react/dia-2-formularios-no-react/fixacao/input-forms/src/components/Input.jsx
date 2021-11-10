import React, { Component } from "react";

class Input extends Component {
	render() {
		const { label, type, value, handleChange, name, placeholder } = this.props;
		return (
			<label>
				{label}:
				<input
					type={type}
					value={value}
					onChange={handleChange}
					name={name}
					placeholder={placeholder}
				/>
			</label>
		);
	}
}

export default Input;
