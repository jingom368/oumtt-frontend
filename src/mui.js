import * as React from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const Div = styled.div`
    margin: 10px;
`

function MUI() {
    return (
        <>
            <Div>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    sx={{ width: 500 }}
                    renderInput={(params) => <TextField {...params} label="Movie" />}
                />
            </Div>
            <Div>
                <Stack spacing={5} direction="row">
                    <Button variant="text">Text</Button>
                    <Button variant="contained">Contained</Button>
                    <Button variant="outlined">Outlined</Button>
                </Stack>
            </Div>
            <Div>
                <Stack spacing={5} direction="row">
                    <Button>Primary</Button>
                    <Button disabled>Disabled</Button>
                    <Button href="#text-buttons">Link</Button>
                </Stack>
            </Div>
            <Div>
                <Stack spacing={5} direction="row">
                    <Button variant="outlined">Primary</Button>
                    <Button variant="outlined" disabled>Disabled</Button>
                    <Button variant="outlined" href="#outlined-buttons">Link</Button>
                    <Button
                        onClick={() => {
                            alert('clicked');
                        }}>
                        Click me
                    </Button>
                </Stack>
            </Div>
            <Div>
                <Stack direction="row" alignItems="center" spacing={2}>
                    <Button variant="contained" component="label">
                        Upload
                        <input hidden accept="image/*" multiple type="file" />
                    </Button>
                    <IconButton color="primary" aria-label="upload picture" component="label">
                        <input hidden accept="image/*" type="file" />
                        <PhotoCamera />
                    </IconButton>
                </Stack>
            </Div>
        </>
    )
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
];

export default MUI;