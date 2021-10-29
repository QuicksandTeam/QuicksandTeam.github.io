---
title: 03- 【久远讲算法】数组——最简单的数据结构
time: 2021-10-29 09:10:52
author: 久远
original: true
category: 久远讲算法
tags:
    - 久远讲算法
sticky: false
password: false
article: true
timeline: true
navbar: true
sidebar: true
comment: true
---

前言：

前面两篇文章，我们对算法以及时空复杂度进行了详细的讲解，但是，这其实是远远不够的，时空复杂度只是我们算法学习中的冰山一角，下面让我们通过数组的学习来正式打开算法与数据结构的大门吧！

以下是我之后文章的具体走向，感兴趣的小伙伴可以跟着路线进行自学哦！基础篇暂定走向为：数组→链表→栈和队列→树→递归

基础篇更完以后我将会开启力扣刷题套路篇哦，带大家一起提高对编程语言以及算法的熟练度。

## 什么是数组

关于数组，虽然它是数据结构世界里最常用以及最简单的，但是之前仍有同学向我反馈：数组难以理解！那我们就来对数组进行详细的讲解，帮助大家解惑。

首先我们在此声明，python 本身的库中其实是没有数组这个内置类型的，但存在有列表 ( list ) 这个内置类型，列表和数组在长相以及实际应用上是相似的，因此我尝试拿列表来进行数组相关知识的讲解。（实际上在 python 的 numpy 库中是存在有数组这样一个数据结构的，之后我们会专门写一篇文章来分析数组和列表的异同。）

在计算机科学中，数组数据结构，简称数组，英文名为 array ，是由相同类型的元素的集合所组成的数据结构，分配一块连续的内存来存储。利用元素的索引可以计算出该元素对应的存储地址。

是不是看完这一长串理论，已经开始晕了？那我们现在提炼这段话并就来用现实生活的例子来解析这段话，带大家认识到底什么是数组。

假设我们是指挥官，我们编程时使用数组，就相当于我们作为指挥官给指定人数的士兵布置了一个团队任务。而这个指定人数的队伍，就可以视为一个数组。

- 数组由相同类型的元素的集合所组成。这就像是现实中的一列士兵，他们的职业都是军人，即所谓的类型相同，他们都是同一个连或者同一个团的，即同一个集合。
- 数组分配一块连续的内存来存储。即同一列士兵，在做任务时，一般都会吃住在同一片区域。
- 利用元素的索引可以计算出该元素对应的存储地址。士兵每天训练时要进行有序的排队，当喊道第几号士兵时，可以通过这位士兵的回答，得知他的各种信息，例如执行任务期间，住在哪片区域具体哪个位置。我们从平常计数报数都是从 1 开始，而计算机默认是从 0 开始，这点要记清楚，以防之后进行和数组相关的操作产生混乱。

因此我们可知，数组就如同一列整齐的士兵，他们都是正规的军人，他们在队伍里有指定的位置，且通过叫号，可以知晓他们的讯息。正如军队里的士兵存在编号一样，数组中的每一个元素也有着自己的下标，只不过这个下标从 0 开始，一直到数组长度 -1。

数组一般用来存储具有 "一对一" 逻辑关系数据的线性存储结构，即是在内存中顺序存储，因此可以很好地实现逻辑上的顺序表。

数组在内存中的顺序存储，具体是什么样子呢？

内存是由一个个连续的内存单元组成的，每一个内存单元都有自己的地址。在这些内存单元中，有些被其他数据占用了，有些是空闲的。数组中的每一个元素，都存储在小小的内存单元中，并且元素之间紧密排列，既不能打乱元素的存储顺序，也不能跳过某个存储单元进行存储。

这就像是宿舍分配的床位，每个宿舍有几个指定的床位，床位号一般都是连续的，每个床位号对应一个学生，这些学生可能有人每天都在宿舍住，有的可能搬出去住。床位号都是按顺序来的，进行安排时也不会考虑跳过哪个号进行床位分配。

理论性的介绍先告一段落，单单了解数组的理论知识还远远不够，接下来我们将系统性的介绍数组在编程中的使用。

## 数组的使用

任何数据结构的操作基本离不开，增删改查这四种情况。接下来就让我给大家介绍数组的增删改查怎么实现。

### 数组元素的查询

```java
// 初始化
String[] array = new String[]{'red', 'green', 'blue', 'yellow', 'white', 'black'};
// 通过下标进行索引
System.out.println(array[0]);
System.out.println(array[1]);
System.out.println(array[2]);
```

```python
list_array=['red', 'green', 'blue', 'yellow', 'white', 'black']
print( list_array[0] )#red
print( list_array[1] )#green
print( list_array[2] )#blue
```

对 python 代码进行讲解：

我们新建了一个长度为 6 的数组，并查询数组 list_array 下标为 0，1，2的元素，并将他们打印出来。

对于数组来说，读取元素是最简单的操作。由于数组在内存中顺序存储，所以只要给出一个数组下标，就可以读取到对应的数组元素。

例如我们当前新建的list_array数组，我们要读取数组下标为 3 的元素，就写作 array_list[3]；读取的元素即为  yellow ，读取数组下标为 5 的元素，就写作 array_list[5]，读取的数组为 black ，需要注意的是，输入的下标必须在数组的长度范围之内，否则会出现数组越界。

- tips:
  
    在 python 中，使用 list 进行数组的新建，然后索引时，它其实是不会报错的，这也是数组和列表的一大区别，其实本质还是因为列表类似于动态数组，我们在别的编程语言中使用的数组，明确而言是有指定的长度的， 超越指定的长度时，它会进行越界报错，而动态数组的长度是没有准确规定，只要不超出内存，即可在数组末尾一直添加元素，这点是不是和python中的列表很像呢？
    

### 数组元素的更改

```java
String[] array = new String[]{'red', 'green', 'blue', 'yellow', 'white', 'black'};
array[0] = 'orange';
```

```python
list_array=['red', 'green', 'blue', 'yellow', 'white', 'black']
list_array[0] = 'orange' 
```

对 python 代码进行讲解：

依旧是我们的 list_array  ,现在我想把第一位的红色变成橘色，那么我们直接使用下标索引，找到 'red' ,然后将其赋值为 'orange' 即可。

 要把数组中某一个元素的值改为一个新值，也是非常简单的操作。我们直接利用下标索引到它，然后将其赋值为新的值就可以了。

### 时间复杂度分析

我们根据索引就可以查询到元素的位置，若想要更改直接覆盖掉它的值即可。因此数组元素的修改和查找的时间复杂度均为   $O(1)$。

- tips:
  
    关于时间复杂度的讲解，参考我之前的文章： 
    

### 数组元素的插入

数组元素的插入分为以下几种：

- 尾部插入
- 中间插入
- 超范围插入

在这里python只需要几行代码即可实现这一切，因为涉及到底层逻辑以及链表的知识，我们在此章不进行详细的讲解，只讲应用。而python的底层实际上是 c语言写的，所以接下来我们会对数组元素的插入进行系统的介绍，其实这是 python 底层已经帮我们做了的事情，但是要学习数据结构，我们就要从底层开始了解一个方法是怎么被实现的，所以我依旧对数组的插入进行了较本质的讲解。

- 尾部插入

在 java 和 c 语言中，尾部插入是最简单的方法,我们只需要对数组进行一次循环找到要插入的位置，然后进行赋值即可。

- 中间插入

而进行中间的插入时，我们就要考虑这些：

1. 确认数组本身是否还有空余的位置。如果没有空余的位置，那么我们就要进行超范围插入了。如果有空余的位置，我们进行下面的操作。
2. 挪位置。先为了给这个元素让出一个位置，这个元素指定的位置之后的元素都要向后移动一个位置，不然的话，是没有位置留给插入的那个元素的。
3. 将元素放进腾出的那个位置。原来的元素进行挪位操作后，该元素进行赋值归位，这样元素就插入成功了。
4. 数组长度+1，正因为成功插入了一个元素，所以数组的长度进行了变化。
- 超范围插入

什么是超范围插入？ 比如我定义了一个数组，长度为 6 ，而从 0 到 5 这6个位置，都有元素，数组已经满了，但是我们依旧想要向其中插入插入元素，这个时候我们就需要扩大数组的长度了，可是数组的长度在创建时就已经确定了，不是说变就可以轻易的改变的，所以我们通常的操作便是，创建一个新数组，长度是旧数组的 2 倍，再把旧数组中的元素统统复制过去，这样就实现了数组的扩容。

以下是 java 代码实现的，新建一个数组，对其进行插入操作。虽然和我上面说的步骤几乎是一样的，但是代码量可以说是很多了。

```java
private int[] array;
private int size;

public MyArray(int capacity){
    this.array = new int[capacity];
    size = 0;
}

/**
 * 数组插入元素
 * * index 插入的位置
 * element 插入的元素
 */
public void insert(int index, int element)  {
    //判断访问下标是否超出范围
    if(index<0 || index>size){
        System.out.println("超出数组实际元素范围！");
    }
    //如果实际元素达到数组容量上限，则对数组进行扩容
    if(size >= array.length){
        resize();
    }
    //从右向左循环，将元素逐个向右挪1位
    for(int i=size-1; i>=index; i--){
        array[i+1] = array[i];
    }
    //腾出的位置放入新元素
    array[index] = element;
    size++;
}
/**
* 数组扩容
*/
public void resize(){
    int[] arrayNew = new int[array.length*2];
    //从旧数组复制到新数组
    System.arraycopy(array, 0, arrayNew, 0, array.length);
    array = arrayNew;
}

/**
* 输出数组
*/
public void output(){
    for(int i=0; i<size; i++){
        System.out.println(array[i]);
    }
}

public static void main(String[] args) {
    MyArray myArray = new MyArray(10);
    myArray.insert(0,7);
    myArray.insert(1,5);
    myArray.insert(2,9);
    myArray.insert(3,8);
    myArray.insert(1,4);
    myArray.output();
}

```

而在 python 中，我们在现实的使用过程中，无需担心自己是否也要像使用 java 那样，只为处理一个插入操作，就写了如此多的代码，我们只要调用列表自带的方法就可以了。

- 列表中的 append 方法

列表中的 append 方法，对应数组中的尾部插入，它的底层实现形式类似于上文提到的java中的实现形式。

```python
list_array = ['red', 'green', 'blue']
list_array.append('black')
print ("更新后的列表 : ", list_array) 
#更新后的列表为['red', 'green', 'blue','black']
```

对 python 代码进行讲解：

我们新生成的列表对其直接使用append方法，在其中输入我们要添加的元素即可，然后我们的元素就被添加到了列表的末尾了。

- 列表中的 insert 方法

列表中的 insert 方法，对应数组中的中间插入，只需要一步调用方法，即可完成 java 中那么多的判断以及元素的插入，可见 python 的强大。又因为列表本身可以视为动态数组，其实对于长度的要求并没有数组那么苛刻，它是可以随意插入元素的，无需担心长度，容量问题。 

```python
list_array = ['red', 'green', 'blue']
list_array.insert(0, 'black')
print ('列表插入元素后为 : ', list_array)
#更新后的列表为 ['black', 'red', 'green', 'blue']
```

对 python 代码进行讲解：

对新生成的列表使用 insert 方法，insert 方法有两个参数，第一个参数为，我们要将元素插入到列表的哪个位置，第二个参数为元素内容。该段代码即为使用 insert 方法将 'black' 插入到列表的头部。

- 列表中的 extend 方法

列表中的 extend 方法，用于在列表末尾一次性追加另一个序列中的多个值（用新列表扩展原来的列表）。可以视为是数组扩容的一种特殊情况。

```python
list_array = ['red', 'green', 'blue']
list2=list(range(5)) # 创建 0-4 的列表
list1.extend(list2)  # 扩展列表
print ("扩展后的列表：", list1)
#扩展后的列表： ['red', 'green', 'blue', 0, 1, 2, 3, 4]
```

### 数组元素的删除

数组的删除操作和插入操作的过程相反，如果是在数组的最后删除元素，那么直接去除元素即可，但是如果是在头部或者数组的中间删除元素，那么其后的元素都需要向前挪动 1 位。

删除简单的地方在于，我们无需关心下标是否会越界，容量是肯定不会超过申请的大小的。

```java
public int delete(int index)  {
    //判断访问下标是否超出范围
    if(index<0 || index>=size){
        System.out.println("超出数组实际元素范围！");
    }
    int deleted= array[index];
    //从左向右循环，将元素逐个向左挪1位
    for(int i=index; i<size-1; i++){
        array[i] = array[i+1];
    }
    size--;
    return deleted;
}

```

python 列表中有两种方法和数组的删除操作匹配，即 pop 和 remove 方法。

- 列表中的pop方法

pop() 函数用于移除列表中的一个元素（默认最后一个元素），并且返回该元素的值。

```python
list1 = ['red', 'green', 'blue']
list1.pop()
print ("列表现在为 : ", list1)
#列表现在为 :  ['red', 'green']
list1.pop(1)
print ("列表现在为 : ", list1)
#列表现在为 :  ['red']
```

对 python 代码进行讲解：

新建一个 list1 列表，我们对其使用 pop() ，那么 list1 列表中最后一个元素被移除，这个元素即为 'blue' ，然后继续对 list1 使用 pop 操作，此时 list1 中最后一个元素为 'green'，将其移除， list1 中最后只有 'red' 一个元素了。

- 列表中的 remove 方法

remove() 函数用于移除列表中某个值的第一个匹配项。即当列表中有一样的元素的时候，使用 remove 删除这个元素， remove 将会删除下标较小的。

```python
list1 = ['red', 'green', 'blue']
list1.remove('red')
print ("列表现在为 : ", list1)
# 列表现在为 :  ['green','blue']
list1.remove('green')
print ("列表现在为 : ", list1)
# 列表现在为 :  ['blue']

# 有重复元素的情况
list2 = ['red','red','green','blue','blue']
list2.remove('red')
print("列表现在为：",list2)
# 列表现在为： ['red', 'green', 'blue', 'blue']
list2.remove('green')
print("列表现在为：",list2)
# 列表现在为： ['red', 'blue', 'blue']
```

对 python 代码进行讲解：

新建一个 list2 列表，我们对其使用 remove('red') ，那么 list2 列表中第一个 'red' 将会被移除，然后继续对 list2 使用 remove 操作，这次我们移除列表中第一个 'blue' ，打印列表可以发现，我们原列表中的 0 号位的 'red' 和 3 号位的 'blue' 都被删掉了，而剩下的 'red' 和 'blue' 没有被移除。  

### 时间复杂度分析

数组的插入，我们首先要考虑数组的长度和容量，如果容量空余，我们在插入前还要为元素腾出位置，因此我们在此的时间复杂度 为  $O(n)$ , 如果元素的容量已满，我们要扩容数组，那么这个操作的时间复杂度仍为 $O(n)$ ，综合考虑，数组的插入操作时间复杂度为 $O(n)$ .

数组的删除，无需考虑数组的长度和容量问题，只需要在删除元素之后，改变其它元素的位置即可，因此数组的删除操作消耗的时间在此的时间复杂度为  $O(n)$ .

## 数组的优势和劣势

数组的优势体现在查询和修改元素上，我们只需要知道元素的数组下标即可对其进行查询和修改，非常的方便。而这种特性也被二分查找法充分的利用了。

数组的劣势体现在它的插入操作和删除操作上，当插入一个元素或者删除一个元素时，其他的元素都需要改变，这极大地影响了程序的运行效率。

总之数组适用于，查找，修改较多，插入，删除较少的场景下。我们下周要讲的链表则和它的情况相反。

> 流沙团队推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！
>
> 方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)
>
> 方法二：微信：Jiabcdefh

![](https://gitee.com/huangjiabaoaiyc/image/raw/master/202110291545158.png)