import React from 'react';
import classNames from 'classnames';
import { scoring } from './utils';

function ScoreRow({ name, label, dice, scores, canPickScore, pickScore }) {
	const isScoreFinal = name in scores;
	const scoreToPick = canPickScore ? scoring[name](dice) : null;
	const score = isScoreFinal ? scores[name] : scoreToPick;
	const className = classNames('score-row', {
		'score-final': isScoreFinal,
		'score-can-pick': !isScoreFinal && canPickScore
	});

	return (
		<tr className={className} onClick={() => pickScore(name, score)}>
			<th className="score-label">{label}</th>
			<td className="score-score">{score}</td>
		</tr>
	);
}

export default ScoreRow;
