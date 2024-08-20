---
title: CSS 函数
description: CSS 值函数是调用特殊数据处理或计算的语句，以返回一个 CSS 属性的 CSS 值。CSS 值函数代表更复杂的数据类型，它们可能需要一些输入参数来计算返回值。
duration: 5min
date: 2024-08-19
---

[在线编辑](https://codepen.io/pen)

[CSS Function with MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Functions)

<!-- ## 转换函数 -->
<!-- ## 数学函数 -->

## 过滤器函数()
blur 增加图像的高斯模糊
```css
/* blur(radius) */
filter: blur(5px)
```

brightness 调整图像的亮度
```css
/* brightness(percentage) */
filter: brightness(50%)
```

contrast 调整图像的对比度
```css
/* contrast(percentage) */
filter: contrast(50%)
```

drop-shadow 为图像添加阴影
```css
/* drop-shadow(offset-x offset-y blur-radius spread-radius color) */
filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.5))
```

grayscale 将图像转换为灰度图像
```css
/* grayscale(percentage) */
filter: grayscale(100%)
```

hue-rotate 调整图像的色相
```css
/* hue-rotate(angle) */
filter: hue-rotate(90deg)
```

invert 反转图像的颜色
```css
/* invert(percentage) */
filter: invert(100%)
```

opacity 调整图像的不透明度
```css
/* opacity(percentage) */
filter: opacity(50%)
```

saturate 调整图像的饱和度
```css
/* saturate(percentage) */
filter: saturate(50%);
```

<!-- ## 颜色值函数 -->
## 图像函数
### 渐变函数
linear-gradient 线性渐变沿着一条假想线逐渐过渡颜色
```css
/* 语法:
<linear-gradient()> = linear-gradient( [ <linear-gradient-syntax> ] )  

<linear-gradient-syntax> = [ <angle> | to <side-or-corner> ]? , <color-stop-list>  

<angle> = <number>deg

<side-or-corner> = [ left | right ] || [ top | bottom ]  

<color-stop-list> = <linear-color-stop> , [ <linear-color-hint>? , <linear-color-stop> ]#?  

<linear-color-stop> = <color> <length-percentage>?  

<linear-color-hint> = <length-percentage>  

<length-percentage> = <length> | <percentage>
*/

/* 渐变轴为 45 度，从蓝色渐变到红色 */
background: linear-gradient(45deg, blue, red);
```

radial-gradient 径向渐变从一个中心点（原点）逐步过渡颜色
```css
/* 在容器中心的渐变，从红色开始，变成蓝色，最后变成绿色 */
background: radial-gradient(circle at center, red 0, blue, green 100%)
```

radial-gradient 锥形渐变是在一个圆周上逐步过渡颜色
```css
/* 一个旋转 45 度的锥形渐变，从蓝色渐变到红色 */
conic-gradient(from 45deg, blue, red);
```

repeating-linear-gradient 类似于 linear-gradient，接受相同的参数，但它在所有方向上无限重复使用色标，以覆盖其整个容器（径向渐变、锥形渐变的重复使用同理）
```css
/* 一个倾斜 45 度的重复线性渐变，从蓝色开始渐变到红色 */
repeating-linear-gradient(45deg, blue, red);
```

### 图像函数
image-set 为浏览器提供一组图像，以适应不同的分辨率
```css
/* 为不同分辨率的屏幕提供不同大小的图像 */
background-image: image-set(url('small.jpg') 1x, url('large.jpg') 2x);
```

## 形状函数
path 使用 SVG 路径定义形状
```css
/* 使用 SVG 路径定义形状 */
clip-path: path('M10 10 H 90 V 90 H 10 L 10 10');
```

<!-- ## 计数器函数
## 引用函数
## 网格函数
## 字体函数
## 缓动函数
## 动画函数 -->
