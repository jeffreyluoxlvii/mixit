import React, {useState, useEffect} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { fetchIngredients } from '../../api'

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function Autocompleter() {

  const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setIngredients(await fetchIngredients());
        }
        fetchAPI();

    }, []);

  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={ingredients}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title}
        </React.Fragment>
      )}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" label="ingredients" placeholder="ingredients" />
      )}
    />
  );
}