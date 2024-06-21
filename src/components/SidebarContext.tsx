"use client";

import { createContext, useState, useEffect, ReactNode, useCallback } from "react";

const initialValue = {
    isCollapsedSidebar: false,
    toggleSidebarCollapseHandler: () => {},
    handleLinkClick: () => {},
};

export const SidebarContext = createContext(initialValue);

interface Props {
    children: ReactNode | ReactNode[];
}

const SidebarProvider = ({ children }: Props) => {
    const [isCollapsedSidebar, setIsCollapsedSidebar] = useState<boolean>(() => {
        if (typeof window !== "undefined") {
            const storedValue = localStorage.getItem("isCollapsedSidebar");
            return storedValue ? JSON.parse(storedValue) : false;
        }
        return false;
    });

    const toggleSidebarCollapseHandler = useCallback(() => {
        setIsCollapsedSidebar(prev => {
            const newValue = !prev;
            if (typeof window !== "undefined") {
                localStorage.setItem("isCollapsedSidebar", JSON.stringify(newValue));
            }
            return newValue;
        });
    }, []);

    const handleLinkClick = useCallback(() => {
        toggleSidebarCollapseHandler();
    }, [toggleSidebarCollapseHandler]);

    return (
        <SidebarContext.Provider value={{ isCollapsedSidebar, toggleSidebarCollapseHandler, handleLinkClick }}>
            {children}
        </SidebarContext.Provider>
    );
};

export default SidebarProvider;
