import React, { Component } from 'react'
import { connect } from "react-redux";
import { deleteBook } from "../actions/postActions";

class post extends Component {
    // handleAdd = () => {
    //     this.props.addBook();
    //     this.props.history.push('/');
    // }
    handleClick = () => {
        this.props.deleteBook(this.props.post.id);
        this.props.history.push('/');
    }
    render() {
        const post = this.props.post ? (
            <div className="container"><br/>
                <div className="card-columns">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">{this.props.post.title}</h4>
                            <p className="card-text">{this.props.post.body}</p>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn btn-danger" onClick={this.handleClick}>Delete Book</button>

            </div>
        ):(
            <div className='container'>
                <h4 className="center">Loading book........</h4>
            </div>
        )
        return (
            <div className='container'>
                { post }
            </div>
        )
    }
}
const mapStateToProps=(state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return{
        post: state.posts.find(post => post.id === id)
    }
}
const mapDispatchToProps= (dispatch) => {
    return{
        deleteBook: (id) => { dispatch(deleteBook(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (post)
