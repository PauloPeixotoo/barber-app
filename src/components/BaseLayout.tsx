import { ReactNode } from "react"
import Sidebar from "./Sidebar"
import SidebarProvider from "./SidebarContext"

interface Props {
    children: ReactNode | ReactNode[
    ]
}

export default function BaseLayout({ children }: Props) {
    return <div className="layout">
        <SidebarProvider>
            <Sidebar />
        </SidebarProvider>
        {children}
    </div>
}