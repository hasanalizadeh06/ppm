import React from 'react'
import Image from 'next/image';
import { TbLogout } from "react-icons/tb";
import { MdOutlineAddAPhoto } from "react-icons/md";
import img from '@/assets/img/team/team_img01.png'; 
import Link from 'next/link';
import { BiSolidDashboard } from "react-icons/bi";

function AdminNav() {
  return (
    <aside className="auth-navbar">
                <div className="auth-profile">
                    <Image
                        src={img}
                        alt="Profile"
                        className="auth-profile-image"
                    />
                    <div className="auth-profile-info">
                        <span className="auth-profile-name">John Doe</span>
                        <span className="auth-profile-role">Admin</span>
                    </div>
                </div>
                <div className="auth-section-divider" />
                <nav>
                    <ul className="auth-navbar-list">
                        <li className="auth-navbar-item">
                            <Link href="/auth/dashboard" className="auth-navbar-link"><BiSolidDashboard className='icons'/> <span className='text'>Dashboard</span></Link>
                        </li>
                        <li className="auth-navbar-item">
                            <Link href="#" className="auth-navbar-link"><MdOutlineAddAPhoto className='icons'/> <span className='text'>Add Blog</span></Link>
                        </li>
                        <li className="auth-navbar-item">
                            <Link href="#" className="auth-navbar-link"><MdOutlineAddAPhoto className='icons'/> <span className='text'>Add Blog</span></Link>
                        </li>
                        <li className="auth-navbar-item">
                            <Link href="#" className="auth-navbar-link"><MdOutlineAddAPhoto className='icons'/> <span className='text'>Add Blog</span></Link>
                        </li>
                        <li className="auth-navbar-item">
                            <Link href="#" className="auth-navbar-link"><MdOutlineAddAPhoto className='icons'/> <span className='text'>Add Blog</span></Link>
                        </li>
                    </ul>
                </nav>
                <div className="auth-section-divider" />
                <button className="auth-exit-profile-btn">
                    <TbLogout className='exit-icon'/> <span className='text'>Exit Profile</span>
                </button>
            </aside>
  )
}

export default AdminNav