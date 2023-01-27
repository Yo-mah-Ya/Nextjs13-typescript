import { FC, memo } from "react";
import Head from "next/head";

const NextHead: FC<{
    meta: {
        description: string;
        title: string;
    };
}> = ({ meta: { description, title } }) => (
    <Head>
        <title key="title">{title}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta key="description" name="description" content={description} />
        <meta name="format-detection" content="telephone=no,email=no,address=no" />
        {/* Font Optimization */}
        <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
        />
        {/* pre fetch */}
        {/* <link rel="dns-prefetch" href={`${environments.cdnEndpoint}/`} />
            <link rel="preconnect" href={`${environments.cdnEndpoint}`} />
            <link rel="prefetch" href={`${environments.cdnEndpoint}`} />
            <link
                rel="prerender"
                href={`${environments.cdnEndpoint}/next-page.html`}
            /> */}
        {/* WebApp */}
        <meta name="application-name" content={title} />
        <meta name="theme-color" content={"white"} />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TitleColor" content={"white"} />
        <meta name="apple-mobile-web-app-title" content={title} />
        <meta name="apple-mobile-web-app-status-bar-style" content={"white"} />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" sizes="64x64" href="/favicon.ico" />
        <link
            rel="search"
            type="application/opensearchdescription+xml"
            title="React_template"
            href="/opensearch.xml"
        />
        {/*OGP */}
        <meta property="og:site_name" content={title} />
        <meta property="og:locale" content="en" />
        <meta key="og:type" property="og:type" content="website" />
        <meta key="og:title" property="og:title" content={title} />
        <meta key="og:description" property="og:description" content={description} />
    </Head>
);

export default memo(NextHead);
