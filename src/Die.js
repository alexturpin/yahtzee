import React from 'react';

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

export default Die;
