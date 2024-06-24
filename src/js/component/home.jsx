
import React, { useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	
	const handleDelete = (index) => {
		const updatedTodos = todos.filter((_, i) => i !== index);
		setTodos(updatedTodos);
	};

	const handleEdit = (index, newValue) => {
		setTodos((prevTodos) => {
		  const updatedTodos = [...prevTodos];  // Deep copy using spread syntax
		  updatedTodos[index] = newValue;
		  return updatedTodos;
		});
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
							if (e.key === "Enter" ) { 
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
						<i className="fas fa-trash-alt" onClick={() => handleDelete(index)}></i>
					</li>
				))}
			</ul>
			<div>{todos.length} tasks</div>
		</div>
	);
};

export default Home;
