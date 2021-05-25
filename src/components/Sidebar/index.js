import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql, Link } from "gatsby";

import {
  Container,
  LogoContainer,
  List,
  Heading,
  Item,
  SubItem,
} from "./styles";
import ExternalLink from "./ExternalLink";
import InternalLink from "./InternalLink";
import Logo from "../Logo";

function isExternalUrl(url) {
  return new RegExp("^((https?:)?//)", "i").test(url);
}

function ListWithSubItems({ children, text }) {
  return (
    <>
      <Heading>{text}</Heading>
      <SubItem>{children}</SubItem>
    </>
  );
}

export default function Sidebar({ isMenuOpen }) {
  const {
    site: {
      siteMetadata: { basePath },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          basePath
        }
      }
    }
  `);

  const data = [
    {
      node: {
        label: "Home",
        items: null,
        link: "/"
      }
    },
    {
      node: {
        label: "Brand Releases",
        items: null,
        link: "/releases"
      }
    },
    {
      node: {
        label: "How to Join",
        items: null,
        link: "/how-to-join"
      }
    },
    {
      node: {
        label: "The Kusama Fratority",
        items: null,
        link: "/the-fratority"
      }
    },
    {
      node: {
        label: "External Links",
        items: [
            {
              label: "Society Rules",
              link: "https://polkascan.io/kusama/transaction/0x948d3a4378914341dc7af9220a4c73acb2b3f72a70f14ee8089799da16d94c17"
            },
            {
              label: "Motion 186",
              link: "https://kusama.polkassembly.io/motion/186"
            },
            {
              label: "The Third Generation",
              link: "https://www.youtube.com/watch?v=-JfQ2vCipWU&t=4s"
            },
            {
              label: "Branding Drive",
              link: "https://drive.google.com/drive/u/1/folders/1ReG63yRvPgIRRyryDTbrACHELcZoMkA3"
            },
            {
              label: "Code Repository",
              link: "https://github.com/KappaSigmaMu" },
            {
              label: "Trello",
              link: "https://trello.com/b/aqOYaoD0/brand-and-website"
            }
          ],
        link: "/null"
      }
    }
  ]

  function renderLink(link, label) {
    return isExternalUrl(link) ? (
      <ExternalLink link={link} label={label} />
    ) : (
      <InternalLink link={link} label={label} />
    );
  }

  return (
    <Container isMenuOpen={isMenuOpen}>
      <LogoContainer>
        <Link to={basePath} aria-label="Go to home page">
          <Logo aria-hidden="true" />
        </Link>
      </LogoContainer>
      <nav>
        <List>
          {data.map(({ node: { label, link, items, id } }) => {
            if (Array.isArray(items)) {
              const subitems = items.map((item) => (
                <Item key={item.link}>{renderLink(item.link, item.label)}</Item>
              ));

              return (
                <ListWithSubItems key={id} text={label}>
                  {subitems}
                </ListWithSubItems>
              );
            }

            return <Item key={id}>{renderLink(link, label)}</Item>;
          })}
        </List>
      </nav>
    </Container>
  );
}

ListWithSubItems.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node,
  ]).isRequired,
  text: PropTypes.string.isRequired,
};

Sidebar.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};
