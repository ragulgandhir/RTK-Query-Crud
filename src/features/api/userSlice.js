import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    tagTypes: ['Users'],
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => '/users',
            transformResponse: res => res.sort((a, b) => b.userId - a.userId),
            providesTags: ['Users']
        }),
        addUser: builder.mutation({
            query: (user) => ({
                url: '/users',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['Users']
        }),
        updateUser: builder.mutation({
            query: (user) => ({
                url: `/users/${user.userId}`,
                method: 'PATCH',
                body: user
            }),
            invalidatesTags: ['Users']
        }),
        deleteUser: builder.mutation({
            query: ({ userId }) => ({
                url: `/users/${userId}`,
                method: 'DELETE',
                body: userId
            }),
            invalidatesTags: ['Users']
        }),
    })
})

export const {
    useGetUsersQuery,
    useAddUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation
} = userSlice