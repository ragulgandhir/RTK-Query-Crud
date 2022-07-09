import React, {useState, useEffect} from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useGetPostByLimitQuery,
  useDeletePostMutation,
  useCreatePostMutation,
  useUpdatePostMutation,
  useGetPostFilterQuery,
} from "../services/post";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import {useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables() {
  const responseInfo = useGetAllPostQuery();
  const [deletePost, { isLoading, error, isSuccess, isError }] = useDeletePostMutation();
  let navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      toast.success('Post deleted successfully');
    }

    if (isError) {
      if (Array.isArray((error).data.error)) {
        (error).data.error.forEach((el) =>
          toast.error(el.message, {
            position: 'top-right',
          })
        );
      } else {
        toast.error((error).data.message, {
          position: 'top-right',
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const onDeleteHandler = (id) => {
    if (window.confirm('Are you sure you want delete this user ?')) {
      deletePost(id);
    }
  };

  console.log("Response Information: ", responseInfo);
  console.log("Data: ", responseInfo.data);
  console.log("Success: ", responseInfo.isSuccess);

  if (responseInfo.isLoading) return <div>Loading....</div>;
  if (responseInfo.isError)
    return <h1>An error occured {responseInfo.error.error}</h1>;

  return (
    <div>
      <Grid container justifyContent="flex-end">
        <Button variant="contained" color="success" onClick = {() => navigate("/addUser")}>Add User</Button>
      </Grid>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>#Id</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Age</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Phone</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {responseInfo.data.map((user, i) => (
              <StyledTableRow key={i}>
                <StyledTableCell component="th" scope="row">
                  {user.id}
                </StyledTableCell>
                <StyledTableCell align="right">{user.name}</StyledTableCell>
                <StyledTableCell align="right">{user.age}</StyledTableCell>
                <StyledTableCell align="right">{user.email}</StyledTableCell>
                <StyledTableCell align="right">{user.phone}</StyledTableCell>
                <StyledTableCell align="right">
                  <Stack spacing={2} direction="row" justifyContent="flex-end">
                    <Button variant="contained" onClick={() => navigate(`/viewUser/${user.id}`)} color="primary">View</Button>
                    <Button variant="contained" onClick={() => navigate(`/editUser/${user.id}`)} color="secondary">Update</Button>
                    <Button variant="contained" color="error" onClick={() => onDeleteHandler(user.id)}>Delete</Button>
                  </Stack>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
