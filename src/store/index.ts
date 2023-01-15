import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface PlayerState {
  playing: boolean
  playlist: Song[]
  currentPlay: Song
  currentPlayIndex: number
  actions: {
    setPlaying: (playing: boolean) => void
    next: () => void
    prev: () => void
    play: (song: Song) => void
    pause: () => void
  }
}

interface Song {
  src: string
  cover?: string
  name?: string
  author?: string
}

const usePlayerStore = create<PlayerState>(set => ({
  playing: false,
  playlist: [],
  currentPlay: {} as Song,
  currentPlayIndex: -1,
  actions: {
    setPlaying: playing => set({ playing }),
    next: () =>
      set(state => {
        if (state.currentPlayIndex <= state.playlist.length) {
          return {
            currentPlayIndex: state.currentPlayIndex + 1
          }
        }
        return {
          currentPlayIndex: 0
        }
      }),
    prev: () =>
      set(state => {
        if (state.currentPlayIndex <= 0) {
          return {
            currentPlayIndex: state.playlist.length - 1
          }
        }
        return {
          currentPlayIndex: state.currentPlayIndex + 1
        }
      }),
    play: song => {
      return set(state => {
        if (state.playlist.find(item => item.src === song.src)) {
          return {}
        }
        return {
          currentPlay: song,
          playing: true,
          playlist: [...state.playlist, song]
        }
      })
    },
    pause: () => set({ playing: false })
  }
}))

export const usePlaying = () => usePlayerStore(state => state.playing)

export const useCurrentPlay = () => usePlayerStore(state => state.currentPlay)

export const usePlayerActions = () => usePlayerStore(state => state.actions)

export default usePlayerStore
