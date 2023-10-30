import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      ulr: "/",
      enabled: true,
    },
    {
      name: "Login",
      ulr: "/login",
      enabled: !authStatus,
    },
    {
      name: "SignUp",
      ulr: "/signup",
      enabled: !authStatus,
    },
    {
      name: "All Posts",
      ulr: "/all-posts",
      enabled: authStatus,
    },
    {
      name: "Add Post",
      ulr: "/add-post",
      enabled: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.enabled ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.ulr)}
                    className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
