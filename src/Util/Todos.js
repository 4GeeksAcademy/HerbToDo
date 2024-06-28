export const createTodo = async (todo, done) => {
    return fetch("https://playground.4geeks.com/todo/todos/amr", {
        method: "POST",
        body: JSON.stringify({label: todo, is_done: done}),
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
};

export const getTodos = async () => {
    const req =await fetch("https://playground.4geeks.com/todo/users/amr", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    const data = await req.json()
    console.log("data", data)
   return data     
        
}
export const deleteTodo = async (id) => {
    return fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
        method: "DELETE",
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
}