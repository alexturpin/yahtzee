import React from 'react';
import Die from './Die';

function DiceRoller({
	dice,
	locked,
	startRoll,
	toggleLock,
	rollsLeft,
	canLock
}) {
	return (
		<div className="dice-roller">
			{dice.map((value, idx) => (
				<Die
					key={idx}
					value={value}
					locked={locked[idx]}
					canLock={canLock}
					onClick={() => toggleLock(idx)}
				/>
			))}
			<button onMouseDown={startRoll}>Roll ({rollsLeft})</button>
		</div>
	);
}

export default DiceRoller;
