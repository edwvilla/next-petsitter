import { ButtonSignup, Container, Field, Row, Title } from "./styledComponents";

import { Register } from "@/services/authService";
import { login } from "@/store/reducers/authSlice";
import { setTokenCookie } from "@/helpers/setCookie";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

export default function Registrate() {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);

      const data = {
        name: formData.get("firstName"),
        lastname: formData.get("lastName"),
        address: formData.get("address"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        password: formData.get("password"),
      };

      const res = await Register(data);

      if (res) {
        dispatch(login(res.data));
        setTokenCookie(res.data.token);
        router.push("/cuidadores");
      }

      console.log(res);
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
        Crear cuenta
      </Title>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "0px auto",
          justifyContent: "space-between",
        }}
      >
        <Field
          placeholder="Nombre (s)"
          name="firstName"
          type="firstName"
          variant="standard"
          InputProps={InputProps}
        />

        <Field
          placeholder="Apellido (s)"
          name="lastName"
          type="lastName"
          variant="standard"
          InputProps={InputProps}
        />
        <Field
          placeholder="Dirección"
          name="address"
          type="address"
          variant="standard"
          InputProps={InputProps}
        />

        <Field
          name="phone"
          type="tel"
          placeholder="Teléfono"
          variant="standard"
          InputProps={InputProps}
        />

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

        <Field
          placeholder="Repertir contraseña"
          fullWidth
          name="password"
          type="password"
          InputProps={InputProps}
        />
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <ButtonSignup variant="contained" fullWidth type="submit">
          Crear cuenta
        </ButtonSignup>
      </div>
    </Container>
  );
}
