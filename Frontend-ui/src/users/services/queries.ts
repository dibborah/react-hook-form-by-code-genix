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
