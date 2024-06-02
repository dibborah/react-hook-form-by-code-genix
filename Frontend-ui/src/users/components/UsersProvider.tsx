import { FormProvider, useForm } from "react-hook-form";
import { Schema, defaultValues, schema } from "../types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Users from "./Users";
import { DevTool } from '@hookform/devtools';

const UsersProvider = () => {
    const methods = useForm<Schema>({
        mode: 'all',
        resolver: zodResolver(schema),
        defaultValues,// Always pass default values in your useForm// It is for better error handling and performance optimization(???)
    });
    return (
        <FormProvider {...methods}>
            <Users />
            <DevTool control={methods.control}/>
        </FormProvider>
    )
}

export default UsersProvider;