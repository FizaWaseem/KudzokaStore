import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  margin: {
    width: "100%",
  },
}));

const InputWithIcon = ({ ImgLeft, onChange, value, color,placeholder,type,ImgRight }) => {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.margin}>
        <Input
          style={{ color: color }}
          onChange={(e) => onChange(e.target.value)}
          value={value}
          placeholder={placeholder}
          type={type}
          endAdornment={
            <InputAdornment position="start">
              <img style={{ paddingLeft: "0.5rem",cursor:'pointer'}} alt={ImgRight} src={ImgRight} />
            </InputAdornment>
          }
          startAdornment={
            <InputAdornment position="start">
              <img style={{ paddingLeft: "0.5rem" }} alt={ImgLeft} src={ImgLeft} />
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
};

export { InputWithIcon };
