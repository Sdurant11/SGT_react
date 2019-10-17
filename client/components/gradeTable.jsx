import React from 'react';

function Grade(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.course}</td>
      <td>{props.grade}</td>
      <td> <button type="button" className="btn btn-danger" onClick= {props.onClick}>Delete</button></td>
    </tr>);
}

function GradeTable(props) {
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Student</th>
          <th scope="col">Course</th>
          <th scope="col">Grade</th>
          <th scope="col">Operations</th>
        </tr>
      </thead>
      <tbody>
        {props.grades.map(grade =>
          <Grade key={grade.id}
            name = {grade.name}
            course = {grade.course}
            grade = {grade.grade}
            onClick = {props.onClick}
          />
        )}
      </tbody>
    </table>
  );
}

export default GradeTable;
