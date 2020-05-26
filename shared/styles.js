import styled from '@emotion/styled';
import { css, Global } from '@emotion/core';
import { AccordionHeader, IconButton, Input } from '@chakra-ui/core';

// Global styling
export const globalStyles = (
  <Global
    styles={css`
      html {
        width: 100%;
      }
      body {
        font-family: Arial, Helvetica, sans-serif;
        background-color: honeydew;
        color: seagreen;
        position: absolute;
        height: 100%;
        width: 100%;
      }
    `}
  />
);

export const Layout = styled.div`
  max-width: 50%;
  margin: auto;
  text-align: center;
  img {
    display: inline;
  }
  ul {
    padding-left: 0px;
    list-style-type: none;
  }
`;

export const StyledButton = styled(IconButton)`
  :disabled {
    opacity: 1;
  }
`;

// Firefox thing
export const StyledInput = styled(Input)`
  :required {
    box-shadow: none;
  }
`;

export const StyleAccHeader = styled(AccordionHeader)`
  :focus {
    outline: 0 !important;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) !important;
  }

  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: transparent;
  -webkit-user-select: transparent;
  -khtml-user-select: transparent;
  -moz-user-select: transparent;
  -ms-user-select: transparent;
  user-select: transparent;
`;
