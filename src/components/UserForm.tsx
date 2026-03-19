import { useState, useRef } from "react";

interface Props {
  onSubmit: (value?: string) => void;
}

export default function UserForm({ onSubmit }: Props) {
  const firstname = useRef<HTMLInputElement>(null);
  const lastName = useRef<HTMLInputElement>(null);
  const typeUser = useRef<HTMLInputElement>(null);
  return (
    <>
      <form>
        <input ref={firstname} type="text" id="firstName" />
        <input ref={lastName} type="text" id="lastName" />
        <input ref={typeUser} type="text" id="age" />
        <select name="typeUser" id="typeUser"></select>
        <button
          onClick={() => onSubmit(firstname.current?.value)}
          type="submit"
        >
          Registreer
        </button>
      </form>
    </>
  );
}
