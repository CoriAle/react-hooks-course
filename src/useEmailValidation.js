import React, {useState, useReducer} from "React";
import useInterval from './useInterval';

function useEmailValidation (maxSeconds)
{	
	function validateEmail(email) {
	    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);
	 }

	 const [emailValid, setEmailValid] = useState(false);
	 const emailReducer = (state, action) => {
	 	const isValidEmail = validateEmail(action);
	 	setEmailValid(isValidEmail);
	 	return action;
	 };

	const [email, setEmail] = useReducer(emailReducer, "");
	const [count, setCount] = useState(maxSeconds);

	useInterval(() => {
		setCount(count -1);
	}, 1000);

	const retObject = {setEmail, count, email, emailValid, setCount};
	return retObject;
}

export default useEmailValidation;