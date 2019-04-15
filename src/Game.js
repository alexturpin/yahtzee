import React, { useState, useEffect } from 'react';
import useInterval from '@use-it/interval';
import DiceRoller from './DiceRoller';
import { dieRoll } from './utils';

import './Game.css';

function Game() {
	const [dice, setDice] = useState([1, 1, 1, 1, 1]);
	const [locked, setLocked] = useState([false, false, false, false, false]);
	const [rolling, setRolling] = useState(false);
	const [rollingDice, setRollingDice] = useState([1, 1, 1, 1, 1]);

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
		setDice(rollingDice.slice());
	};

	const toggleLock = idx => {
		const newLocked = locked.slice();
		newLocked[idx] = !locked[idx];
		setLocked(newLocked);
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
		</div>
	);
}

export default Game;
