import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAutocomplete } from "@mui/base/useAutocomplete";
import CheckIcon from "@mui/icons-material/Check";
import { getNotesHashTags } from "shared/store/selectors";
import { InputWrapper, Label, Listbox, Root, StyledTag } from "./ui";
import { useAction } from "shared/hooks";

export const NotesFilters = () => {
  const hashtags = useSelector(getNotesHashTags);

  const { saveFilterValue } = useAction();

  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: "hashtags",
    multiple: true,
    options: hashtags,
    getOptionLabel: (option) => option,
  });

  useEffect(() => {
    saveFilterValue(value);
  }, [saveFilterValue, value]);

  return (
    <Root>
      <div {...getRootProps()}>
        <Label {...getInputLabelProps()}>Find by hashtags</Label>
        <InputWrapper ref={setAnchorEl} className={focused ? "focused" : ""}>
          {value.map((option: string, index: number) => (
            <StyledTag label={option} {...getTagProps({ index })} key={index} />
          ))}
          <input {...getInputProps()} />
        </InputWrapper>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {(groupedOptions as string[]).map((option, index) => (
            <li {...getOptionProps({ option, index })} key={option}>
              <span>{option}</span>
              <CheckIcon fontSize="small" />
            </li>
          ))}
        </Listbox>
      ) : null}
    </Root>
  );
};
