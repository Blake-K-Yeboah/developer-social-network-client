import { gql } from "@apollo/client";

export const FETCH_POSTS_QUERY = gql`
   {
      getPosts {
         id
         body
         createdAt
         username
         comments {
            body
            username
            createdAt
         }
         likes {
            username
            likedAt
         }
         commentCount
         likeCount
      }
   }
`;
