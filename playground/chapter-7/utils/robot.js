import { findRoute, roadGraph } from "./graph.js"

export function runRobot(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns.`)
      break
    }

    let action = robot(state, memory)
    state = state.move(action.direction)
    memory = action.memory
    console.log(`Moved to ${action.direction}`)
  }
}

export function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length)
  return array[choice]
}

export function randomRobot(state) {
  return {
    direction: randomPick(roadGraph[state.place])
  }
}


export function goalOrientedRobot({ place, parcels }, route = []) {
  if (route.length == 0) {
    let parcel = parcels[0]

    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place)
    } else {
      route = findRoute(roadGraph, place, parcel.address)
    }
  }

  return { direction: route[0], memory: route.slice(1) }
}


