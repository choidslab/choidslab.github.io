---
layout: post
title: "[Python] 파일 입출력"
subtitle: ""
date: 2018-10-24 18:00:00 +0900
comments: true
author: DSLab
background: '/img/bg-index.jpg'
category: python
tags: [python, write(), read(), readline(), readlines()]
---

### 1. 파일 읽기  

```python
fileobj = open(filename, mode)
```
  - fileobj는 `open()` 함수에 의해 반환되는 객체
  - filename은 파일의 문자열 이름
  - mode는 파일의 종류와 읽기 모드를 의미
  - `mode의 첫 번째 글자 의미`
    - `r: 파일 읽기`
    - `w: 파일 쓰기(파일이 없을 경우 생성, 있을 경우 덮어쓰기)`
    - `x: 파일 쓰기(파일이 있을 경우 덮어쓰지 않음, FileExist Error 발생)`
    - `a: 파일의 끝에서부터 이어서 쓰기`
  - `mode의 두 번째 글자 의미`
    - `t: text type`
    - `b: binary type`

```python
fileobj.close()
```
  - 파일을 열고 모든 작업 완료 후, `close()` 함수를 이용하여 파일을 닫아야 함

---
### 2.1 Text 파일 쓰기: `write('filename', 'wt')`

```python
poem = '''There was a young lady named Bright,
Whose speed was far faster than light;
She started one day
In a relative way,
And returned on the previous night.'''

if __name__ == "__main__":
    # file open
    fout = open('relativity', 'wt')
    # write
    print(fout.write(poem))
    # file close
    fout.close()
```

  - `write()` 함수는 파일에 쓴 byte 수를 반환
  - 텍스트 파일의 경우 `wt` mode 사용
  - print() 함수를 이용한 파일 쓰기도 가능
    - `print(poem, file=fout, sep='', end='')`
  - 파일에 쓸 문자열의 크기가 크다면 특정 크기(chunk)만큼 쪼개어 파일 쓰기가 가능
  - 다음은 chunk 크기 단위로 파일 쓰기를 수행하는 예제코드이다.

```python
poem = '''There was a young lady named Bright,
Whose speed was far faster than light;
She started one day
In a relative way,
And returned on the previous night.'''

if __name__ == "__main__":
    # 파일에 쓸 문자열이 클 경우 chunk 단위로 나누어서 파일에 쓸 수 있음
    fout = open('relativity3', 'wt')

    size = len(poem)
    offset = 0
    chunk = 100 # 쓰기 단위를 지정(문자 100개)

    while True:
        if offset > size:
            break
        fout.write(poem[offset:offset+chunk])
        offset += chunk

    # file close
    fout.close()
```

---
### 2.2 Binary 파일 쓰기: `write('filename', 'wb')`

```python
# 0~255 256 bytes 값 생성
bdata = bytes(range(0, 256))
print(len(bdata))

fout = open('binaryfile', 'wb')
print(fout.write(bdata)) # write() 함수는 파일에 쓴 byte 수를 반환하기 때문에 bdata의 값을 정상적으로 쓴 경우 256이 출력된다.
fout.close()
```

  - 바이너리 파일의 경우 `wb` mode 사용
  - 위의 예제코드는 256바이트 크기의 바이너리 값을 생성한 뒤, 이를 bdata 파일에 쓰기를 수행한다.
  - 바이너리 파일에는 텍스트를 제외한 이미지, 음성, 영상 등의 파일이 포함된다.

---
### 3.1 Text 파일 읽기: read(), readline(), readlines()
  - 작성중...

---

### 3.2 Binary 파일 읽기: read(), readline(), readlines()
  - 작성중...

---


<br>

>본 포스팅 내용은 `처음시작하는 파이썬(Introducing Python)`을 학습한 내용에 대한 요약 글입니다. 코드에 문제가 있을 수 있으며 다소 부정확한 내용이 있을 수 있으니 참고하시기 바랍니다. 잘못된 내용이 있는 경우 덧글로 남겨주시면 내용을 반영하여 수정하도록 하겠습니다. 감사합니다.

<br>

---

#### [Reference]

[1] 처음시작하는 파이썬(Introducing Python), p.231-240
