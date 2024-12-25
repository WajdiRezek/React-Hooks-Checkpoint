import Rating from '@mui/material/Rating';
import { Button } from 'react-bootstrap';

const FilterMovies=({setSearch})=>{
    return(
        <div>
            <input type="text" onChange={(e)=> setSearch(e.target.value)}/>
           
            <Button variant="warning"> Reset</Button>


        </div>
    )
}

export default FilterMovies