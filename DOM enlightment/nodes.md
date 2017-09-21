## 第一章 节点概览 ###
### 1.1 DOM 是由节点对象组成的层次树 ###
>* HTML 文档被浏览器解析并转换为一个由节点对象组成已体现当前文档的树状结构
>* DOM 为js等语言的操作提供了一个编程接口

### 1.2 节点对象类型 ###  

[\[NodeType Sample\]](code/nodeType.html)

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
    ---------:|----------
  Node | Object - EventTarget - Node 
 HtmlElement | Node - Element - HTMLElement 
 Attr | Node - Attr (Dom4 弃用)
 Text | Node - CharaterData - Text
 HTMLDocument | Node - Document - HTMLDocument
 DocumentFragment | Node - DocumentFragment

 >* for ...of, 它会迭代出任何拥有[Symbol.iterator] 属性的collection对象的每个元素
 >* for...in, 循环会遍历一个object所有的可枚举属性
 >* getOwnPropertyNames, getPrototypeOf