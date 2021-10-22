import React, { useEffect } from "react";
import { FireWrapper } from "./FireBackground.styles";

type Props = { showColor: boolean; flameColor: Array<any> };

const FireBackground: React.FC<Props> = ({ showColor, flameColor }) => {
  let canvas: any;
  let ctx: any;
  let config: any = {
    sparkFreq: 1,
    meanSparkSize: 0.004,
    meanSparkLife: 400,
    meanSparkVelocity: [2, 6],
    sparkSizeletiation: 10,
    sparkBlink: 10, // Lower is more blink
    floorHeight: 0,
  };

  useEffect(() => {
    // eslint-disable-next-line
    canvas = document.getElementById("canvas");
    // eslint-disable-next-line
    ctx = canvas.getContext("2d");

    let resize = (window.resizeBy = function () {
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
    });
    resize();

    config.meanSparkSize = canvas.width * config.meanSparkSize;

    let fire = new (Fire as any)(
      ctx,
      canvas,
      canvas.height - canvas.height * config.floorHeight,
      config
    );

    let loop = function () {
      window.requestAnimationFrame(loop);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      fire.update();
      for (let i = 0; i < config.sparkFreq; i++) {
        fire.spark(Math.random() * canvas.width);
      }
    };

    window.requestAnimationFrame = (function () {
      return (
        window.requestAnimationFrame ||
        function (a) {
          window.setTimeout(a, 1e3 / 60);
        }
      );
    })();

    loop();
  }, [flameColor]);

  //////////////////////////////////////////////////
  let Fire = function Fire(
    this: any,
    ctx: any,
    canvas: any,
    y: number,
    config: any
  ) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.y = y;
    this.r = 255;
    this.config = config;
    this.sparks = [];
  };
  Fire.prototype.spark = function (x: any) {
    this.sparks.push(new (Spark as any)(this.ctx, x, this.y, this.config));
  };
  Fire.prototype.updateColor = function () {
    this.r += (Math.random() - 0.5) * 10;
    this.r = Math.round(Math.min(80, Math.max(60, this.r)));
  };
  Fire.prototype.update = function () {
    this.updateColor();
    this.ctx.beginPath();
    this.ctx.rect(0, this.y, this.canvas.width, this.config.meanSparkSize);
    this.ctx.fillStyle = "rgba(" + this.r + ", 0, 0, 1)";
    this.ctx.fill();

    for (let i = 0; i < this.sparks.length; i++) {
      if (this.sparks[i].update()) {
        // Spark died
        this.sparks.splice(i, 1);
      }
    }
  };

  ///////////////////////////////////////////////
  let Spark = function Spark(
    this: any,
    ctx: any,
    x: any,
    y: any,
    config: {
      meanSparkSize: number;
      sparkSizeletiation: number;
      meanSparkVelocity: number[];
      meanSparkLife: number;
    }
  ) {
    this.ctx = ctx;
    this.pos = [x, y];
    this.size =
      config.meanSparkSize + (Math.random() - 0.5) * config.sparkSizeletiation;
    this.v = [
      config.meanSparkVelocity[0] * (Math.random() - 0.5),
      -1 * config.meanSparkVelocity[1] * Math.random(),
    ];
    this.c = [
      // Math.floor(Math.random() * {flameColor[1]}),
      // Math.floor(Math.random() * 155) + 100,
      // 0,
      flameColor[1],
      flameColor[2],
      flameColor[3],
    ];
    this.life = this.lifeOrig = Math.floor(
      config.meanSparkLife * Math.random()
    );
    this.config = config;
  };
  Spark.prototype.move = function () {
    for (let i = 0; i < 2; i++) {
      this.pos[i] += this.v[i] * (1 - this.life / this.lifeOrig);
    }
  };
  Spark.prototype.getAlpha = function () {
    return (
      Math.sqrt(this.life / this.lifeOrig) +
      (Math.random() - 0.5) / this.config.sparkBlink
    );
  };
  Spark.prototype.update = function () {
    this.move();
    if (!this.life--) {
      return true;
    }
    this.ctx.beginPath();
    this.ctx.rect(this.pos[0], this.pos[1], this.size, this.size);
    this.ctx.fillStyle =
      "rgba(" +
      this.c[0] +
      ", " +
      this.c[1] +
      ", " +
      this.c[2] +
      ", " +
      this.getAlpha() +
      ")";
    this.ctx.fill();
  };

  return (
    <FireWrapper>
      <div className="padded">
        <canvas id="canvas"></canvas>
      </div>
    </FireWrapper>
  );
};
export default FireBackground;
