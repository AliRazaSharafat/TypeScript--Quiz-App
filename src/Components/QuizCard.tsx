import React, { useState } from "react";
import { QuestionPropType } from "../Types/quiz_types";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Button } from "@material-ui/core";

const QuizCard: React.FC<QuestionPropType> = ({
  question,
  option,
  handleSubmit,
}) => {
  //   const [value, setValue] = React.useState("female");
  const [userAns, setUserAns] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserAns((event.target as HTMLInputElement).value);
  };
  return (
    <div>
      {/* <p>{option}</p> */}
      <FormControl>
        <FormLabel component="legend">{question}</FormLabel>
        <RadioGroup name="answer" value={userAns} onChange={handleChange}>
          {option &&
            option.map((opt: string, ind: number) => (
              <FormControlLabel
                key={ind}
                value={opt}
                control={<Radio />}
                label={opt}
              />
            ))}
        </RadioGroup>
      </FormControl>
      <br />
      <Button
        color="secondary"
        variant="contained"
        onClick={(e) => handleSubmit(e, userAns)}
      >
        Submit
      </Button>
    </div>
  );
};

export default QuizCard;
