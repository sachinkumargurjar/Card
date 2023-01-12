import React from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import './CardForm.css';


const CardForm = ({
  handleClick,
  name,
  setName,
  link,
  setLink,
  type,
  setType,
}) => {
  return (
    <form className="form">
      <div className="items" >
        <input
          className="input"
          type="text"
          placeholder="Type Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="input"
          type="text"
          placeholder="Add Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        {/* <FormControl className="Formcontrol" style={{marginBottom: "1rem"}}> */}
          {/* <InputLabel id="demo-simple-select-label">Type Of Content</InputLabel> */}
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={type}
            onChange={(e) => setType(e.target.value)}
            label=""
            // variant="filled"
            style={{background: "#fff"}}
          >
            <MenuItem value="Entertainment">Entertainment Videos</MenuItem>
            <MenuItem value="Education"> Education Videos</MenuItem>
          </Select>
        {/* </FormControl> */}
        <div className="Add_Card" >
          <Button
            variant="contained"
            className="additem"
            disabled={name === "" || link === ""}
            onClick={handleClick}
          >
            Add Card
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CardForm;
