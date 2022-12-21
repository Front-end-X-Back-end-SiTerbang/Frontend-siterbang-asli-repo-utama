import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const TripTypeInput = ({ tripType, setTripType }) => {
  return (
    <FormControl sx={{ display: "block", marginBottom: "1em" }}>
      <RadioGroup
        name="trip-type"
        onChange={(event) => setTripType(event.target.value)}
        value={tripType}
        row
      >
        <FormControlLabel
          value="round-trip"
          control={<Radio />}
          label="Round Trip"
        />
        <FormControlLabel value="one-way" control={<Radio />} label="One way" />
      </RadioGroup>
    </FormControl>
  );
};

export default TripTypeInput;
