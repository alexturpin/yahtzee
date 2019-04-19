import React from 'react';
import ScoreRow from './ScoreRow';

const topScores = [
	['ones', 'Ones'],
	['twos', 'Twos'],
	['threes', 'Threes'],
	['fours', 'Fours'],
	['fives', 'Fives'],
	['sixes', 'Sixes']
];

const bottomScores = [
	['threeOfAKind', 'Three Of A Kind'],
	['fourOfAKind', 'Four Of A Kind'],
	['fullHouse', 'Full House'],
	['smallStraight', 'Small Straight'],
	['largeStraight', 'Large Straight'],
	['yahtzee', 'Yahtzee'],
	['chance', 'Chance']
];

function Scoreboard({ dice, scores, canPickScore, pickScore }) {
	return (
		<table>
			<tbody>
				{topScores.map(([name, label]) => {
					return (
						<ScoreRow
							key={name}
							name={name}
							label={label}
							dice={dice}
							scores={scores}
							canPickScore={canPickScore}
							pickScore={pickScore}
						/>
					);
				})}
				{bottomScores.map(([name, label]) => {
					return (
						<ScoreRow
							key={name}
							name={name}
							label={label}
							dice={dice}
							scores={scores}
							canPickScore={canPickScore}
							pickScore={pickScore}
						/>
					);
				})}
			</tbody>
		</table>
	);
}

export default Scoreboard;
