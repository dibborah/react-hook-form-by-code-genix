import { useForm } from 'react-hook-form';
import { Stack, TextField } from '@mui/material';
import { Schema, schema } from '../types/schema';
import { zodResolver } from '@hookform/resolvers/zod'

const Users = () => {
    const { register, formState: {errors} } = useForm<Schema>({
        mode: 'all',
        resolver: zodResolver(schema)
    });

    return <Stack sx={{gap: 2}}>
        <TextField {...register('name')} label='Name' />
        <TextField {...register('email')} label='Email' />
    </Stack>
}

export default Users;

// Note:
// register() => // required, ref, onBlur, disabled, name, min, maxLength, max, onChange
// so that is the reason register is passed
// Clean code
// easy to maintain