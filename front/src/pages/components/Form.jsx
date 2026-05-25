import InputFields from "./InputFields";
import LargeButton from "./LargeButton";

let thisInterface = {
  logo: false,
  FORM_ID: "",
  title: "",
  fields: [],
  firstButton: {
    text: "",
    click: () => {},
  },
  secondButton: false,
};

export default function Form({ formPropsInterface = thisInterface }) {
  const logo = <div className="logo-container">Logo</div>;

  return (
    <form id={formPropsInterface.FORM_ID} className="formContainer container">
      {formPropsInterface.logo ? logo : ""}
      <h3 className="title">{formPropsInterface.title}</h3>

      {formPropsInterface.fields.map((fields, i) => {
        return <InputFields key={i} inputFliedsInterface={fields} />;
      })}

      <LargeButton largeButtonInterface={formPropsInterface.firstButton} />

      {formPropsInterface.secondButton ? (
        <LargeButton largeButtonInterface={formPropsInterface.secondButton} />
      ) : (
        ""
      )}
    </form>
  );
}
