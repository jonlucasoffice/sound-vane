"use client"

import React from "react"
import Notes from "../Notes"

export default function Panel({
  aq,
  noteModifiers,
}: {
  aq: any
  noteModifiers: any
}) {
  return (
    <div
      id="panel"
      className="absolute bottom-0 left-0 w-full md:w-auto md:m-10 z-10 p-5 pl-0 rounded text-xs uppercase text-center"
    >
      <div>
        <div className="font-bold">Sound Vane</div>
        <div>
          {aq.location ? aq.location.city.name : "Air quality you can hear"}
        </div>
      </div>
      <Notes noteModifiers={noteModifiers} />
      <div className="flex justify-center gap-12">
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
  )
}
