
const initState={
    posts: [
        {id: '1', title:'First book', body:'Hi this is the first book'},
        {id: '2', title:'Second book', body:'Hi this is the second book'},
        { id: '3', title: 'Third book', body: 'Hi this is the third book' }

    ]
}

export default function rootReducer(state = initState, action) {

    if (action.type === 'DELETE_BOOK'){
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });

        return{
            ...state,
            posts: newPosts
        }
    } else if (action.type === 'ADD_BOOK') {
        console.log(action.title);
        
        return {
            ...state,
            posts: [...state.posts, action.title]
        }

    }

    
    

    
    return state;
}
