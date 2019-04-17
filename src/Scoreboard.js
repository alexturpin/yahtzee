import React from 'react';
import { scoring } from './utils';

function Scoreboard({ dice }) {
	return (
		<table>
			<tbody>
				<tr>
					<th>Ones</th>
					<td>{scoring.ones(dice)}</td>
				</tr>
				<tr>
					<th>Twos</th>
					<td>{scoring.twos(dice)}</td>
				</tr>
				<tr>
					<th>Threes</th>
					<td>{scoring.threes(dice)}</td>
				</tr>
				<tr>
					<th>Fours</th>
					<td>{scoring.fours(dice)}</td>
				</tr>
				<tr>
					<th>Fives</th>
					<td>{scoring.fives(dice)}</td>
				</tr>
				<tr>
					<th>Sixes</th>
					<td>{scoring.sixes(dice)}</td>
				</tr>
				<tr>
					<th>Three Of A Kind</th>
					<td>{scoring.threeOfAKind(dice)}</td>
				</tr>
				<tr>
					<th>Four Of A Kind</th>
					<td>{scoring.fourOfAKind(dice)}</td>
				</tr>
				<tr>
					<th>Full House</th>
					<td>{scoring.fullHouse(dice)}</td>
				</tr>
				<tr>
					<th>Small Straight</th>
					<td>{scoring.smallStraight(dice)}</td>
				</tr>
				<tr>
					<th>Large Straight</th>
					<td>{scoring.largeStraight(dice)}</td>
				</tr>
				<tr>
					<th>Yahtzee</th>
					<td>{scoring.yahtzee(dice)}</td>
				</tr>
				<tr>
					<th>Chance</th>
					<td>{scoring.chance(dice)}</td>
				</tr>
			</tbody>
		</table>
	);
}

export default Scoreboard;
