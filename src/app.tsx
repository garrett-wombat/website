import 'tailwindcss/tailwind.css'

import { Routes } from '@/config'
import { Main } from '@/layouts'

export function App(): JSX.Element {
  return (
    <Main>
      <Routes />
    </Main>
  )
}