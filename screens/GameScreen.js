import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomBetween = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const rand = Math.floor(Math.random() * (max - min)) + min;

	if (rand === exclude) return generateRandomBetween(min, max, exclude);
	return rand;
};

const GameScreen = props => {
	const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));
	const [rounds, setRounds] = useState(0);

	const currentLow = useRef(1);
	const currentHigh = useRef(100);

	useEffect(() => {
		if (currentGuess === props.userChoice) {
			props.onGameOver(rounds);
		}
	}, [currentGuess, props, rounds]);

	const nextGuessHandler = direction => {
		if (
			(direction === 'lower' && currentGuess < props.userChoice) ||
			(direction === 'greater' && currentGuess > props.userChoice)
		) {
			Alert.alert("Don't lie!", 'You know this is incorrect!', [{ text: 'Sorry', style: 'cancel' }]);
			return;
		}
		if (direction === 'lower') {
			currentHigh.current = currentGuess;
		} else if (direction === 'greater') {
			currentLow.current = currentGuess;
		}

		const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
		setCurrentGuess(nextNumber);
		setRounds(currRounds => currRounds + 1);
	};

	return (
		<View style={styles.sceen}>
			<Text>Opponents Guess</Text>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card style={styles.buttonContainer}>
				<Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')} />
				<Button title="GREATER" onPress={nextGuessHandler.bind(this, 'greater')} />
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	sceen: {
		width: '100%',
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	buttonContainer: {
		flexDirection: 'row',
		paddingVertical: 40,
		justifyContent: 'space-around',
		marginTop: 20,
		width: 300,
		maxWidth: '80%',
	},
});

export default GameScreen;
