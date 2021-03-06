import React, { useState, useEffect } from 'react';
import useInterval from '@use-it/interval';
import DiceRoller from './DiceRoller';
import Scoreboard from './Scoreboard';
import { dieRoll, sum, categories } from './utils';

import './Game.css';

function Game() {
	const [dice, setDice] = useState([1, 1, 1, 1, 1]);
	const [locked, setLocked] = useState([false, false, false, false, false]);
	const [rolling, setRolling] = useState(false);
	const [rollingDice, setRollingDice] = useState([1, 1, 1, 1, 1]);
	const [scores, setScores] = useState({});
	const [rollsLeft, setRollsLeft] = useState(3);

	const canLock = rollsLeft !== 3 && rollsLeft !== 0;
	const canPickScore = rollsLeft !== 3;

	const bonusProgress = sum(
		categories.upper.map(category => scores[category])
	);
	const upperTotal = sum([bonusProgress, scores.bonus]);
	const lowerTotal = sum(categories.lower.map(category => scores[category]));

	const startRoll = () => {
		if (rollsLeft === 0) return;

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
		setRollsLeft(rollsLeft - 1);
	};

	const toggleLock = idx => {
		if (!canLock) return;

		const newLocked = Array.from(locked);
		newLocked[idx] = !locked[idx];
		setLocked(newLocked);
	};

	const pickScore = (name, score) => {
		if (name in scores) return;

		setRollsLeft(3);
		setLocked([false, false, false, false, false]);

		setScores(Object.assign({}, scores, { [name]: score }));
	};

	const checkForBonus = () => {
		if ('bonus' in scores) return;

		const bonus = bonusProgress > 63;

		if (categories.upper.every(category => category in scores) || bonus) {
			setScores(
				Object.assign({}, scores, {
					bonus: bonus ? 35 : 0
				})
			);
		}
	};
	checkForBonus();

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
				rollsLeft={rollsLeft}
				canLock={canLock}
			/>
			<Scoreboard
				dice={dice}
				scores={scores}
				pickScore={pickScore}
				canPickScore={canPickScore}
				bonusProgress={bonusProgress}
				upperTotal={upperTotal}
				lowerTotal={lowerTotal}
			/>
		</div>
	);
}

export default Game;
