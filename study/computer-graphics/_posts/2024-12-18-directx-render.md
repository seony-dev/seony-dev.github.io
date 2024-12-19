---
layout: post
title:  "[Computer Graphics] 윈도우 창에 선(Line) 그리기"
description: >
hide_last_modified: true
categories: [study, computer-graphics]
tags: [Programming, ComputerGraphics]
---

<p align="center">
  <!-- <img src="../../../assets/img/blog/computer_graphics/" style="width: 832px; height: auto;" > -->
</p>

<!-- <span style="color:darkgray; font-size:14px;"> 이미지 출처 : </span> -->

-----

#### 📼 DirextX 11로 생성한 윈도우 창에 라인 그리기

```cpp
CPU           GPU                       CreateDevice        
 |             |
RAM --------- VRAM                      SwapChain
 |             |    <->   DXGI            - Device
SSD           B/B                         - DeviceContext
                            ↕           RTV (OM 단계)
                        SwapChain         - B/B
                                        Viewport (RS 단계)

////////////////////////////////////////////////////////////

Initialize()
    Vertices[2]; // RAM - Stack
        ↓
    VertexBuffer

Render()
    Clear(RTV, Black);
    DC -> IASetVertexBuffers(VertexBuffer);
    DC -> IASetPrimitiveTopology(LineList);
    shader->Draw(2);

04_Line.fx
    VS() - Vertex 정보 -> RS로 보냄
    PS() - 픽셀 색 세팅
    technique11
        - pass
```