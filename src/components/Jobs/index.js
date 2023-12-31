import './index.css'
import Header from '../Header'

import AllJobSection from '../AllJobSection'

const Jobs = () => (
  <>
    <Header />
    <div className="job-container">
      <div className="job-sections">
        <AllJobSection />
      </div>
    </div>
  </>
)
export default Jobs
