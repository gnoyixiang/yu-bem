/* eslint-env jest */
const bem = require('.').default
const { initBEMPrefix } = require('.')

test('bem with daypicker block', () => {
  const className = bem('daypicker')
  expect(className).toBe('daypicker')
})

test('bem with daypicker modifier, disabled modifier', () => {
  const className = bem('daypicker', null, 'disabled')
  expect(className).toBe('daypicker--disabled')
})

test('bem with daypicker block, input element', () => {
  const className = bem('daypicker', 'input')
  expect(className).toBe('daypicker__input')
})

test('bem with daypicker modifier, input element, disabled modifier', () => {
  const className = bem('daypicker', 'input', 'disabled')
  expect(className).toBe('daypicker__input--disabled')
})

test('bem init prefix yx, daypicker modifier, input element, disabled modifier', () => {
  initBEMPrefix('yx')
  const className = bem('daypicker', 'input', 'disabled')
  expect(className).toBe('yx-daypicker__input--disabled')
})

test('bem after init prefix yx, daypicker modifier, input element', () => {
  const className = bem('daypicker', 'input')
  expect(className).toBe('yx-daypicker__input')
})

test('bem custom prefix rc, daypicker modifier, input element, disabled modifier', () => {
  const className = bem('daypicker', 'input', 'disabled', 'rc')
  expect(className).toBe('rc-daypicker__input--disabled')
})
