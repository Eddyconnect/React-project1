import "../index.css";
import Employee from "../components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "../components/AddEmployee";
import EditEmployee from "../components/EditEmployee";
import Header from "../Header";

function Employees() {
  //const [role, setRole] = useState("default role: dev");
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

  function updateEmployee(id, newName, newRole, newImg) {
    const updatedEmployee = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole, img: newImg };
      }
      return employee;
    });
    setEmployees(updatedEmployee);
  }
  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }

  const showEmployee = true;
  return (
    <div className="App bg-gray-300 min-h-screen">
      {showEmployee ? (
        <>
          <div className="flex flex-wrap justify-center my-2">
            {employees.map((employee) => {
              const editEmployee = (
                <EditEmployee
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  updateEmployee={updateEmployee}
                />
              );
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  editEmployee={editEmployee}
                />
              );
            })}
          </div>
          <AddEmployee newEmployee={newEmployee} />;
        </>
      ) : (
        <p>You do not have access to see this employee</p>
      )}
    </div>
  );
}

export default Employees;
