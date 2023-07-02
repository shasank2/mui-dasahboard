import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react'

const AuthWrapper1 = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    minHeight: '100vh'
}));

const Login = () => {
    return (
        <AuthWrapper1>
            <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                        Login
                    </Grid>
                </Grid>
            </Grid>
        </AuthWrapper1>
    )
}

export default Login