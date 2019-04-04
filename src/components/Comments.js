import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Input } from 'reactstrap';
import { CommentsLoad, Search } from '../store/Comments/action';


const mapstateToProps = state => {
    return {
        comments: state.comments
    }
}
const mapDishpatchToProps = ({
    Comments: () => CommentsLoad(),
    Search: (search) => Search(search)
})
const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});
const Comment = ({ comment }) => {
    if (comment) {
        return (
            <TableRow>
                <TableCell component="th" scope="row">
                    {comment.id}
                </TableCell>
                <TableCell align="right">{comment.comment}</TableCell>
                <TableCell align="right">{comment.author}</TableCell>
                <TableCell align="right">{comment.email}</TableCell>
            </TableRow>
        )
    }
    else {
        return (
            <TableBody></TableBody>
        );
    }

}
const RenderComments = ({ comments, dataSearch }) => {
    debugger
    if (dataSearch.length !== 0) {
        const listComment = dataSearch.map((comment) => {
            return (
                <Comment key={comment.id} comment={comment} />
            )
        })
        return (
            <TableBody>
                {listComment}
            </TableBody>
        );
    }
    else if (comments) {

        const listComments = comments.map((comment) => {
            return (
                <Comment key={comment.id} comment={comment} />
            );
        })
        return (
            <TableBody>
                {listComments}
            </TableBody>
        );
    }
    else {
        return (
            <TableBody>
            </TableBody>
        );
    }


}
class Comments extends Component {
    state = {
        search: ''
    }
    componentDidMount() {
        this.props.Comments();
    }
    changeDataSearch = (event) => {
        var target = event.target;
        var value = target.value;
        this.setState({
            search: value
        })
        let filterComments = this.props.comments.comments.filter((comment) => {
            return comment.comment.toLowerCase().indexOf(value.toLowerCase()) !== -1
        })
        this.props.Search(filterComments);
        
    }
    render() {
        const { classes } = this.props;
        return (
            <div className="container-fluid pt-5">
                <div className="row">

                    <div className="col-8 col-sm-8 offset-2">
                        <Input type="text" id="search" placeholder="Search" value={this.state.search} name="search" onChange={this.changeDataSearch} />
                        <Paper className={classes.root}>
                            <Table className={classes.table}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell align="right">Comments</TableCell>
                                        <TableCell align="right">Author</TableCell>
                                        <TableCell align="right">Email</TableCell>
                                    </TableRow>
                                </TableHead>
                                <RenderComments comments={this.props.comments.comments} dataSearch={this.props.comments.dataSearch} />
                            </Table>
                        </Paper>
                    </div>
                </div>
            </div>

        );
    }
}
Comments.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(connect(mapstateToProps, mapDishpatchToProps)(Comments));