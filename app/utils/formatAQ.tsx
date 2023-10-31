export const formatAQ = (result: any) => {
  let notes = []

  notes[0] = result["o3"] ? (result["o3"] > 25 ? "#" : "b") : null
  notes[1] = result["humidity"] ? (result["humidity"] > 30 ? "#" : "b") : null
  notes[2] = result["co"] ? (result["co"] > 25 ? "#" : "b") : null
  notes[3] = result["pm25"] ? (result["pm25"] > 25 ? "#" : "b") : null

  return notes
}
