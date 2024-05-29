import { FormProvider, useForm } from "react-hook-form";
import { Schema, schema } from "../types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Users from "./Users";

const UsersProvider = () => {
    const methods = useForm<Schema>({
        mode: 'all',
        resolver: zodResolver(schema)
    });
    return (
        <FormProvider {...methods}>
          <Users />
        </FormProvider>
    )
}

export default UsersProvider;