import './App.css';
import TodoList from "./features/todos/TodoList";
import PostList from './components/post';
import CustomizedTables from './components/userList';

function App() {
  return (
    <div className="App">
      {/* <TodoList /> */}
      {/* <PostList /> */}
      <CustomizedTables />
    </div>
  );
}

export default App;
