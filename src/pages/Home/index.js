// imported modules
import { useQuery } from '@apollo/client';
import GET_POSTS from 'graphql/posts/postsQuery/getPosts';
import LoadingIcon from 'assets/LoadingIcon';

// components
import HomePage from './page';

// create component
const Home = () => {

   // graphql query
   const { subscribeToMore, loading, error, data } = useQuery(GET_POSTS);

   // is loading
   if (loading) {
      return (
         <div
            className="w-full h-full xl:pl-72 sm:pl-20
            sm:pb-2 pb-14 sm:pt-24 pt-16"
         >
            <div className="w-full h-1/2 flex items-center justify-center">
               <LoadingIcon className="h-10 text-blue-600 animate-spin" />
            </div>
         </div>
      )
   }

   // on error
   if (error) {
      return (
         <div
            className="w-full h-full xl:pl-72 sm:pl-20
            sm:pb-2 pb-14 sm:pt-24 pt-16"
         >
            <p>{error.message}</p>
         </div>
      )
   }

   // render
   return (
      <HomePage
         posts={data?.getPosts}
         subscribeToMore={subscribeToMore}
      />
   );
};

// export component
export default Home;