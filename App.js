import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			coords: '',
			address: ''
		}
	}
	
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>Josh's City Discovery</Text>
				<FormLabel style={{padding: 20}}>Enter Co-ordinates (latitude, longitude)</FormLabel>
				<FormInput containerStyle={styles.input}
					onChangeText={(coords) => this.setState({coords})}/>
				<Button title='Geocode'
								buttonStyle={styles.button}
								color='#FFFFFF'
				/>
				<Text style={styles.result}>{this.state.address}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 100,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 30,
	},
	input: {
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 20,
		width: '80%',
	},
	button: {
		backgroundColor: '#1E88E5',
		width: 200,
	},
	result: {
		padding: 10,
	}
});
