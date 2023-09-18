import {
  ButtonSignup,
  Container,
  Field,
  Row,
  Title,
} from "../inicia-sesion/styledComponents";

import { Login } from "@/services/authService";
import { login } from "@/store/reducers/authSlice";
import { setTokenCookie } from "@/helpers/setCookie";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

export default function Registrate() {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);

      const data = {
        email: formData.get("email"),
        password: formData.get("password"),
      };

      const res = await Login(data);

      if (res) {
        dispatch(login(res.data));
        setTokenCookie(res.data.token);
        router.push("/cuidadores");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const InputProps = {
    disableUnderline: true,
    style: {
      height: "4.5rem",
      borderRadius: 20,
      width: "100%",
      paddingLeft: 20,
    },
  };

  return (
    <Container component="form" onSubmit={handleSubmit}>
      <Title
        sx={{
          fontSize: "2rem",
          mb: "2rem",
        }}
      >
        Inicia sesión
      </Title>

      <Field
        placeholder="Correo"
        name="email"
        type="email"
        variant="standard"
        InputProps={InputProps}
      />
      <Field
        placeholder="Contraseña"
        name="password"
        type="password"
        variant="standard"
        InputProps={InputProps}
      />

      <ButtonSignup variant="contained" fullWidth type="submit">
        Iniciar sesión
      </ButtonSignup>
    </Container>
  );
}
