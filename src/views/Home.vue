<template>
  <div class="demo">
    <canvas id="canvas" width="500px" height="300px"></canvas>
    <canvas id="canvas_01" width="500px" height="300px"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.canvasInit();
    this.Grame();
  },
  methods: {
    canvasInit() {
      const canvas = document.getElementById("canvas");

      const context = canvas.getContext("2d");

      //
      context.fillStyle = "rgba(0,0,200,.5)";
      context.fillRect(30, 30, 55, 50);
      //
      context.strokeStyle = "red";
      context.strokeRect(100, 100, 50, 50);
      //
      context.fillRect(25, 25, 100, 100);
      context.clearRect(45, 45, 60, 60);
      context.strokeRect(50, 50, 50, 50);

      //绘制三角形
      context.beginPath();
      context.moveTo(75, 50);
      context.lineTo(100, 75);
      context.lineTo(100, 25);
      context.fill();

      //绘制笑脸
      context.beginPath();
      context.arc(75, 75, 50, 0, Math.PI * 2, true); // 绘制
      context.moveTo(110, 75);
      context.arc(75, 75, 35, 0, Math.PI, false); // 口(顺时针)
      context.moveTo(65, 65);
      context.arc(60, 65, 5, 0, Math.PI * 2, true); // 左眼
      context.moveTo(95, 65);
      context.arc(90, 65, 5, 0, Math.PI * 2, true); // 右眼
      context.stroke();

      // 填充三角形
      context.beginPath();
      context.moveTo(25, 25);
      context.lineTo(105, 25);
      context.lineTo(25, 105);
      context.fill();

      // 描边三角形
      context.beginPath();
      context.moveTo(125, 125);
      context.lineTo(125, 45);
      context.lineTo(45, 125);
      context.closePath();
      context.stroke();

      // 圆弧
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 3; j++) {
          context.beginPath();
          var x = 25 + j * 50; // x 坐标值
          var y = 25 + i * 50; // y 坐标值
          var radius = 20; // 圆弧半径
          var startAngle = 0; // 开始点
          var endAngle = Math.PI + (Math.PI * j) / 2; // 结束点
          var anticlockwise = i % 2 == 0 ? false : true; // 顺时针或逆时针

          context.arc(x, y, radius, startAngle, endAngle, anticlockwise);

          if (i > 1) {
            context.fill();
          } else {
            context.stroke();
          }
        }
      }

      // 二次贝塞尔曲线
      context.beginPath();
      context.moveTo(75, 25);
      context.quadraticCurveTo(25, 25, 25, 62.5);
      context.quadraticCurveTo(25, 100, 50, 100);
      context.quadraticCurveTo(50, 120, 30, 125);
      context.quadraticCurveTo(60, 120, 65, 100);
      context.quadraticCurveTo(125, 100, 125, 62.5);
      context.quadraticCurveTo(125, 25, 75, 25);
      context.stroke();

      //三次贝塞尔曲线
      context.beginPath();
      context.moveTo(75, 40);
      context.bezierCurveTo(75, 37, 70, 25, 50, 25);
      context.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
      context.bezierCurveTo(20, 80, 40, 102, 75, 120);
      context.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
      context.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
      context.bezierCurveTo(85, 25, 75, 37, 75, 40);
      context.fill();

      //
      const rectangle = new Path2D();
      rectangle.rect(10, 10, 50, 50);

      const circle = new Path2D();
      circle.moveTo(125, 35);
      circle.arc(100, 35, 25, 0, 2 * Math.PI);

      context.stroke(rectangle);
      context.fill(circle);
    },

    /* Comment */

    Grame() {
      var canvas = document.getElementById("canvas_01");
      if (canvas.getContext) {
        var context = canvas.getContext("2d");

        roundedRect(context, 12, 12, 150, 150, 15);
        roundedRect(context, 19, 19, 150, 150, 9);
        roundedRect(context, 53, 53, 49, 33, 10);
        roundedRect(context, 53, 119, 49, 16, 6);
        roundedRect(context, 135, 53, 49, 33, 10);
        roundedRect(context, 135, 119, 25, 49, 10);

        context.beginPath();
        context.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
        context.lineTo(31, 37);
        context.fill();

        for (var i = 0; i < 8; i++) {
          context.fillRect(51 + i * 16, 35, 4, 4);
        }

        for (i = 0; i < 6; i++) {
          context.fillRect(115, 51 + i * 16, 4, 4);
        }

        for (i = 0; i < 8; i++) {
          context.fillRect(51 + i * 16, 99, 4, 4);
        }

        context.beginPath();
        context.moveTo(83, 116);
        context.lineTo(83, 102);
        context.bezierCurveTo(83, 94, 89, 88, 97, 88);
        context.bezierCurveTo(105, 88, 111, 94, 111, 102);
        context.lineTo(111, 116);
        context.lineTo(106.333, 111.333);
        context.lineTo(101.666, 116);
        context.lineTo(97, 111.333);
        context.lineTo(92.333, 116);
        context.lineTo(87.666, 111.333);
        context.lineTo(83, 116);
        context.fill();

        context.fillStyle = "white";
        context.beginPath();
        context.moveTo(91, 96);
        context.bezierCurveTo(88, 96, 87, 99, 87, 101);
        context.bezierCurveTo(87, 103, 88, 106, 91, 106);
        context.bezierCurveTo(94, 106, 95, 103, 95, 101);
        context.bezierCurveTo(95, 99, 94, 96, 91, 96);
        context.moveTo(103, 96);
        context.bezierCurveTo(100, 96, 99, 99, 99, 101);
        context.bezierCurveTo(99, 103, 100, 106, 103, 106);
        context.bezierCurveTo(106, 106, 107, 103, 107, 101);
        context.bezierCurveTo(107, 99, 106, 96, 103, 96);
        context.fill();

        context.fillStyle = "black";
        context.beginPath();
        context.arc(101, 102, 2, 0, Math.PI * 2, true);
        context.fill();

        context.beginPath();
        context.arc(89, 102, 2, 0, Math.PI * 2, true);
        context.fill();
      }

      // 封装的一个用于绘制圆角矩形的函数.
      function roundedRect(context, x, y, width, height, radius) {
        context.beginPath();
        context.moveTo(x, y + radius);
        context.lineTo(x, y + height - radius);
        context.quadraticCurveTo(x, y + height, x + radius, y + height);
        context.lineTo(x + width - radius, y + height);
        context.quadraticCurveTo(
          x + width,
          y + height,
          x + width,
          y + height - radius
        );
        context.lineTo(x + width, y + radius);
        context.quadraticCurveTo(x + width, y, x + width - radius, y);
        context.lineTo(x + radius, y);
        context.quadraticCurveTo(x, y, x, y + radius);
        context.stroke();
      }
    }
  }
};
</script>

<style lang="less">
.demo {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
