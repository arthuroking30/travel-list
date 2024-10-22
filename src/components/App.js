import { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';

// const initialItems = [
// 	{ id: 1, description: 'Passports', quantity: 2, packed: false },
// 	{ id: 2, description: 'Socks', quantity: 12, packed: false },
// 	{ id: 3, description: 'Socks', quantity: 12, packed: true },
// ];

export default function App() {
	const [items, setItems] = useState([]);

	function handleAddItem(newItem) {
		setItems(items => [...items, newItem]);
	}

	function handleRemoveItem(id) {
		setItems(items => items.filter(i => i.id !== id));
	}

	function handleToggleItem(id) {
		setItems(items =>
			items.map(item =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	}

	function handleClearList() {
		if (window.confirm('Are you sure you want to delete all the items?'))
			setItems([]);
	}

	return (
		<div className="app">
			<Logo></Logo>
			<Form onAddItems={handleAddItem}></Form>
			<PackingList
				items={items}
				onRemoveItem={handleRemoveItem}
				onToggleItem={handleToggleItem}
				onClearList={handleClearList}
			></PackingList>
			<Stats items={items}></Stats>
		</div>
	);
}
