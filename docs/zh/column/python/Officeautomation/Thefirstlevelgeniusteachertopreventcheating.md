---
title: 第1关 天才老师防作弊
time: 2021-10-30 12:10:52
author: AI悦创
original: true
category: Markdown 基础
tags:
    - Markdown
sticky: false
password: false
article: true
timeline: true
navbar: true
sidebar: true
comment: true
copyrightText: "Copyright © 2021 Bornforthi"
---

你好，我是悦创。

## 1.3 知识结构

- 需求描述
- 试卷生成（提取 provinces 和 options、创建试卷、创建答案）
- 生成答案迥异（jiǒng yì）的试卷



# 2. 需求描述
小悦在日常的工作中，遇到过这样的需求：**考察学员或者公司新员工的技术能力。**

**出一份考题让被考察者完成是一个最常用的方法。**


在本文中，请你跟着老师一起，用 Python 自动化地生成一份简单的地理试卷。这份试卷由 34 道选择题组成，题目形式都类似如下：

1. 河北省的省会是哪里？

A. 北京
B. 郑州
C. 石家庄
D. 张家口




## 2.1 试卷生成
![image.png](https://gitee.com/huangjiabaoaiyc/image/raw/master/202110300054343.png)
试卷生成的工具以一个省与省会名的对应字典作为输入：
```python
capitals = {'北京市': '北京', '天津市': '天津', '上海市': '上海', '重庆市': '重庆',
            '河北省': '石家庄', '山西省': '太原', '陕西省': '西安', '山东省': '济南',
            '河南省': '郑州', '辽宁省': '沈阳', '吉林省': '长春', '黑龙江省': '哈尔滨',
            '江苏省': '南京', '浙江省': '杭州', '安徽省': '合肥', '江西省': '南昌',
            '福建省': '福州', '湖北省': '武汉', '湖南省': '长沙', '四川省': '成都',
            '贵州省': '贵阳', '云南省': '昆明', '广东省': '广州', '海南省': '海口',
            '甘肃省': '兰州', '青海省': '西宁', '台湾省': '台北', '内蒙古自治区': '呼和浩特',
            '新疆维吾尔自治区': '乌鲁木齐', '西藏自治区': '拉萨', '广西壮族自治区': '南宁',
            '宁夏回族自治区': '银川', '香港特别行政区': '香港', '澳门特别行政区': '澳门'}
```
我们要完成的这个工具需要做三件事情：

1. 抽取出 capitals 中的省名（key），组成一个列表 provinces。
1. 为每个 provinces 中的元素生成对应的题目选项，放置到列表 options 中。选项由城市名组成，其中有一个选项是正确答案，另外三个从其它城市中随机抽取。
1. 根据第1、2 步生成的 provinces 和 options，生成试卷以及试卷结果并保存到文件。



**也许只用语言描述有些抽象，我们用一张表来展视要构建的 provinces 和 options。**

| 元素索引 | provinces | options |
| --- | --- | --- |
| 0 | 北京市 | [拉萨,北京,海口,西宁] |
| … | … | … |
| n | 河北省 | [石家庄,银川, 贵阳, 哈尔滨] |
| … | … | … |

- provinces 是一个一维列表，每个元素是一个省的名字
- options 是一个二维列表，列表中的每个元素也是列表，由四个城市名组成，其中有一个城市是 provinces 中对应省的省会。



这样的两个列表一旦构建出来，生成试卷就会变得很简单，只需要从 0 到 33 遍历两个列表中的每个元素，分别取出省份名字以及城市选项名字，省份名字用在题面上，而城市选项用在选项上，就能正确输出结果了。

![c43ea65545f7973c743fe8fea45e4296.gif](https://gitee.com/huangjiabaoaiyc/image/raw/master/202110300050558.gif)

我们按照这个思路，分两步构建试卷。




## 2.2 提取 provinces 和 options
capitals 这个字典中，所有元素的 key 就是我们想要的省份名字，我们可以将它们提取出来，放到列表 provinces 中。

```python
capitals = {'北京市': '北京', '天津市': '天津', '上海市': '上海', '重庆市': '重庆',
            '河北省': '石家庄', '山西省': '太原', '陕西省': '西安', '山东省': '济南',
            '河南省': '郑州', '辽宁省': '沈阳', '吉林省': '长春', '黑龙江省': '哈尔滨',
            '江苏省': '南京', '浙江省': '杭州', '安徽省': '合肥', '江西省': '南昌',
            '福建省': '福州', '湖北省': '武汉', '湖南省': '长沙', '四川省': '成都',
            '贵州省': '贵阳', '云南省': '昆明', '广东省': '广州', '海南省': '海口',
            '甘肃省': '兰州', '青海省': '西宁', '台湾省': '台北', '内蒙古自治区': '呼和浩特',
            '新疆维吾尔自治区': '乌鲁木齐', '西藏自治区': '拉萨', '广西壮族自治区': '南宁',
            '宁夏回族自治区': '银川', '香港特别行政区': '香港', '澳门特别行政区': '澳门'}

# 提取 capitals 变量中所有元素的 key 值，组成新的列表变量 provinces
provinces = 
```
::: details 想想怎么写，先自己写一下，然后点开看看，我提供的代码！

看下老师的方法：

```python
provinces = list(capitals.keys())
```

:::

接下来，为每道题生成答案。像之前构想的那样，用二维列表变量 `options` 存储答案选项，`options ` 的每个元素，是由一道题中4个备选项组成的列表。

对于每道题目的选项构建，是这个项目最困难的环节，跟着老师思路，我们一步步捋：

1. 对于某个确定的省份，从 `capitals` 中获取这个省份对应的正确省会名字，把它存储到变量 `right_answer` 中。

2. 从 `capitals` 中，获取所有城市的名字，然后将其中是正确答案的那个剔除掉，剩下一个全部由错误省会名字组成的变量 `wrong_answer` 。下面动画表现的是当正确答案是**昆明**时的情形。

![](https://gitee.com/huangjiabaoaiyc/image/raw/master/202110301803522.gif)

3. 从`wrong_answer`中随机挑选出3个名字，与第一步生成的`right_answer`一同组成由4个元素组成的选项。

::: details 在给你正式代码前，我给你补充点知识点：

```python
In [1]: from faker import Faker

In [2]: faker = Faker()

In [3]: name_lst = []

In [4]: for i in range(10):
   ...:     name_lst.append(faker.name())
   ...:

In [5]: name_lst
Out[5]:
['Jonathan Kemp',
 'Shannon Moore',
 'Desiree Vaughan',
 'Christina Allen',
 'Jamie Petty',
 'Bonnie Green',
 'Mrs. Kristina Hamilton',
 'Lisa Harris',
 'Richard Hicks',
 'Natalie Long']

In [6]: import random

In [7]: r = random.sample(name_lst, 3)

In [8]: r
Out[8]: ['Shannon Moore', 'Christina Allen', 'Jonathan Kemp']

In [9]: r = random.sample(name_lst, 3)

In [10]: r
Out[10]: ['Lisa Harris', 'Mrs. Kristina Hamilton', 'Desiree Vaughan']
```

:::

将以上需求翻译成代码实现，如以下这样：

```python
import random

def generate_options(index):
	# generate_options 函数，根据输入的省份编号 index，生成对应的答案选项。
	# 1. 从 capitals 中获取 index 这个编号对应的省份的省会名字，存到 right_answer 变量中。
	right_answer = capitals[provinces[index]]
	# 2. 从 capitals 中获取所有城市名字，并剔除正确的答案，构建错误省会名组成的列表，
	# 存到变量 wrong_answer 中。
	wrong_answer = list(capitals.values())
	del wrong_answer[index]
	# 3. 从 wrong_answer 中随机挑选 3 个名字，并与 right_answer 一同组成由4个元素组成的选项
	wrong_answer = random.sample(wrong_answer, 3)
	current_options = [right_answer] + wrong_answer
	# 将选项中元素的顺序打乱
	random.shuffle(current_options)
	# 用列表结构返回第 index 个省的答案选项
	return current_options
```

老师将以上所述3个步骤封装到了函数 `generate_options()` 中。这个函数接收传入参数 `index` ，用于指定要生成备选项的省份编号。

在第1步中，使用 `provinces[index]` 即获取了 `index` 对应的省的名字。然后，将这个名字作为 `capitals` 字典的 key，读取 `capitals[provinces[index]]` 就得到省会城市名，将它赋值给 `right_answer`。








> 流沙团队推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！
>
> 方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)
>
> 方法二：微信：Jiabcdefh
