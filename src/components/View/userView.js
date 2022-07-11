import React from "react";
import {
  Paper,
  Grid,
  Box,
  Typography,
  Button,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PersonIcon from '@mui/icons-material/Person';
import { getFlag } from "../../helpers/utils";
import useStyles from "./style";
import { useParams, useNavigate } from "react-router-dom";
import { useGetPostByIdQuery } from "../../services/post";

const FullProfile = () => {
  const classes = useStyles();
  const params = useParams();
  const navigate = useNavigate();
  const { id } = params;

  const { data, isLoading } = useGetPostByIdQuery(id);

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <>
      <Paper elevation={0} className={classes.root}>
        <div id="user">
          <span>
            {`${data?.first_name?.slice(0, 1)}${data?.last_name?.slice(0, 1)}`}
          </span>
        </div>
        <div id="content">
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item md={12} sm={12} xs={12}>
              <Typography variant="h5" gutterBottom>
                <Box textAlign="center">
                  {data?.first_name} {data?.last_name}
                </Box>
              </Typography>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              <Typography variant="h6" gutterBottom>
                <Box textAlign="center">{data?.job}</Box>
              </Typography>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              <Typography variant="overline" gutterBottom>
                <Grid container justifyContent="center" alignItems="center">
                  <img
                    src={getFlag(data?.country)}
                    alt={`${data?.country} flag`}
                    className="flag"
                  />{" "}
                  &ensp; {data?.city}, {data?.country}
                </Grid>
              </Typography>
            </Grid>
          </Grid>
          <Grid
            id="contactInfo"
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              <ListItem>
              <ListItemAvatar>
                  <Avatar>
                    <PersonIcon/>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={data?.age} />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <MailOutlineIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={data?.email} />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PhoneAndroidIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={data?.phone} />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <WorkOutlineIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={data?.company} secondary={data?.job} />
              </ListItem>
            </List>
          </Grid>
        </div>
      </Paper>
      <div className={classes.buttonWrapper}>
          <Button variant="contained"
           onClick={() => navigate("/")}>
          <ArrowRightAltIcon />Back to list</Button>
      </div>
    </>
  );
};
export default FullProfile;
