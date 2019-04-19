import React from 'react';
import { scoring } from './utils';

function ScoreRow({ name, label, dice, scores, canPickScore, pickScore }) {
	const isScoreFinal = name in scores;
	const scoreToPick = canPickScore ? scoring[name](dice) : '';
	const score = isScoreFinal ? scores[name] : scoreToPick;

	return (
		<tr class="score-row">
			<th class="score-label">{label}</th>
			<td
				class={`score-score ${isScoreFinal ? 'score-final' : ''}`}
				onClick={() => pickScore(name, score)}
			>
				{score}
			</td>
		</tr>
	);
}

export default ScoreRow;
