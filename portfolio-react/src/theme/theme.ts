import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    '&:focus': { outline: 'none', boxShadow: 'none' },
                    '&:focus-visible': { outline: 'none', boxShadow: 'none' },
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    '&:focus': { outline: 'none', boxShadow: 'none' },
                    '&:focus-visible': { outline: 'none', boxShadow: 'none' },
                },
            },
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    border: 'none',
                    boxShadow: 'none',
                },
            },
        },
    },
});
export default theme;
