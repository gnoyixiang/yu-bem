# yu-bem

Create className with BEM structure in JS. Understand more about BEM from https://css-tricks.com/bem-101/

# Getting started

```
npm install yu-bem
or 
yarn add yu-bem
```

# Usage

Function bem consists of the follow arguments

| arguments     | type     |
|-------------- |----------|
| block         | string   |
| element       | string   |
| modifier      | string   |
| customPrefix  | string   |

```
import bem from 'yu-bem'

const btn = bem('btn'); // returns 'btn'
const btnIcon = bem('btn', 'icon'); // returns 'btn__icon'
const btnDisabled = bem('btn', null, 'disabled'); // returns 'btn--disabled'
const btnIconSuffix = bem('btn', 'icon', 'suffix'); // returns 'btn__icon--suffix'

```

To append a class prefix to the className, call the initBEMPrefix function at the start

```
import { initBEMPrefix } from 'yu-bem'

initBEMPrefix('mylib')
const btn = bem('btn'); // returns 'mylib-btn'

```

or provide the customPrefix which will override the init prefix

```
const btnIconSuffix = bem('btn', null, null, 'mylib2'); // returns 'mylib2-btn'
const btnIconSuffix = bem('btn', 'icon', null, 'mylib2'); // returns 'mylib2-btn__icon'
```