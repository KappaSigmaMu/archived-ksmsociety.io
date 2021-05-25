/* @jsx jsx */
import { useState, useRef, Fragment } from "react";
import { jsx, css } from "@emotion/react";
import PropTypes from "prop-types";

import Sidebar from "../Sidebar";
import Header from "../Header";
import Overlay from "../Overlay";
import { Container, Main, Children } from "./styles";

export default function Layout({
  children,
  title,
}) {
  const contentRef = useRef(null);
  const [isMenuOpen, setMenuOpen] = useState(false);

  function handleMenuOpen() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <Fragment>
      <Overlay isMenuOpen={isMenuOpen} onClick={handleMenuOpen} />
      <Container>
        <Sidebar isMenuOpen={isMenuOpen} />
        <Main>
          <Header handleMenuOpen={handleMenuOpen} />
          {title && (
            <h1
              css={css`
                display: none;

                @media (max-width: 1200px) {
                  display: block;
                }
              `}
            >
              {title}
            </h1>
          )}
          <Children ref={contentRef}>
            {title && (
              <h1
                css={css`
                  @media (max-width: 1200px) {
                    display: none;
                  }
                `}
              >
                {title}
              </h1>
            )}
            {children}
          </Children>
        </Main>
      </Container>
      <div>
        <p style={{ textAlign: "center", marginTop: "100px", marginBottom: "50px" }}>2021 • KΣM Fratority</p>
      </div>
    </Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string,
};

Layout.defaultProps = {
  title: "",
};
