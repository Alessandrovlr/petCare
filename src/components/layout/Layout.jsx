import { Outlet } from "react-router-dom"
import { Menu } from "../menu/Menu"

export const Layout = () =>{
    return(
        <div>
            <Menu />

            <main className="flex flex-col justify-center items-center h-[87%]">
                <Outlet />
            </main>

            <footer className="bg-gray-800 text-gray-400 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-bold text-white mb-2">footer</h3>
                        <p>footer</p>
                    </div>
                </div>
                <div className="mt-8 text-center text-sm">
                    <p>&copy; aaa.</p>
                </div>
            </div>
        </footer>
        </div>
    )
}