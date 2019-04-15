import React from 'react';
import Die from './Die';

function DiceRoller({ dice, locked, startRoll, toggleLock }) {
	return (
		<div className="dice-roller">
			{dice.map((value, idx) => (
				<Die
					key={idx}
					value={value}
					locked={locked[idx]}
					onClick={() => toggleLock(idx)}
				/>
			))}
			<button onMouseDown={startRoll}>Roll</button>
		</div>
	);
}

export default DiceRoller;
