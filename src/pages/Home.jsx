import { onMounted, onUnmounted } from 'vue'

export default function Home() {
  const move = (e) => {
    document.documentElement.style.setProperty('--x', `${e.clientX}px`)
    document.documentElement.style.setProperty('--y', `${e.clientY}px`)
  }

  onMounted(() => {
    window.addEventListener('mousemove', move)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', move)
  })

  return (
    <div class="hover-cursor" style="padding: 24px">
      <h1>Noober Eats 🍔</h1>
      <p>Your food, delivered fast.</p>

      <div style="margin-top: 20px">
        <input placeholder="Search..." />
        <button>Search</button>
      </div>
    </div>
  )
}
