import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { deleteEducation } from '../../actions/profileAction';

class Education extends Component {
    onDeleteClick(id){
        this.props.deleteEducation(id);
    }
  render() {
    const education = this.props.education.map(edu=>(
        <tr key={edu._id}>
        <td>{edu.school}</td>
        <td>{edu.degree}</td>
        <td>
          {edu.from} 至 {edu.to === '' ? '至今' : edu.to}
        </td>
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, edu._id)}
            className="btn btn-danger"
          >
            删除
          </button>
        </td>
      </tr>
    ))

    return (
      <div>
        <h4 className="mb-4">教育经历</h4>
        <table className="table">
          <thead>
            <tr>
              <th>学校</th>
              <th>学历</th>
              <th>年份</th>
              <th />
            </tr>
            {education}
          </thead>
        </table>
      </div>
    )
  }
}
Education.propTypes = {
    deleteEducation: PropTypes.func.isRequired
}

export default connect(null,{deleteEducation})(Education);
