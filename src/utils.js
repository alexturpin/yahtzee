const dieRoll = () => Math.floor(Math.random() * 6) + 1;

const sum = (numbers, filter = null) => {
	let total = 0;
	for (let value of numbers) {
		if (typeof filter !== 'number' || value === filter) {
			total += value || 0; // Fallback to 0 so we can use this to sum scores (which may contained undefined)
		}
	}
	return total;
};

const count = numbers => {
	const map = new Map();
	for (let value of numbers) {
		map.set(value, (map.get(value) || 0) + 1);
	}
	return Array.from(map.values())
		.sort()
		.reverse();
};

const isStraight = (dice, length) => {
	let count = 0,
		last = null;

	for (let value of Array.from(new Set(dice)).sort()) {
		if (last === null || value === last + 1) {
			count++;
		} else {
			count = 1;
		}

		last = value;

		if (count === length) {
			return true;
		}
	}

	return false;
};

const scoring = {
	ones: dice => sum(dice, 1),
	twos: dice => sum(dice, 2),
	threes: dice => sum(dice, 3),
	fours: dice => sum(dice, 4),
	fives: dice => sum(dice, 5),
	sixes: dice => sum(dice, 6),
	threeOfAKind: dice => (count(dice)[0] >= 3 ? sum(dice) : 0),
	fourOfAKind: dice => (count(dice)[0] >= 4 ? sum(dice) : 0),
	fullHouse: dice => {
		const counts = count(dice);
		return counts[0] === 3 && counts[1] === 2 ? 25 : 0;
	},
	smallStraight: dice => (isStraight(dice, 4) ? 30 : 0),
	largeStraight: dice => (isStraight(dice, 5) ? 40 : 0),
	yahtzee: dice => (count(dice)[0] === 5 ? 50 : 0),
	chance: dice => sum(dice)
};

const categories = {
	upper: ['ones', 'twos', 'threes', 'fours', 'fives', 'sixes'],
	lower: [
		'threeOfAKind',
		'fourOfAKind',
		'fullHouse',
		'smallStraight',
		'largeStraight',
		'yahtzee',
		'chance'
	]
};

export { dieRoll, sum, scoring, categories };
