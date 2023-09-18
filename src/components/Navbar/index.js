import { LinkText, NavBar } from "./styledComponents";
import { Logout, Search } from "@mui/icons-material";

import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import UserCard from "@/components/UserCard";
import { authSelector } from "@/store/reducers/authSlice";
import { logout } from "@/store/reducers/authSlice";
import { use } from "react";
import { useDispatch } from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function Navbar() {
  const auth = useSelector(authSelector);
  const isLoggedIn = !!auth.value;

  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };

  const isMd = useMediaQuery((theme) => theme.breakpoints.up("md"));

  if (!isMd) {
    return <MobileNavbar />;
  }

  return (
    <NavBar position="static">
      <MenuIcon
        sx={{
          height: "3rem",
          width: "3rem",
        }}
      />
      <Box sx={{ width: "3rem" }}></Box>

      <LinkText href={"/"}>
        <Image
          src="/assets/logo.png"
          height={50}
          width={220}
          objectFit="contain"
        />
      </LinkText>

      <div style={{ flexGrow: 1 }}></div>

      <div style={{ flexGrow: 1 }}></div>
      {!isLoggedIn ? (
        <>
          <LinkText href={"/inicia-sesion"}>Iniciar sesión</LinkText>
          <Box
            sx={{
              width: "2px",
              height: "40px",
              backgroundColor: "white",
              margin: "0 1rem",
            }}
          />
          <LinkText href={"/registrate"}>Regístrate</LinkText>
        </>
      ) : (
        <>
          <UserCard />
          <Logout onClick={handleLogout} />
        </>
      )}
    </NavBar>
  );
}

const MobileNavbar = () => {
  return (
    <NavBar position="static">
      <MenuIcon
        sx={{
          height: "2rem",
          width: "3rem",
        }}
      />

      <LinkText href={"/"}>
        <Image
          src="/assets/logo.png"
          height={30}
          width={120}
          objectFit="contain"
        />
      </LinkText>

      <Search />
    </NavBar>
  );
};
