import { useContext } from "react";

// Material UI Components
import {
   Grid,
   Card,
   CardContent,
   CardHeader,
   CardActions,
   Typography,
   Avatar,
   Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

import { AuthContext } from "../context/auth";

const useStyles = makeStyles((theme) => ({
   avatar: {
      color: "#ffffff",
      backgroundColor: "#3F51B5",
   },
   button: {
      marginRight: 10,
   },
}));

const PostItem = ({ post }) => {
   const { user } = useContext(AuthContext);
   const classes = useStyles();

   const date = new Date(post.createdAt);
   const dateOutput = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

   return (
      <Grid item xs={12} sm={6} md={4}>
         <Card variant="outlined" color="primary">
            <CardHeader
               avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                     {post.username[0]}
                  </Avatar>
               }
               title={post.username}
               subheader={"Posted on " + dateOutput}
            />
            <CardContent>
               <Typography variant="body1" component="p">
                  {post.body}
               </Typography>
            </CardContent>
            <CardActions>
               {post.likes.find(
                  (like) => user && like.username === user.username
               ) ? (
                  <></>
               ) : (
                  <>
                     <Button variant="contained" color="primary">
                        <ThumbUpAltIcon className={classes.button} />
                        {post.likeCount}
                     </Button>
                  </>
               )}
            </CardActions>
         </Card>
      </Grid>
   );
};

export default PostItem;
