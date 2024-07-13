import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  tagTypes: ["Products", "Carts"],
  endpoints: (builder) => ({

    createProduct: builder.mutation({
        query: (product) => {
          console.log(product)
          return {
            url: "/products/create-product",
            method: "POST",
            body: product,
          }
        },
        invalidatesTags: [{ type: "Products", id: "LIST" }],
  
    }),

    getProducts: builder.query({
      query: (params) => {
  
        return {
          url: "/products",
          method: "GET",
          params,
        };
      },
      providesTags: [{ type: "Products", id: "LIST" }],
    }),
    getProductById: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "Products", id }],
    }),
    createCartProduct: builder.mutation({
      query: (product) => {
        return {
          url: "/carts/create-cart",
          method: "POST",
          body: product,
        };
      },
      invalidatesTags: [{ type: "Carts", id: "LIST" }],
    }),

    getAllCarts: builder.query({
      query: () => ({
        url: "/carts",
        method: "GET",
      }),
      providesTags: [{ type: "Carts", id: "LIST" }],
    }),
    deleteCart: builder.mutation({
      query: (cartId) => ({
        url: `/carts/${cartId}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Carts", id: "LIST" }],
    }),
    updateCart: builder.mutation({
      query: (cart) => {
        console.log(cart);
        return {
          url: `/carts`,
          method: "PUT",
          body: cart,
        }
      },
      invalidatesTags: (result, error, { _id }) => [{ type: "Carts", id: _id }],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetProductsQuery,
  useGetProductByIdQuery,
  useCreateCartProductMutation,
  useGetAllCartsQuery,
  useDeleteCartMutation,
  useUpdateCartMutation,
} = baseApi;
