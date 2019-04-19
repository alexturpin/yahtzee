import React from 'react';
import ScoreRow from './ScoreRow';
import { categories } from './utils';

function Scoreboard({
	dice,
	scores,
	canPickScore,
	pickScore,
	bonusProgress,
	upperTotal,
	lowerTotal
}) {
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

	const bonusLabel = `Bonus ${
		'bonus' in scores ? '' : `(${63 - bonusProgress})`
	}`;

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

				<tr className="score-row score-total">
					<th className="score-label">Upper Total</th>
					<td className="score-score">{upperTotal}</td>
				</tr>

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

				<tr className="score-row score-total">
					<th className="score-label">Lower Total</th>
					<td className="score-score">{lowerTotal}</td>
				</tr>

				<tr className="score-row score-total">
					<th className="score-label">Total</th>
					<td className="score-score">{lowerTotal + upperTotal}</td>
				</tr>
			</tbody>
		</table>
	);
}

export default Scoreboard;
