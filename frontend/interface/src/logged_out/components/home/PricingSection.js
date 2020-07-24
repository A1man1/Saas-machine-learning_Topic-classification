import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Grid,
  Typography,
  isWidthUp,
  withWidth,
  withStyles
} from "@material-ui/core";
import PriceCard from "./PriceCard";
import calculateSpacing from "./calculateSpacing";

const styles = theme => ({
  containerFix: {
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6)
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    overflow: "hidden",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  cardWrapper: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      algin:'center',
      marginRight: "auto",
      maxWidth: 340
    }
  },
  cardWrapperHighlighted: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      align:'center',
      marginRight: "auto",
      maxWidth: 360
    }
  }
});

function PricingSection(props) {
  const { width, classes } = props;
  return (
    <div className="lg-p-top" style={{ backgroundColor: "#FFFFFF" }}>
      <Typography variant="h3" align="center" className="lg-mg-bottom">
        Scope of Project
      </Typography>
      <div className={classNames("container-fluid", classes.containerFix)}>
        <Grid container
          spacing={calculateSpacing(width)}
          className={classes.gridContainer}
          marginLeft="30px"
        >
          
          <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            sm={5}
            lg={3}
            data-aos="zoom-in-up"
            data-aos-delay={isWidthUp("md", width) ? "500" : "200"}
          >
            <PriceCard
              title="Working System"
              pricing={
                <span align="center">
                  <Typography display="inline" align="center" >Content Management System</Typography>
                </span>
              }
              features={["content setting ", "content classification", "performance"]}
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            sm={5}
            lg={3}
            data-aos="zoom-in-up"
            data-aos-delay={isWidthUp("md", width) ? "500" : "200"}
          >
            <PriceCard
              title="Regulation"
              pricing={
                <span align="center">
                  <Typography display="inline" align="center" >Security system</Typography>
                </span>
              }
              features={["Analysis ", "Offisive Content Remover", "encryption Data"]}
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            sm={10}
            lg={5}
            data-aos="zoom-in-up"
            data-aos-delay={isWidthUp("md", width) ? "500" : "200"}
          >
            <PriceCard
              title="Up coming"
              pricing={
                <span align="center">
                  <Typography display="inline" align="center" >Future Scope</Typography>
                </span>
              }
              features={["Smart phone appication.", "Modification as per needs of the organization.", "Integratable with another project."]}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

PricingSection.propTypes = {
  width: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(
  withWidth()(PricingSection)
);
