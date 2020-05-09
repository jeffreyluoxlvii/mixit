import React, {useState, useEffect} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import LocalBarOutlinedIcon from '@material-ui/icons/LocalBarOutlined';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import { fetchIngredients } from '../../api';

const icon = <LocalBarOutlinedIcon fontSize="small" />;
const checkedIcon = <LocalBarIcon fontSize="small" />;


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
            color = 'primary'
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title}
        </React.Fragment>
      )}
      style={{ width: '80%' }}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" label="ingredients" placeholder="ingredients" />
      )}
    />
  );
}