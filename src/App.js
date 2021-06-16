// imported modules
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// routes
import AuthRoute from 'routes/AuthRoute';
import PrivateRoute from 'routes/PrivateRoute';

// components
import Layout from 'components/Layout';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Profile from 'pages/Profile';
import Post from 'pages/Post';
import Error from 'pages/Error';

// create component
const App = () => {

   // render
   return (
      <Router>
         <Layout>
            <Switch>
               <PrivateRoute exact path='/' component={Home} />
               <AuthRoute exact path='/login' component={Login} />
               <AuthRoute path='/register' component={Register} />
               <PrivateRoute path='/:username/:postId' component={Post} />
               <PrivateRoute path='/:username' component={Profile} />
               <Route component={Error} />
            </Switch>
         </Layout>
      </Router>
   )
}

// export component
export default App;