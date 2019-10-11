export const deleteBook = (id) => {
    return{
        type: 'DELETE_BOOK',
        id
    }
}

export const addBook = (book) => {
    return {
        type: 'ADD_BOOK',
        title:book
    }
}