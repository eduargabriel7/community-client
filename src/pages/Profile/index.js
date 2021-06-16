// imported modules
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { useQuery } from '@apollo/client';
import useSubscribeToNewFollow from 'hooks/useSubscribeToNewFollow';
import useSubscribeToNewUnfollow from 'hooks/useSubscribeToNewUnfollow';

// graphql queries
import { GET_USER } from 'graphql/users/usersQuery';
import NEW_FOLLOW from 'graphql/users/subscriptions/newFollowSubscription';
import NEW_UNFOLLOW from 'graphql/users/subscriptions/newUnfollowSubscription';

// components
import ProfilePage from './page';

// create component
const Profile = ({ userAuth }) => {

     // hooks
     const { username } = useParams();

     // hooks apollo client
     const { subscribeToMore, ...result } = useQuery(
          GET_USER,
          { variables: { username } }
     );

     // hooks subscriptions
     const subscribeToNewFollow = useSubscribeToNewFollow(
          subscribeToMore, NEW_FOLLOW, { variables: { username } }
     )
     const subscribeToNewUnfollow = useSubscribeToNewUnfollow(
          subscribeToMore, NEW_UNFOLLOW, { variables: { username } }
     )

     // render
     return (
          <ProfilePage
               userAuth={userAuth}
               {...result}
               subscribeToNewFollow={subscribeToNewFollow}
               subscribeToNewUnfollow={subscribeToNewUnfollow}
          />
     )
}

// state mapping to pass properties to component
const mapStateToProps = (state) => ({
     userAuth: state.userState.userAuth
})

// export component
export default connect(mapStateToProps)(Profile);