"use client"

import React, { useEffect, useState } from "react"
import Notes from "../Notes"

export default function Panel({
  aq,
  noteModifiers,
  setIsMuted,
  isMuted,
}: {
  aq: any
  noteModifiers: any
  setIsMuted: any
  isMuted: boolean
}) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    aq.location && setLoaded(true)
  }, [aq])

  return (
    <div
      id="panel"
      className="absolute bottom-0 left-0 w-full md:w-auto md:m-10 z-10 p-5 rounded text-xs uppercase "
    >
      {loaded ? (
        <div>
          <div className="flex justify-between">
            <div>
              <div className="font-bold">Sound Vane</div>
              <div>
                {aq.location
                  ? aq.location.city.name
                  : "Air quality you can hear"}
              </div>
            </div>
            <div onClick={() => setIsMuted(!isMuted)}>
              {isMuted ? "umute" : "mute"}
            </div>
          </div>
          <Notes noteModifiers={noteModifiers} />
          <div className="flex justify-center gap-12 text-center">
            <div>
              <div>O3</div>
              <div>{aq.o3 ? aq.o3 : "N/A"}</div>
            </div>
            <div>
              <div>Humidity</div>
              <div>{aq.humidity ? aq.humidity : "N/A"}</div>
            </div>
            <div>
              <div>CO</div>
              <div>{aq.co ? aq.co : "N/A"}</div>
            </div>
            <div>
              <div>PM 2.5</div>
              <div>{aq.pm25 ? aq.pm25 : "N/A"}</div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading Air Quality Data…</div>
      )}
    </div>
  )
}
