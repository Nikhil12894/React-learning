import { useState, useEffect } from "react";
import { login, logout } from "./store/AuthSlice";
import { useDispatch } from "react-redux";
import appwriteService from "./appwrite/auth";
import { BlogCardOne, Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
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
          <h1 className="text-4xl">Hello world</h1>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
