import clsx from 'clsx'

import { ROOT } from '../../routes/routes'

export const Header = () => {
  return (
    <ul className="flex gap-8 my-8">
      <li>
        <a
          className={clsx('hover:underline', 'active:underline')}
          href={ROOT.path}
        >
          Home
        </a>
      </li>
      <li>
        <a
          className={clsx('hover:underline', 'active:underline')}
          href={ROOT.SHOP.path}
        >
          Shop
        </a>
      </li>
      <li>
        <a href={ROOT.TEST_PAGES.HOME.path}>Test Page Home</a>
      </li>
      <li>
        <a href={ROOT.TEST_PAGES.ABOUT.path}>About</a>
      </li>
      <li>
        <a href={ROOT.TEST_PAGES.PRODUCTS.path}>Products</a>
      </li>
      <li>
        <a href={ROOT.TEST_PAGES.MORE.path}>More</a>
      </li>
      <li>
        <a href={ROOT.EXPERIMENTS.MULTI_STEP_FORM.path}>Multi-step Form</a>
      </li>
      <li>
        <a href={ROOT.EXPERIMENTS.CARD_LIST_PAGE_TEST.path}>Card List Page</a>
      </li>
      <li>
        <a href={ROOT.EXPERIMENTS.MSW_TEST.path}>MswTest</a>
      </li>
    </ul>
  )
}
