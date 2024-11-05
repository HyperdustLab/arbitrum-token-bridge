import localFont from 'next/font/local'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'
import EclipseBottom from '@/images/eclipse_bottom.png'

import { AppSidebar } from '../Sidebar/AppSidebar'
import { Toast } from './atoms/Toast'

import 'react-toastify/dist/ReactToastify.css'

import Logo from '../../../public/logo.png'

// 然后在组件中使用：
;<Image src={Logo} alt="Logo" width={100} height={100} className="h-10 w-10" />

const unica = localFont({
  src: [
    {
      path: '../../font/Unica77LLWeb-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../font/Unica77LLWeb-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../font/Unica77LLWeb-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-unica77',
  fallback: ['Roboto', 'sans-serif'],
})

export type LayoutProps = {
  children: React.ReactNode
}

export function Layout(props: LayoutProps) {
  return (
    <div className={twMerge('relative flex-col', unica.className)}>
      <Image src={EclipseBottom} alt="grains" className="absolute left-1/2 top-0 w-full -translate-x-1/2 rotate-180 opacity-20" aria-hidden />
      <Image src={EclipseBottom} alt="grains" className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 opacity-20" aria-hidden />
      <div className="relative flex flex-col sm:min-h-screen">
        <div className="flex flex-row">
          <Image src={Logo} alt="Logo" className="mt-2 h-10 w-50" /> {/* 添加LOGO */}
          {/* <AppSidebar /> */}
          <main className="mr-50 grow">{props.children}</main>
          <Toast />
        </div>

        <footer className="footer">
          <div className="footer-content">
            <a href="https://play.hyperagi.network/privacyPolicy" target="_blank" className="footer-link">
              Privacy Policy
            </a>
            <span className="footer-copyright">&copy; 2024 HYPERDUST FOUNDATION LTD.. All rights reserved.</span>
          </div>
        </footer>
      </div>
      <style jsx>{`
        .footer {
          background-color: #333;
          padding: 20px 0;
          text-align: center;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-link {
          color: #fff;
          text-decoration: none;
          margin-right: 20px;
        }

        .footer-link:hover {
          text-decoration: underline;
        }

        .footer-copyright {
          color: #aaa;
          font-size: 14px;
        }
      `}</style>
    </div>
  )
}
