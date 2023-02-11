// automaton

import { VillageState } from "./src/village-state.js";
import { goalOrientedRobot, randomRobot, runRobot } from "./utils/robot.js";
import { routeRobot } from './utils/mail.js'

// raw data

// build graph from roads.

// let first = new VillageState(
//   "Post Office", [{
//     place: 'Post Office',
//     address: "Alice's House"
//   }]
// )
// let next = first.move("Alice's House")

// console.log(next.place)
// console.log(next.parcels)
// console.log(first.place)

// runRobot(VillageState.random(), randomRobot)
// runRobot(VillageState.random(), routeRobot)
runRobot(VillageState.random(), goalOrientedRobot)
