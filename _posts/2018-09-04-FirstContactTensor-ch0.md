---
layout: post
title: "텐서플로 첫걸음 chapter0"
subtitle: ""
date: 2018-09-05 14:00:00 +0900
comments: true
author: DSLab
background: '/img/bg-index.jpg'
category: machinelearning
tags: [텐서플로 첫걸음, 0장]
---
### 0.1 딥 러닝 개념 잡기

- 딥 러닝(Deep Learning)은 사람의 학습 능력을 모방하기 위한 컴퓨터 알고리즘을 연구하는 분야
- 머신 러닝(Machine Learning)의 한 분야로 `신경망(Neural Network)` 알고리즘 활용
- 뇌의 신경세포 구조에서 착안된 알고리즘
- 1957년 Frank Rosenblatt가 개발한 퍼셉트론(Perceptron) 알고리즘이 딥 러닝의 기초가 됨

### 0.2 딥 러닝 알고리즘과 신경망 구조

- 하나의 퍼셉트론은 하나의 신경세포를 모델링한 뉴런을 의미
- 퍼셉트론 알고리즘 작동 방식
  - 예를 들어 하나의 뉴런으로 입력되는 정보가 X<sub>1</sub>, X<sub>2</sub> 라고 할 때, 입력 값에 각각 가중치(Weight) W1, W2를 곱한 후 더한다.
  - 그 결과 값은 **X<sub>1</sub>W<sub>1</sub>+X<sub>2</sub>W<sub>2</sub>** 의 형태가 된다.
- 이 값을 어떤 기준과 비교하여 만족스러운 결과가 나오도록 weight를 조정해 나가고, 그 값은 다시 다음 뉴런으로 전달된다.
- 신경망은 여러 개의 뉴런이 하나의 계층을 형성하고, 다시 여러 개의 계층으로 구성된다.
- 즉, 신경망은 입력 데이터를 받고 원하는 출력 데이터가 만들어지도록 뉴런 사이에서 가중치를 조절하여 뉴런 사이의 연결을 최적화시킨다. 이러한 과정을 `학습` 또는 `훈련`시킨다고 표현한다. 신경망의 계층은 다음과 같이 구성된다.
  - 입력 계층 (Input Layer)
  - 출력 계층 (Output Layer)
  - 은닉 계층 (Hidden Layer)
<figure>
  <center>
      <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Colored_neural_network.svg/600px-Colored_neural_network.svg.png" align="middle" width="300">
      <figcaption font="10px">fig.1 - 인공신경망 구조 (출처: wikipedia)</figcaption>
  </center>
</figure>

### 0.3 딥 러닝 활용 분야
- 컴퓨터 비전, 이미지 인식, 패턴 인식 (CNN)
- 번역, 음성 인식 (RNN)
- 그 외 다양한 분야에 접목되어 활용


---

#### [Reference]

[1] 텐서플로 첫걸음(조르디토레스 지음/박해선 옮김), p.23-31
