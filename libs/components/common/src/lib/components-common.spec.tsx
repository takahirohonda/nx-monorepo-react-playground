import { render } from '@testing-library/react';

import ComponentsCommon from './components-common';

describe('ComponentsCommon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentsCommon />);
    expect(baseElement).toBeTruthy();
  });
});
