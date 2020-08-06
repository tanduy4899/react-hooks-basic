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

function HomePage  () {
    const [todoList, setTodoList] = useState([
        {id: '1', title: 'I love easy frontend 1'},
        {id: '2', title: 'We love easy frontend 2'},
        {id: '3', title: 'They love easy frontend 3'},
    ]);

    const [postList, setPostList] = useState([]);
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 1
    });

    const [filters, setFilters] = useState({
        _limit: 10,
        _page: 1
    });

    useEffect( () => {
        async function fetchPostList() {
            try {
                const paramString = queryString.stringify(filters);
                const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();
                const {data, pagination} = responseJSON;
                setPostList(data);
                setPagination(pagination);
            } catch (e) {
                console.log(e)
            }
        }

        fetchPostList();

    }, [filters]);

    function handlePageChange(newPage) {
        setFilters({
            ...filters,
            _page: newPage
        })
    }

    function handleTodoClick(todo) {
        const index = todoList.findIndex(x => x.id === todo.id);
        if (index < 0) return;
        const newTodoList  = [...todoList];
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
    }

    function handleTodoFormSubmit(formValues) {
        if (!formValues) return;
        const newTodo = {
            id: todoList.length + 1,
            ...formValues
        };

        const newTodoList = [...todoList];
        newTodoList.push(newTodo);
        setTodoList(newTodoList);
    }

    function handleFilterChange(newFilter) {
        setFilters({
            ...filters,
            _page: 1,
            title_like: newFilter.searchTerm
        })
    }

    const [showClock, setShowClock] = useState(true);
    return (
        <div className="app">
            <header className="App-header">
                <h1>React Hooks - PostList</h1>
                <MagicBox/>
                {/*<ColorBox/>*/}
                {/*<TodoForm onSubmit={handleTodoFormSubmit}/>*/}
                {/*<TodoList todos={todoList} onTodoClick={handleTodoClick}/>*/}
                {/*  <PostFiltersForm onSubmit={handleFilterChange}/>*/}
                {/*  <PostList posts={postList}/>*/}
                {/*  <Pagination pagination={pagination}*/}
                {/*      onPageChange={handlePageChange}*/}
                {/*  />*/}
                {/*{showClock && <Clock/>}*/}
                {/*<BetterClock/>*/}
                {/*<button onClick={() => setShowClock(false)}>Hide Clock</button>*/}
            </header>
        </div>
    );
}

export default HomePage;
