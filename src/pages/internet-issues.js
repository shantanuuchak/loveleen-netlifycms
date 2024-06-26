import React from "react";
import { Link } from "gatsby"


import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";
import Headings from "@narative/gatsby-theme-novela/src/components/Headings";

function NotFoundPage() {
  return (
    <Layout>
      <SEO />
      <Section>
        <div style={{ marginTop: "100px" }}>
          <Headings.h1>Internet Issues - Troubleshooting</Headings.h1>
          <p>Having issues connecting to the internet? Here are some things to try in our house.</p>
        <ul>
        <li>Your Device
        <ul>
          <li>Is airplane mode on? Is WiFi enabled?</li>
          <li>Is the device within range of the router or physically connected to the network via ethernet?</li>
          <li>Are you connected to the correct network?</li>
        </ul>
        </li>

        <br />

        <li>The Router / Modem
          <ul>
            <li>Have you checked the ISPs status page to check for an outage? You can use your smartphone and mobile data to check this.</li>
            <li>Have you tried rebooting the router and/or modem?</li>
            <li>Have you checked to make sure that all physical connections to and from the router and modem are secure?</li>
          </ul>
        </li>
      </ul>

      <br/>

      <p>
        <Link to="/">Back to homepage</Link> <br />
      </p>
          </div>
        </Section>
      </Layout>
  );
}

export default NotFoundPage;
