import AuthNavbar from '../../Components/AuthNavbar'
import Sidebar from '../../Components/Sidebar'
function LandingPage() {
    return (
        <div>
            <AuthNavbar />
            <div className="">
                <Sidebar/>
            </div>
        </div>
    )
}

LandingPage.displayName = 'LandingPage';

export default LandingPage