import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addBook } from "../actions/postActions";
import uudi from 'uuid';
// import image from "../images/default.PNG";
// import "../App.css";


class Home extends Component {

    render() {
        let item ={
            id: uudi(),
            title: '',
            body: ''
        }
        const handleSubmit = (e) => {
            e.preventDefault();
            if(item.title===''){
                alert('Please type the name of the book');
                
            }else{
                console.log('has');
                this.props.addBook(item);
                
                
            }

            
        }
        const handleTitle =(e)=>{
            item.title = e.target.value

        }
        const handleDetails = (e)=>{
            item.body = e.target.value
        }
        const { posts } = this.props;
        console.log(posts);
        
        const postList = posts.length ? (
            posts.map(post => {
                
                return (
                    
                    <div className="card" key={post.id}>
                        <img className="card-img-top" src='' alt="" />
                        <div className="card-body">
                            <Link to={'/' + post.id}>
                                <h4 className="card-title">{post.title}</h4>
                            </Link>
                            <p className="card-text">{post.body}</p>
                        </div>
                    </div>


                )
            })
        ) : (
                <div className="center">
                    <h4 className="center">No posts please</h4>
                </div>
            )

        return (
            
            <div className="container"><br />

                <div className="card card-body mt-3">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-primary text-white">
                                    <i className="fas fa-book">Book</i>
                                </div>
                            </div>
                            <input type="text" className="form-control text-capitalize" placeholder="Add book" onChange={handleTitle} />
                            
                        </div><br/>

                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-primary text-white">
                                    <i className="fas fa-book">Details</i>
                                </div>
                            </div>
                            <textarea  type="text" className="form-control text-capitalize" rows="3" placeholder="Enter details" onChange={handleDetails} ></textarea>

                        </div>

                        
                        <button type="submit" className="btn btn-block btn-primary mt-3">Add Book</button>
                    </form>
                </div><br/>

                <div className="card-columns" >
                    {postList}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBook: (book) => { dispatch(addBook(book))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Home)

