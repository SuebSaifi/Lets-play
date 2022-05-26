import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import "./FeaturedInfo.css"
const FeaturedInfo = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">Revanue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,415</span>
                <span className="featuredMoneyRate">-1,415 <ArrowDownward className='featuredIcon negative'/></span>
            </div>
            <span className="featuredSub">Compared To last Months</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,415</span>
                <span className="featuredMoneyRate">-1,415 <ArrowDownward className='featuredIcon negative '/></span>
            </div>
            <span className="featuredSub">Compared To last Months</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,415</span>
                <span className="featuredMoneyRate">1,415 <ArrowUpward className='featuredIcon '/></span>
            </div>
            <span className="featuredSub">Compared To last Months</span>
        </div>
    </div>
  )
}

export default FeaturedInfo