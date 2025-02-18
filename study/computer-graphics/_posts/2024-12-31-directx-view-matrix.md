---
layout: post
title:  "View Matrix(뷰 행렬)"
description: >
hide_last_modified: true
categories: [study, computer-graphics]
tags: [Programming, ComputerGraphics]
comments: true
---

#### 📼 `View Matrix`란?
> 투영 변환(Projection)을 하기 전, 카메라가 바라보는 기준으로 물체를 이동시키는 작업.

<br>

※ DirectX는 왼손 좌표계를 사용하므로 카메라가 원점기준으로 Z축을 양의 방향으로 바라보게 작업.

---
#### 📼 `View Matrix`를 만드는 방법
뷰 매트릭스는 객체를 이동하고 회전하여 카메라 공간에 배치하며, 이동 매트릭스를 각 축에 대한 회전 매트릭스와 결합하는 방법을 사용.<br>
※ 이 때, 카메라는 원점에 위치.

$$
V = T \cdot R_z \cdot R_y \cdot R_x
$$


| 수식명      | 설명                           |
|------------|:-----------------------------:|
| $$ V $$ | 생성되는 뷰 행렬.|
| $$ T $$ | 월드에서 객체를 재배치하는 변환 행렬. |
| $$ R_z \cdot R_y \cdot R_x $$ | x, y, z축을 따라 객체를 회전시키는 회전 행렬|

---
#### 📼 `View Matrix` 설정
**`D3DXMatrixLookAtLH`** 

* 기본 DX 문법 사용
```cpp
D3DXMATRIX out;
D3DXVECTOR3 eye(2,3,3);
D3DXVECTOR3 at(0,0,0);
D3DXVECTOR3 up(0,1,0);
D3DXMatrixLookAtLH(&out, &eye, &at, &up);
```

* 사용자 정의 함수 사용
```cpp
Matrix Matrix::CreateLookAt(Vector cameraPosition, Vector cameraTarget, Vector cameraUpVector)
{
	Matrix matrix;

    
	Vector zAxis = Vector::Normalize(cameraTarget - cameraPosition); //카메라 정면 벡터(Z축) 계산
	Vector xAxis = Vector::Normalize(Vector::Cross(cameraUpVector, zAxis)); //카메라 오른쪽 벡터(X축) 계산 - Up Vector와 정면 벡터의 외적
	Vector yAxis = Vector::Cross(zAxis, xAxis); //카메라 위쪽 벡터(Y축) 계산 - 정면 벡터와 오른쪽 벡터의 외적

    //뷰 행렬의 회전, 변환 행렬 값 세팅
    // 처음 세 개의 열은 X, Y, Z축 벡터의 방향을 나타냄.
	matrix.M11 = xAxis.X; matrix.M12 = yAxis.X; matrix.M13 = zAxis.X; matrix.M14 = 0.0f;
	matrix.M21 = xAxis.Y; matrix.M22 = yAxis.Y; matrix.M23 = zAxis.Y; matrix.M24 = 0.0f;
	matrix.M31 = xAxis.Z; matrix.M32 = yAxis.Z; matrix.M33 = zAxis.Z; matrix.M34 = 0.0f;

	matrix.M41 = -Vector::Dot(xAxis, cameraPosition);
	matrix.M42 = -Vector::Dot(yAxis, cameraPosition);
	matrix.M43 = -Vector::Dot(zAxis, cameraPosition);
	matrix.M44 = 1.0f;

	return matrix;
}
```