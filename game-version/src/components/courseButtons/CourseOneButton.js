import { Box, Button, Card, Typography } from '@mui/material';
import React from 'react';
import img from '../../images/health-safety-photo.jpg';
import IconList from '../IconList';

function CourseOneButton({ disabled, onClick }) {
  return (
    <Card sx={{
      borderRadius: 2,
      height: 1,
      boxShadow: !disabled && "0 0 10px 10px #B3DB59",
    }}>
      <Button variant='text' disableRipple disabled={disabled} onClick={onClick} sx={{
        width: 1,
        height: 1,
        p: 0,
        alignItems: 'start',
        textTransform: 'none',
        textAlign: 'left',
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          width: 1,
        }}>
          <Box
            sx={{
              width: 1,
            }}
            component='img'
            alt='Health and safety image'
            src={img}
          />
          <Box sx={{
            width: 1
          }}>
            <Box sx={{
              pt: 1.5,
              px: 2,
              pb: 2,
            }}>
              <Typography variant='body2' component='div' noWrap={true} sx={{
                fontSize: '0.875rem',
                fontWeight: 'bold',
                width: 1,
                color: '#666666',
                mb: 0.5,
              }}>ECE Health & Safety Induction</Typography>
              <Typography variant='body1' component='div' noWrap={true} sx={{
                width: 1,
                color: '#677179',
              }}>PW022 ECE Health & Safety Induction</Typography>
              <Typography variant='body1' component='div' noWrap={true} sx={{
                width: 1,
                color: '#677179',
                fontSize: '0.8rem',
              }}>2022 Semester Two</Typography>
              <IconList />
            </Box>
          </Box>
        </Box>
      </Button>
    </Card>
  )
}

export default CourseOneButton