import { StrictMode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PaginationPage from "./pages/PaginationPage";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/HomePage";
import Layout from "./components/Layout";
import VirtualPage from "./pages/VirtualPage";
import InfinitePage from "./pages/InfinitePage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false,
      staleTime: 300000,
    },
  },
});

function App() {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="pagination-carousel" element={<PaginationPage />} />
            <Route path="virtual-carousel" element={<VirtualPage />} />
            <Route path="infinite-carousel" element={<InfinitePage />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </StrictMode>
  );
}

export default App;
