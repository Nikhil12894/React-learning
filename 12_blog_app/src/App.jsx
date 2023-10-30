import { useState, useEffect } from "react";
import { login, logout } from "./store/AuthSlice";
import { useDispatch } from "react-redux";
import appwriteService from "./appwrite/auth";
import BlogCardTwo from "./components/pages/BlogCardTwo";
import data from "./assets/blogs.json";
// import { BlogCardOne, Footer, Header } from "./components";
// import { Outlet } from "react-router-dom";
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
  const posts = data;

  return (
    <div className="min-h-screen flex flex-wrap content-between">
      <div className="w-full block">
        {/* <Header /> */}
        <main>
          <BlogCardTwo blogs={posts} />
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
