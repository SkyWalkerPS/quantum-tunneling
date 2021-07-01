import { useEffect } from "react";
import "./Graph.scss";

var graph;
let height = window.innerHeight * 75 / 100;
let width = window.innerWidth * 75 / 100;

const graphDraw = () => {
  const cheight = graph.clientHeight;
  const cwidth = graph.clientWidth;

  let ctx = graph.getContext('2d');

  let time = 20;

  let waveDispl = 0;
  setInterval(() => {
    ctx.clearRect(0, 0, cheight * 2, cwidth * 2);
    ctx.beginPath();
    for(let i = 0; i<cwidth; i++) {
      ctx.lineTo(i, cheight /2 + 100 * Math.sin(i/20 + waveDispl))
    }
    ctx.stroke();
    waveDispl+=1/time;
  }, time);

}

const Graph = () => {

  useEffect(() => {
    graph = document.getElementById('graphCanvas');
    graphDraw();
  }, []);

  return (
    <div className="graph">
      <canvas id="graphCanvas" height={height * 75/ 100} width={width * 75/ 100}></canvas>
    </div>
  )
}

export default Graph;