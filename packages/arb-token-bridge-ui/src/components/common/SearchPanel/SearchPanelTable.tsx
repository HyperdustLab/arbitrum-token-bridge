import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React, { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

type SearchPanelTableProps = {
  searchInputPlaceholder: string
  searchInputValue: string
  searchInputOnChange: React.ChangeEventHandler<HTMLInputElement>
  SearchInputButton?: React.JSX.Element
  onSubmit?: React.FormEventHandler<HTMLFormElement>
  errorMessage: string
  dataCy?: string
  isDialog: boolean
}

export const SearchPanelTable = ({
  searchInputPlaceholder,
  searchInputValue,
  searchInputOnChange,
  SearchInputButton,
  onSubmit = (event) => {
    event.preventDefault()
  },
  errorMessage,
  children,
  dataCy,
  isDialog,
}: PropsWithChildren<SearchPanelTableProps>) => {
  return (
    <div className="flex w-[calc(100vw_-_60px)] flex-col gap-3 md:w-full">
      <div className={twMerge('sm:shadow-search-panel h-[calc(100vh_-_200px)] rounded border border-gray-dark bg-black/30 md:h-[calc(100vh_-_390px)]', isDialog ? 'md:max-h-[700px]' : 'md:max-h-[400px]')} data-cy={dataCy}>
        {children}
      </div>
    </div>
  )
}
