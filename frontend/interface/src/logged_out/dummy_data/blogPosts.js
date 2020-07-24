import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";
import axios from 'axios';

const topic=function() {
    return axios.get('http://127.0.0.1:8000/api/').then(response => {
      // returning the data here allows the caller to get it through another .then(...)
      return response.data
    })
  }


console.log(topic)

const content = (
  <Fragment>
    <Typography paragraph>
      {topic.content}
      </Typography>
  </Fragment>
);

export default [
  {
    title: topic.title,
    id: topic.id,
    date: topic.date,
    imageSrc: topic.picture,
    snippet: topic.content,
    content: content
  }
];
