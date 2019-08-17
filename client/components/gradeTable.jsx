import React from 'react';

function Grade(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.course}</td>
      <td>{props.grade}</td>
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
        </tr>
      </thead>
      <tbody>
        {props.grades.map(grade =>
          <Grade key={grade.id}
            name = {grade.name}
            course = {grade.course}
            grade = {grade.grade}
          />
        )}
      </tbody>
    </table>
  );
}

export default GradeTable;
