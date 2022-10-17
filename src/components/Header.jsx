import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { Container } from "./Container";
import { IoMoonOutline, IoMoon } from "react-icons/io5";
import { Fragment } from "react";

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled.p`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  font-weight: var(--fw-bold);
  text-transform: capitalize;
`;
;

export const Header = function () {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <Fragment>
      <HeaderEl>
        <Container>
          <Wrapper>
            <Title>Where is the world ?</Title>
            <ModeSwitcher onClick={toggleTheme}>
                {theme === 'light' ? (<IoMoonOutline size='14px'/>) : (<IoMoon size='14px'/>) }
              
              
              <span style={{marginLeft: "0.75rem"}}>{theme} Theme</span>
            </ModeSwitcher>
          </Wrapper>
        </Container>
      </HeaderEl>
      <ion-icon  name="moon-outline"></ion-icon>
    </Fragment>
  );
};