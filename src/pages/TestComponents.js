import React from "react";
import InputButton from "../components/form/InputButton";
import InputCheckbox from "../components/form/InputCheckbox";
import InuptField from "../components/form/InuptField";
import TextTitle from "../components/form/TextTitle";

const TestComponents = () => {
  return (
    <>
      <InuptField />
      <InputCheckbox />
      <TextTitle />
      <InputButton full />
      <InputButton color="blue" />
    </>
  );
};

export default TestComponents;
