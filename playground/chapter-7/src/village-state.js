import { roadGraph } from "../utils/graph.js"
import { randomPick } from "../utils/robot.js"

export class VillageState {
  constructor(place, parcels) {
    this.place = place
    this.parcels = parcels
  }

  move(destination) {
    // if there's no road, return the current state.
    if (!roadGraph[this.place].includes(destination)) {
      return this
    }

    let parcels = this.parcels.map(p => {
      if (p.place != this.place) return p
      return {
        place: destination,
        address: p.address
      }
    })
      .filter(p => p.place != p.address)

    // returns the new village state(ssot) 
    return new VillageState(destination, parcels)
  }
}

VillageState.random = function(parcelCount = 5) {
  let parcels = []

  for (let i = 0; i < parcelCount; ++i) {
    let address = randomPick(Object.keys(roadGraph))
    let place;

    do {
      place = randomPick(Object.keys(roadGraph))
    } while (place == address) {
      parcels.push({ place, address })
    }
  }

  return new VillageState("Post Office", parcels)
}
