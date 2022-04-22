import AuthNavbar from '../../Components/AuthNavbar'
import Sidebar from '../../Components/Sidebar'
function LandingPage() {
    return (
        <div>
            <AuthNavbar />
            <div className="flex">
                <div className="w-[306px] h-[972px] fixed top-32 left-0">
                    <Sidebar />
                </div>
                <div className="h-[1200px] w-full bg-red-700">

                </div>
            </div>
        </div>
    )
}

LandingPage.displayName = 'LandingPage';

export default LandingPage