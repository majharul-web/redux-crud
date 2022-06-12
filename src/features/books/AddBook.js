import React from "react";
import Navigation from "../../layouts/Navigation";
import Footer from "../../layouts/Footer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "./bookSlice";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object({
    name: yup.string().required().max(30),
    author: yup.string().required().max(25),
  })
  .required();

function AddBook(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const numberOfBooks = useSelector(state => state.books.allBooks.length);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = data => {
    const book = { id: numberOfBooks + 1, name: data.name, author: data.author };
    dispatch(addBook(book));
    navigate("/");
  };
  return (
    <div>
      <Navigation />
      <section className='container'>
        <h4 className='text-center text-danger py-3'>Add an Book</h4>
        <form onSubmit={handleSubmit(onSubmit)} className='text-center'>
          <div className='d-flex justify-content-center align-items-center flex-column'>
            <input placeholder='Book Name...' className='form-control my-1 w-50' {...register("name")} />
            <p className='text-danger w-50 text-start'>{errors.name?.message}</p>
            <input placeholder='Author Name...' className='form-control my-1 w-50' {...register("author")} />
            <p className='text-danger w-50 text-start'>{errors.author?.message}</p>
          </div>

          <input className='btn btn-primary my-1 w-25' type='submit' />
        </form>
      </section>
      <Footer />
    </div>
  );
}

export default AddBook;
