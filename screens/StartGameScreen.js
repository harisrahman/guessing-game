import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/colors';

const StartGameScreen = props => {

	const [enteredValue, setEnteredValue] = useState('');
	const numberInputHandler = inputText => setEnteredValue(inputText.replace(/[^0-9]/, ""));

	const resetInputHandler = () => {
		setEnteredValue("");
		setConfirmed(true);
	};
	
	const [confirmed, setConfirmed] = useState(false);
	const confirmInputHandler = () => {
		setConfirmed(true);
	};

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.screen}>
				<Text style={styles.title}>Start a new Game!</Text>
				<Card style={styles.inputContainer}>
					<Text>Select a Number</Text>
					<Input style={styles.input} blurOnSubmit autoCorrect={false} keyboardType="number-pad" maxLength={2} onChangeText={numberInputHandler} value={enteredValue} />
					<View style={styles.buttonContainer}>
						<View style={styles.button}>
							<Button title="Reset" onPress={resetInputHandler} color={Colors.accent} />
						</View>
						<View style={styles.button}>
							<Button title="Confirm" onPress={() => {}} color={Colors.primary} />
						</View>
					</View>
				</Card>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		marginVertical: 10,
	},
	inputContainer: {
		width: 300,
		maxWidth: '80%',
		alignItems: 'center',
		backgroundColor: 'white',
	},
	buttonContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-around',
	},
	button: {
		width: 100,
	},
	input: {
		width: 50,
		textAlign: 'center',
	},
});

export default StartGameScreen;
