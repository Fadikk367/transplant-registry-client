import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import SideView from "components/SideView";
import { useAuth } from "hooks";
import { SubmitHandler, useForm, SubmitErrorHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const defaultValues = {
  login: '',
  password: '',
}

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const {handleSubmit, register, setError, formState: {errors}} = useForm({defaultValues});

  const formFields = {
    login: register('login', {required: {value: true, message: 'Login is required'}}),
    password: register('password', {required: {value: true, message: 'Password is required'}}),
  }

  const onValidData: SubmitHandler<typeof defaultValues> = async (values) => {
    try {
      await auth.login(values);
      navigate('/');
    } catch (error) {
      if (error instanceof Error) {
        setError('password', {message: error.message});
      }
    }
  }

  const onInvalidData: SubmitErrorHandler<typeof defaultValues> = (errors) => {
    console.log({errors});
  }

  const onSubmit = handleSubmit(onValidData, onInvalidData);

  return (
    <SideView>
      <Card elevation={13} sx={{width: 400, padding: '20px'}}>
        <Stack spacing={3} component="form" onSubmit={onSubmit}>
          <Typography variant="h5" gutterBottom>Login to the hospital</Typography>
          <TextField
            label="Login"
            variant="outlined"
            inputProps={formFields.login}
            helperText={errors.login?.message}
          />
          <TextField 
            type="password" 
            label="Password" 
            variant="outlined" 
            inputProps={formFields.password} 
            helperText={errors.password?.message}
          />
          <Typography variant="body2" gutterBottom>
            Dont have an account? <Link to="/register">Create here</Link>
          </Typography>
          <Button variant="contained" type="submit" sx={{marginTop: 10}}>LOGIN</Button>
        </Stack>
      </Card>
    </SideView>
  );
};

export default Login;
