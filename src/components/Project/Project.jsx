import styles from "../../styles/Project/Project.module.scss";
import { NavLink } from "react-router-dom";
import projects from "./utils";

import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import { useState } from "react";

const Project = () => {
  const MuiStyles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
      backgroundColor: "#161a1d",
      color: "white",
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

  const DialogTitle = withStyles(MuiStyles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);

  // state variables
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleClickOpen = (e) => {
    setOpen(true);
    setIndex(e.currentTarget.getAttribute("data-index"));
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h3>My Recent Work</h3>
          <p>
            Here are a few projects I've worked on recently. Want to see more?{" "}
            <NavLink to="/contact">Contact me.</NavLink>{" "}
          </p>
        </div>
        <div className={styles.gridContainer}>
          {projects.map((project, index) => {
            return (
              <div
                className={styles.cards}
                onClick={handleClickOpen}
                key={index}
                data-index={index}
              >
                <div className={styles.card}>
                  <div className={styles.cardLogo}>
                    <i className="fas fa-desktop"></i>
                  </div>
                  <div className={styles.cardContent}>
                    <div>
                      <h3>{project.title}</h3>
                    </div>
                    <div>
                      <p>Summary :</p>
                      <p>{project.summary}</p>
                    </div>
                    <div>
                      <p>
                        Tech stack : <span>{`${project.tech}`}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            {projects[index].title}
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              <p className={styles.typography}>Description : </p>
              <p className={styles.typographyContent}>
                {projects[index].description.one}
              </p>
            </Typography>
            <Typography gutterBottom>
              <p className={styles.typographyContent}>
                {projects[index].description.two}
              </p>
            </Typography>
            <Typography gutterBottom>
              <p className={styles.typography}>
                Duration :{" "}
                <span className={styles.span}>{projects[index].duration}</span>
              </p>
            </Typography>
            <Typography gutterBottom>
              <p className={styles.typography}>
                Technology Used :{" "}
                <span className={styles.span}>{`${projects[index].tech}`}</span>
              </p>
            </Typography>
            <Typography gutterBottom>
              <p className={styles.typography}>
                Repository :{" "}
                <span className={styles.span}>
                  <NavLink to="" className={styles.typography}>
                    {projects[index].repo}
                  </NavLink>
                </span>
              </p>
            </Typography>
            <Typography gutterBottom>
              <NavLink to="" className={styles.typography}>
                Need to add a link
              </NavLink>
            </Typography>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Project;
