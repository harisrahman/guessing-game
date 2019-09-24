import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const generateRandomBetween = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const rand = Math.floor(Math.random() * (max - min)) + min;

	if (rand === exclude) return generateRandomBetween(min, max, exclude);
	return rand;
};

const GameScreen = props => {};

const styles = StyleSheet.create({});

export default GameScreen;
