import React from "react";
import { SFixedContainer } from "../components/Containers/styles";
import Form from "../components/Form/Form";

import { httpHelper } from "../helpers/httpHelper"

const Register = () => {

    const url = "http://localhost:3333/users"
	const api = httpHelper()


    const onSubmitHandler = (form, callback) => {
        console.log("Register Submitted:", form);
        postUser(form)
        callback();
    };

    const postUser = user => {
		api
			.post(`${url}`, { body: user })
			.then(res => res)
			.catch(err => console.log(err))
	}

    return (
        <SFixedContainer size={275}>
            <Form
                title={"Register"}
                formArr={formArr}
                submitBtn={"Register"}
                onSubmit={onSubmitHandler}
            />
        </SFixedContainer>
    );
};

const formArr = [
    {
        label: "Name",
        name: "name",
        type: "text",
    },
    {
        label: "Email",
        name: "email",
        type: "text",
    },

    {
        label: "Password",
        name: "password",
        type: "password",
    },
];

export default Register;
