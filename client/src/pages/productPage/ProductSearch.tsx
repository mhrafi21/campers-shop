// SearchForm.js
import React from 'react';
import { useForm } from 'react-hook-form';

function ProductSearch({ onSubmit }) {
    const { register, handleSubmit } = useForm();

    const onSubmitForm = (data) => {
        onSubmit(data.search);
    };

    return (
        <form onSubmit={handleSubmit(onSubmitForm)}>
            <input {...register('search')} placeholder="Search products..." />
            <button type="submit">Search</button>
        </form>
    );
}

export default ProductSearch;
