import { useGetAllPostQuery, useGetPostByIdQuery, useGetPostByLimitQuery, useDeletePostMutation, useCreatePostMutation, useUpdatePostMutation, useGetPostFilterQuery } from '../services/post';
import { nanoid } from '@reduxjs/toolkit'

function PostList() {
//   const responseInfo = useGetAllPostQuery()
//   const responseInfo = useGetPostByIdQuery(4)
//   const responseInfo = useGetPostByLimitQuery(3)
// const [deletePost, responseInfo] = useDeletePostMutation()
//  const [createPost, responseInfo] = useCreatePostMutation()
// const [updatePost, responseInfo] = useUpdatePostMutation();
 const responseInfo = useGetPostFilterQuery('uNeVaNNCi1uT-CMvNsqqA', 
 {
  // Automatically refetch every 3s
  // pollingInterval: 3000,
})

  const modelId = nanoid();

  const newPost = {
    userId: modelId,
    id: 30,
    name: 'jessica',
    age: 23,
    email:'jessy@gmail.com',
    phone: '766 737 3877'
  }

  const updatePostData = {
    userId: modelId,
    id: 6,
    name: 'jerry',
    age: 20,
    email:'jerry@yahoo.com',
    phone: '235 565 3676'
  }

  console.log("Response Information: ", responseInfo)
  console.log("Data: ", responseInfo.data)
  console.log("Success: ", responseInfo.isSuccess)

  if (responseInfo.isLoading) return <div>Loading....</div>
  if (responseInfo.isError) return <h1>An error occured {responseInfo.error.error}</h1>


  return (
    // Get All Data
    // <div className="App">
    //   <h1>Redux Toolkit - RTK Query (Get All Data)</h1>
    //   {
    //     responseInfo.data.map((user, i) =>
    //       <div key={i}>
    //         <h1>{user.id}</h1>
    //         <h2>{user.name}</h2>
    //         <h3>{user.age}</h3>
    //         <p>{user.email}</p>
    //         <p>{user.phone}</p>
    //         <hr />
    //       </div>
    //     )
    //   }
    // </div>

    // Get Single Data
    // <div className="App">
    //   <h1>Redux Toolkit - RTK Query (Get Single Data)</h1>
    //   <h2>{responseInfo.data.id}</h2>
    //   <h2>{responseInfo.data.name}</h2>
    //   <h3>{responseInfo.data.age}</h3>
    //   <p>{responseInfo.data.email}</p>
    //   <p>{responseInfo.data.phone}</p>
    // </div>

    // Get Limited Data
    // <div className="App">
    //   <h1>Redux Toolkit - RTK Query (Get Limited  Data)</h1>
    //   {
    //     responseInfo.data.map((user, i) =>
    //       <div key={i}>
    //         <h1>{user.id}</h1>
    //         <h2>{user.name}</h2>
    //         <h3>{user.age}</h3>
    //         <p>{user.email}</p>
    //         <p>{user.phone}</p>
    //         <hr />
    //       </div>
    //     )
    //   }
    // </div>

    // Delete Data
    // <div className="App">
    //   <h1>Redux Toolkit - RTK Query (Delete Data)</h1>
    //   <button onClick={() => { deletePost(20) }}>Delete Post</button>
    // </div>

    // Create Data
    // <div className="App">
    //   <h1>Redux Toolkit - RTK Query (Create Data)</h1>
    //   <button onClick={() => { createPost(newPost) }}>Add Post</button>
    // </div>

    // Update Data
    // <div className="App">
    //   <h1>Redux Toolkit - RTK Query (Update Data)</h1>
    //   <button onClick={() => { updatePost(updatePostData) }}>Update Post</button>
    // </div>

     // Get Filter Data
    <div className="App">
      <h1>Redux Toolkit - RTK Query (Get Filtered by same userId Data)</h1>
      {
        responseInfo.data.map((user, i) =>
          <div key={i}>
            <h1>{user.id}</h1>
            <h2>{user.name}</h2>
            <h3>{user.age}</h3>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <hr />
          </div>
        )
      }
    </div>
  );
}

export default PostList;