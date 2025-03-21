export default function Stats({ items }) {
	if (!items.length)
		return (
			<footer className="stats">
				<em>Start adding some items to your packing list </em>
			</footer>
		);

	const numItems = items.length;
	// const numItemsPacked = items.reduce((acc, curr) => {
	// 	if (curr.packed === true) acc++;
	// 	return acc;
	// }, 0);
	const numItemsPacked = items.filter(item => item.packed).length;
	const percentage = Math.round((numItemsPacked / numItems) * 100);

	return (
		<footer className="stats">
			<em>
				{percentage === 100
					? 'You got everything! Ready to go ✈️'
					: `👜 You have ${numItems} items on your list, and you already packed ${numItemsPacked} (${percentage}%)`}
			</em>
		</footer>
	);
}
