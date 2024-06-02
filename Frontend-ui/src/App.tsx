import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UsersProvider from "./users/components/UsersProvider";


const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <UsersProvider />
    </QueryClientProvider>
  )
}

export default App;