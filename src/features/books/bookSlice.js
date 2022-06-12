import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    allBooks: [{id: 1, name: "Banglar bagh", author: "Anisul islam"},
        {id: 2, name: "Learn reactjs", author: "Majharul islam"},]
};
export const bookSlice = createSlice({
    name: "books",
    initialState: initialState,
    reducers: {
        showAllBooks: state => state.allBooks,
        addBook: (state, action) => {
            state.allBooks.push(action.payload);
        },
        updateBook: (state, {payload}) => {
            const {id, name, author} = payload;
            const isBookExist = state.allBooks.filter(book => book.id === id);
            if (isBookExist) {
                isBookExist[0].name = name;
                isBookExist[0].author = author;
            }
        },
        deleteBook: (state, action) => {
            state.allBooks = state.allBooks.filter(book => book.id !== action.payload);
        },
    },
});

export const {showAllBooks, addBook, deleteBook, updateBook} = bookSlice.actions;
export default bookSlice.reducer;
