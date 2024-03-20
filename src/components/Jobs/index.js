import './index.css'
import Header from '../Header'

import AllJobSection from '../AllJobSection'

const Jobs = () => (
  <>
    <Header />
    <div className="jobs-container">
      <div className="jobs-sections">
        <AllJobSection />
      </div>
    </div>
  </>
)
export default Jobs
