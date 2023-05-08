import Navbar from "../components/Navbar"
import Product from "../components/Product"
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const Home = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Product />
      </QueryClientProvider>
    </>
  );
};

export default Home;
