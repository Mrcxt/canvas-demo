# canvas-demo

## 绘制矩形

`fillRect(x, y, width, height)`：绘制一个填充的矩形
`strokeRect(x, y, width, height)`：绘制一个矩形的边框
`clearRect(x, y, width, height)`：清除指定矩形区域，让清除部分完全透明。

## 绘制路径

`beginPath()`：新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。
`closePath()`：闭合路径之后图形绘制命令又重新指向到上下文中。
`stroke()`：通过线条来绘制图形轮廓。
`fill()`：通过填充路径的内容区域生成实心的图形。

`moveTo(x, y)`：将笔触移动到指定的坐标 x 以及 y 上。
`lineTo(x, y)`：绘制一条从当前位置到指定 x 以及 y 位置的直线。

**路径图形：**

`arc(x, y, radius, startAngle, endAngle, anticlockwise)`：画一个以（x,y）为圆心的以 radius 为半径的圆弧（圆），从 startAngle 开始到 endAngle 结束，按照 anticlockwise 给定的方向（默认为顺时针）来生成。
`arcTo(x1, y1, x2, y2, radius)`：根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点。

`quadraticCurveTo(cp1x, cp1y, x, y)`：绘制二次贝塞尔曲线，cp1x,cp1y 为一个控制点，x,y 为结束点。
`bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)`：绘制三次贝塞尔曲线，cp1x,cp1y 为控制点一，cp2x,cp2y 为控制点二，x,y 为结束点。

`rect(x, y, width, height)`：绘制一个左上角坐标为（x,y），宽高为 width 以及 height 的矩形。

`Path2D.addPath(path [, transform])​`：添加了一条路径到当前路径（可能添加了一个变换矩阵）。
