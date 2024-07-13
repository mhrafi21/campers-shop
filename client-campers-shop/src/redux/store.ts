import { configureStore } from "@reduxjs/toolkit"
import { baseApi } from "./baseApi";
import productsReducer from "../redux/features/products/productsSlice"
export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        products: productsReducer
    }, // Your root reducer goes here. Replace with your actual reducer.

    middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(baseApi.middleware), // Add the api middleware
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;