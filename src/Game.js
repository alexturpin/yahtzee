import React, { useState, useEffect } from 'react';
import useInterval from '@use-it/interval';
import DiceRoller from './DiceRoller';
import Scoreboard from './Scoreboard';
import { dieRoll } from './utils';

import './Game.css';

function Game() {
	const [dice, setDice] = useState([1, 1, 1, 1, 1]);
	const [locked, setLocked] = useState([false, false, false, false, false]);
	const [rolling, setRolling] = useState(false);
	const [rollingDice, setRollingDice] = useState([1, 1, 1, 1, 1]);
	const [scores, setScores] = useState({});

	const startRoll = () => {
		setRolling(true);
		doRoll();
	};

	const doRoll = () => {
		setRollingDice(
			dice.map((value, idx) => (locked[idx] ? value : dieRoll()))
		);
	};

	const endRoll = () => {
		if (!rolling) return;

		setRolling(false);
		setDice(Array.from(rollingDice));
	};

	const toggleLock = idx => {
		const newLocked = Array.from(locked);
		newLocked[idx] = !locked[idx];
		setLocked(newLocked);
	};

	const pickScore = (name, score) => {
		if (name in scores) return;

		setScores(Object.assign({}, scores, { [name]: score }));
	};

	useEffect(() => {
		document.addEventListener('mouseup', endRoll);

		return () => document.removeEventListener('mouseup', endRoll);
	});

	useInterval(doRoll, rolling ? 150 : null);

	return (
		<div className="game">
			<h1>Yahtzee</h1>
			<DiceRoller
				dice={rolling ? rollingDice : dice}
				locked={locked}
				startRoll={startRoll}
				toggleLock={toggleLock}
				rolling={rolling}
			/>
			<Scoreboard
				dice={dice}
				scores={scores}
				pickScore={pickScore}
				canPickScore={true}
			/>
		</div>
	);
}

export default Game;
