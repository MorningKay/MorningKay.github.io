# 可爱小屋上线啦！

欢迎大家来到晨凯的学习小屋(*≧∀≦*)

## 今天做了什么
- 学会了写 HTML
- 加了 Markdown 渲染器
- 博客上线咯！

测试一下这个公式:
$$
\int_0^{+\infty} e^{-x^2} dx = \dfrac{\sqrt{\pi}}{2}
$$

再来
$$
\begin{align}
a &= b + c \\\\
x &= y^2 + z^2
\end{align}
$$

测试一下这些代码:
```python
def Fib(n, memo={}):
    if n == 0 or n == 1:
        return 1
    
    try:
        return memo[n]
    except KeyError:
        result = Fib(n-1, memo) + Fib(n-2, memo)
        memo[n] = result
        return result
```


> 未来也要继续加油喵~٩(｡•́‿•̀｡)۶
