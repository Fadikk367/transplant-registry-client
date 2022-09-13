import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import ColumnView from "components/SideView";
import { useAuth } from "hooks";
import { SubmitHandler, useForm, SubmitErrorHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const defaultValues = {
  login: '',
  password: '',
  name: '',
  city: '',
}

const Register = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const {handleSubmit, register, setError, formState: {errors}} = useForm({defaultValues});

  const formFields = {
    login: register('login', {required: {value: true, message: 'Login is required'}}),
    password: register('password', {required: {value: true, message: 'Password is required'}}),
    name: register('name', {required: {value: true, message: 'Name is required'}}),
    city: register('city', {required: {value: true, message: 'City is required'}}),
  }

  const onValidData: SubmitHandler<typeof defaultValues> = async (values) => {
    try {
      await auth.register(values);
      navigate('/');
    } catch (error) {
      if (error instanceof Error) {
        setError('city', {message: error.message});
      }
    }
  }

  const onInvalidData: SubmitErrorHandler<typeof defaultValues> = (errors) => {
    console.log({errors});
  }

  const onSubmit = handleSubmit(onValidData, onInvalidData);

  return (
    <ColumnView>
      <Card elevation={13} sx={{width: 400, padding: '20px'}}>
        <Stack spacing={3} component="form" onSubmit={onSubmit}>
          <Typography variant="h5" gutterBottom>Register new hospital</Typography>
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
          <TextField
            label="Name"
            variant="outlined"
            inputProps={formFields.name}
            helperText={errors.name?.message}
          />
          <TextField
            label="City"
            variant="outlined"
            inputProps={formFields.city}
            helperText={errors.city?.message}
          />
          <Typography variant="body2" gutterBottom>
            Already have an account? <Link to="/login">Login here</Link>
          </Typography>
          <Button variant="contained" type="submit" sx={{marginTop: 10}}>Register</Button>
        </Stack>
      </Card>
    </ColumnView>
  );
};

export default Register;
