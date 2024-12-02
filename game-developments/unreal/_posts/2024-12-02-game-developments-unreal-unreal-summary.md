---
layout: post
title:  "[Unreal] 언리얼 내용 정리"
description: >
hide_last_modified: true
categories: [game-developments, unreal]
tags: ["게임 개발", "unreal"]
---

<img src="../../../assets/img/blog/unreal/unreal_img.png" style="width: 832px; height: auto"/>

### 🎮 Unreal Character 구조 예시
> 
UObject
	┗ AActor - 배치 가능
		┗ APawn - 입력 가능
  			┗ ACharacter - UCharacterMovementComponent(UObject로부터 상속)
   				┗ BP_Player
	 				┗  SpringArm
	  					┗  Camera
	  
-----
 
### 🎮 FSM
- 상태머신
* 언리얼에서는 애니메이션에서 사용

-----

### 🎮 Unreal Shape Component 구조 예시
> 
UObject
	┗ UActorComponent
		┗ USceneComponent(it have FTransform) - 접두사 F : 구조체
			┗ UPrimitiveComponent (it have VB, IB, ...) - Buffer
				┗ UShapeComponent (it have Collision) - 충돌 내용
					┗ USphereComponent
					┗ UCapsuleComponent
					┗ UBoxComponent
								
* Component : 추가적인 기능을 제공하기 위함.

-----

### 🎮 FTransform
 - Location(T), Rotation(R), Scale(S)
 - ★ Relative

ex) 액터

씬 컴포넌트		  상대 간격 존재
------------- => 
액터 컴포넌트		  상대 간격 미존재

-----

#### 🎮 Material

> Flynn(플린 표기법)
SISD Single I - Single Data : 하나의 명령어로 하나의 데이터를 처리
SIMD Single I - Multi Data : 하나의 명령어로 여러 데이터를 처리
MISD Multi I - Single Data(이론상) : 여러 명령어로 하나의 데이터를 처리
MIMD Multi I - Multi Data : 여러 명령어로 여러 데이터를 처리

-----

float - 부동소수점
* float을 기준으로 함. -> 소수점 제거하면 int형이므로

CPU - SISD : 클라이언트에서 사용. (~ 현재는 MIMD. 서버에서 사용)

GPU - float 4 - 하나의 명령어로 4개 처리 가능. 즉 SIMD 사용.

Shader - single, float : Scalar

-----

### 🎮 Unreal Material 구조 예시
UMaterialInterface
	┗ UMaterial : 컴파일이 되지 않은 머터리얼
		┗ UMaterialInstanceConstant : 정적 머터리얼 객체 - 에디터에서는 수정 가능하지만, 프로그래밍에서 수정할 수 없음. 
			┗ UmaterialInstanceDynamic : 동적 머터리얼 객체 - 프로그래밍에서 수정할 수 있음.
		
-----

### 🎮 PBR
- 물리 기반 렌더링
거칠기(Roughness)
금속성(Metallic)

