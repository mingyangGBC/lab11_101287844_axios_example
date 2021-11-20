import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonList from './PersonList';

function App() {
  return (
    <div>
      <h1 class="bg-success text-center">User List</h1>
      <PersonList/>
    </div>

  );
}

export default App;
