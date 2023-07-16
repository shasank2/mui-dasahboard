import { Card } from '@mui/material'

const MainCard = ({ children, border, sx, boxShadow, shadow }) => {
  return (
    <Card sx={{
      border: border ? '1px solid' : 'none',
      // borderColor: theme.palette.primary[200] + 25,
      // ':hover': {
      //   boxShadow: boxShadow ? shadow || '0 2px 14px 0 rgb(32 40 45 / 8%)' : 'inherit'
      // },
      ...sx
    }}>
      {children}
    </Card>
  )
}

export default MainCard