import React, { useState, useEffect } from "react";
import { getTodos } from "../../Util/Todos";

const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	const handleDelete = (index) => {
		const updatedTodos = todos.filter((_, i) => i !== index);
		setTodos(updatedTodos);
	};

	const handleEdit = (index, newLabel) => {
		const updatedTodos = todos.map((todo, i) => {
			if (i === index) {
				return { ...todo, label: newLabel };
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	useEffect(() => {
		getTodos().then((data) => {
			setTodos(todos.concat(data));
		});
		console.log("todos", todos);
	}, []);

	const addTodo = () => {
		if (inputValue.trim() !== "") {
			const newTodo = { label: inputValue };
			setTodos([...todos, newTodo]);
			setInputValue("");
		}
	};

	return (
		<div className="container">
			<h1>My Todo {inputValue}</h1>
			<ul>
				<li>
					<input
						type="text"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								addTodo();
							}
						}}
						placeholder="What do you need to do"
					/>
				</li>
				{todos
					? todos.map((todo, index) => (
							<li key={index}>
								<i
									className="fas fa-trash-alt"
									onClick={() => handleDelete(index)}
								></i>
								<input
									type="text"
									value={todo.label}
									onChange={(e) => handleEdit(index, e.target.value)}
								/>
							</li>
						))
					: null}
			</ul>
			<div>{todos.length} tasks</div>
		</div>
	);
};

export default Home;