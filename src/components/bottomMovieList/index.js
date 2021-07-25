import React, { useContext } from "react";
import { PageNumberContext } from "../../contexts/pageNumberContext";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginBottom: theme.spacing(1.5),
  },
}));





const Bottom = () => {
    const context = useContext(PageNumberContext);

    const handlePageUp = (e) => {
        e.preventDefault();
        context.pageUp();
        console.log(context.pageNumber);
      };

      const handlePageDown = (e) => {
        e.preventDefault();
        context.pageDown();
        console.log(context.pageNumber);
      };

  const classes = useStyles();
  //const [pageNumber, setPageNumber] = useState(1);

  function LeftArrow(){
    if (context.pageNumber > 1){
        return (      
        <IconButton aria-label="go back" onClick={handlePageDown}>
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>);
    }
    else{
        return (      
            <IconButton aria-label="go back">
            <ArrowBackIcon color="primary" fontSize="large" />
          </IconButton>);
    }
};


  return (
    <Paper component="div" className={classes.root}>
    <LeftArrow pageNumber />
      <Typography variant="h4" component="h3">
        Page {context.pageNumber}
      </Typography>
      <IconButton aria-label="go forward" onClick={handlePageUp}>
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default withRouter(Bottom);