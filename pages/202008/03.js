import Layout from '../../components/HydeLayout'
import ReactMarkdown from 'react-markdown'

const input = '## 2020.08.03\n\n'
    + 'I love three things in this world.\n\n'
    + 'Sun, Moon and You.\n\n'
    + 'Sun for morning, Moon for night,\n\n'
    + 'and You forever.\n\n'
    + '浮世三千，吾爱有三。\n\n'
    + '日、月与卿。\n\n'
    + '日为朝，月为幕。\n\n'
    + '卿为朝朝幕幕。\n\n'

export default () => (
    <Layout title="Shaun Chow" >
        <ReactMarkdown source={input} />
    </Layout>
)