import React from 'react';

function GetAverage(props) {
  var gradeNumArray = props.grades.map(studentInfoObj =>
    studentInfoObj.grade
  );

  var gradeTotal = 0;
  for (var i = 0; i < gradeNumArray.length; i++) {
    gradeTotal += gradeNumArray[i];
  }
  var gradeAverage = (gradeTotal / gradeNumArray.length).toFixed(2);

  return <div className = 'gradeAverageNumber'>Average Grade
    <span className="badge badge-secondary">{gradeAverage}</span>
  </div>;
}

function Header(props) {
  return (
    <header className = 'title'>Student Grade Table
      <GetAverage grades = {props.grades} />
    </header>
  );
}

export default Header;
