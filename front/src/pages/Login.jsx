import Form from "./components/Form";
import { useNavigate } from "react-router-dom";
import ThemeStyleButton from "./components/ThemeStyleButton";
import getFormData from "../queries/getFormData";

export default function Login() {
  const navigate = useNavigate();

  const goRegister = (e) => {
    e.preventDefault();
    navigate("/register");
  };
  const loginBtn = (e) => {
    e.preventDefault();
    const form = getFormData("#login_form");
    console.log(form);
  };

  return (
    <div id="LoginContainer" className="centerInLine">
      <div className="relativeContainer">
        <ThemeStyleButton />

        <Form
          formPropsInterface={{
            logo: true,
            FORM_ID: "login_form",
            title: "Iniciar Sesión",
            fields: [
              {
                name: "email",
                type: "text",
                placeholder: "correo@gmail.com",
                label: "Correo",
              },
              {
                name: "password",
                type: "text",
                placeholder: "***************",
                label: "Contraseña",
              },
            ],
            firstButton: {
              text: "Ingresar",
              className: "button-primary",
              click: loginBtn,
            },
            secondButton: {
              text: "Registrarse",
              className: "button-secondary",
              click: goRegister,
            },
          }}
        />
      </div>
    </div>
  );
}
