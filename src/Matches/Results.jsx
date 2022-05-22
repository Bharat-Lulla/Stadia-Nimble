import React, { useState, useEffect } from "react";

import { getMatches } from "../api/api";
import MyCard from "./MyCard";
import { Container, Grid} from "@material-ui/core";

const Results = () => {
    const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches()
      .then((data) => {
        console.log(data);
        setMatches(data.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <Container>
    <Grid container>
      <Grid item xs={12}>
        {matches.map((match) => (
           match.status !== "Match not started" ? <MyCard match={match}></MyCard> : <></>
        ))}
      </Grid>
    </Grid>
  </Container>
  )
} 

export default Results;