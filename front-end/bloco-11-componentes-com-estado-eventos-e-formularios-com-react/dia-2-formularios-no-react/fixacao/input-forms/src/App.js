import React, { Component } from 'react';

import Input from './components/Input';

class App extends Component {
	constructor() {
		super();

		this.state = {
			select: '',
			email: '',
			password: '',
			textarea: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
    console.log(event.target.name);
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

  handleSubmit(event) {
    console.log('prevent');
    event.preventDefault();
  }

	render() {
		const { select, email, password, textarea } = this.state;
		return (
			<div>
				<main>
					<form onSubmit={this.handleSubmit}>
						<div>
							<label>
								List select:
								<select
									value={select}
									onChange={this.handleChange}
									name='select'
								>
									<option value='valor1' selected>
										Valor 1
									</option>
									<option value='valor2'>Valor 2</option>
									<option value='valor3'>Valor 3</option>
								</select>
							</label>
						</div>
						<div>
							<Input
								label='Login'
								type='email'
								value={email}
								handleChange={this.handleChange}
								name='email'
								placeholder='Digite o login'
							/>
							<Input
								label='Password'
								type='password'
								value={password}
								handleChange={this.handleChange}
								name='password'
								placeholder='Digite a senha'
							/>
						</div>
						<div>
							<Input
								label='Texto'
								type='textarea'
								value={textarea}
								handleChange={this.handleChange}
								name='textarea'
								placeholder='Digite um texto'
							/>
						</div>

            <button type="submit">salvar</button>

					</form>
				</main>
			</div>
		);
	}
}

export default App;
