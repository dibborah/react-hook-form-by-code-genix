import { useForm } from 'react-hook-form';
type FormFields = {
    name: string,
    email: string,
}
const Users = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormFields>({mode:'all'});
    const onSubmit = (data) => {
        console.log(data);
    }
    return <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email', {
            required: { value: true, message: 'Email is required' },
            maxLength: { value: 8, message: 'Too many characters' },
        })} placeholder='Enter Email' />
        {errors?.email && <div style={{color: 'red'}}>{errors.email.message}</div>}
    </form>
}

export default Users;

// Note:
// register() => // required, ref, onBlur, disabled, name, min, maxLength, max, onChange
// so that is the reason register is passed
// Clean code
// easy to maintain