

function Student(props) {
  return (
    <div className="student-main-div">
      <h2>Ime: {props.student.ime}    Prezime: {props.student.prezime}    Email: {props.student.email} Buzet: {props.student.budzet}</h2>
    </div>
  )
}

export default Student
