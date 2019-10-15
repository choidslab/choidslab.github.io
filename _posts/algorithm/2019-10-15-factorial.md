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
<br>

### for문을 이용한 팩토리얼 값 구하기

> 팩토리얼은 숫자 1~N까지의 총 곱셈 값을 계산하는 것을 의미<br>
> for문과 재귀 방식으로 문제를 풀 수 있음

<br>

```python
def factorial_using_for(num):
    fact = 1

    for i in range(1, num+1):
        fact *= i

    return fact
```

<br>

### 재귀를 이용한 팩토리얼 값 구하기

```python
def factorial_using_for(num):
    fact = 1

    for i in range(1, num+1):
        fact *= i

    return fact
```

<br>

> `알고리즘` 학습 내용을 정리한 글입니다.<br>
> 더 좋은 방법이나 정보가 있으면 덧글로 남겨주세요.<br>
> 감사합니다!

<br>