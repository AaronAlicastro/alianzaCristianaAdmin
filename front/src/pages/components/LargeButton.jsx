let thisInterface = {
  text: "",
  className: "",
  click: () => {},
};

export default function LargeButton({ largeButtonInterface = thisInterface }) {
  return (
    <button
      className={"LargeButtonContainer " + largeButtonInterface.className}
      onClick={largeButtonInterface.click}
    >
      {largeButtonInterface.text}
    </button>
  );
}
