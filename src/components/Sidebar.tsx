"use client";

import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiLogout } from "react-icons/ci";
import { MdDashboard, MdSchedule } from "react-icons/md";
import { RiQuillPenLine } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { RiMenuLine } from "react-icons/ri";
import { SidebarContext } from "./SidebarContext";

const sidebarItems = [
    {
        name: 'Início',
        href: '/',
        icon: AiOutlineHome,
    },
    {
        name: 'Agendamentos',
        href: '/schedules',
        icon: MdSchedule,
    },
    {
        name: 'Assinaturas',
        href: '/subscriptions',
        icon: RiQuillPenLine,
    },
    {
        name: 'Perfil',
        href: '/profile',
        icon: IoPersonOutline,
    },
    {
        name: 'Sair',
        href: '/',
        icon: CiLogout,
    },
];

export default function Sidebar() {
    const { isCollapsedSidebar, toggleSidebarCollapseHandler } =
        useContext(SidebarContext);

    return (
        <div className="sidebar_wrapper">
            <button className="btn" onClick={toggleSidebarCollapseHandler}>
                <RiMenuLine />
            </button>
            <aside className={`sidebar ${isCollapsedSidebar ? 'collapsed' : ''}`} data-collapse={isCollapsedSidebar}>
                <div className="sidebar_top">
                    <Image src="/logo.jpg"
                        width={80}
                        height={80}
                        className="sidebar_logo"
                        alt="logo"
                    />
                    <p className="sidebar_logo-name">Barbearia Street</p>
                </div>
                <ul className="sidebar_list">
                    {sidebarItems.map(({ name, href, icon: Icon }) => (
                        <li className="sidebar_item" key={name}>
                            <Link href={href} className="sidebar_link">
                               <span className="sidebar_icon">
                                    <Icon />
                                </span>
                                <span className="sidebar_name">{name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    );
}
