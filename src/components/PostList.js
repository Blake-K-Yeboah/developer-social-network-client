// Query Hook From Apollo
import { useQuery } from "@apollo/client";

// Material UI Components
import {
   Typography,
   Container,
   Grid,
   CircularProgress,
} from "@material-ui/core";

// Query
import { FETCH_POSTS_QUERY } from "../util/graphql";

// Components
import PostItem from "./PostItem";

const PostList = () => {
   const { loading, data } = useQuery(FETCH_POSTS_QUERY);

   return (
      <Container>
         <br />
         <br />
         <br />
         <br />
         <Typography variant="h3" component="h3">
            Posts
         </Typography>
         <br />
         <br />
         <Grid container spacing={4}>
            {loading ? (
               <CircularProgress />
            ) : (
               <>
                  {data.getPosts &&
                     data.getPosts.map((post) => (
                        <PostItem post={post} key={post.id} />
                     ))}
               </>
            )}
         </Grid>
      </Container>
   );
};

export default PostList;
