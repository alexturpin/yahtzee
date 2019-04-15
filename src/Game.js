import React, { useState, useEffect } from 'react';
import './Game.css';

import die1 from './die/1.png';
import die2 from './die/2.png';
import die3 from './die/3.png';
import die4 from './die/4.png';
import die5 from './die/5.png';
import die6 from './die/6.png';
const diceImages = [die1, die2, die3, die4, die5, die6];

function Die({ value, locked, onClick }) {
	return (
		<img
			className={`die ${locked ? 'locked' : ''}`}
			onClick={onClick}
			src={diceImages[value - 1]}
			alt={value}
		/>
	);
}

function DiceRoller({ dice, locked, startRoll, toggleLock }) {
	return (
		<div className="dice-roller">
			{dice.map((value, idx) => {
				return (
					<Die
						key={idx}
						value={value}
						locked={locked[idx]}
						onClick={() => toggleLock(idx)}
					/>
				);
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
			dice.map((value, idx) => {
				return locked[idx] ? value : Math.floor(Math.random() * 6) + 1;
			})
		);
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

	return (
		<div className="game">
			<h1>Yahtzee</h1>
			<DiceRoller
				dice={dice}
				locked={locked}
				startRoll={startRoll}
				toggleLock={toggleLock}
			/>
		</div>
	);
}

export default Game;
