import { Autocomplete, Box, Checkbox, TextField } from "@mui/material";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form"
import { Option } from "../types/option";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

// Below types are Generics
type Props<T extends FieldValues> = {
    name: Path<T>;
    options?: Option[];
    label: string;
};

const RHFAutocomplete = <T extends FieldValues>({
    name,
    options,
    label,
}: Props<T>) => {
    const { control } = useFormContext();
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value, onChange, ref }, fieldState: { error } }) => (
                <Autocomplete
                    options={options || []}
                    value={value.map((id: string) =>
                        options?.find((item) => item.id === id)
                    )}
                    getOptionLabel={(option) =>
                        options?.find((item) => item.id === option.id)?.label ?? ''
                    }
                    // ['1', '2'] => ['California', 'Texas']
                    isOptionEqualToValue={(option, newValue) => option.id === newValue.id}
                    onChange={(_, newValue) => {
                        onChange(newValue.map((item) => item.id))
                    }}
                    // [{id: '1', label : 'California'}, ...] => ['1', '2']
                    disableCloseOnSelect
                    multiple
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            fullWidth
                            inputRef={ref}
                            error={!!error}
                            helperText={error?.message}
                            label={label}
                        />
                    )}
                    renderOption={(props, option, { selected }) => (
                        <Box component="li" {...props}>
                            <Checkbox
                                icon={<CheckBoxOutlineBlankIcon />}
                                checkedIcon={<CheckBoxIcon />}
                                checked={selected}
                            />
                            {option.label}
                        </Box>
                    )}
                // newValue = [{id:'1', label: 'california'}, ...] => ['1', '2']
                />
                // ['1', '2'] => [{id:'1', label: 'california'}, {id: '2', label:'texas'}]
            )}
        />
    )
}

export default RHFAutocomplete;
