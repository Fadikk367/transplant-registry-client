import { Card, Stack, Typography, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { addOrgan } from 'api';
import { HLA, OrganType } from 'constants/enums';
import { useForm, SubmitHandler, SubmitErrorHandler, Controller } from 'react-hook-form';

type AddOrganValues = {
  type: OrganType;
  hla: HLA;
}

type AddOrganFormProps = {
  closeModal(): void;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};


const AddOrganForm = ({closeModal}: AddOrganFormProps) => {
  const queryClient = useQueryClient();
  const {handleSubmit, control} = useForm<AddOrganValues>();

  const onValidData: SubmitHandler<AddOrganValues> = async (values) => {
    try {
      await addOrgan(values);
      await queryClient.invalidateQueries(['organs']);
      closeModal();
    } catch (error) {
      if (error instanceof Error) {
        // setError('password', {message: error.message});
      }
    }
  }

  const onInvalidData: SubmitErrorHandler<AddOrganValues> = (errors) => {
    console.log({errors});
  }

  const onSubmit = handleSubmit(onValidData, onInvalidData);
  
  return (
    <Card elevation={13} sx={{width: 400, padding: '20px', ...style}}>
      <Stack spacing={3} component="form" onSubmit={onSubmit}>
        <Typography variant="h5" gutterBottom>Register new organ available for tranplant</Typography>
        <Controller
          name="type"
          control={control}
          rules={{required: {value: true, message: 'Organ is required'}}}
          render={({ field }) => (
            <FormControl fullWidth>
              <InputLabel id="organ-label">Organ</InputLabel>
              <Select {...field} label="Organ" labelId="organ-label" required>
                <MenuItem value={OrganType.Heart}>Heart</MenuItem>
                <MenuItem value={OrganType.Lung}>Lung</MenuItem>
                <MenuItem value={OrganType.Kidney}>Kidney</MenuItem>
                <MenuItem value={OrganType.Liver}>Liver</MenuItem>
              </Select>
          </FormControl>
          )}
        />
        <Controller
          name="hla"
          control={control}
          rules={{required: {value: true, message: 'HLA is required'}}}
          render={({ field }) => (
            <FormControl fullWidth>
              <InputLabel id="hla-label">HLA (human leukocyte antigens)</InputLabel>
              <Select {...field} label="HLA (human leukocyte antigens)" labelId="hla-label" required>
                <MenuItem value={HLA.A}>A</MenuItem>
                <MenuItem value={HLA.B}>B</MenuItem>
                <MenuItem value={HLA.C}>C</MenuItem>
                <MenuItem value={HLA.D}>D</MenuItem>
              </Select>
          </FormControl>
          )}
        />
        <Button variant="contained" type="submit" sx={{marginTop: 10}}>SUBMIT</Button>
      </Stack>
    </Card>
  )
}

export default AddOrganForm;
