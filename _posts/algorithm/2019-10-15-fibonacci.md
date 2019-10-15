---
layout: post
title: "[알고리즘] 피보나치 수열"
subtitle: ""
date: 2019-10-15 10:20:00 +0900
comments: true
author: DSLab
background: '/img/bg-index.jpg'
category: Algorithm
tags: [Algorithm, python]
---
<br>

### 재귀(Recursion)를 이용한 피보나치 수열 구하기


```python
def fibonacci(N):

    if N == 1:
        return 0
    elif N == 2:
        return 1
    else:
        return fibonacci(N-1) + fibonacci(N-2)

```

  - 피보나치 수열은 앞의 두 항의 값을 더해서 현재 항의 값을 구하는 형태의 수열
  - 재귀적인 방법으로 N번째 항의 값을 구할 수 있음
  - `일반화: f(n) = f(n-1) + f(n-2)`
  - 재귀와 피보나치 수열에 대한 자세한 설명은 글 하단 Reference 참조

<br>

### 결론
  - 재귀호출을 이용하여 문제를 편리하게 해결할 수 있음
  - 너무 많은 재귀함수 호출은 성능(메모리)적인 측면에서 문제가 될 수 있음

<br>

> `알고리즘` 학습 내용을 정리한 글입니다.<br>
> 더 좋은 방법이나 정보가 있으면 덧글로 남겨주세요.<br>
> 감사합니다!

<br>

---

#### [Reference]

[1] [재귀(Recursion)](https://ko.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/recursion)<br>
[2] [피보나치 수열](https://namu.wiki/w/%ED%94%BC%EB%B3%B4%EB%82%98%EC%B9%98%20%EC%88%98%EC%97%B4)