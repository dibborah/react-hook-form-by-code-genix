import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Option } from "../../types/option";

export const useStates = () => {
  return useQuery({
    queryKey: ["states"],
    queryFn: () =>
      axios
        .get<Option[]>("http://localhost:8080/states")
        .then((response) => response.data),
  });
};

export const useLanguages = () => {
  return useQuery({
    queryKey: ["languages"],
    queryFn: () =>
      axios
        .get<Option[]>("http://localhost:8080/languages")
        .then((response) => response.data),
  });
};

export const useGenders = () => {
  return useQuery({
    queryKey: ["genders"],
    queryFn: () =>
      axios
        .get<Option[]>("http://localhost:8080/genders")
        .then((response) => response.data),
  });
};

export const useSkills = () => {
  return useQuery({
    queryKey: ["skills"],
    queryFn: () =>
      axios
        .get<Option[]>("http://localhost:8080/skills")
        .then((response) => response.data),
  });
};

// This may be used in the future
// Not defined in the video for now

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () =>
      axios
        .get<Option[]>("http://localhost:8080/users")
        .then((response) => response.data),
  });
};

