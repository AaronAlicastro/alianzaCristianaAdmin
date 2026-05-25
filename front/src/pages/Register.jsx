import Form from "./components/Form";
import { useNavigate } from "react-router-dom";
import ThemeStyleButton from "./components/ThemeStyleButton";
import getFormData from "../queries/getFormData";

export default function Register() {
  const navigate = useNavigate();

  const goLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const registerBtn = (e) => {
    e.preventDefault();
    const form = getFormData("#register_form");
    console.log(form);
  };

  return (
    <div id="RegisterContainer" className="centerInLine">
      <div className="relativeContainer">
        <ThemeStyleButton />

        <Form
          formPropsInterface={{
            logo: true,
            FORM_ID: "register_form",
            title: "Registrarse",
            fields: [
              {
                name: "userName",
                type: "text",
                placeholder: "¿es?",
                label: "Nombre",
              },
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
              {
                name: "password",
                type: "text",
                placeholder: "***************",
                label: "Repetir Contraseña",
              },
            ],
            firstButton: {
              text: "Crear Cuenta",
              className: "button-primary",
              click: registerBtn,
            },
            secondButton: {
              text: "Volver",
              className: "button-tertiary",
              click: goLogin,
            },
          }}
        />
      </div>
    </div>
  );
}
