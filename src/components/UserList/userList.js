import React, { useState, useEffect } from "react";
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
  useGetPostByLimitQuery,
  useDeletePostMutation,
  useGetPostFilterQuery,
} from "../../services/post";
import { ListItemAvatar, ButtonGroup, IconButton, List } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import useStyle from "./style";
// import { LIMITS } from "../../helpers/utils";

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
  const { data, isLoading, isError, isSuccess, error } = useGetAllPostQuery();
  const [deletePost] = useDeletePostMutation();
  let navigate = useNavigate();
  const classes = useStyle();
  // const [limit, setLimit] = useState("");

  const handleDeleteUser = async (id) => {
    if (window.confirm("Are you sure you want delete this user ?")) {
      await deletePost(id);
    }
  };

  console.log("Data: ", data);
  console.log("Success: ", isSuccess);

  if (isLoading) return <div>Loading....</div>;
  if (isError) return <h1>An error occured {error.error}</h1>;

  return (
    <div>
      <Grid container justifyContent="center" alignItems="center">
        {/* <ButtonGroup
          variant="contained"
          sx={{ margin: "10px auto" }}
          className={classes.btnWrapper}
        >
          {LIMITS.map((item) => (
            <Button
              key={item.id}
              className={limit === item.count ? classes.active : ""}
              onClick={() => setLimit(item.count)}
            >
              {item.id}
            </Button>
          ))}
        </ButtonGroup> */}
        <Button
          variant="contained"
          color="success"
          onClick={() => navigate("/addUser")}
        >
          Add User
        </Button>
      </Grid>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Profile</StyledTableCell>
              <StyledTableCell>#Id</StyledTableCell>
              <StyledTableCell align="right">First Name</StyledTableCell>
              <StyledTableCell align="right">Last Name</StyledTableCell>
              <StyledTableCell align="right">Age</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Phone</StyledTableCell>
              <StyledTableCell align="right">Country</StyledTableCell>
              <StyledTableCell align="right">City</StyledTableCell>
              <StyledTableCell align="right">Company</StyledTableCell>
              <StyledTableCell align="right">Job</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((user, i) => (
              <StyledTableRow key={i}>
                <List>
                  <ListItemAvatar>
                    <div className={classes.avatarWrap}>
                      {`${user?.first_name?.slice(
                        0,
                        1
                      )}${user?.last_name?.slice(0, 1)}`}
                    </div>
                  </ListItemAvatar>
                </List>
                <StyledTableCell component="th" scope="row">
                  {user.id}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {user.first_name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {user.last_name}
                </StyledTableCell>
                <StyledTableCell align="right">{user.age}</StyledTableCell>
                <StyledTableCell align="right">{user.email}</StyledTableCell>
                <StyledTableCell align="right">{user.phone}</StyledTableCell>
                <StyledTableCell align="right">{user.country}</StyledTableCell>
                <StyledTableCell align="right">{user.city}</StyledTableCell>
                <StyledTableCell align="right">{user.company}</StyledTableCell>
                <StyledTableCell align="right">{user.job}</StyledTableCell>
                <StyledTableCell align="right">
                  <Stack spacing={2} direction="row" justifyContent="flex-end">
                    <IconButton
                      edge="end"
                      color="primary"
                      onClick={() => navigate(`users/${user.id}`)}
                    >
                      <InfoIcon />
                    </IconButton>
                    <IconButton
                      edge="end"
                      color="secondary"
                      onClick={() => navigate(`/editUser/${user.id}`)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      edge="end"
                      color="error"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
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
