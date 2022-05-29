import * as React from "react";
import { graphql } from "gatsby";

import useGravityForm, { ACTION_TYPES, FieldValue, EmailFieldValue } from "../hooks/useGravityForm";
import { Input, Spacer, Typography } from "../../../../uixlibrary/components/exports/components";
import { useTheme } from "../../../../uixlibrary/hooks/useTheme";

export const EMAIL_FIELD_FIELDS = graphql`
  fragment EmailFieldFields on WpEmailField {
    id    
    label
    description
    cssClass
    isRequired
    placeholder
  }
`;

const DEFAULT_VALUE = '';

export default function EmailField({ field, fieldErrors }) {
  const { id, formId, type, label, description, cssClass, isRequired, placeholder } = field;
  const htmlId = `field_${formId}_${id}`;
  const { state, dispatch } = useGravityForm();
  const fieldValue = state.find((fieldValue) => fieldValue.id === id);
  const value = fieldValue?.emailValues?.value || DEFAULT_VALUE;

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
        type="email"
        name={String(id)}
        id={htmlId}
        placeholder={placeholder || ''}
        required={Boolean(isRequired)}
        value={value}
        onChange={event => {
          dispatch({
            type: ACTION_TYPES.updateEmailFieldValue,
            fieldValue: {
              id,
              emailValues: {
                value: event.target.value,
              }
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
