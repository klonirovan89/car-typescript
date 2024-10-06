import { clsx } from 'clsx'

import s from './index.module.scss'

interface BurgerMenuProps  {
  onClick?: () => void
  isNavModalOpen: boolean
}

export function BurgerMenu({ onClick, isNavModalOpen }: Readonly<BurgerMenuProps >) {
  return (
    <button className={clsx(s.button_menu, isNavModalOpen && s.open)} onClick={onClick}>
      <span></span>
    </button>
  )
}
