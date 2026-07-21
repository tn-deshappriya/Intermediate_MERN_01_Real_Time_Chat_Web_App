import ChatContainer from "../components/ChatContainer"
import Rightsidebar from "../components/Rightsidebar"
import Sidebar from "../components/Sidebar"


const HomePage = () => {
    return (
        <div className="border w-full h-screen sm:px-[15%] sm:py-[5%]">
            <div>
                <Sidebar />
                <ChatContainer />
                <Rightsidebar />
            </div>
        </div>
    )
}

export default HomePage