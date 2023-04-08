import './App.css';
import TodosContainer from './components/containers/TodoContainer';
import TodoFormContainer from './components/containers/TodoFormContainer';
import FilterOptions from './components/pure/FilterOptions';

function App() {
  return (
    <div className="App">
      <TodosContainer></TodosContainer>
      <TodoFormContainer></TodoFormContainer>
      <FilterOptions></FilterOptions>
    </div>
  );
}

export default App;
