import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getAllUsers } from '../../../redux/usersRedux';

import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AssignmentIcon from '@material-ui/icons/Assignment';

import styles from './Header.module.scss';

class Component extends React.Component {

  state = {
    role: 'not logged',
  }
  handleChangeRole = e => {
    this.setState( {
      role: e.target.value,
    } );
  };

  render () {
    const { users } = this.props;
    const { role } = this.state;
    return (
      <>
        <div>
          <Button className={ styles.link } component={ NavLink } exact to={ `/` } activeClassName='active'><AssignmentIcon /></Button>
        </div>
        <select value={ this.state.role } onChange={ this.handleChangeRole }>
          { users.map( user => {
            return (
              <option key={ user.id } value={ user.role }>{ user.name }</option>
            );
          } ) }
        </select>
        {role !== 'not logged'
          ?
          <nav className={ styles.component }>
            <Button className={ styles.link } component={ NavLink } exact to={ `/post/add` } activeClassName='active'>Add Post</Button>
            <Button className={ styles.link } component={ NavLink } exact to={ `/` } activeClassName='active'>Log out</Button>
          </nav>
          :
          <nav className={ styles.component }>
            <Button className={ styles.link } href='https://google.com' activeClassName='active'>Log in</Button>
          </nav>
        }
      </>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  users: PropTypes.array,
};
const mapStateToProps = state => ( {
  users: getAllUsers( state ),
} );

const Container = connect( mapStateToProps )( Component );

export {
  Container as Header,
  Component as HeaderComponent,
};


