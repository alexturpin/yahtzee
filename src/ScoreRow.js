import React from 'react';
import classNames from 'classnames';
import { scoring } from './utils';

function ScoreRow({ category, label, dice, scores, canPickScore, pickScore }) {
	const isScoreFinal = category in scores;
	const scoreToPick = canPickScore ? scoring[category](dice) : null;
	const score = isScoreFinal ? scores[category] : scoreToPick;
	const className = classNames('score-row', {
		'score-final': isScoreFinal,
		'score-can-pick': !isScoreFinal && canPickScore
	});

	return (
		<tr
			className={className}
			onClick={() => canPickScore && pickScore(category, score)}
		>
			<th className="score-label">{label}</th>
			<td className="score-score">{score || '-'}</td>
		</tr>
	);
}

export default ScoreRow;
