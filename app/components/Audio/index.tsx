"use client"

import React, { useEffect, useState } from "react"

export default function Audio({
  noteModifiers,
  isMuted,
}: {
  noteModifiers: any
  isMuted: boolean
}) {
  const [isPlaying, setIsPlaying] = useState(false)

  const playNote = (note: any) => {
    let player = document.createElement("audio")
    player.controls = false

    player.src = `audio/${note.replace("#", "s")}.mp3`

    if (!isMuted) {
      player.play()
    }

    player.addEventListener("ended", function () {
      player.remove()
    })
  }

  const playSequence = (noteModifiers: any) => {
    const baseNotes = ["c", "e", "g", "b"]

    const notes = baseNotes.map((note, index) =>
      noteModifiers[index] ? note + "-" + noteModifiers[index] : null
    )

    let i = 0

    function loop() {
      setTimeout(function () {
        notes[i] && playNote(notes[i])
        i++
        if (i < notes.length) {
          loop()
        } else {
          setIsPlaying(false)
        }
      }, 500)
    }

    loop()
  }

  useEffect(() => {
    if (!isPlaying) {
      setIsPlaying(true)
      playSequence(noteModifiers)
    }
  }, [noteModifiers])

  return <div id="audio"></div>
}
