import React from 'react';
import ScoreRow from './ScoreRow';
import { categories } from './utils';

function Scoreboard({ dice, scores, canPickScore, pickScore, bonusProgress }) {
	const labels = {
		ones: 'Ones',
		twos: 'Twos',
		threes: 'Threes',
		fours: 'Fours',
		fives: 'Fives',
		sixes: 'Sixes',
		threeOfAKind: 'Three Of A Kind',
		fourOfAKind: 'Four Of A Kind',
		fullHouse: 'Full House',
		smallStraight: 'Small Straight',
		largeStraight: 'Large Straight',
		yahtzee: 'Yahtzee',
		chance: 'Chance'
	};

	const bonusLabel = `Bonus ${'bonus' in scores ? '' : `(${bonusProgress})`}`;

	return (
		<table>
			<tbody>
				{categories.upper.map(category => {
					return (
						<ScoreRow
							key={category}
							category={category}
							label={labels[category]}
							dice={dice}
							scores={scores}
							canPickScore={canPickScore}
							pickScore={pickScore}
						/>
					);
				})}

				<ScoreRow
					category={'bonus'}
					label={bonusLabel}
					scores={scores}
					canPickScore={false}
				/>

				{categories.lower.map(category => {
					return (
						<ScoreRow
							key={category}
							category={category}
							label={labels[category]}
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
