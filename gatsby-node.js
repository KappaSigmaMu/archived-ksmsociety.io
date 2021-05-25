const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = ({ graphql, actions: { createPage }, reporter }) => {
  reporter.success("createPages");

  const docsTemplate = require.resolve("./src/templates/page-template.js");

  return graphql( `{
    files: allFile(filter: { extension: { in: ["md", "mdx"] } }) {
      edges {
        node {
          id
          relativePath
          childMdx {
            frontmatter {
              title
              description
              image
            }
            body
            fields {
              slug
            }
          }
        }
      }
    }
  }`).then((result) => {
    if (result.errors) {
      reporter.panic("docs: there was an error loading the docs folder!", result.errors);
      return;
    }

    const sidebar = result.data.files.edges;
    const listOfItems = [];
    sidebar.forEach(({ node: { label, link, items } }) => {
      if (Array.isArray(items)) {
        items.forEach((item) => {
          listOfItems.push({
            label: item.label,
            link: item.link,
          });
        });
      } else {
        listOfItems.push({
          label,
          link: link,
        });
      }
    });

    // Generate docs pages
    const docs = result.data.files.edges;
    docs.forEach((doc) => {
      const { childMdx: { fields: { slug } } } = doc.node;

      const currentPageIndex = listOfItems.findIndex(
        (page) => page.link === slug.slice(0, slug.length - 1)
      );

      const prev = listOfItems[currentPageIndex - 1];
      const next = listOfItems[currentPageIndex + 1];

      createPage({
        path: slug,
        component: docsTemplate,
        context: {
          data: doc.node.childMdx,
          slug,
          prev,
          next,
        },
      });
    });

    reporter.success("Pages created");
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type MdxFrontmatter {
      title: String!
      description: String
      image: String
    }
  `);
};

exports.onCreateNode = ({ node, actions: { createNodeField }, getNode }) => {
  if (node.internal.type !== "Mdx") {
    return;
  }

  let value = createFilePath({ node, getNode });
  if (value === "index") value = "";

  createNodeField({
    name: "slug",
    node,
    value: value,
  });

  createNodeField({
    name: "id",
    node,
    value: node.id,
  });
};
