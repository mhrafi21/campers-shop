import React from 'react';
import ProductManagement from './ProductManagement';
import DefaultContainer from '../../components/DefaultContainer';
import {useGetProductsQuery } from '../../redux/baseApi';
import Title from '../../components/Title';


const App: React.FC = () => {


  const {data} = useGetProductsQuery(undefined);

  return (
    <div className="">
      <DefaultContainer>
     <Title>Product Management</Title>
      <ProductManagement products={data?.data} />
      </DefaultContainer>
    </div>
  );
};

export default App;
