import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <div
      style={{
        textAlign: "right",
        padding: "5px",
      }}
    >
      <NavLink
        activeStyle={{
          fontWeight: "bold",
          color: "pink",
        }}
        style={{
          textDecoration: "none",
        }}
        exact
        to="/"
      >
        {" "}
        Home{" "}
      </NavLink>
      {" - "}
      <NavLink
        activeStyle={{
          fontWeight: "bold",
          color: "pink",
          textDecoration: "none",
        }}
        style={{
          textDecoration: "none",
        }}
        exact
        to="/about"
      >
        {" "}
        About{" "}
      </NavLink>
      {" - "}
      <NavLink
        activeStyle={{
          fontWeight: "bold",
          color: "pink",
          textDecoration: "none",
        }}
        style={{
          textDecoration: "none",
        }}
        exact
        to="/discover"
      >
        {" "}
        Discover movies{" "}
      </NavLink>
    </div>
  );
}
