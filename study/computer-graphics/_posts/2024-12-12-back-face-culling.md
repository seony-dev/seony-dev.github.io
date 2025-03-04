---
layout: post
title:  "백 페이스 컬링(Back-face Culling)"
description: >
hide_last_modified: true
categories: [study, computer-graphics]
tags: [Programming, ComputerGraphics]
comments: true
---

<p align="center">
  <img src="/assets/img/blog/computer_graphics/back_face_culling.jpg" style="width: 832px; height: auto;" >
</p>

<span style="color:darkgray; font-size:14px;"> 이미지 출처 : https://www.autodesk.com/support/technical/article/caas/sfdcarticles/sfdcarticles/Backface-Cull-Object-renders-transparent-when-facing-away-from-view.html </span>

-----

#### 📼 백스페이스 컬링(Back-Space Culling; 후면 컬링)이란?

> 폴리곤(다각형)을 그릴지 여부를 결정하며, 그래픽 파이프라인에서 폴리곤의 점이 화면에 투사될 때 시계 방향 또는 반 시계 방향으로 나타나는지 테스트 하는 단계이다. <br>
사용자가 정면 폴리곤이 시계 방향으로 감기도록 지정했지만 화면에 투사된 폴리곤이 반시계 방향으로 감기면 카메라에서 멀어지도록 회전되어 그려지지 않는다.

프로그램이 그리는 폴리곤의 수를 줄임으로써 객체를 더 빠르고 효율적으로 렌더링한다. <br>
관련 기술로는 다각형이 카메라 시야 내에 있는지 여부를 판단하는 `클리핑`, 다른 눈에 보이는 다각형에 의해 관점에서 가려진 다각형의 그리기를 건너뛰는 것을 시도하는 `Z-컬링(오클루전 컬링)`이 있다.
{:.note}

----
<span style="color:darkgray">출처 : <br>
＊ https://en.wikipedia.org/wiki/Back-face_culling <br>

</span>