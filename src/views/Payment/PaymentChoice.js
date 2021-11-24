import React from 'react';
import {Box, Typography} from "@mui/material";
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import PaymentConfirm from "./PaymentConfirm";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

function PaymentChoice() {
    const [PaymentChoice, setPaymentChoice] = React.useState('E-Wallet')

    const handleChange = (event) => {
        setPaymentChoice(event.target.value);
    };

    return (
        <Box sx={{
            mt : 5,
            display: "flex",
            alignItems: "center",
            verticalAlign: "center",
            minHeight: "40vh",
            flexWrap: "wrap"
        }}>
            <FormControl component="fieldset" sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems:"center",
            }}>

                <Typography variant="h4" textAlign={"center"} borderBottom={1} >
                    <MonetizationOnIcon/> Payment Choice</Typography>
                <RadioGroup
                    sx={{mt : 2}}
                    aria-label="Payment Choice"
                    name="controlled-radio-buttons-group"
                    value={PaymentChoice}
                    onChange={handleChange}
                >
                    <FormControlLabel value="e-wallet" control={<Radio />} label="E-Wallet" />
                    <FormControlLabel value="card" control={<Radio />} label="Credit Card" />
                </RadioGroup>
            </FormControl>
            <Box sx={{flexBasis: "100%", height:"0"}}/>
            <PaymentConfirm paymentChoice={PaymentChoice}/>
        </Box>
    );
}

export default PaymentChoice;