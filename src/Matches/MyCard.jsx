import React, { useState } from "react";


import {
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
} from "@material-ui/core";
import { getMatchDetail } from "../api/api";

import "./MyCard.scss"

const MyCard = ({ match }) => {
  // console.log(match)
  const [detail, setDetail] = useState({});
  const [open, setOpen] = useState(false);

  const getMatchCard = () => (
    <div>
      <Card style={{
          background: "#e2e2e2",
          marginTop: 15,
        }}>
        <CardContent>
          <Grid container justify="center" alignItems="center" spacing={4}>
            <Grid item>
              <Typography variant="h5">{match.teams[0]}</Typography>
            </Grid>
            <Grid item>
              <img
                style={{ width: 85 }}
                src="./img/vs.png"
                alt=""
              />
            </Grid>
            <Grid item>
              <Typography variant="h5">{match.teams[1]}</Typography>
            </Grid>
          </Grid>
        </CardContent>

        <CardActions>
          <Grid container justify="center">
            {match.status!== "Match not started" ? 
            <Button
              onClick={() => {
                showDetailBtnClicked(match["id"]);
              }}
              variant="outlined"
              color="secondary"
            >
              Show Detail
            </Button> : <></>}
            <Button
              style={{ marginLeft: 5 }}
              variant="outlined"
              color="primary"
            >
              Starting time {new Date(match.dateTimeGMT).toLocaleString()}
            </Button>
          </Grid>
        </CardActions>
      </Card>
    </div>
  );

  const showDetailBtnClicked = (id) => {
    console.log(id);
    getMatchDetail(id)
      .then((data) => {
        console.log(data);
        setDetail(data.data);
        handleClickOpen();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {getMatchCard()}
      {open ? (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Match Detail..."}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Typography>{detail.stat}</Typography>
              <Typography>
                Match:
                <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                  {" "}
                  {detail.status}
                </span>
              </Typography>
              <Typography>
                Score:
                <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                  {" "}
                  {detail.score[0].r}
                  {"/"}
                  {detail.score[0].w}
                </span>
              </Typography>
              <Typography>
                Overs:
                <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                  {" "}
                  {detail.score[0].o}
                </span>
              </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      ) : (
        <></>
      )}
    </>
  );
};

export default MyCard;
