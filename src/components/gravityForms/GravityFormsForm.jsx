import * as React from "react";
import { graphql } from "gatsby";
import { useMutation, gql } from "@apollo/client";

import useGravityForm from "./hooks/useGravityForm";
import GravityFormsField from "./GravityFormsField";
import { Button, Spacer, Typography } from "../../../uixlibrary/components/exports/components";

export const GRAVITY_FORM_FIELDS = graphql`
  fragment GravityFormContactFields on WpGfForm {   
    title
    databaseId
    description
    submitButton{
			text
    }
    confirmations{
			isDefault
      message	
    }    

    formFields {
      nodes {
        id
        type
        ...AddressFieldFields
        ...CheckboxFieldFields
        ...DateFieldFields
        ...EmailFieldFields
        ...MultiSelectFieldFields
        ...NameFieldFields
        ...PhoneFieldFields
        ...RadioFieldFields
        ...SelectFieldFields
        ...TextFieldFields
        ...TextAreaFieldFields
        ...TimeFieldFields
        ...WebsiteFieldFields
      }
    }
  }
`;

const SUBMIT_FORM = gql`
  mutation submitGfForm($databaseId: ID!, $fieldValues: [FormFieldValuesInput]!) {
    submitGfForm(input: {
      id: $databaseId
      fieldValues: $fieldValues
    }) {      
      errors {
        id
        message
      }
    }
  }
`;


export default function GravityFormsForm({ form }) {
  const [submitForm, { data, loading, error }] = useMutation(SUBMIT_FORM);
  

  const haveEntryId = data?.submitGfForm;
  const haveFieldErrors = data?.submitGfForm?.errors?.length;
  const wasSuccessfullySubmitted = haveEntryId && !haveFieldErrors;
  const defaultConfirmation = form.confirmations?.find(confirmation => confirmation?.isDefault);
  const formFields = form.formFields?.nodes || [];

  const { state } = useGravityForm(); 

  
  function handleSubmit(event) {
    event.preventDefault();
    if (loading) return;

    submitForm({
      variables: {
        databaseId: form.databaseId,
        fieldValues: state,
      }
    }).catch(error => {
      console.error(error);
    })
  }

  function getFieldErrors(id) {
    if (!haveFieldErrors) return [];
    return data.submitGfForm.errors.filter((error) => error.id === id);
  } 

  if (wasSuccessfullySubmitted) {
    return <Typography color='primary' component='b' variant='base' fw='title'>{defaultConfirmation?.message ?? 'Tu mensaje ha sido enviado con éxito'}</Typography>
  }

  return (
    <form method="post" onSubmit={handleSubmit} style={{ width:'100%' }}>
      {formFields.map(field =>
        <GravityFormsField
          key={field?.id}
          field={field }
          fieldErrors={getFieldErrors((field?.id))}
        />
      )}
      {error ? (
        <p className="error-message">{error.message}</p>
      ) : null}
      <Spacer y={3}/>
      <Button type="submit" disabled={loading} variant='solid' color='primary' enableElevation style={{ margin:'0 auto' }}>
        {form?.button?.text || 'Contactar'}
      </Button>
    </form>
  );
}
