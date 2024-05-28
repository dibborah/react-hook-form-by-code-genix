import { useForm } from 'react-hook-form';
type FormFields = {
    name: string,
    email: string,
}
const Users = () => {
    const { register } = useForm<FormFields>();
    return <input {...register('name')} placeholder='Enter Name' />
}

export default Users;


// Note: 
// register() => // required, ref, onBlur, disabled, name, min, maxLength, max, onChange
// so that is the reason register is passed