---  
layout: post  
title: "C++ 스마트 포인터 (Smart Pointer) 정리"  
description: >  
hide_last_modified: true  
categories: [study, cpp]  
tags: [Programming, C++, SmartPointer, MemoryManagement]  
comments: true  
---  

<p align="center">  
  <img src="/assets/img/blog/cpp/cpp_img.png" style="width: 832px; height: auto;" />  
</p>  

-----  

#### 🖥️ C++ 스마트 포인터(Smart Pointer)란?  
> 스마트 포인터(Smart Pointer)는 C++에서 동적 메모리 할당 시 발생할 수 있는 **메모리 누수(Memory Leak)** 문제를 해결하기 위해 제공되는 기능.  
> **RAII(Resource Acquisition Is Initialization) 원칙**을 적용하여, 객체의 생명 주기를 자동으로 관리하고, 사용이 끝난 메모리를 자동으로 해제하는 역할을 수행함.  

----  
#### 🖥️ 스마트 포인터를 사용하는 이유  
<br>  

**💥 기존 `new` / `delete` 사용의 문제점**  
1. 동적으로 할당한 메모리를 `delete` 하지 않으면 **메모리 누수 발생**  
2. 예외(exception) 발생 시 `delete` 호출이 누락될 가능성이 있음  
3. 여러 개의 포인터가 같은 객체를 관리할 경우 **중복 해제(double delete)** 문제가 발생할 수 있음  

> C++11에서 표준 스마트 포인터가 도입됨에 따라 **`std::unique_ptr`, `std::shared_ptr`, `std::weak_ptr`**를 사용하여 위와 같은 문제를 해결 가능함.  

----  
#### 🖥️ 스마트 포인터 종류 및 사용법  

| 스마트 포인터 | 특징 | 주요 사용 예시 |
|--------------|------|--------------|
| `std::unique_ptr` | 하나의 객체를 단독으로 소유하며, 복사 불가능 | 특정 객체의 단독 소유권을 가질 때 |
| `std::shared_ptr` | 여러 개의 포인터가 하나의 객체를 공유하며, 참조 카운트를 가짐 | 여러 개의 객체가 동일한 자원을 공유할 때 |
| `std::weak_ptr` | `shared_ptr`의 참조를 보조적으로 유지하며, 참조 카운트에 영향을 주지 않음 | 순환 참조(Circular Reference) 방지 |

**📌 `std::unique_ptr`과 `std::shared_ptr`의 차이점**
<br>
`unique_ptr`은 하나의 포인터만 객체를 소유하지만, `shared_ptr`은 여러 개의 포인터가 같은 객체를 공유할 수 있음.  
{:.note}

----  
### 🖥️ `std::unique_ptr` 사용법  
> **단독 소유, 복사 불가능, 이동 가능**  

📌 `std::unique_ptr`는 특정 객체를 단독으로 관리하며, `std::move`를 통해 소유권을 이동할 수 있음.
{:.note}

```cpp
#include <cstdio>
#include <memory>

using namespace std;

class Example 
{
public:
    Example() 
    { 
        printf("Example 객체 생성\n"); 
    }
    
    ~Example() 
    { 
        printf("Example 객체 소멸\n"); 
    }
    
    void show() 
    {
        printf("Hello, unique_ptr !\n"); 
    }
};

int main() 
{
    unique_ptr<Example> ptr1 = make_unique<Example>();
    ptr1->show();

    //unique_ptr는 복사가 불가능함
    //unique_ptr<Example> ptr2 = ptr1; //컴파일 에러 발생!!

    //이동 연산(move) 가능
    unique_ptr<Example> ptr2 = move(ptr1);
    ptr2->show(); //ptr2로 이동 되어, ptr1은 더 이상 유효하지 않음.

    return 0;
}
```

출력 결과:

```cpp
Example 객체 생성
Hello, unique_ptr! //ptr1->show()
Hello, unique_ptr! //ptr2->show() (ptr1에서 소유권이 이동됨)
Example 객체 소멸 //ptr2가 스코프(범위)를 벗어나면서 소멸.

```

📌 `unique_ptr`는 스코프를 벗어나면 자동으로 메모리를 해제하므로, `delete`를 직접 호출할 필요가 없음. <br>
{:.note}

----  
#### 🖥️ 스마트 포인터 사용 시 주의할 점  
1. **raw pointer(`new`/`delete`)와 혼용하지 않기**  
2. **`std::unique_ptr`은 복사할 수 없으며, 이동(`std::move`)만 가능**  
3. **`std::shared_ptr`의 순환 참조 문제 주의 -> `std::weak_ptr`로 해결 가능**  
4. **`std::make_shared`와 `std::make_unique`를 활용하면 예외 안전성이 향상되고 성능이 최적화됨**  

----  
<span style="color:darkgray">출처 : <br>
＊ https://en.cppreference.com/w/cpp/memory <br>
＊ https://learn.microsoft.com/en-us/cpp/cpp/smart-pointers-modern-cpp <br>
＊ https://www.boost.org/doc/libs/1_81_0/libs/smart_ptr <br>
＊ https://modoocode.com/229 <br>
＊ https://modoocode.com/252 <br>
</span>

