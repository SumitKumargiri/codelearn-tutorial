import React, { ReactNode, RefObject, useState } from "react";
import { Form } from "@/components/ui/form";
import { FieldValues, UseFormReturn } from "react-hook-form";

interface Props<T extends FieldValues, actionParamsType = any>
  extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "action"> {
  form: UseFormReturn<T>;
  children: ReactNode;
  action?: (payload: T & (actionParamsType | {}), extra?: any) => void;
  submitFunction?: (payload: T) => void;
  extraParams?: actionParamsType;
  ref?: RefObject<HTMLFormElement>;
}

function FormWrapper<T extends FieldValues, actionParamsType = {}>({
  children,
  form,
  action,
  ref,
  extraParams,
  submitFunction,
  ...props
}: Props<T, actionParamsType>) {
  const [isEnterPressed, setIsEnterPressed] = useState(false);
  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    console.log("isEnterPressed", isEnterPressed);
    if (isEnterPressed) setIsEnterPressed(false);
    else {
      if (action) {
        form.handleSubmit((payload) =>
          action({ ...payload, ...extraParams }, extraParams)
        )(evt);
      } else if (submitFunction) {
        form.handleSubmit((payload) => submitFunction(payload))(evt);
      }
    }
  }

  function handleKeyDown(evt: React.KeyboardEvent<HTMLFormElement>) {
    if (evt.key === "Enter") setIsEnterPressed(true);
  }
  return (
    <Form {...form}>
      <form
        onClick={() => setIsEnterPressed(false)}
        {...props}
        onKeyDown={(e) => handleKeyDown(e)}
        ref={ref}
        onSubmit={handleSubmit}
      >
        {children}
      </form>
    </Form>
  );
}

export default FormWrapper;
