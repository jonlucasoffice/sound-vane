"use client"

import MapGL, { Source, Layer } from "react-map-gl"
import { getAQ } from "@/app/apis/aq"
import { useEffect, useMemo, useState } from "react"
import { formatAQ } from "./utils/formatAQ"
import Audio from "./components/Audio"
import Panel from "./components/Panel"
import { heatmapLayer } from "./utils/map-style"

export default function Home() {
  const [aq, setAQ] = useState([])
  const [noteModifiers, setNoteModifiers] = useState([])
  const [heatmap, setHeatmap] = useState(null)

  const [isMuted, setIsMuted] = useState(true)

  function handleDragEnd(e: any) {
    getAQ(e.viewState.longitude, e.viewState.latitude).then((result) => {
      setAQ(result)
    })
  }

  useEffect(() => {
    let notes: any = formatAQ(aq)
    setNoteModifiers(notes)
  }, [aq])

  useEffect(() => {
    fetch("./aq.geojson")
      .then((resp) => resp.json())
      .then((json) => {
        setHeatmap(json)
      })
      .catch((err) => console.error("Could not load data", err))
  }, [])

  const data = useMemo(() => {
    return heatmap
  }, [heatmap])

  return (
    <main className="w-full h-screen cursor-move">
      <MapGL
        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
        onDragEnd={handleDragEnd}
        onLoad={(e) => {
          getAQ(-70.6455, 41.3805).then((result) => {
            setAQ(result)
          })
        }}
        initialViewState={{
          longitude: -70.6455,
          latitude: 41.3805,
          zoom: 3.5,
        }}
        mapStyle="mapbox://styles/mapbox/light-v11"
      >
        {data && (
          <Source type="geojson" data={data}>
            <Layer {...heatmapLayer} />
          </Source>
        )}
      </MapGL>
      <Panel
        aq={aq}
        noteModifiers={noteModifiers}
        setIsMuted={setIsMuted}
        isMuted={isMuted}
      />
      <Audio noteModifiers={noteModifiers} isMuted={isMuted} />
      <div id="crosshair"></div>
    </main>
  )
}
