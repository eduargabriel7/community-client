// imported modules
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ExclamationCircleIcon } from "@heroicons/react/outline";
import LoadingIcon from 'assets/LoadingIcon';

// create component
const RegisterPage = ({
    values,
    onChangeValues,
    onSubmitRegister,
    loading,
    errors
}) => {

    // hooks react router
    const history = useHistory();

    // state component
    const [isDisabled, setIsDisabled] = useState(true)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [isFocusedPassword, setIsFocusedPassword] = useState(false)
    const [isFocusedConfirmPassword, setIsFocusedConfirmPassword] = useState(false)

    // effect after rendering
    useEffect(() => {
        setIsDisabled(
            values.username === '' ||
            values.fullname === '' ||
            values.email === '' ||
            values.password === '' ||
            values.confirmPassword === ''
        )
    }, [values])

    // render
    return (
        <div
            className="lg:w-104 w-full lg:bg-paper lg:py-8 py-4 lg:px-8 px-4
            flex flex-col items-center space-y-5 md:rounded-3xl rounded-md"
        >
            <span className="sm:text-2xl text-xl font-semibold">
                Welcome
            </span>

            {/* register form */}
            <form
                autoComplete="off"
                onSubmit={onSubmitRegister}
                className="flex flex-col items-center space-y-5 w-full max-w-sm"
            >
                {/* input username */}
                <input
                    name="username" type="text"
                    placeholder="username" value={values.username}
                    onChange={onChangeValues}
                    className={`input-text w-full p-2 rounded-xl
                    ${errors?.username ? 'border-red-500' : ''}`}
                />

                {/* input fullname */}
                <input
                    name="fullname" type="text"
                    placeholder="fullname" value={values.fullname}
                    onChange={onChangeValues}
                    className={`input-text w-full p-2 rounded-xl
                    ${errors?.fullname ? 'border-red-500' : ''}`}
                />

                {/* input email */}
                <input
                    name="email" type="text"
                    placeholder="email" value={values.email}
                    onChange={onChangeValues}
                    className={`input-text w-full p-2 rounded-xl
                    ${errors?.email ? 'border-red-500' : ''}`}
                />

                {/* input password */}
                <div
                    className={`input-text w-full flex items-center rounded-xl
                        ${errors.password && 'border-red-500'}
                        ${isFocusedPassword && 'border-blue-800'}`}
                >
                    <input
                        name="password" type={showPassword ? 'text' : 'password'}
                        placeholder="password" value={values.password}
                        onFocus={() => setIsFocusedPassword(true)}
                        onBlur={() => setIsFocusedPassword(false)}
                        onChange={onChangeValues}
                        className="w-full p-2 bg-transparent outline-none 
                        placeholder-gray-500 font-medium"
                    />
                    {
                        values.password !== '' &&
                        <p
                            onClick={() => setShowPassword(showPassword ? false : true)}
                            className="p-2 cursor-pointer text-gray-500"
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </p>
                    }
                </div>

                {/* input confirm password */}
                <div
                    className={`input-text w-full flex items-center rounded-xl
                    ${errors.confirmPassword && 'border-red-500'}
                    ${isFocusedConfirmPassword && 'border-blue-800'}`}
                >
                    <input
                        name="confirmPassword" type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="confirm password" value={values.confirmPassword}
                        onFocus={() => setIsFocusedConfirmPassword(true)}
                        onBlur={() => setIsFocusedConfirmPassword(false)}
                        onChange={onChangeValues}
                        className="w-full p-2 bg-transparent outline-none 
                        placeholder-gray-500 font-medium"
                    />
                    {
                        values.confirmPassword !== '' &&
                        <p
                            onClick={() => setShowConfirmPassword(showConfirmPassword ? false : true)}
                            className="p-2 cursor-pointer text-gray-500"
                        >
                            {showConfirmPassword ? 'Hide' : 'Show'}
                        </p>
                    }
                </div>

                {/* register button */}
                <button
                    type="submit"
                    disabled={isDisabled}
                    className={`${isDisabled && 'opacity-60'}
                        button button-blue w-full p-2 rounded-xl
                        flex items-center justify-center`}
                >
                    {
                        loading ?
                            <LoadingIcon className="sm:h-5 h-4 text-gray-200 animate-spin" />
                            : 'Register'
                    }
                </button>
            </form>

            {/* link to login */}
            <div className="flex items-center space-x-2">
                <p>Do you already have an account ?</p>
                <p
                    onClick={() => history.push('/login')}
                    className="whitespace-nowrap text-blue-600 cursor-pointer"
                >
                    Sign in
                </p>
            </div>

            {/* error message */}
            {
                Object.values(errors).map(message => (
                    <p
                        key={message}
                        className="text-red-600 flex items-center"
                    >
                        <ExclamationCircleIcon className="icon" />
                        {message}
                    </p>
                ))
            }
        </div>
    )
}

// export component
export default RegisterPage;