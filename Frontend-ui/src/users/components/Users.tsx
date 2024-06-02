import { useFormContext } from 'react-hook-form';
import { Stack, TextField } from '@mui/material';
import { Schema } from '../types/schema';
import RHFAutocomplete from '../../components/RHFAutocomplete';
import { useEffect } from 'react';

const Users = () => {
    const { register, formState: { errors }, watch } = useFormContext<Schema>();

    useEffect(() => {
        const sub = watch((value) => {
            console.log(value);
        });
        return () => sub.unsubscribe();
    }, [watch]);

    // stack in MUI is display flex with column
    return (
        <Stack sx={{ gap: 2 }}>
            {/* <div style={{display: 'flex', flexDirection: 'column', gap: '2'}}></div> => Intrinsically this is happening in Stack */}
            <TextField
                {...register('name')}
                label='Name'
                error={!!errors?.name}
                helperText={errors.name?.message}
            />
            <TextField
                {...register('email')}
                label='Email'
                error={!!errors?.email}
                helperText={errors.email?.message}
            />
            <RHFAutocomplete<Schema>
                name='states'
                label='states'
                options={[
                    { id: '1', label: 'california' },
                    { id: '2', label: 'texas' },
                ]}
            />
        </Stack>
        // Why useFormContext in RHF is called an API
    );
};

export default Users;

// Note:
// register() => // required, ref, onBlur, disabled, name, min, maxLength, max, onChange
// so that is the reason register is passed
// Clean code
// easy to maintain