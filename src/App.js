import React, {useEffect, useState} from 'react';
import './App.scss';
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import queryString from 'query-string';
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";
import PostFiltersForm from "./components/PostFiltersForm";
import Clock from "./components/Clock";
import BetterClock from "./components/BetterClock";
import MagicBox from "./components/MagicBox";
import Hero from "./components/Hero";

function App() {
    console.log('met')
    const [count, setCount] = useState(0);
    console.log('test 1')

    console.log('test 2')
    const handleHeroClick = () => {

    };
  return (
    <div className="app">
      <p>{count}</p>
        <button onClick={() => setCount(count + 1)}> Increase </button>
        <Hero name="Easy Frontend" onClick={handleHeroClick}/>
    </div>
  );
}

export default App;
