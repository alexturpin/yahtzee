import React, { useState, useEffect } from 'react';
import './Game.css';

function Die({ value, locked }) {
	const characters = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
	return <span className="die">{characters[value - 1]}</span>;
}

function DiceRoller({ dice, locked, startRoll }) {
	return (
		<div className="dice-roller">
			{dice.map((value, key) => {
				return <Die key={key} value={value} locked={locked[key]} />;
			})}
			<button onMouseDown={startRoll}>Roll</button>
		</div>
	);
}

function Game() {
	const [dice, setDice] = useState([1, 1, 1, 1, 1]);
	const [locked, setLocked] = useState([false, false, false, false, false]);
	const [rolling, setRolling] = useState(false);

	const startRoll = () => {
		setRolling(true);
	};

	const endRoll = () => {
		if (!rolling) return;

		setRolling(false);
		setDice(
			dice.map(() => {
				return Math.floor(Math.random() * 6) + 1;
			})
		);
	};

	useEffect(() => {
		document.addEventListener('mouseup', endRoll);

		return () => document.removeEventListener('mouseup', endRoll);
	});

	return (
		<div className="game">
			<h1>Yahtzee</h1>
			<DiceRoller dice={dice} locked={locked} startRoll={startRoll} />
		</div>
	);
}

export default Game;
