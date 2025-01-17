import React from 'react';
import {Icon} from "../../assets";
import "./AdminLayout.scss";
import {Link} from "react-router-dom"
import {AdminMenu, Logout} from "../../components/Admin/AdminLayout"

export function AdminLayout(props) {
    const { children } = props;
  return (
    <div className='admin-layout'>
      <div className='admin-layout__left'>
        <Link to="/admin/Princ">
                    <Icon.LogoWhite className='logo' />
                </Link>
        <AdminMenu/>
      </div>
      <div className='admin-layout__right'>
        <div className='admin-layout__right-header'>
          <Logout/>
        </div>
        <div className='admin-layout__right-content'>
          {children}
        </div>
      </div>
    </div>
  )
}
