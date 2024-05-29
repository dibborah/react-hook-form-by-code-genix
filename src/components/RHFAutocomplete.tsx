import { Autocomplete } from "@mui/material";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form"
import { Option } from "../types/Option";

type Props<T extends FieldValues> = {
  name: Path<T>;
  options: Option[];
};

const RHFAutocomplete = <T extends FieldValues>({ name, options }: Props<T>) => {
    const { control } = useFormContext();
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value, onChange, ref } }) => (
            <Autocomplete
              options={options}
              value={value.map((id: string) => 
                options.find((item) => item.id === id)
              )}
              getOptionLabel={(option) => 
                options?.find((item) => item.id === option.id)?.label ?? ''
              }
              isOptionEqualToValue={(option, newValue) => option.id === newValue.id}
              onChange={(_, newValue) => {
                onChange(newValue.map((item) => item.id))
              }}
            //   multiple
              // newValue = [{id:'1', label: 'california'}, ...] => ['1', '2']
            />
            // ['1', '2'] => [{id:'1', label: 'california'}, {id: '2', label:'texas'}]
        )}
        />
    )
}

export default RHFAutocomplete;
