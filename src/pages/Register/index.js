// imported modules
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import RegisterPage from './page';
import { useMutation } from '@apollo/client';
import REGISTER_USER from 'graphql/users/mutations/registerUserMutation';
import userActions from 'redux/user/userActions';

// create component
const Register = () => {

   // hooks react router
   const history = useHistory();

   // state component
   const [values, setValues] = useState({
      fullname: 'Test User',
      username: 'testuser',
      email: 'testuser@gmail.com',
      password: 'test1234',
      confirmPassword: '',
   })
   const [errors, setErrors] = useState({})

   // hook apollo client
   const [registerUser, { loading }] = useMutation(REGISTER_USER, {
      update: (_, { data }) => {
         userActions.login(data.register);
         history.push('/');
      },
      onError: (error) => {
         console.log(error.message);
         setErrors(error.graphQLErrors[0].extensions.errors);
      }
   });

   // on change input values
   const onChangeValues = (event) => {
      setValues({
         ...values,
         [event.target.name]: event.target.value
      })
   }

   // on submit register
   const onSubmitRegister = (event) => {
      event.preventDefault();
      // email error
      const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if (!values.email.match(regex)) {
         setErrors({
            email: "The email entered is not valid"
         })
      }
      // confirm password error
      else if (values.password !== values.confirmPassword) {
         setErrors({
            confirmPassword: "Passwords are not equal"
         })
      }
      else {
         registerUser({ variables: values });
      }

   }

   // render
   return (
      <RegisterPage
         values={values}
         onChangeValues={onChangeValues}
         onSubmitRegister={onSubmitRegister}
         loading={loading}
         errors={errors}
      />
   )
}

// export component
export default Register;
