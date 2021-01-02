import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ChevronRightRounded from '@material-ui/icons/ChevronRightRounded';
import Typography from '@material-ui/core/Typography';

import clsx from 'clsx';

import {connect} from 'react-redux';
import {getAll} from '../../../redux/postsRedux.js';

import styles from './Homepage.module.scss';

class Component extends React.Component {

  render() {
    const {className, children, posts} = this.props;
    return (
      <Paper className={clsx(className, styles.root)}>
        <h2>Adverts</h2>
        <div className={styles.cardContainer}>
          {posts.length ? posts.map(post => (
            <Card className={styles.card} key={post.id} >
              <CardContent>
                <Typography className={styles.title} color="textSecondary" gutterBottom>
                  {post.publicationDate}
                </Typography>
                <Typography variant="h6" component="h2">
                  {post.title}
                </Typography>
                <Button color={'primary'} fullWidth className={styles.button} component={Link} exact to={`/post/${post.id}`} >
                  Find Out More <ChevronRightRounded />
                </Button>
              </CardContent>
            </Card>
          )) : (<p>There are no adverts for this moment</p>)}
          {children}
        </div>
      </Paper>
    );
  }
}
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  posts: PropTypes.array,
};

const mapStateToProps = state => ({
  posts: getAll(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
