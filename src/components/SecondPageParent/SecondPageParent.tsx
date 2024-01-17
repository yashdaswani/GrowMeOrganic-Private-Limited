import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import "./SecondPageParent.css"

const SecondPageParent = () => {


    const navigate = useNavigate();

    const handleSubmitSecondPage = () => {
        navigate('/second-page');
    };

    const handleSubmitThirdPage = () => {
        navigate('/third-page');
    };

  return (
    <div className='second-page-parent'>
        <Button variant="contained" color="primary" onClick={handleSubmitSecondPage}>
          1st Component
        </Button>

        <Button variant="contained" color="primary" onClick={handleSubmitThirdPage}>
          2nd Component
        </Button>
    </div>
  )
}

export default SecondPageParent
