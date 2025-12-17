import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { authApi } from "@/services/auth";
import { prodctApi } from "@/services/product";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [prodctApi.reducerPath]: prodctApi.reducer,
  },
  middleware: (getdefaultmiddleware) =>
    getdefaultmiddleware().concat([authApi.middleware, prodctApi.middleware]),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
