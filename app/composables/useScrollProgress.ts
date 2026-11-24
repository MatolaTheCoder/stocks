/**
 * Progresso (0 a 1) do scroll da página, em função da posição.
 * Só corre no cliente e fica a 0 com "reduzir movimento" activo.
 */
export function useScrollProgress(distance = 400) {
  const progress = ref(0)
  let frame = 0
  let reduced = false

  function update() {
    frame = 0
    progress.value = reduced ? 0 : Math.min(1, Math.max(0, window.scrollY / distance))
  }

  function onScroll() {
    if (!frame) frame = requestAnimationFrame(update)
  }

  onMounted(() => {
    reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
    if (frame) cancelAnimationFrame(frame)
  })

  return progress
}
