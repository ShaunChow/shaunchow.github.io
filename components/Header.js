
import Head from 'next/head'

export default ({ title = 'Shaun Chow' }) => (
  <Head>
    <title>{title}</title>
    <link href="http://gmpg.org/xfn/11" rel="profile" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width, maximum-scale=1" />

    <meta name="keywords" content="Java,kubernetes" />
    <meta name="description" content="7 years experience" />

    <link rel="stylesheet" href="/static/css/poole.css" />
    <link rel="stylesheet" href="/static/css/syntax.css" />
    <link rel="stylesheet" href="/static/css/hyde.css" />
    <link rel="stylesheet" href="/static/css/fonts.css" />

    <link rel="apple-touch-icon-precomposed" sizes="100x100" href="/static/favicon.png" />
    <link rel="shortcut icon" href="/static/favicon.ico" />

    <link rel="alternate" type="application/rss+xml" title="RSS" href="/atom.xml" />
  </Head>
)