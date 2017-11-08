## chapter 6 ##
### 6.2 Working with generator functions ###
#### 6.2.3 Communicating with a generator ####
[ES6新特性：Javascript中Generator(生成器)](http://www.cnblogs.com/diligenceday/p/5488037.html#_label6)
>* We use yield to return data from a generator, and the iterator’s next() method to pass data back to the generator. 
> 用yield 从一个生成器返回数据，从迭代器的next方法传递数据回到生成器。
>
>* Iterator as an analogue to closures. the iterator keeps a reference to its execution context, so that it’s alive for as long as the iterator needs it.
> 迭代器模拟了一个闭包。迭代器保留了对generator上下文的引用，只要需要它，环境就存在着。
>
>* Generator生成的Iterator，不但继承了Iterator的原型， 也继承了Generator的原型.

#### Promise 并发 ####
