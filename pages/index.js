import Layout from '../components/HydeLayout'
import ReactMarkdown from 'react-markdown'

const input = '## 赠药山高僧惟俨\n\n'
  + '炼得身形似鹤形，千株松下两函经。\n\n'
  + '我来问道无余说，云在青天水在瓶。'

export default () => (
  <Layout title="Shaun Chow" >
    <ReactMarkdown source={input} />
  </Layout>
)