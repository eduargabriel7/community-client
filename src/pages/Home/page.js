// imported modules
import PostItem from 'components/PostItem';

// create component
const HomePage = ({
   subscribeToMore,
   posts
}) => {

   // render
   return (
      <div
         className="w-full h-full xl:pl-72 sm:pl-20
         sm:pb-2 pb-14 sm:pt-24 pt-16"
      >
         <div
            className="w-full flex flex-col space-y-4 pb-1 sm:pr-2 h-full
            overflow-auto overscroll-contain"
         >
            {
               posts.map(post => {
                  return (
                     <PostItem
                        subscribeToMore={subscribeToMore}
                        post={post}
                        key={post.id}
                     />
                  )
               })
            }
         </div>
      </div>
   )
}

// export component
export default HomePage;