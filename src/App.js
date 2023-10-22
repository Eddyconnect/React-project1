import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";

function App() {
  const [role, setRole] = useState("default role: dev");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Agana",
      role: "Developer",
      img: "https://images.pexels.com/photos/7567557/pexels-photo-7567557.jpeg",
    },
    {
      id: 2,
      name: "Emmy",
      role: "Teller",
      img: "https://images.pexels.com/photos/2100697/pexels-photo-2100697.jpeg",
    },
    {
      id: 3,
      name: "Giant",
      role: "ATM",
      img: "https://images.pexels.com/photos/1727273/pexels-photo-1727273.jpeg",
    },
    {
      id: 4,
      name: "Kajoh",
      role: "CSO",
      img: "https://images.pexels.com/photos/1739502/pexels-photo-1739502.jpeg",
    },
    {
      id: 5,
      name: "Rahim",
      role: "Co",
      img: "https://images.pexels.com/photos/2125067/pexels-photo-2125067.jpeg",
    },
    {
      id: 6,
      name: "Mimi",
      role: "Olokpa 1",
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployee = employees.map((employee) => {
      if (id == employee.id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployees(updatedEmployee);
  }

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
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
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
