---
layout: post
title: "Class"
subtitle: ""
date: 2018-10-15 23:00:00 +0900
comments: true
author: DSLab
background: '/img/bg-index.jpg'
category: python
tags: [python, class, inheritance, override, Introducing Python]
---

#### 1. 객체(object)와 클래스(class)
  - Python에서는 모든 것이 `객체`
  - 숫자, 문자, 문자열 등...
  - 객체는 데이터(변수 또는 속성)와 코드(함수 또는 메소드)를 포함한다.
  - 객체는 `class`에 의해 생성

```python
class Person():
    # 객체 초기화를 위한 __init__ 함수
    def __init__(self, name):
        self.name = name

if __name__ == "__main__":
    someone = Person("nick")
    print(someone.name)

# 실행결과
nick
```
  - class는 객체를 만드는 틀, class를 통해 여러개의 객체를 생성
  - 객체의 초기화를 위해 class 내부에 `__init__`함수 선언
  - `__init__` 함수의 첫 번째 매개변수는 `self`, self는 특정 객체 자신을 의미
  - 위의 예제코드 동작 순서
    - Person 클래스의 정의를 찾음
    - 새로운 객체를 메모리에 생성
    - 객체의 `__init__` 함수를 호출, 새로 생성된 객체를 self에 전달하고, 다음으로 초기화 문자열 `"nick"`을 전달
    - `self.name`을 전달된 문자열로 초기화
    - 새로운 객체를 반환
    - someone 객체를 연결

### 2. 상속(Inheritance)
  작성중...

<br>

>본 포스팅 내용은 `처음시작하는 파이썬(Introducing Python)`을 학습한 내용에 대한 요약 글입니다. 코드에 문제가 있을 수 있으며 다소 부정확한 내용이 있을 수 있으니 참고하시기 바랍니다. 잘못된 내용이 있는 경우 덧글로 남겨주시면 내용을 반영하여 수정하도록 하겠습니다. 감사합니다.

<br>

---

#### [Reference]

[1] 처음시작하는 파이썬(Introducing Python), p.171-196
