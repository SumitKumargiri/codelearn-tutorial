import React, { type ReactNode, type RefObject, useState } from "react";
import { Form } from "@/shared/ui/form";
import type { FieldValues, UseFormReturn } from "react-hook-form";

interface Props<T extends FieldValues, TExtra = Record<string, never>>
  extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "action"> {
  form: UseFormReturn<T>;
  children: ReactNode;
  action?: (payload: T & TExtra, extra?: TExtra) => void;
  submitFunction?: (payload: T) => void;
  extraParams?: TExtra;
  formRef?: RefObject<HTMLFormElement | null>;
}

function FormWrapper<T extends FieldValues, TExtra = Record<string, never>>({
  children,
  form,
  action,
  formRef,
  extraParams,
  submitFunction,
  ...props
}: Props<T, TExtra>) {
  const [isEnterPressed, setIsEnterPressed] = useState(false);

  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    if (isEnterPressed) {
      setIsEnterPressed(false);
      return;
    }

    if (action) {
      form.handleSubmit((payload) =>
        action({ ...payload, ...(extraParams ?? ({} as TExtra)) }, extraParams)
      )(evt);
      return;
    }

    if (submitFunction) {
      form.handleSubmit((payload) => submitFunction(payload))(evt);
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
        onKeyDown={handleKeyDown}
        ref={formRef}
        onSubmit={handleSubmit}
      >
        {children}
      </form>
    </Form>
  );
}

export default FormWrapper;
