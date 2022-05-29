import * as React from "react";



import GravityFormsForm from "./GravityFormsForm";
import { GravityFormProvider } from "./hooks/useGravityForm";

export default function GravityForm({ form }) {  
  return (
    <GravityFormProvider>
      <GravityFormsForm form = {form} />
    </GravityFormProvider>
  );
}
