import { useFormContext } from "react-hook-form";
import { Stack, Typography } from "@mui/material";
import { Schema } from "../types/schema";
import RHFAutocomplete from "../../components/RHFAutocomplete";
import { useEffect } from "react";
import {
  useGenders,
  useLanguages,
  useSkills,
  useStates,
} from "../services/queries";
import RHFToggleButtonGroup from "../../components/RHFToggleButtonGroup";
import RHFRadioGroup from "../../components/RHFRadioGroup";
import RHFCheckbox from "../../components/RHFCheckbox";
import RHFDateTimePicker from "../../components/RHFDateTimePicker";
import RHFDateRangePicker from "../../components/RHFDateRangePicker";
import RHFSlider from "../../components/RHFSlider";
import RHFSwitch from "../../components/RHFSwitch";
import RHFTextField from "../../components/RHFTextField";


const Users = () => {
  const statesQuery = useStates();
  const languagesQuery = useLanguages();
  const genderQuery = useGenders();
  const skillsQuery = useSkills();

  const { watch } = useFormContext<Schema>();

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
      <RHFTextField<Schema> name="name" label="Name" />
      <RHFTextField<Schema> name="email" label="Email" />
      <RHFAutocomplete<Schema>
        name="states"
        label="states"
        options={statesQuery?.data}
      />
      <RHFToggleButtonGroup<Schema>
        name="languagesSpoken"
        options={languagesQuery?.data}
      />
      <RHFRadioGroup<Schema>
        name="gender"
        options={genderQuery?.data}
        label="Gender"
      />
      <RHFCheckbox<Schema>
        name="skills"
        options={skillsQuery?.data}
        label="Skills"
      />
      <RHFDateTimePicker<Schema>
        name="registrationDataAndTime"
        label="Registration Date & Time"
      />
      <Typography>Former Employment Period</Typography>
      <RHFDateRangePicker<Schema> name="formerEmploymentPeriod" />
      <RHFSlider<Schema> name="salaryRange" label="Salary Range" />
      <RHFSwitch<Schema> name="isTeacher" label="Are you a teacher?" />
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
