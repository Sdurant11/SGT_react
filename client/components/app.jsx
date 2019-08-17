import React from 'react';
import Header from './header';
import GradeTable from './gradeTable';

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

  render() {
    return (
      <React.Fragment>
        <Header />
        {this.state.grades.length === 0 ? (
          <div>There are no grades yet</div>
        ) : (
          <GradeTable grades={this.state.grades} />
        )}

      </React.Fragment>
    );
  }
}

export default App;
