import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../actions";
import SingleCourse from "../components/SingleCourse";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
      maxHeight: "100vh",
    },
  },
  links: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  scrollableDiv: {
    maxHeight: "80vh",
    maxWidth: "130vh",
    overflowY: "scroll",
  },
}));

function Course() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  const dispatch = useDispatch();

  const allCourses = useSelector((state) => state.courseReducer.allCourses);

  function handleGetAllCourses() {
    return dispatch(Actions.getCourses());
  }

  return (
    <div className={classes.root}>
      <h3>Course</h3>
      <Typography className={classes.links}>
        <Link href='#' onClick={handleGetAllCourses}>
          All Courses
        </Link>

        <Link href='#' onClick={preventDefault} color='inherit'>
          The Newest
        </Link>

        <Link href='#' onClick={preventDefault} color='inherit'>
          Top Rated
        </Link>

        <Link href='#' onClick={preventDefault} color='inherit'>
          Most Popular
        </Link>
      </Typography>
      {allCourses && (
        <div className={classes.scrollableDiv}>
          {allCourses.map((course) => {
            return <SingleCourse key={course.id} course={course} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Course;
