import Header from './Header'
import Sidebar from './Sidebar'

export default ({ children, title }) => (
  <div>
    <Header title={title} />
    <Sidebar />
    <div className="content container">
      {children}
    </div>
  </div>
)