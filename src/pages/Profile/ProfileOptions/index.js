// imported modules
import { useState, useEffect } from 'react';

// apollo client
import { useMutation } from '@apollo/client';
import FOLLOW_USER from 'graphql/users/mutations/followUserMutation';
import LoadingIcon from 'assets/LoadingIcon';

// create component
const ProfileOptions = ({ getUser, userAuth }) => {

   // state component
   const [isFollowed, setIsFollowed] = useState(
      getUser.followers.find(
         follower => follower.id === userAuth.id
      ) ? true : false
   )

   // hook apollo client
   const [followUser, { loading }] = useMutation(FOLLOW_USER, {
      update: (_, { data }) => {
         setIsFollowed(data.followUser);
      },
      onError: (error) => {
         console.log(error.message);
      }
   })

   // on click follow
   const onClickFollow = () => {
      followUser({
         variables: { followerId: userAuth.id, followedId: getUser.id }
      })
   }

   // effect after rendering
   useEffect(() => {
      setIsFollowed(
         getUser.followers.find(
            follower => follower.id === userAuth.id
         ) ? true : false
      )
   }, [setIsFollowed, getUser, userAuth])

   // render
   return (
      <button
         onClick={onClickFollow}
         className="absolute button origin-top-right lg:top-60 sm:top-48 top-32
         sm:right-4 right-2 sm:py-2 py-1 px-3 rounded-3xl border-2 border-opacity-60
         border-blue-600 font-semibold hover-active-blue sm:w-24 w-20
         flex items-center justify-center"
      >
         {
            loading
               ? <LoadingIcon className="animate-spin sm:h-5 h-4" viewBox="0 0 24 24" />
               : (
                  isFollowed ? 'Unfollow' : 'Follow'
               )
         }
      </button>
   )
}

// export component
export default ProfileOptions;
