---
layout: post
title: "[알고리즘] 문자열 뒤집기(Python)"
subtitle: ""
date: 2019-10-14 13:30:00 +0900
comments: true
author: DSLab
background: '/img/bg-index.jpg'
category: Algorithm
tags: [Algorithm, python]
---

### for문을 이용한 문자열 뒤집기

```python
def reverse_string_using_for(string):
    result = ""
    for i in range(len(string)-1, -1, -1):
        result += string[i]
    return result
```

  - len() 내장함수를 통해 문자열의 길이를 계산
  - 문자열 가장 마지막 인덱스부터 시작하여 거꾸로 for문 실행

<!-- <br> -->

### 슬라이싱(Slicing)을 이용한 문자열 뒤집기

```python
def reverse_string_using_slicing(string):
    return string[::-1]
```

  - python 리스트의 슬라이싱을 이용하여 문자열 뒤에서부터 출력

<!-- <br> -->

### 결론
  - C/C++에 비해 문자열 출력이 수월함을 알 수 있음
  - Python 슬라이싱을 이용할 경우 문자열 거꾸로 출력은 식은 죽 먹기!


<!-- <br> -->

> `알고리즘` 학습 내용을 정리한 글입니다.<br>
> 더 좋은 방법이나 정보가 있으면 덧글로 남겨주세요.<br>
> 감사합니다!

<br>

---

#### [Reference]

[1] Google 검색, "파이썬 문자열 뒤집기"