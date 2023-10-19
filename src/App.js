import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('default role: dev');
  const showEmployee = true;
  return (
    <div className="App bg-red-300">
      {showEmployee ?
      <>
        <input type='text' onChange={(e) => {console.log(e.target.value);
        setRole(e.target.value);}} />
        <Employee Name ='Rahim Adeiza' role = 'Cash officer' />
        <Employee Name = 'Emmanuel Omaji' role = 'Head Teller' />
        <Employee Name = 'Sesugh Orshi' role = 'ATMC' />
        <Employee Name = 'Collins Vingil' role = {role} />        

      </>
       : <p>You do not have access to see this employee</p>
      }
      
    </div>
  );
}

export default App;
