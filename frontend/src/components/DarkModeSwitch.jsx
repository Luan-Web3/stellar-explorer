import React, { useState } from 'react';
import { Switch, FormControlLabel } from '@mui/material';

function DarkModeSwitch({ onChange }) {
  return (
    <FormControlLabel
      control={<Switch onChange={onChange} />}
      label="Modo Escuro"
    />
  );
}

export default DarkModeSwitch;