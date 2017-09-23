## 第一章 节点概览 ###
### 1.1 DOM 是由节点对象组成的层次树 ###
>* HTML 文档被浏览器解析并转换为一个由节点对象组成已体现当前文档的树状结构
>* DOM 为js等语言的操作提供了一个编程接口

### 1.2 节点对象类型 ###  

[\[NodeType Sample\]](Code/nodeType.html)

code | num | sample
---------|----------|---------
 ELEMENT_NODE | 1 | script , a
 ATTRIBUTE_NODE | 2 | class=''
 TEXT_NODE | 3 | 文本字符
 DOCUMENT_NODE | 9 | window.document
 DOCUMENT_TYPE_NODE | 10 | \<!DOCTYPE html\>
 FRAGMENT_NODE | 11 | document.createDocumentFragment

>* DOM 将 Node, Element, HTMLElement, Text, Attr 都设计为接口；在javascript编程中，这些同时也都是构造函数。
>* 不能直接new的方式创建对象（这也是体现它们的确是接口; 而是通过 document的createElemnt， createTextNode, setAttribute, createFragment的方法创建。

### 1.3 继承自节点对象的子对象 ###

interface | inherit 
---------|----------
  Node | Object - EventTarget - Node 
 HtmlElement | Node - Element - HTMLElement 
 Attr | Node - Attr (Dom4 弃用)
 Text | Node - CharaterData - Text
 HTMLDocument | Node - Document - HTMLDocument
 DocumentFragment | Node - DocumentFragment

 #### [Note] : javascript 遍历有关的背景知识  ####
>1. Js对象的属性除了本身属性还会从原型链继承属性
>
>2. Js对象的属性都有是否可被枚举的属性(enumerable);
>
>3. Js通过：(keys, values, entries)数组，或者迭代器方法(Iterator)遍历，迭代器方法会被Attry等子对象重载。
>>  * Object对象层面的所有的可枚举属性，可通过Object.keys, .values, .entries 迭代获得
>>  * Array对象重载了keys,value,entries的迭代方法，它包含数组中每个索引的键（[参见](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/keys)）

#### [Note] : javascript 各种遍历方法区别 ####
>* for ... in ，用Oject的keys,values等方法，遍历对象的本身和从原型链继承而来的所有可枚举属性。 配合hasOwnProperty，可以过滤只属于对象自身的属性。
>
>* for ... of , 调用对象的Iterator方法，循环迭代器的所有值。 只能在实现了迭代器方法（Iterator）的对象上使用
>* foreach 等方法， 都是　Array.prototype的方法，对Object 不适用
>* getOwnPropertyNames, 返回指定对象的所有自身属性的属性名，包含所有的枚举或不可枚举属性。配合getPrototypeOf, propertyIsEnumerable， 可以遍历原型链上所有的属性

### 1.4 用于与节点打交道的属性和方法 ###
>* node.appendChild 参数不能是string，必须是node对象
>* node.insertAdjacentHTML 和 innerHTML 相比，它不会重新解析它正在使用的元素，因此它不会破坏元素内的现有元素。这避免了额外的序列化步骤，使其比直接innerHTML操作更快。

### 1.15 Nodelist or HTMLCollection 转化为 Array ###
>* NodeList和HTMLCollection 在某些方面和Array非常相似，但并不是Array。 从原型链可以看出NodeList 直接继承自Object
>* NodeList在大多数情况下是实时集合，即：如果DOM发生变化，NodeList对象也会变化。但在另一些情况NodeList也会是一个静态集合，如doument.querySelectorAll
>* 将NodeList转化为Array的方法： Array.prototype.slice.call ， 或者(ES6中的)Array.from

## 第二章 文档节点 ##

### 2.2 属性和方法 ###
### 2.7 ~ 2.10 ####
>* document.activeElement 返回当前页面中获得焦点的元素,该属性是只读的.
>* document.hasFocus 明当前文档或者当前文档内的节点是否获得了焦点
>* document.defaultView 在浏览器中，该属性返回当前 document 对象所关联的 window 对象，如果没有，会返回 null。
>* Node.ownerDocument , 只读属性，任何一个dom元素都会返回当前节点的顶层的 document 对象