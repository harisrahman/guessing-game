import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const GameOverScreen = props => (
	<View style={styles.screen}>
		<Text style={styles.infoText}>The Game is Over</Text>
		<Text style={styles.infoText}>Number of rounds: {props.roundsNumber}</Text>
		<Text style={styles.infoText}>User Number: {props.userNumber}</Text>
		<Button title="New Game" onPress={props.onRestart} />
	</View>
);

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	infoText: {
		marginBottom: 10,
	},
});

export default GameOverScreen;
