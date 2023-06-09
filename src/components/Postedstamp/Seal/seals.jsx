import ntpu_stone from "./img/ntpu-stone.svg"
import b_school from "./img/bschool.svg"
import gate from "./img/gate.svg"
import eagle from "./img/eagle.svg"
import heart_lake from "./img/heart-lake.svg"

// https://developer.mozilla.org/en-US/docs/Web/CSS/margin
// last time
//  const seal = [ntpu_stone, b_school, gate, eagle, heart_lake]

const seals = [
    {
        src: ntpu_stone,
        style: { margin: "0 0 10px 4px" }
    },
    {
        src: b_school,
        style: { margin: "0 0 0 5px" }
    },
    {
        src: gate,
        style: { margin: "0 0 0 5px" }
    },
    {
        src: heart_lake,
        style: { margin: "0" }
    },
    {
        src: eagle,
        style: { margin: "0 0 0 3px" }
    }]

export default seals;