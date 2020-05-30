const CONNECTORS = ['', '-', '__', '--']
let __prefix
/**
 * creates a class with BEM structure
 * @param {string} block
 * @param {string} element
 * @param {string} modifier
 * @param {string} customPrefix
 */
const BEM = (block, element, modifier, customPrefix) => {
  return [customPrefix || __prefix, block, element, modifier]
    .map((type, i, arr) => (
      type
        ? (
          i !== 1 || arr[0] ? CONNECTORS[i] : ''
        ) + type
        : ''
    )).join('').trim()
}

/**
 *
 * @param {string} prefix
 */
const initBEMPrefix = prefix => {
  __prefix = prefix
}

export default BEM
export { initBEMPrefix }
