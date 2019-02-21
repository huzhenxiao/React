import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextGroup from '../../common/TextGroup';
import TextArea from '../../common/TextArea';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExperience } from '../../actions/profileAction';

class AddExperience extends Component {
    constructor(props){
        super(props);
        this.state = {
            company: '',
            title: '',
            location: '',
            from: '',
            to: '',
            current: false,
            description: '',
            errors: {},
            disabled: false
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCheck = this.onCheck.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors:nextProps.errors})
        }
    }

    onSubmit(e){
        e.preventDefault();
        const expData = {
            company:this.state.company,
            title: this.state.title,
            location: this.state.location,
            from: this.state.from,
            to: this.state.to,
            current: this.state.current,
            description: this.state.description
        }
        this.props.addExperience(expData,this.props.history);
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onCheck(){
        this.setState({
            disabled:!this.state.disabled,
            current:!this.state.current,
        })
    }
  render() {
      const {errors} = this.state;
    return (
      <div className="add-Education">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                返回
              </Link>
              <h1 className="display-4 text-center">添加个人经历</h1>
              <p className="lead text-center">
                有关于工作的任何经验
              </p>
              <small className="d-block pb-3">* 为必填项</small>
              
              {/*表单*/}
              <form onSubmit={this.onSubmit}>
                <TextGroup
                    placeholder="* 公司"
                    name="company"
                    value={this.state.company}
                    onChange={this.onChange}
                    error={errors.company}
                />
                <TextGroup
                  placeholder="* 工作内容"
                  name="title"
                  value={this.state.title}
                  onChange={this.onChange}
                  error={errors.title}
                />
                <TextGroup
                  placeholder="地点"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                />
                <h6>开始时间</h6>
                <TextGroup
                  name="from"
                  type="date"
                  value={this.state.from}
                  onChange={this.onChange}
                  error={errors.from}
                />
                <h6>结束时间</h6>
                <TextGroup
                  name="to"
                  type="date"
                  value={this.state.to}
                  onChange={this.onChange}
                  error={errors.to}
                  disabled={this.state.disabled ? 'disabled' : ''}
                />
                <div className="form-check mb-4">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="current"
                    value={this.state.current}
                    checked={this.state.current}
                    onChange={this.onCheck}
                    id="current"
                  />
                  <label htmlFor="current" className="form-check-label">
                    当前在职
                  </label>
                </div>
                <TextArea
                  placeholder="工作内容"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                  error={errors.description}
                  info="说明有关工作的相关内容等"
                />
                <input
                  type="submit"
                  value="提交"
                  className="btn btn-info btn-block mt-4"
                />
              </form>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
AddExperience.propTypes = {
    addExperience: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  
const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(mapStateToProps,{addExperience})(withRouter(AddExperience));