import _ from 'lodash';
import React, {Component} from 'react';
import {ListView} from 'react-native';
import {connect} from 'react-redux';
import {employessFetch} from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employessFetch();

    this.createDataSource(this.props);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    this.createDataSource(nextProps);
  }

  createDataSource({employees}) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    return <ListView enableEmptySections dataSource={this.dataSource} />;
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => {
    return {...val, uid};
  });
  return employees;
};

export default connect(mapStateToProps, {employessFetch})(EmployeeList);
