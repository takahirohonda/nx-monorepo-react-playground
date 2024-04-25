import { render, screen } from '@testing-library/react'

import { PageLayout } from './PageLayout'

describe('<PageLayout />', () => {
  it('should render title', () => {
    render(
      <PageLayout title="Test">
        <div>helo</div>
      </PageLayout>
    )
    expect(screen.getByText('Test')).toBeVisible()
  })
})
