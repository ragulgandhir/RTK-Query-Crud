import './App.css';
import TodoList from "./features/todos/TodoList";
import PostList from './components/post';
import CustomizedTables from './components/userList';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import UserInfo from './components/userView';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <TodoList /> */}
      {/* <PostList /> */}
      <Routes>
        <Route path="/" element={<CustomizedTables />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/editUser/:id" element={<EditUser />} />
        <Route path="/viewUser/:id" element={<UserInfo />} />
      </Routes>
    </div>
  );
}

export default App;
