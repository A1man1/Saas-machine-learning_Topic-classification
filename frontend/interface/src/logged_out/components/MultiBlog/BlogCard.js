import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames";
import Chip from '@material-ui/core/Chip';
import { Typography, Card, Box, withStyles } from "@material-ui/core";

const styles = theme => ({
  img: {
    width: "100%",
    height: "auto",
    marginBottom: 8
  },
  topic:{
    'background-color':theme.palette.primary.main,
    color : '#000000'
  },
  card: {
    boxShadow: theme.shadows[2]
  },
  noDecoration: {
    textDecoration: "none !important"
  },
  title: {
    transition: theme.transitions.create(["background-color"], {
      duration: theme.transitions.duration.complex,
      easing: theme.transitions.easing.easeInOut
    }),
    cursor: "pointer",
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.dark
    },
    "&:active": {
      color: theme.palette.primary.dark
    }
  },
  link: {
    transition: theme.transitions.create(["background-color"], {
      duration: theme.transitions.duration.complex,
      easing: theme.transitions.easing.easeInOut
    }),
    cursor: "pointer",
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.dark
    }
  },
  showFocus: {
    "&:focus span": {
      color: theme.palette.secondary.dark
    }
  }
});

function BlogCard(props) {
  const { classes, url, src, date, title, snippet,topic} = props;
  return (
    <Card className={classes.card}>
      {src && (
        <Link to={url} tabIndex={-1}>
          <img src={src} className={classes.img} alt="" />
        </Link>
      )}

      <Box p={2}>
        <Typography variant="body2" color="textSecondary">
          {date}
        </Typography>

        <Link
          to={url}
          className={classNames(classes.noDecoration, classes.showFocus)}
        >
          <Chip 
           label="Electronic science"
           color="secondary"
          />
          <Typography variant="h6" >
            <span className={classes.title}>{title}</span>
            <br />
          </Typography>
        </Link>
        <Typography variant="body1" color="textSecondary">
          {snippet}
          <Link to={url} className={classes.noDecoration} tabIndex={-1}>
            <span className={classes.link}> read more...</span>
          </Link>
        </Typography>
      </Box>
    </Card>
  );
}

BlogCard.propTypes = {
  classes: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  snippet: PropTypes.string.isRequired,
  src: PropTypes.string,
  topic : PropTypes.string.isRequired 
};

export default withStyles(styles, { withTheme: true })(BlogCard);
