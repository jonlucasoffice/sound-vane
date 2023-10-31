"use client"

import React, { useEffect } from "react"
import {
  Formatter,
  Renderer,
  Stave,
  StaveNote,
  Voice,
  Accidental,
} from "vexflow"

export default function Notes({ noteModifiers }: { noteModifiers: any }) {
  const drawSheetMusic = () => {
    const clear = document.getElementById("output")
    while (clear && clear.lastChild) {
      clear.removeChild(clear.lastChild)
    }

    const renderer = new Renderer("output", Renderer.Backends.SVG)

    renderer.resize(350, 150)
    const context = renderer.getContext()

    // Create a stave of width 400 at position 10, 40.
    const stave = new Stave(10, 10, 450)

    stave.addClef("treble")
    stave.setContext(context).draw()

    const notes = [
      noteModifiers[0] != null
        ? new StaveNote({ keys: ["c/4"], duration: "q" }).addModifier(
            new Accidental(noteModifiers[0])
          )
        : new StaveNote({ keys: ["c/4"], duration: "qr" }),
      noteModifiers[1] != null
        ? new StaveNote({ keys: ["e/4"], duration: "q" }).addModifier(
            new Accidental(noteModifiers[1])
          )
        : new StaveNote({ keys: ["e/4"], duration: "qr" }),
      noteModifiers[2] != null
        ? new StaveNote({ keys: ["g/4"], duration: "q" }).addModifier(
            new Accidental(noteModifiers[2])
          )
        : new StaveNote({ keys: ["g/4"], duration: "qr" }),
      noteModifiers[3] != null
        ? new StaveNote({ keys: ["b/4"], duration: "q" }).addModifier(
            new Accidental(noteModifiers[3])
          )
        : new StaveNote({ keys: ["b/4"], duration: "qr" }),
    ]

    const voice = new Voice({ num_beats: 4, beat_value: 4 })
    voice.addTickables(notes)

    new Formatter().joinVoices([voice]).format([voice], 300)

    voice.draw(context, stave)
  }

  useEffect(() => {
    drawSheetMusic()
  }, [noteModifiers])

  return <div id="output"></div>
}
