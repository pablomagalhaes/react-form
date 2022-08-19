import React, { useState, useMemo } from "react";
import {
    SButton,
    SForm,
    SFormControl,
    SFormTitle,
    SInput,
    SLabel,
} from "./styles";

const prepareForm = (formArr) => {
    return formArr.reduce((r, v) => ({ ...r, [v.name]: "" }), {});
};

const Form = ({ title, formArr, submitBtn, onSubmit, redirect }) => {
    const initialForm = useMemo(() => prepareForm(formArr), [formArr]);
    const [form, setForm] = useState(initialForm);

    const onChangeHandler = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
    const onSumbitHandler = () => onSubmit(form, () => setForm(initialForm));

    return (
        <SForm autoComplete={"off"}>
            <SFormTitle>{title}</SFormTitle>
            {formArr.map(({ label, name, type }, index) => (
                <SFormControl key={index}>
                    <SLabel htmlFor={name}>{label}</SLabel>
                    <SInput
                        id={name}
                        name={name}
                        type={type}
                        value={form[name]}
                        onChange={(e) => onChangeHandler(e)}
                    />
                </SFormControl>
            ))}
            <SButton
                onClick={(e) => {
                    e.preventDefault();
                    onSumbitHandler();
                }}
            >
                {submitBtn}
            </SButton>
        </SForm>
    );
};

Form.defaultProps = {
    title: "Sign In",
    formArr: [
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
    ],
    submitBtn: "Sign In",
    onSubmit: (form) => console.log(form),
    redirect: null,
};

export default Form;
