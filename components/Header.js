
import Head from 'next/head'

export default ({ title = 'This is Shaun Chow' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <link href="http://gmpg.org/xfn/11" rel="profile" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta http-equiv="content-type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width, maximum-scale=1" />

      <link rel="apple-touch-icon-precomposed" sizes="100x100" href="/static/favicon.png" />
      <link rel="shortcut icon" href="/static/favicon.ico" />

      <link rel="alternate" type="application/rss+xml" title="RSS" href="/atom.xml" />
    </Head>
  </div>
)