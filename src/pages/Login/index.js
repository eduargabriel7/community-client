// imported modules
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import userActions from 'redux/user/userActions';

// apollo client
import { useMutation } from '@apollo/client';
import LOGIN_USER from 'graphql/users/mutations/loginUserMutation';

// components
import LoginPage from './page';

// create component
const Login = () => {

   // hooks react router
   const history = useHistory();

   // state component
   const [values, setValues] = useState({
      email: 'testuser@gmail.com',
      password: 'test1234'
   })
   const [errors, setErrors] = useState({})

   // on change input values
   const onChangeValues = (event) => {
      setValues({
         ...values,
         [event.target.name]: event.target.value
      })
   }

   // hook apollo client
   const [login, { loading }] = useMutation(LOGIN_USER, {
      update: (_, { data }) => {
         userActions.login(data.login);
         history.push('/');
      },
      onError: (error) => {
         console.log(error)
         setErrors(error.graphQLErrors[0].extensions.errors);
      }
   });

   // when submitting form
   const onSubmitForm = (event) => {
      event.preventDefault();
      login({ variables: values });
   }

   // render
   return (
      <LoginPage
         values={values}
         onChangeValues={onChangeValues}
         onSubmitForm={onSubmitForm}
         loading={loading}
         errors={errors}
      />
   )
}

// export component
export default Login;