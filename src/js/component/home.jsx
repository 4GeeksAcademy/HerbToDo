

import React, { useState, useEffect } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	const handleDelete = (index) => {
		const updatedTodos = todos.filter((_, i) => i !== index);
		setTodos(updatedTodos);
	};

	const handleEdit = (index, newValue) => {
		setTodos((prevTodos) => {
			const updatedTodos = [...prevTodos]; // Deep copy using spread syntax
			updatedTodos[index] = newValue;
			return updatedTodos;
		});
	};

	useEffect(() => {
		fetch("https://playground.4geeks.com/todo/user/alesanchezr", {
			method: "PUT",
			body: JSON.stringify(todos),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((resp) => {
				console.log(resp.ok); // Will be true if the response is successful
				console.log(resp.status); // The status code=200 or code=400 etc.
				console.log(resp.text()); // Will try to return the exact result as a string
				return resp.json(); // (returns promise) Will try to parse the result as JSON and return a promise that you can .then for results
			})
			.then((data) => {
				// Here is where your code should start after the fetch finishes
				console.log(data); // This will print on the console the exact object received from the server
			})
			.catch((error) => {
				// Error handling
				console.error(error);
			});
	}, [todos]);

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
								setTodos(todos.concat(inputValue));
								setInputValue("");
							}
						}}
						placeholder="What do you need to do"
					/>
				</li>
				{todos.map((todo, index) => (
					<li key={index}>
						<input
							type="text"
							value={todo}
							onChange={(e) => handleEdit(index, e.target.value)}
						/>
						<i
							className="fas fa-trash-alt"
							onClick={() => handleDelete(index)}
						></i>
					</li>
				))}
			</ul>
			<div>{todos.length} tasks</div>
		</div>
	);
};

export default Home;