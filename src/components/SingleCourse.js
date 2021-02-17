import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Icon from "@material-ui/core/Icon";
import WhatshotIcon from "@material-ui/icons/Whatshot";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#eee",
    maxHeight: "20vh",
    maxWidth: "130vh",
  },
  dataDiv: {
    display: "flex",
    margin: "1vh 1vh",
  },
}));

function SingleCourse(course) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.dataDiv}>
        <Avatar
          style={{ margin: "6% 2%" }}
          variant='square'
          alt='Remy Sharp'
          src='/static/images/avatar/1.jpg'
          sizes='large'
        />
        <div style={{ margin: "2% 2%" }}>
          <h4>{course.course.title}</h4>
          <p>{`by ${course.course.author_name}`}</p>
        </div>

        <div style={{ margin: "6% 4%", display: "flex" }}>
          <Icon style={{ margin: "13% 0%" }}>
            <AccessTimeIcon />
          </Icon>
          <p>{course.course.duration}</p>
        </div>

        <div style={{ margin: "6% 4%", display: "flex" }}>
          <Icon style={{ margin: "25% 2%" }}>
            <WhatshotIcon />
          </Icon>
          <p>{course.course.rating}</p>
        </div>

        <Button
          variant='contained'
          style={{ margin: "6% 2%", backgroundColor: "black", color: "white" }}>
          Disabled
        </Button>
      </div>
    </div>
  );
}

export default SingleCourse;
