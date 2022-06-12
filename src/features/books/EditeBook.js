import React, {useState} from 'react';
import Navigation from "../../layouts/Navigation";
import Footer from "../../layouts/Footer";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import {updateBook} from "./bookSlice";
import * as yup from "yup";

const schema = yup
    .object({
        name: yup.string().required().max(30),
        author: yup.string().required().max(25),
    })
    .required();

function EditeBook(props) {
    const location = useLocation();
    const [editeBook, setEditeBook] = useState({
        id: location.state.id,
        name: location.state.name,
        author: location.state.author
    });
    const {register, handleSubmit, formState: {errors},} = useForm({resolver: yupResolver(schema),});

    const numberOfBooks = useSelector(state => state.books.allBooks.length);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data)
        const id = editeBook.id;
        const name = data.name;
        const author = data.author

        // const book = {id: numberOfBooks + 1, name: data.name, author: data.author};
        dispatch(updateBook({id, name, author}));
        navigate("/");
    };
    return (
        <div>
            <Navigation/>
            <section className='container'>
                <h4 className='text-center text-danger py-3'>Edite Book</h4>
                <form onSubmit={handleSubmit(onSubmit)} className='text-center'>
                    <div className='d-flex justify-content-center align-items-center flex-column'>
                        <input defaultValue={editeBook.name} placeholder='Book Name...'
                               className='form-control my-1 w-50' {...register("name")} />
                        <p className='text-danger w-50 text-start'>{errors.name?.message}</p>
                        <input defaultValue={editeBook.author} placeholder='Author Name...'
                               className='form-control my-1 w-50' {...register("author")} />
                        <p className='text-danger w-50 text-start'>{errors.author?.message}</p>
                    </div>
                    <input className='btn btn-primary my-1 w-25' type='submit'/>
                </form>
            </section>
            <Footer/>
        </div>
    );
}

export default EditeBook;