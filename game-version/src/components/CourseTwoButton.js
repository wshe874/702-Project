import { Box, Button, Card, Grid, Typography } from '@mui/material';
import React from 'react';
import img from '../images/business-case.png';
import IconList from './IconList';

function CourseTwoButton({ disabled }) {
  return (
    <Card sx={{
      borderRadius: 2,
      height: 1
    }}>
      <Button variant='text' disableRipple disabled={disabled} sx={{
        width: 1,
        height: 1,
        p: 0,
        alignItems: 'start'
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
            alt='Business case image'
            src={img}
          />
          <Box sx={{
            width: 1
          }}>
            <Box sx={{
              pt: 1.5,
              px: 2,
              pb: 2
            }}>
              <Typography variant='body2' component='div' noWrap={true} sx={{
                fontSize: '0.875rem',
                fontWeight: 'bold',
                width: 1,
                color: '#666666',
                'text-transform': 'none',
                textAlign: 'left',
                mb: 0.5,
              }}>ENGGEN 403: Managing a Business</Typography>
              <Typography variant='body1' component='div' noWrap={true} sx={{
                width: 1,
                color: '#677179',
                'text-transform': 'none',
                textAlign: 'left',
              }}>ENGGEN 403</Typography>
              <Typography variant='body1' component='div' noWrap={true} sx={{
                width: 1,
                color: '#677179',
                'text-transform': 'none',
                textAlign: 'left',
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

export default CourseTwoButton