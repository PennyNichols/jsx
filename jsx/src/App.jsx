import './App.css';
import UsersList from './components/UsersList';
import Header from './components/Header';

const users = ['John', 'Mike', 'Adam'];

function App() {

  return (
    <>
      <Header title="Users System" bg="purple"/>
      <UsersList users={ users } />
    </>
  )
 
}

export default App;
