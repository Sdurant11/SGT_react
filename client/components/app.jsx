import React from 'react';
import Header from './header';
import GradeTable from './gradeTable';
import GradeForm from './gradeForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(response => {
        this.setState({ grades: response });
      });
  }

  addNewStudent(newStudentInfo) {
    var req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newStudentInfo)
    };
    fetch('/api/grades', req)
      .then(res => res.json())
      .then(res => JSON.parse(res))
      .then(gradeResponse => {
        var allGrades = this.state.grades.concat(gradeResponse);
        this.setState({ grades: allGrades });
      });
  }

  render() {
    return (
      <React.Fragment>
        <Header grades={this.state.grades} />
        <div className = 'gradeContainer'>
          {this.state.grades.length === 0 ? (
            <div>There are no grades yet</div>
          ) : (
            <GradeTable grades={this.state.grades} />
          )}
          <GradeForm onSubmit={this.addNewStudent}/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
