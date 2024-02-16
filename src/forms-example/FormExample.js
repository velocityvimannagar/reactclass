import { useState } from "react";

function FormExample() {
  const [formInput, setFormInput] = useState({
    textInput: "",
    numberInput: "",
    passwordInput: "",
    textAreaInput: "",
    selectBoxInput: "",
    checkBoxInput: "",
    radioButtonInput: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const onInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    console.log(name, value, checked, type);
    formInput[name] = type == "checkbox" ? checked : value;
    setFormInput({ ...formInput });
  };
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  return (
    <div>
      <h1>Form Example</h1>
      <div>
        <label>
          <p>Text Input</p>
          <input  
            value={formInput.textInput}
            onChange={onInputChange}
            type="text"
            name="textInput"
            placeholder="Text Input"
          ></input>
        </label>
        <label>
          <p>Number Input</p>
          <input
            value={formInput.numberInput}
            onChange={onInputChange}
            type="number"
            name="numberInput"
            placeholder="Number Input"
          ></input>
        </label>

        <label>
          <p>Password Input</p>
          <input
            value={formInput.passwordInput}
            onChange={onInputChange}
            type="password"
            name="passwordInput"
            placeholder="Password Input"
          ></input>
        </label>

        <label>
          <p>TextArea Input</p>
          <textarea
            value={formInput.textAreaInput}
            onChange={onInputChange}
            cols={20}
            rows={4}
            name="textAreaInput"
            placeholder="Text Area Input"
          ></textarea>
        </label>

        <label>
          <p>Select box:</p>
          <select
            value={formInput.selectBoxInput}
            onChange={onInputChange}
            name="selectBoxInput"
          >
            <option value="" disabled>
              Select Gender{" "}
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
      </div>
      <label>
        <p>Checkbox Input</p>
        <input
          value={formInput.checkBoxInput}
          onChange={onInputChange}
          type="checkbox"
          name="checkBoxInput"
          placeholder="Checkbox Input"
        ></input>{" "}
        I agree
      </label>
      <div>
        <p>Radio Input</p>
        <label>
          <input
            checked={formInput.radioButtonInput === "male"}
            onChange={onInputChange}
            type="radio"
            name="radioButtonInput"
            value="male"
          />{" "}
          Male
          <input
            checked={formInput.radioButtonInput === "female"}
            onChange={onInputChange}
            type="radio"
            name="radioButtonInput"
            value="female"
          />{" "}
          Female
        </label>
      </div>
      <div>
        <label>
          <p>Date Input</p>
          <input
            value={formInput.selectedDate}
            onChange={onInputChange}
            type="date"
            name="selectedDate"
          ></input>
          <p>Selected date: {formInput.selectedDate}</p>
        </label>
      </div>
      <div>
        <label>
          <p>File Picker</p>
          <input onChange={handleFileChange} type="file"></input>
          <p>Selected File: {selectedFile?.name}</p>
        </label>
      </div>
    </div>
  );
}

export default FormExample;