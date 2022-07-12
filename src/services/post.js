import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
 reducerPath: 'postApi',
 baseQuery: fetchBaseQuery({
  baseUrl: 'http://localhost:3000/',
 }),
 tagTypes: ['Users'],
 endpoints: (build) => ({
  getAllPost: build.query({
    query: () => 'users',
    providesTags: (result) =>
        result
          ? 
            [
              ...result.map(({ id }) => ({ type: 'Users', id })),
              { type: 'Users', id: 'LIST' },
            ]
          : 
            [{ type: 'Users', id: 'LIST' }],
  }),
  getPostById: build.query({
      query: (id) => `users/${id}`,
      providesTags: (result, error, id) => [{ type: 'Users', id }],
  }),

  getPostByLimit: build.query({
    query: (num) => `users?_limit=${num}`,
    providesTags: (result, error, num) => [{ type: 'Users', num }],
  }),

  deletePost: build.mutation({
   query: (id) => ({
     url: `users/${id}`,
     method: 'DELETE',
   }),
   invalidatesTags: ['Users'],
  }),

  createPost: build.mutation({
    query(body) {
      return {
        url: `users`,
        method: 'POST',
        body,
      }
    },
    invalidatesTags: ['Users'],
  }),

  updatePost: build.mutation({
    query(data) {
      const { id, ...body } = data
      return {
        url: `users/${id}`,
        method: 'PUT',
        body,
      }
    },
    invalidatesTags: ['Users'],
  }),

  getPostFilter: build.query({
    query: (userId) => `users?userId=${userId}`,
    providesTags: (result, error, userId) => [{ type: 'Users', userId }],
   }),
 }),

})

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const { useGetAllPostQuery, useGetPostByIdQuery, useGetPostByLimitQuery, useDeletePostMutation, useCreatePostMutation, useUpdatePostMutation, useGetPostFilterQuery  } = postApi