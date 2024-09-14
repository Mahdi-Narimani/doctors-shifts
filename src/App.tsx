import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainTable from "./components/main-table/MainTable";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0,
        },
    },
});

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <MainTable />
        </QueryClientProvider>
    );
};

export default App;
