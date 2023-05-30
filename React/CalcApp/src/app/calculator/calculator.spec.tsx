import { render } from '@testing-library/react';

import Calculator from './calculator';

describe('Calculator', () => {
  describe('Component rendered', () => {
    it('first number input should be default text', () => {
      const expectedDefaultNumber = '0'
      const {getByLabelText} = render(<Calculator />)

      const comp = getByLabelText('first-input') as HTMLInputElement


      expect(comp.value).toEqual(expectedDefaultNumber)
    })

    it('second number input should be default text', () => {
      const expectedDefaultNumber = '0'
      const {getByLabelText} = render(<Calculator />)

      const comp = getByLabelText('second-input') as HTMLInputElement


      expect(comp.value).toEqual(expectedDefaultNumber)
    })
  })
});
