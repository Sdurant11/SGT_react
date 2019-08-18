import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleChange(event) {
    var newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  handleSubmit() {
    var newStudentInfo = {
      name: this.state.name,
      course: this.state.course,
      grade: this.state.grade
    };
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
    this.props.onSubmit(newStudentInfo);
  }

  resetForm() {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    return (
      <form className='formContainer' onSubmit={this.handleSubmit} onReset={this.resetForm}>

        <div className='d-flex justify-content-start'> <i className="fas fa-user icon"></i>
          <input name='name' className="form-control" type="text" placeholder="Name" onChange={this.handleChange}></input>
        </div>

        <div className='d-flex'> <i className="fas fa-book icon"></i>
          <input name='course' className="form-control" type="text" placeholder="Course" onChange={this.handleChange}></input>
        </div>

        <div className='d-flex'> <i className="fas fa-award icon"></i>
          <input name='grade' className="form-control" type="text" placeholder="Grade" onChange={this.handleChange}></input>
        </div>

        <div className='buttonContainer'>
          <button type="submit" className="btn btn-success">Add</button>
          <button type="reset" className="btn btn-outline-secondary">Cancel</button>
        </div>
      </form>
    );
  }

}

export default GradeForm;
