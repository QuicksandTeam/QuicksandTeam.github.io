---
title: 01-Week1：Python 基础数据类型和链表
time: 2021-10-31 17:10:33
author: AI悦创
original: true
category: AI悦创·算法
tags:
    - AI悦创·算法
sticky: false
password: false
article: true
timeline: true
navbar: true
sidebar: true
comment: true
---

你好，我是悦创。

我们先来看看今天要学习的内容：

- 列表、集合、元组、字典
- 链表



## 1. 你真的了解这四个数据类型吗？

- 列表/list
- 元组/tuple
- 字典/dict
- 集合/set



### 1.1 列表 VS. 元组

1. 可变与不可变
1. 选择存储策略
   1. 存储经纬度用：元组
   1. 存储用户访问：列表



### 1.2 字典 VS. 集合

- 字典：键对值
- 集合：值



## 2. 任务「统计一片文章词频」
目标文本：[I_Have_a_Dream.txt](https://www.yuque.com/attachments/yuque/0/2021/txt/1359959/1620740300099-66131a04-22db-4d7a-b5c5-94e8de6544df.txt?_lake_card=%7B%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Ftxt%2F1359959%2F1620740300099-66131a04-22db-4d7a-b5c5-94e8de6544df.txt%22%2C%22name%22%3A%22I_Have_a_Dream.txt%22%2C%22size%22%3A9186%2C%22type%22%3A%22%22%2C%22ext%22%3A%22txt%22%2C%22status%22%3A%22done%22%2C%22source%22%3A%22transfer%22%2C%22id%22%3A%22jSRfM%22%2C%22card%22%3A%22file%22%7D)/[https://www.aiyc.top/1774.html](https://www.aiyc.top/1774.html)

解决代码如下，不过代码主要为了解决问题，优化后的代码，也会提供。**本任务主要是为了让你熟悉各个数据类型的用法。**

```python
# -*- coding: utf-8 -*-
# @Time    : 2021/5/11 9:42 下午
# @Author  : AI悦创
# @FileName: words_count_main.py
# @Software: PyCharm
# @Blog    ：http://www.aiyc.top
# @公众号   ：AI悦创
words = []


def find_word_count(words):
	word_count = {}
	# 1.0
	# for word in set(words):
	# 	word_count[word] =  0
	# for word in  words:
	# 	word_count[word] += 1
	for word in words:
		if word in word_count:
			word_count[word] += 1
		else:
			word_count[word] = 1
	return word_count


with open('I_Have_a_Dream.txt', mode='r', encoding='utf-8') as f:
	"""
	f.read() -> type: <class 'str'>
	f.readline() -> type: <class 'str'> -> Read a line
	f.readlines() -> type: <class 'list'> -> Read all
	"""
	lines = f.readlines()
	for line in lines:
		line = line.replace(',', '')
		line = line.replace(':', '')
		line = line.replace('?', '')
		line = line.replace('!', '')
		line = line.replace('"', '')
		line = line.replace('\n', '')
		line = line.replace('”', '')
		line = line.replace('.', '')
		line = line.replace(';', '')
		line = line.replace('“', '')
		for word in line.split(' '):
			if word: words.append(word)

if __name__ == '__main__':
	print(len(words))
	print(len(set(words)))
	r = find_word_count(words)
	print(r)
```
**补充：**不推荐使用如下方式访问文件：

```python
f = open("text.txt", "w")
f.read()
f.close()
```



## 3. 链表

在我们接触的 Python 中的列表，其实就是可以做成链表的形式使用的。
```python
L = [3, 5, 6]
L.append(7)
```
**如何自己实现一个类似的结构呢？**可以**查询元素、添加元素、插入元素、删除元素**

那我们先来简单的、系统的了解一下链表的定义。与数组相似，**链表**也是一种线性数据结构。这里有一个例子：

![image.png](https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291655350.png)

正如你所看到的，**链表中的每个元素实际上是一个单独的对象，而所有对象都通过每个元素中的引用字段链接在一起。**


链表有两种类型：**单链表**和**双链表**。上面给出的例子是一个单链表，这里有一个双链表的例子：

![image.png](https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291655147.png)

不过，我这里主要讲解当链表结构。链表是一种线性数据结构，它通过引用字段将所有分离的元素链接在一起。


**其实，不就类似我们的铁链。**


### 3.1 定义一个最简单的链表

```python
class IntList(object):
	def __init__(self):
		"""
		first:存自己本身的数据
		rest:存下一个节点，也就下一个节点是谁
		"""
		self.first = None
		self.rest = None
```
![image.png](https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291655932.png)
![image.png](https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291655607.png)

```python
l1 = IntList()
l1.first = 5

l2 = IntList()
l2.first = 10

l3 = IntList()
l3.first = 15
```
![image.png](https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291657818.png)

**上面代码其实就可以理解为，创建了每一节车厢，那我们该如何吧车厢链接起来呢？**

```python
l1.rest = l2
l2.rest = l3
# 正好使用两行代码连在一起了，也就是火车的两个铁链
# PS: 如果你这么写的话：l1.rest = l2.first > 注意：这将不是链接一个车厢，而是连接一个 Value。
# 所以：l1.rest = l2 才是连接车厢
```
![image.png](https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291657853.png)

但是，要是像下面代码这样写是不行的。**这就好像，我们的火车一节连着一节，连的是一整个车厢不是就一部分。其中，lx.first 是一个值。**

![image.png](https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291658571.png)

> 可以使用：[http://pythontutor.com/](http://pythontutor.com/) 来讲解



**那我们如何输出数据呢？**

```python
print("第一节车厢：{}".format(l1.first))
print("第二节车厢：{}".format(l1.rest.first))
print("第三节车厢：{}".format(l1.rest.rest.first))
```



### 3.2 「改进」如何只用一个 l 来操作呢？

```python
class IntList(object):
	def __init__(self):
		self.first = None
		self.rest = None

l = IntList()
l.first = 5
l.rest = None

l.rest = IntList()
l.rest.first = 10
l.rest.rest = None

l.rest.rest = IntList()
l.rest.rest.first = 15
```
```python
class IntList(object):
	def __init__(self):
		self.first = None
		self.rest = None

l = IntList()
l.first = 5
l.rest = IntList()
l.rest.first = 10
l.rest.rest = IntList()
l.rest.rest.first = 15
```
![image.png](https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291658575.png)



### 3.3 问题

不知道，大家有没有发现，如果这么写的话。我们要写10节车厢或者以上的话不得写死了。
```python
class IntList(object):
	def __init__(self):
		self.first = None
		self.rest = None

l = IntList()
l.first = 5
l.rest = None

l.rest = IntList()
l.rest.first = 10
l.rest.rest = None

l.rest.rest = IntList()
l.rest.rest.first = 15

l.rest.rest.rest = IntList()
l.rest.rest.rest.first = 20

l.rest.rest.rest.rest = IntList()
l.rest.rest.rest.rest.first = 25
```
![image.png](https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291659246.png)



所以，我们虽然实现了链表的结构，但是不完美。我们可以再进一步的去改进一下。


**首先，我们肯定不希望之后还是要写一堆 rest 这样肯定是超级麻烦的。**


### 3.4 改进代码

```python
class IntList(object):
	def __init__(self, first, rest):
		self.first = first
		self.rest = rest

l1 = IntList(5, None)
l2 = IntList(10, l1)
l3 = IntList(15, l2)
```
![image.png](https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291659707.png)

当然，我们也可以就用一个 l：

```python
class IntList(object):
	def __init__(self, first, rest):
		self.first = first
		self.rest = rest

l = IntList(5, None)
l = IntList(10, l)
l = IntList(15, l)
```
![image.png](https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291659920.png)

这样写，肯定比之前的书写要简洁。但是又出现问题了，就是我们每一个衔接的数据是显示出来了，但这个问题我们后面解决。接下来，我们先来添加个 size 函数。


### 3.5 添加一个 size() 方法，方便用户查询链表的大小

这个地方，需要递归作为前置知识：
```python
def size(self):
	if self.rest is None:
		return 1
	else:
		return 1 + self.rest.size()
```



#### 1. 第一次： self.rest()

![image.png](https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291659448.png)



#### 2. 第二次：self.rest.size() —> self.rest.rest is None



![image.png](https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291708020.png)



#### 3. self.rest.rest.size() —> self.rest.rest.rest is None



![image.png](https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291708521.png)

接下来，上 GIF：

![动画.gif](https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291708202.gif)



### 3.6 不使用递归如何实现？

```python
def get_length(self, linked):
	"""方法二"""
	length = 0
	while linked:
		length += 1
		linked = linked.rest
	return length
```
不过上面写的虽然实现了，但是总体来说有点奇怪，在调用的时候：
```python
print(l.get_length(l)) # 这样调用有点奇怪
```
所以，进行改进：
```python
def iterative_size(self):
		# l == self 抽象理解
		p = self
		total_size = 0
		while p is not None:
			total_size += 1
			p = p.rest
		return total_size
```
这样调用就很自然了：
```python
print(l.iterative_size())
```


### 3.7 改进
添加一个 **get() **方法，方便用户查询某个元素：
```python
def get(self, index):
	if i == 0:
		return self.first
	else:
		return self.rest.get(index-1)
```
```python
def get_index(self, index):
	    '''第二种查询方法'''
	    if index < 0：
	        return -1
	    node = self.first
	    for _ in range(index+1):
	        node = node.rest
	   return node.first
```



### 3.8 Question

![](https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291708792.jpeg)

**现在的链表更像是一个“没穿衣服的”数据结构。**

内部数据也是直接爆露出来的，有些地方也是看起来很奇怪。

![image.png](https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291709206.png)

None 和 l 应该是内部的数据，不应该让外部的人看见的。

```python
class IntNode(object):
	def __init__(self, item, next):
		self.item = item
		self.next = next

class SLList(object):
	def __init__(self, x):
		self.first = IntNode(x, None)
```
我们可以对比一下：
```python
l = SLList(10)
# l = IntList(5, None) 比之前的好
```
但是目前不能添加多个车厢（链表），添加多个链表的数据都会被覆盖：
```python
l = SLList(5)
l = SLList(10)
l = SLList(15)
```


![动画.gif](https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291709795.gif)

所以，我们需要添加一个函数来添加数据。

```python
def add_first(self, x):
	self.first = IntNode(x, self.first)
```
这样，我们添加数据就是：
```python
l = SLList(5)
l.add_first(10)
l.add_first(15)
```
![image.png](https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291709860.png)

SLList 新增加一个方法叫 `get_first()` ，用来让用户获取当前链表第一个元素：

```python
def get_first(self):
	return self.first.item
```



### 3.9 比较一下

![image.png](https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291709717.png)
```python
# filename: compare.py
class IntList(object):
	def __init__(self, f, r):
		"""
		first:存自己本身的数据
		rest:存下一个节点，也就下一个节点是谁
		"""
		self.first = f
		self.rest = r

	def size(self):
		"""方法一"""
		# l == self 抽象理解
		if self.rest is None:
			return 1
		else:
			return 1 + self.rest.size()

	def get_length(self, linked):
		"""方法二"""
		length = 0
		while linked:
			length += 1
			linked = linked.rest
		return length

	def iterative_size(self):
		# l == self 抽象理解
		p = self
		total_size = 0
		while p is not None:
			total_size += 1
			p = p.rest
		return total_size

	def get(self, index):
		if i == 0:
			return self.first
		else:
			return self.rest.get(index-1)


l1 = IntList(5, None)
l2 = IntList(10, l1)
l3 = IntList(15, l2)
print(l1.first)
print(l2.first)
print(l3.first)
```


![image.png](https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291709200.png)
![image.png](https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291710484.png)


### 4.0 然而还是有点问题
如果，我破解出了 SLList 里面的变量的名称，一样可以修改，比如：
```python
l.first.next.next = 8
```



### 4.1 改进

将 first 变量改为私有变量。
```python
class IntNode(object):
	def __init__(self, item, next):
		self.item = item
		self.next = next

class SLList(object):
	def __init__(self, x):
		self.__first = IntNode(x, None)

	def add_first(self, x):
		self.__first = IntNode(x, self.__first)
        
l = SLList(5)
l.add_first(10)
l.add_first(15)
# print(l.get_first())
```
class 里的私有变量只能再 class 的内部访问：
```python
print(l.__first)
AttributeError: 'SLList' object has no attribute '__first'
```


### 4.2 为什么要设计私有变量？

**将类的内部细节隐藏起来**

- 用户不需要了解太多类的细节
- 设计者可以拥有更为安全的对于程序的控制全



**以汽车来类比**

- 公共的方法或变量：油门、方向盘
- 私有的方法或变量：燃油管道、旋转阀



### 4.3 改进
SLList 新增加一个方法叫 `add_last()` ，用来让用户向链表末尾添加一个元素。
```python
def add_last(self, x):
	p = self.__first
	while p.next is not None:
		p = p.next
	p.next = IntNode(x, None)
```
```python
l.add_last(20)
```
![image.png](https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291710279.png)



### 4.4 改进

SLList 新增加一个方法叫 `size()` ：
```python
def __size(self, p):
	if p.next is None:
		return 1
	else:
		return 1 + self.__size(p.next)
    
def size(self):
	return self.__size(self.__first)
```

每次查询 `size()` 都要把整个链表遍历一遍，是不是低效了？

![image.png](https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291710626.png)

```python
# -*- coding: utf-8 -*-
# @Author: AI悦创
# @Date:   2021-10-15 14:50:07
# @Last Modified by:   aiyc
# @Last Modified time: 2021-10-18 15:49:59
class IntNode(object):
	def __init__(self, item, next):
		self.item = item
		self.next = next

class SLList(object):
	def __init__(self, x):
		self.__first = IntNode(x, None)
		self.__size = 1

	def add_first(self, x):
		self.__first = IntNode(x, self.__first)
		self.__size += 1

	def get_first(self):
		return self.first.item

	def add_last(self, x):
		p = self.__first
		while p.next is not None:
			p = p.next
		p.next = IntNode(x, None)
		self.__size += 1

	def __size(self, p):
		if p.next is None:
			return 1
		else:
			return 1 + self.__size(p.next)

	# def size(self):
	# 	return self.__size(self.__first)

	def size(self):
		return self.__size

l = SLList(5)
l.add_first(10)
l.add_first(15)
l.add_last(20)
# print(l.__first)
```


### 4.5 改进

如果，我希望创建一个空链表呢？
```python
# -*- coding: utf-8 -*-
# @Author: AI悦创
# @Date:   2021-10-18 15:53:48
# @Last Modified by:   aiyc
# @Last Modified time: 2021-10-18 15:58:12
class IntNode(object):
	def __init__(self, item, next):
		self.item = item
		self.next = next

class SLList(object):
	def __init__(self, x=None):
		self.__first = IntNode(x, None)
		self.__size = 1

	def add_first(self, x):
		if self.__first.item is None:
			self.__first.item = x
		else:
			self.__first = IntNode(x, self.__first)
			self.__size += 1

	def get_first(self):
		return self.first.item

	def add_last(self, x):
		p = self.__first
		while p.next is not None:
			p = p.next
		p.next = IntNode(x, None)
		self.__size += 1

	def __size(self, p):
		if p.next is None:
			return 1
		else:
			return 1 + self.__size(p.next)

	# def size(self):
	# 	return self.__size(self.__first)

	def size(self):
		return self.__size

l = SLList()
l.add_first(5)
l.add_first(10)
l.add_first(15)
l.add_last(20)
# print(l.__first)
```

> 流沙团队推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！
>
> 方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)
>
> 方法二：微信：Jiabcdefh