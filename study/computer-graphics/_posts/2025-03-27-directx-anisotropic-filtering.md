---

layout: post  
title: "비등방성 필터링(Anisotropic Filtering)"  
description: >  
hide_last_modified: true  
categories: [study, graphics]  
tags: [Rendering, Graphics, Filtering, GPU]  
comments: true  
---

<p align="center">  
  <img src="/assets/img/blog/computer_graphics/anisotropic_filtering.png" style="width: 832px; height: auto;" />  
</p>  
-----  

<span style="color:darkgray; font-size:13px;">이미지 출처: https://en.wikipedia.org/wiki/Anisotropic_filtering</span>  

-----  

### 📼 비등방성 필터링(Anisotropic Filtering)이란?

> **텍스처가 기울어진 각도로 렌더링될 때 발생하는 흐릿함(블러)을 줄이기 위해, 각도에 따라 텍셀 샘플링을 최적화하는 고급 텍스처 필터링 기법.** <br>
특히 **카메라와 텍스처 표면이 비스듬할 때 선명도를 유지**하기 위해 사용되며, 일반적인 선형(Linear) 또는 삼선형(Trilinear) 필터링보다 더 정교하고 선명한 결과를 제공.

----

### 📼 비등방성 필터링이 필요한 이유

**🚫 기존 필터링 방식의 한계**
- **선형, 삼선형 필터링**은 축방향(등방성)으로만 필터링되어, **멀리 있고 기울어진 표면에서 심한 흐릿함** 발생
- 특히 바닥이나 벽처럼 **시야에서 멀어지며 눕혀진 표면의 디테일이 뭉개짐**

**✅ 해결책: 비등방성 필터링**
- 텍스처 좌표에서 **샘플링하는 형태를 타원 모양(anisotropic footprint)** 으로 조정
- 긴 방향으로 더 많은 텍셀을 샘플링하여 **선명도 유지**

----

### 📼 작동 원리 요약

| 항목 | 설명 |
|------|------|
| 샘플링 형태 | 사각형 → 타원형 영역 (기울어진 면에서도 더 많은 샘플 확보) |
| 처리 방식 | 텍스처 공간에서의 기울기를 기반으로 최적 샘플링 방향 계산 |
| 결과 | 먼 거리, 비스듬한 시점에서도 선명한 텍스처 유지 |

시각적으로 게임에서 바닥 타일, 레일, 도로 텍스처 등에 큰 효과를 발휘.
{:.note}

----

### 📼 구현 (HLSL / DirectX 샘플 with Normal Mapping 적용)

비등방성 필터링은 GPU에서 **SamplerState 설정만으로 적용 가능**하다. 아래는 실제 노멀 맵 적용에 비등방성 필터링을 사용하는 예시이다:

```glsl
// 비등방성 샘플러 설정
SamplerState AnisotropicSampler
{
    Filter = ANISOTROPIC;
    AddressU = Wrap;
    AddressV = Wrap;
    MaxAnisotropy = 4;
};

// 노멀맵 적용 함수
void NormalMapping(float2 uv, float3 normal, float3 tangent, SamplerState samp)
{
    float4 map = MaterialMaps[MATERIAL_TEXTURE_NORMAL].Sample(samp, uv);

    [flatten]
    if (any(map.rgb) == false)
        return;

    float3 coord = map.rgb * 2.0f - 1.0f; // -1.0 ~ +1.0 범위로 변환

    float3 N = normalize(normal); // Z축
    float3 T = normalize(tangent - dot(tangent, N) * N); // X축 (정규직교)
    float3 B = cross(N, T); // Y축

    float3x3 TBN = float3x3(T, B, N);
    coord = mul(coord, TBN);

    Material.Diffuse *= saturate(dot(-LightDirection, coord));
}

// 실제 호출
void NormalMapping(float2 uv, float3 normal, float3 tangent)
{
    NormalMapping(uv, normal, tangent, AnisotropicSampler);
}
```

✅ `MaxAnisotropy`는 보통 4, 8, 16 등 설정 가능하며, 값이 높을수록 품질 ↑, 성능 ↓

----

### 📼 장단점 요약

| 장점 | 단점 |
|------|------|
| 선명한 텍스처 품질 유지 | 계산량 증가 (특히 고 Aniso 레벨일 때) |
| 거리 및 기울기에 강함 | 일부 구형 GPU에서는 효과 미미 |
| 고화질 그래픽에 필수 요소 | 쉐이더 코드가 아니라 샘플러 설정이 핵심 |

----

### 📌 요약 정리

| 항목 | 설명 |
|------|------|
| 목적 | 기울어진 표면에서 텍스처 디테일 유지 |
| 방법 | 타원형 영역에서 텍셀 다중 샘플링 수행 |
| 적용 | 샘플러 설정 (`ANISOTROPIC`, `MaxAnisotropy`) |
| 사용처 | 바닥 텍스처, 도로, 철도, 넓은 표면 텍스처 등 |


----

## 📚 참고 자료
- [Wikipedia - Anisotropic filtering](https://en.wikipedia.org/wiki/Anisotropic_filtering)
- [Microsoft Docs - SamplerState](https://learn.microsoft.com/ko-kr/windows/win32/direct3dhlsl/dx-graphics-hlsl-sampler)
- [GPU Gems 2 - Advanced High-Quality Filtering](https://developer.nvidia.com/gpugems/gpugems2/part-iii-high-quality-rendering/chapter-27-advanced-high-quality-filtering)

