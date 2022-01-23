import { ThemeProvider } from '@emotion/react';
import { createTheme, TextField } from '@mui/material';
import React from 'react';
import './Header.css';


const Header = ({ word, setWord }) => {
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff',
            },
            mode: 'dark',
        },
    });

    return (
        <div className='header'>
            <span className='title'>{word ? word : 'Translator'}</span>
            <div className='inputs'>
                <ThemeProvider theme={darkTheme}>
                    <TextField
                        className='search'
                        label="Search a Word"
                        variant="standard"
                        value={word}
                        onChange={(e) => setWord(e.target.value)} />
                </ThemeProvider>

            </div>
        </div>

    )
};

export default Header