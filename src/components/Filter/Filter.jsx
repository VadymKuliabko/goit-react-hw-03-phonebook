import React from 'react';
import Proptypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => (
  <div>
    <Label>
      Find contacts by name
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  </div>
);

Filter.prototype = {
  value: Proptypes.string.isRequired,
  onChange: Proptypes.func.isRequired,
};
