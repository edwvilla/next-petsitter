import { Email, Name } from "./styledComponents";

import Image from "next/image";
import { authSelector } from "@/store/reducers/authSlice";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useSelector } from "react-redux";

export default function UserCard() {
  const auth = useSelector(authSelector);
  const name = auth.value.name;
  const email = auth.value.email;

  const isMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        minWidth: {
          xs: "8rem",
          md: "15rem",
        },
      }}
    >
      <Image
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
        alt="profile picture"
        width={isMd ? 60 : 40}
        height={isMd ? 60 : 40}
        style={{
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
      {!!isMd && (
        <div>
          <Name>{name}</Name>
          <Email>{email}</Email>
        </div>
      )}
    </div>
  );
}
