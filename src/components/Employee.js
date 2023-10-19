function Employee(props) {
return (
  <>
   <h3>Employee: {props.Name}</h3>
   <p>{props.role ? props.role : 'No Role' }</p>
  </>
)

}

export default Employee;