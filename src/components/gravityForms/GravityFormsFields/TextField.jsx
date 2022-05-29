import * as React from "react";
import { graphql } from "gatsby";

import useGravityForm, { ACTION_TYPES, FieldValue, StringFieldValue } from "../hooks/useGravityForm";
import { Typography, Input, Spacer } from "../../../../uixlibrary/components/exports/components";
import { useForm } from "../../../../uixlibrary/hooks/useForm";
import { useTheme } from "../../../../uixlibrary/hooks/useTheme";
import { css } from "@emotion/react";

export const TEXT_FIELD_FIELDS = graphql`
  fragment TextFieldFields on WpTextField {
    id    
    label
    description
    cssClass
    isRequired
    placeholder
  }
`;



const DEFAULT_VALUE = '';

export default function TextField({ field, fieldErrors }) {

  
  const { id, formId, type, label, description, cssClass, isRequired, placeholder } = field;
  const htmlId = `field_${formId}_${id}`;
  const { state, dispatch } = useGravityForm();
  const fieldValue = state.find((fieldValue) => fieldValue.id === id);
  const value = fieldValue?.value || DEFAULT_VALUE;

  const [ formValues, handleInputChange ] = useForm({
    value
  });


  const { palette } = useTheme();


  return (
    <div className={`gfield gfield-${type} ${cssClass} form-group`.trim()}>
      <Spacer y={5}/>
      <Typography htmlFor={htmlId} variant={'base'} fw='title' component='label' color='subtitle'>{label}</Typography>   
      <Spacer y={1}/>
      <Input       
        css={{ '&:focus':{ outline:'none', borderBottom: `0px solid ${palette.primary.main}` } }}
        bk={{ background:`${palette.default.soft}`,borderTop:'0',borderLeft:'0',borderRight:'0',borderWidth:'0px'  }}
        size='base'
        variant='outlined'  
        color='default'   
        type="text"
        name={String(id)}
        id={htmlId}
        required={Boolean(isRequired)}
        placeholder={placeholder || ''}
        value={value}
        onChange={event => {          
          dispatch({
            type: ACTION_TYPES.updateTextFieldValue,
            fieldValue: {
              id,
              value: event.target.value,
            },
          })
        }}
      />
      {description ? <p className="field-description">{description}</p> : null}
      {fieldErrors?.length ? fieldErrors.map(fieldError => (
        <Typography key={fieldError.id} component='p' variant='base' color='error'>{fieldError.message}</Typography>
      )) : null}
    </div>
  );
}
