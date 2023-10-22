import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [role, setRole] = useState("default role: dev");
  const [employees, setEmployees] = useState([
    {
      name: "Agana",
      role: "Developer",
      img: "https://images.pexels.com/photos/7567557/pexels-photo-7567557.jpeg",
    },
    {
      name: "Emmy",
      role: "Teller",
      img: "https://images.pexels.com/photos/2100697/pexels-photo-2100697.jpeg",
    },
    {
      name: "Giant",
      role: "ATM",
      img: "https://images.pexels.com/photos/1727273/pexels-photo-1727273.jpeg",
    },
    {
      name: "Kajoh",
      role: "CSO",
      img: "https://images.pexels.com/photos/1739502/pexels-photo-1739502.jpeg",
    },
    {
      name: "Rahim",
      role: "Co",
      img: "https://images.pexels.com/photos/2125067/pexels-photo-2125067.jpeg",
    },
    {
      name: "Mimi",
      role: "Olokpa 1",
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    },
  ]);
  const showEmployee = true;
  return (
    <div className="App">
      {showEmployee ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              console.log(uuidv4());
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>You do not have access to see this employee</p>
      )}
    </div>
  );
}

export default App;
