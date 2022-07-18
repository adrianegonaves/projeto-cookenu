import React, {useState} from "react"
import useForm from "../../hooks/useForm";
import { Button, TextField } from "@material-ui/core";

const LoginForm = () => {
  const {form, onChange, clear} = useForm({ email: "", password: "" });

  const onSubmitForm = (event) => {
    event.preventDefault()
  };

  return (
    <div>
      <div>
        <form onSubmit={onSubmitForm}>
          <TextField
            label={"email"}
            name={"email"}
            value={form.email}
            onChange={onChange}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"email"}
          />
          <TextField
            label={"senha"}
            name={"password"}
            value={form.password}
            onChange={onChange}
            variant={"outlined"}
            margin={"normal"}
            required
            type={"password"}
          />
          <Button
            type={"submit"}
            fullWidth
            variant={"container"}
            color="primary"
            margin={"normal"}
          >
            Fazer Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
