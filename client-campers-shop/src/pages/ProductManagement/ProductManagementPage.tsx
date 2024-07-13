import React from 'react';
import ProductManagement from './ProductManagement';
import DefaultContainer from '../../components/DefaultContainer';
import {useGetProductsQuery } from '../../redux/baseApi';


const App: React.FC = () => {


  const {data,isLoading,refetch} = useGetProductsQuery(undefined);

  return (
    <div className="">
      <DefaultContainer>
      <h1 className="text-2xl font-bold text-center my-8">Product List</h1>
      <ProductManagement products={data?.data} />
      </DefaultContainer>
    </div>
  );
};

export default App;
