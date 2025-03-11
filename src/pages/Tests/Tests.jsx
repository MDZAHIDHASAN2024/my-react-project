import React from 'react';
import { useEffect, useState } from 'react';

const Tests = () => {
  const [todos, setTodos] = useState(null);
  const [isLoading, setIsLoadign] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/post')
        .then((res) => {
          if (!res.ok) {
            throw Error('Data is not fatched');
          } else {
            return res.json();
          }
        })
        .then((data) => {
          setTodos(data);
          setIsLoadign(false);
          setError(null);
        })
        .catch((error) => {
          setError(error.message);
          setIsLoadign(false);
        });
    }, 2000);
  });
  return (
    <div>
      {error && <p>{error}</p>}
      {isLoading && <p>Data is Loading...</p>}
      {todos &&
        todos.map((todo) => {
          return <p key={todo.id}> {todo.title}</p>;
        })}
    </div>
  );
};

export default Tests;
