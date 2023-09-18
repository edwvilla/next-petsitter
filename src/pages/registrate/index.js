import { ButtonSignup, Container, Field, Row, Title } from "./styledComponents";

import { Button } from "@mui/material";

export default function Registrate() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
        address: data.get("address"),
        phone: data.get("phone"),
        email: data.get("email"),
        password: data.get("password"),
    });
    

    
    
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

      <Row>
        <Field label="Nombre (s)" fullWidth  id="firstName" type="firstName" />
        <Field label="Apellido (s)" fullWidth id="lastName" type="lastName" />
        <Field label="Dirección" fullWidth id="address" type="address" />
      </Row>

      <Row>
        <Field label="Teléfono" fullWidth id="phone" type="tel" />
        <Field label="Correo" fullWidth id="email" type="email" />
        <Field label="Contraseña" fullWidth id="password" type="password" />
      </Row>

      <Row>
        <Field label="Repertir contraseña" fullWidth id="password" type="password" />
      </Row>

      <Row>
        <ButtonSignup variant="contained" fullWidth onClick={handleSubmit}>
          Crear cuenta
        </ButtonSignup>
      </Row>
    </Container>
  );
}
