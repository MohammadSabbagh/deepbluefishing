import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({
  title,
  description,
  image,
  pathname,
  noindex
}) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          siteUrl
          twitter
          banner
          googleConsole
        }
      }
    }
  `);

  const siteUrl = data.site.siteMetadata.siteUrl;
  const siteTitle = data.site.siteMetadata.title;
  const siteDescription = data.site.siteMetadata.description;
  const twitter = data.site.siteMetadata.twitter;
  const banner = data.site.siteMetadata.banner;
  const googleConsole = data.site.siteMetadata.googleConsole;
//const logo = data.site.siteMetadata.logo;

  const pageType = 'website'
  const lang = 'en'

  const pagePathname = pathname || '/'
  const pageImage = new URL(image || banner, siteUrl);
  const url = new URL( pagePathname, siteUrl);
  const pageTitle = `${siteTitle} | ${title || ''} `;
  const pageDescription = description || siteDescription;

  const isRootPage = pagePathname =='/'

  console.log('pagePathname',pathname || '/');
  console.log('pathname',pathname);

  return (
    <Helmet>
      <html lang={lang} />
      <link rel="canonical" href={url} />
      <title>{ pageTitle }</title>
      <meta name="description" content={pageDescription} />
      <meta name="image" content={pageImage} />

      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={pageType} />
      <meta property="og:title" content={pageImage} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />

      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageImage} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />

      { noindex &&
        <meta name="robots" content="noindex, follow" />
      }

      { isRootPage &&
        <meta name="google-site-verification" content={googleConsole} />
      }
    </Helmet>
  );
}

export default SEO;
