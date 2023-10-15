import { useState, useEffect } from "react";
import { login, logout } from "./store/AuthSlice";
import { useDispatch } from "react-redux";
import appwriteService from "./appwrite/auth";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
import BlogCardOne from "./components/pages/BlogCardOne";
import Container from "./components/Container/Container";
function App() {
  const [loading, setLoading] = useState(true);
  const dispatcher = useDispatch();
  useEffect(() => {
    appwriteService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatcher(login(userData));
        } else {
          dispatcher(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen flex flex-wrap content-between">
      <div className="w-full block">
        <Header />
        <main>
          <Container>
            {/* //TODO: <Outlet /> */}
            <BlogCardOne />
            <BlogCardOne />
            <BlogCardOne />
            <BlogCardOne />
            <BlogCardOne />
          </Container>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
