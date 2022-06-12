import React from "react";
import Navigation from "../../layouts/Navigation";
import Footer from "../../layouts/Footer";
import {useDispatch, useSelector} from "react-redux";
import { Table } from "react-bootstrap";
import { deleteBook } from "./bookSlice";
import {Link} from "react-router-dom";

function BookView() {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books.allBooks);
  const handleDelete = id => {
    console.log("id", id);
    dispatch(deleteBook(id));
  };
  return (
    <div>
      <section className='container'>
        <h3 className='text-danger py-3'>Our books collection</h3>
        <Table responsive='sm'>
          <thead>
            <tr>
              <th className='text-center'>#</th>
              <th className='text-center'>Name</th>
              <th className='text-center'>Author</th>
              <th className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {books ? (
              books.map(book => {
                const { id, name, author } = book;
                return (
                  <tr key={id}>
                    <td className='text-center'>{id}</td>
                    <td className='text-center'>{name}</td>
                    <td className='text-center'>{author}</td>
                    <td className='text-center'>
                      <Link to='/edite-books' className='text-decoration-none' state={{id,name,author}}>
                        <button className='btn btn-warning mx-2'>Edit</button>
                      </Link>
                      <button onClick={() => handleDelete(id)} className='btn btn-danger mx-2'>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <p className='text-danger text-center'>No books available</p>
            )}
          </tbody>
        </Table>
      </section>
    </div>
  );
}

export default BookView;
