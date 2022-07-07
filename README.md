# fft
- 화요일: FFT 구현 - 다항함수에 복소수 대입 구현
## 메모
### EpR: Excitation plus Resonances
-> SMS, SFM
### SMS: Spectral Modeling Synthesis
-> FFT/IFFT
### SFM: Sorce-Filter Model
### FFT/IFFT
-> 오일러 공식, 행렬
- DFT를 빠르게 하는 알고리즘. 쿨리-튜키 알고리즘.
- 다항식의 곱셈을 빠르게 수행.
- 근데 삼각함수에 어떻게 적용할지 모르겠음.
### 오일러 공식
-> 자연상수
- $ e^{i\pi} = -1 $
- $ e^{ix} = \cos x + i \sin x $
- $ \cos x = {e^{ix} + e^{-ix} \over 2}, \sin x = {e^{ix} - e^{-ix} \over 2i} $
### 자연상수
- $ {d \over dt} e^t = e^t $
- $ {d \over dt} e^{it} = i \cdot e^{it} $
### 푸리에 급수
파동의 법칙
- $ f(t) = a_0 + \sum_{n=1}^\infty (a_n \cos n \omega t + b_n \sin n \omega t) $
### 푸리에 계수
파동의 법칙 317p
- $ a_0 = {1 \over T}\int_0^T f(t)\ dt $
- $ a_n = {2 \over T}\int_0^T f(t) \cos n \omega t\ dt $
- $ b_n = {2 \over T}\int_0^T f(t) \sin n \omega t\ dt $
### 삼각 공식
파동의 법칙 263p
#### 덧셈 정리
- $ \sin(a+b) = \sin a \cos b + \cos a \sin b $
- $ \cos(a+b) = \cos a \cos b - \sin a \sin b $
- $ \sin(a-b) = \sin a \cos b - \cos a \sin b $
- $ \cos(a-b) = \cos a \cos b + \sin a \sin b $

#### 응용
- $ \cos a \sin b = {\sin (a + b) - \sin (a - b) \over 2} $
- $ a + b = A, a - b = B $
- $ \cos a \sin b = {\sin A - \sin B \over 2} $
- $ \sin A - \sin B = 2 \cos {A + B \over 2} \sin {A - B \over 2} $
### 삼각함수의 미분
파동의 법칙 273p
- $ {d \over d \theta} \sin \theta = \cos \theta $
- $ {d \over dt} \sin n \omega t = n \omega \cos n \omega t $
## 파일 구조
### src/dft
- https://speakerdeck.com/wookayin/fast-fourier-transform-algorithm
- https://www.youtube.com/watch?v=h7apO7q16V0
#### fft.ts
- FFT/IFFT 구현
#### slowFt.ts
- 다항식의 곱셈으로 같은 기능 구현
