import styled from "styled-components";
import { IoSearchOutline, IoSearch } from "react-icons/io5";
import { Fragment } from "react";

const InputContainer = styled.label`
  background-color: var(--color-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  border-radius: var(--radius);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

const Input = styled.input.attrs({
  type: "search",
  placeholder: "Search for a country",
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  background-color: var(--color-bg);
  color: var(--color-text);
`;

export const Search = ({ search, setSearch }) => {
  return (
    <Fragment>
      <InputContainer>
        <IoSearch/>
        <Input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          ></Input>
      </InputContainer>
    </Fragment>
  );
};