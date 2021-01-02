import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import clsx from 'clsx';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import {connect} from 'react-redux';
import {getPostById} from '../../../redux/postsRedux.js';

import styles from './Post.module.scss';

class Component extends React.Component {

  render() {
    const {className, post} = this.props;

    return (
      <Paper className={clsx(className, styles.root)}>
        {post ? (
          <Card className={styles.card}>
            <CardHeader className={styles.header}
              avatar={<Avatar className={styles.avatar} component={Link} to={'/'}>
                <AssignmentIcon />
              </Avatar>}
              title={post.title}
              subheader={`Publication date: ${post.publicationDate}, last update: ${post.lastUpdate}`} />
            <CardContent>
              <img className={styles.photo} src={post.photo} alt="foto" />
              <Typography variant="body2" color="primary" component="p">
                {post.advert}
              </Typography>
              <TableContainer className={styles.table} component={Paper}>
                <Table className={styles.table}>
                  <TableBody>
                    <TableRow>
                      <TableCell>location</TableCell>
                      <TableCell align='right'>{post.location}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>price</TableCell>
                      <TableCell align='right'>{post.price}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>phone</TableCell>
                      <TableCell align='right'>{post.phone}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>e-mail</TableCell>
                      <TableCell align='right'>{post.email}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>status</TableCell>
                      <TableCell align='right'>{post.status}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
            <CardActions disableSpacing>
              <Button className={styles.button}
                variant="contained"
                color="primary"
                component={Link} to={`/post/${post.id}/edit`}>
                Edit your post
              </Button>
              <Button className={styles.button}
                variant="contained"
                color="primary"
                component={Link} to={'/'}>
                Homepage
              </Button>
            </CardActions>
          </Card>) : (<p>Sorry, there is no post. Go to  <Button className={styles.button} variant="contained" color="primary" component={Link} to={'/'}>
            Homepage</Button> </p>)}
      </Paper>

    );
  }
}
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  post: PropTypes.object,
};

const mapStateToProps = (state, props) => ({
  post: getPostById(state, props.match.params.id),
});

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Post,
  Container as Post,
  Component as PostComponent,
};


