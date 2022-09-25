import useNewSubForm from "../hooks/useNewSubForm";
import { Sub } from "../types";


interface FormProps {
  onNewSub: (newSub: Sub) => void;
}


const Form = ({ onNewSub }: FormProps) => {

  const [inputValues, dispatch] = useNewSubForm()

  const handleSubmit = (evt: React.ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onNewSub(inputValues);
    dispatch({
      type: "clear",
    });
  };
  const handleChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = evt.target;
    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value,
      },
    });
  };
  const handleClear = () => {};
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={inputValues.nick}
          type="text"
          name="nick"
          placeholder="nick"
        />
        <input
          onChange={handleChange}
          value={inputValues.subMonths}
          type="text"
          name="subMonths"
          placeholder="nick"
        />
        <input
          onChange={handleChange}
          value={inputValues.avatar}
          type="text"
          name="avatar"
          placeholder="avatar"
        />
        <textarea
          onChange={handleChange}
          value={inputValues.description}
          name="description"
          placeholder="description"
        />
        <button type="button"></button>
        <button type="submit" onClick={handleClear}>
          Enviar
        </button>
      </form>
    </div>
  );
};
export default Form;
