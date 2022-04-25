import { Routes, Route } from 'react-router-dom';
import { BooksList } from './BooksList';
import { CreateBook } from './CreateBook';
import { NavBar } from './shared/NavBar';
import { UpdateBook } from './UpdateBook';

function App() {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/update-book/:id" element={<UpdateBook />}></Route>
          <Route path="/create-book" element={<CreateBook />}></Route>
          <Route path="/" element={<BooksList />}></Route>
        </Routes>
    </>
  );
}

export default App;
