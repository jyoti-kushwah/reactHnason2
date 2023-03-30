
import './App.css';
import ClassCmp from './Component/ClassCmp';
import FunctionalCmp from './Component/FunctionalCmp';

function App() {
  return (

    <div className="App">
    <h1 style={{backgroundColor:'purple',color:'red'}}>EMPLOYESS FEEDBACK FORM</h1>
     {/* <FunctionalCmp/> */}
     <ClassCmp/>
    </div>
  );
}

export default App;
