import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => <View style={{ ...styles.card, ...props.style }}>{props.children}</View>;

const styles = StyleSheet.create({
	card: {
		padding: 20,
		borderRadius: 10,
		elevation: 8,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.26,
		shadowRadius: 6,
	},
});

export default Card;
