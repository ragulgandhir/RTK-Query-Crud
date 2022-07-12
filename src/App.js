import './App.css';
// import TodoList from "./features/todos/TodoList";
// import PostList from './components/post';
import CustomizedTables from './components/UserList/userList';
import UserForm from './components/AddEditUser/AddEditUser';
import FullProfile from './components/View/userView';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <TodoList /> */}
      {/* <PostList /> */}
      <Routes>
        <Route path="/" element={<CustomizedTables />} />
        <Route path="/addUser" element={<UserForm />} />
        <Route path="/editUser/:id" element={<UserForm />} />
        <Route path="/users/:id" element={<FullProfile />} />
      </Routes>
    </div>
  );
}

export default App;
