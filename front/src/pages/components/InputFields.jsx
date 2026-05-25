let thisInterface = {
  name: "",
  type: "",
  placeholder: "",
  label: "",
};

export default function InputFields({ inputFliedsInterface = thisInterface }) {
  return (
    <div className="InputFieldsContainer">
      <label>{inputFliedsInterface.label}</label>
      <input
        type={inputFliedsInterface.type}
        className="text-field"
        name={inputFliedsInterface.name}
        placeholder={inputFliedsInterface.placeholder}
      />
    </div>
  );
}
