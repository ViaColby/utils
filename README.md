# Utils

![Coveralls](https://img.shields.io/coverallsCoverage/github/ViaColby/utils)
![GitHub License](https://img.shields.io/github/license/ViaColby/utils)

## 😃 简介 Introduction
整理前端日常开发工作中所用到的utils。</br>
Organize utils used in daily front-end development work.

## 😊 安装 Installation
```bash
$ npm i --save @liuqisiwu/utils
# or
$ yarn add @liuqisiwu/utils
# or
$ pnpm add @liuqisiwu/utils
```

## 😏 使用 Usage

### ESModule:
```js
import { isEmpty } from '@liuqisiwu/utils';
console.log(isEmpty({})) // => true
console.log(isEmpty([])) // => true
console.log(isEmpty([1])) // => false
```

### CommonJS:
```js
const { checkType } = require('@liuqisiwu/utils')
console.log(checkType('1')) // => 'String'
console.log(checkType([])) // => 'Array'
```

### In a browser:
download `index.umd.js` in [release](https://github.com/ViaColby/utils/releases)
```html
<script src="./index.umd.js"></script>
<script>
    // $utils => umd module name
    console.log($utils.isEmpty([])) // => true
</script>
```

## 😉 功能 Functions

### 数据校验

#### [checkType](https://github.com/ViaColby/utils/blob/main/src/checkType.ts#L11)
校验数据类型
```js
import { checkType } from '@liuqisiwu/utils'

console.log(checkType('1'))         // => 'String'
console.log(checkType(['1']))       // => 'Array'
console.log(checkType({}))          // => 'Object'
console.log(checkType(new Map()))   // => 'Map'
```

#### [isEmpty](https://github.com/ViaColby/utils/blob/main/src/isEmpty.ts#L15)
判断对象、数组或者其他集合是否为空
```js
import { isEmpty } from '@liuqisiwu/utils'

console.log(isEmpty('1'))         // => false
console.log(isEmpty(['1']))       // => false
console.log(isEmpty(null))        // => true
console.log(isEmpty({}))          // => true
console.log(isEmpty(new Map()))   // => true
```

### 文件下载

#### [downloadByUrl](https://github.com/ViaColby/utils/blob/main/src/downloadByUrl.ts#L9)
通过url下载文件
```js
import { downloadByUrl } from '@liuqisiwu/utils';

downloadByUrl('http://www.xxxxx.com', 'filename');
```

#### [downloadByFileStream](https://github.com/ViaColby/utils/blob/main/src/downloadByFileStream.ts#L12)
通过文件流下载文件
```js
import { downloadByFileStream } from '@liuqisiwu/utils';

downloadByFileStream('file stream', 'filename', 'MIME type');
```

### 数据处理

#### [flatToTree](https://github.com/ViaColby/utils/blob/main/src/flatArrayToTree.ts#L44)
将扁平数组转换为树形结构的方法

|   参数   | 是否必需  |         类型          |            说明            |
|:------:|:-----:|:-------------------:|:------------------------:|
|  list  | true  |        array        |       需要转换为树形结构的数组       |
| option | false | TreeTransformOption | 如下 `TreeTransformOption` |

`TreeTransformOption`：

|    属性    | 是否必需 |   类型   |          说明          |    默认值     |
|:--------:|:-------:|:------:|:--------------------:|:----------:|
|  id      |  false  | string | 指定节点的id为节点对象的某个属性值 |    'id'    |
|  parent  |  false  | string |  指定节点的父级id为节点对象的某个属性值  |   'pid'    |
| children |  false  | string |  指定节点的子级为节点对象的某个属性值  | 'children' |


```js
import { flatToTree } from '@liuqisiwu/utils';

const flatList = [
  { id: 1, label: '1', parentId: 0 },
  { id: 2, label: '2', parentId: 1 },
  { id: 3, label: '3', parentId: 0 },
  { id: 4, label: '4', parentId: 3 },
  { id: 5, label: '5', parentId: 4 },
];
const result = flatToTree(flatList, { parent: 'parentId' });
console.log(result);
// => [
//  {
//     id: 1,
//     label: '1',
//     parentId: 0,
//     children: [{ id: 2, label: '2', parentId: 1 }]
//   },
//   {
//     id: 3,
//     label: '3',
//     parentId: 0,
//     children: [
//        {
//          id: 4,
//          label: '4',
//          parentId: 3,
//          children: [{ id: 5,label: '5',parentId: 4 }]
//        }
//     ]
//   }
// ];
```

#### [findNodes](https://github.com/ViaColby/utils/blob/main/src/findNodes.ts#L23)
在树形结构中找出所有符合条件的节点

|     参数      | 是否必需  |                   类型                   |   说明    |
|:-----------:|:-----:|:--------------------------------------:|:-------:|
|    tree     | true  |                 array                  | 需要查询的数组 |
|     cb      | true  | (node: Record<string, any>) => boolean |  查询条件   |
| children    | false |                 string                 |    指定节点的子级为节点对象的某个属性值     |

```js
const tree = [
  { id: '1', value: 1, children: [{ id: '1-1', value: 2 }] },
  { id: '2', value: 1 },
  { id: '3', value: 4, children: [{ id: '3-1', value: 1 }] },
]
const result = findNodes(tree, (node) => node.value & 2 === 0)
console.log(result)
// => [
//  { id: '1-1', value: 2 },
//  { id: '3', value: 4, children: [{ id: '3-1', value: 1 }] }
// ]
```

#### [findBranches](https://github.com/ViaColby/utils/blob/main/src/findBranches.ts#L21)
在树形结构中找出所有符合条件的节点所在的分支(到符合条件的节点为止)

|     参数      | 是否必需  |                   类型                   |   说明    |
|:-----------:|:-----:|:--------------------------------------:|:-------:|
|    tree     | true  |                 array                  | 需要查询的数组 |
|     cb      | true  | (node: Record<string, any>) => boolean |  查询条件   |
| children    | false |                 string                 |    指定节点的子级为节点对象的某个属性值     |

```js
const tree = [
  { id: '1', value: 1, children: [{ id: '1-1', value: 2 }] },
  { id: '2', value: 1 },
]
const result = findBranches(tree, (node) => node.value === 2)
console.log(result)
// => [
//  { id: '1', value: 1, children: [{ id: '1-1', value: 2 }] }
// ]
```
