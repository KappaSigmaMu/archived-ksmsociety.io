import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import PostNav from "../components/PostNav";

const DocsComponent = ({ pageContext }) => {
  const { prev, next } = pageContext;
  const { title, description, image } = pageContext.data.frontmatter;
  const { body } = pageContext.data;
  const { slug } = pageContext.data.fields;


  return (
    <>
      <Seo title={title} description={description} slug={slug} image={image} />
      <Layout title={title}>
        <MDXRenderer>{body}</MDXRenderer>
        <PostNav prev={prev} next={next} />
      </Layout>
    </>
  );
}

export default DocsComponent
