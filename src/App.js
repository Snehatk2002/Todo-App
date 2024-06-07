import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import SearchTodo from './components/SearchTodo';
import DeleteTudo from './components/DeleteTudo';
import ViewTodo from './components/ViewTodo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddTodo/>}/>
      <Route path='/search' element={<SearchTodo/>}/>
      <Route path='/delete' element={<DeleteTudo/>}/>
      <Route path='/view' element={<ViewTodo/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
