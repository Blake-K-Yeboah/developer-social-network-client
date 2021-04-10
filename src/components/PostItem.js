// Material UI Components
import { Grid, Card, CardContent, Typography } from "@material-ui/core";

const PostItem = ({ post }) => {
   return (
      <Grid item xs={12} sm={6} md={4}>
         <Card variant="outlined" color="primary">
            <CardContent>
               <Typography variant="body1" component="p">
                  {post.body}
               </Typography>
            </CardContent>
         </Card>
      </Grid>
   );
};

export default PostItem;
