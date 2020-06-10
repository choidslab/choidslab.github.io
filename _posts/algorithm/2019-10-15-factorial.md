---
layout: post
title: "[알고리즘] 팩토리얼 구하기(Python)"
subtitle: ""
date: 2019-10-15 11:40:00 +0900
comments: true
author: DSLab
background: '/img/bg-index.jpg'
category: Algorithm
tags: [Algorithm, python]
---

> Factorial은 숫자 1~N까지의 총 곱을 계산<br>
반복문과 재귀(Recursion), 그리고 math 모듈을 이용하여 계산할 수 있다.

<br>

#### for문을 이용한 factorial

```python
def factorial_using_for(num):
    fact = 1

    for i in range(1, num+1):
        fact *= i

    return fact
```

<br>

#### 재귀(Recursion)를 이용한 factorial

```python
def recursive_fact(num):
    if num > 1:
        return num * recursive_fact(num-1)
    elif num == 1 or num == 0:
        return 1
```

#### math 모듈을 이용한 factorial
```python
import math

math.factorial(5) # 결과: 120
math.factorial(1) # 결과: 1
math.factorial(3) # 결과: 6
```

<br>