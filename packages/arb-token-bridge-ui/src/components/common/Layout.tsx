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
          <main className="grow">{props.children}</main>
          <Toast />
        </div>

        <footer className="bg-black py-4 text-center text-white">
          <p className="mb-1">
            <a href="https://arbitrum.io/tos" target="_blank" rel="noopener noreferrer" className="mr-4 text-white underline hover:text-gray-400" onClick={(e) => e.stopPropagation()}>
              ToS
            </a>
            <a href="https://arbitrum.io/privacy" target="_blank" className="mr-4 text-white underline hover:text-gray-400" onClick={(e) => e.stopPropagation()}>
              Privacy Policy
            </a>
            <a href="https://arbitrumfoundation.notion.site/arbitrumfoundation/Arbitrum-Brand-Kit-48751dc5e03240a5872496283f088f79" target="_blank" className="text-white underline hover:text-gray-400" onClick={(e) => e.stopPropagation()}>
              Media Kit
            </a>
          </p>
          <a href="https://arbitrum.io/" target="_blank" className="text-xs">
            Built with love by Offchain Labs, builders of Arbitrum technology.
          </a>
        </footer>
      </div>
    </div>
  )
}
