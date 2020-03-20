import Header from './Header'
import Sidebar from './Sidebar'

export default ({ children, title }) => (
  <div>
    <Header title={title} />
    <body>
      <Sidebar />
      <div className="content container">
        {children}
      </div>
    </body>
  </div>
)