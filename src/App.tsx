import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainTable from "./components/main-table/MainTable";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Route, Routes } from "react-router-dom";
import DailySchedule from "./components/daily-schedule/DailySchedule";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 24,
        },
    },
});

const App = () => {
    return (
        <>
            <ReactQueryDevtools
                client={queryClient}
                buttonPosition='bottom-right'
            />
            <QueryClientProvider client={queryClient}>
                <Routes>
                    <Route
                        index
                        path='/'
                        element={<MainTable />}
                    />
                    <Route
                        path='/daily-schedule'
                        element={<DailySchedule />}
                    />
                </Routes>
            </QueryClientProvider>
        </>
    );
};

export default App;
