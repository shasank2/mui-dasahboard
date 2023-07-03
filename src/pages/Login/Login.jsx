import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import React from 'react'
import MainCard from '../../components/UI/Card/MainCard';
import { Link } from 'react-router-dom';

const AuthWrapper1 = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    minHeight: '100vh'
}));

const Login = () => {
    const theme = useTheme();

    return (
        <AuthWrapper1>
            <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                            <MainCard
                                sx={{
                                    maxWidth: { xs: 400, lg: 475 },
                                    margin: { xs: 2.5, md: 3 },
                                    '& > *': {
                                        flexGrow: 1,
                                        flexBasis: '50%'
                                    }
                                }}
                                content={false}
                              
                            >
                                <Box sx={{ p: { xs: 2, sm: 3, xl: 5 } }}>
                                <Grid container spacing={2} alignItems="center" justifyContent="center">
                                    <Grid item sx={{ mb: 3 }}>
                                        <Link to="#">
                                            {/* <Logo /> */}
                                        </Link>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container alignItems="center" justifyContent="center">
                                            <Grid item>
                                                <Stack alignItems="center" justifyContent="center" spacing={1}>
                                                    <Typography color={theme.palette.secondary.main} gutterBottom >
                                                        Hi, Welcome Back
                                                    </Typography>
                                                    <Typography variant="caption" fontSize="16px">
                                                        Enter your credentials to continue
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        {/* <AuthLogin /> */}
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid item container direction="column" alignItems="center" xs={12}>
                                            <Typography component={Link} to="/pages/register/register3" variant="subtitle1" sx={{ textDecoration: 'none' }}>
                                                Don&apos;t have an account?
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                </Box>
                            </MainCard>
                        </Grid>
                    </Grid>
                </Grid>
                {/* <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
                    <AuthFooter />
                </Grid> */}
            </Grid>
        </AuthWrapper1>
    )
}

export default Login