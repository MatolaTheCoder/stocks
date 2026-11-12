<script setup lang="ts">
import { navLinks } from '~/data/portofolio'

const left = navLinks.slice(0, 2)
const right = navLinks.slice(2)

const overHero = ref(true)
const open = ref(false)

const theme = computed(() => (overHero.value ? 'glass text-mist' : 'glass-light text-ink'))

function close() {
  open.value = false
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') close()
}

let observer: IntersectionObserver | null = null

onMounted(() => {
  window.addEventListener('keydown', onKeydown)

  const hero = document.querySelector('#topo')
  if (!hero) return
  observer = new IntersectionObserver(
    ([entry]) => {
      overHero.value = entry.isIntersecting
    },
    { rootMargin: '-80px 0px 0px 0px' },
  )
  observer.observe(hero)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  observer?.disconnect()
})
</script>

<template>
  <header class="fixed inset-x-0 top-4 z-50 flex justify-center px-4 md:top-8">
    <nav aria-label="Principal" class="relative w-full max-w-sm md:w-auto md:max-w-none">
      <!-- Computador -->
      <ul
        class="hidden items-center gap-10 rounded-full px-10 py-4 text-[17px] transition-colors duration-300 md:flex"
        :class="theme"
      >
        <li v-for="link in left" :key="link.href">
          <a :href="link.href" class="opacity-75 transition-opacity hover:opacity-100">{{ link.label }}</a>
        </li>
        <li>
          <a href="#topo" class="block" aria-label="Voltar ao início">
            <HorizonMark class="size-8" />
          </a>
        </li>
        <li v-for="link in right" :key="link.href">
          <a :href="link.href" class="opacity-75 transition-opacity hover:opacity-100">{{ link.label }}</a>
        </li>
      </ul>

      <!-- Telemóvel: barra fechada -->
      <div
        class="flex items-center justify-between rounded-full py-2.5 pr-2.5 pl-5 transition-colors duration-300 md:hidden"
        :class="theme"
      >
        <a href="#topo" class="flex items-center gap-3" @click="close">
          <HorizonMark class="size-7" />
          <span class="font-serif text-lg">Jay</span>
        </a>
        <button
          type="button"
          class="rounded-full border px-5 py-2 text-[15px]"
          :class="overHero ? 'border-white/30' : 'border-ink/15'"
          :aria-expanded="open"
          aria-controls="menu-mobile"
          @click="open = !open"
        >
          {{ open ? 'Fechar' : 'Menu' }}
        </button>
      </div>

      <!-- Telemóvel: lista que abre por baixo -->
      <ul
        v-show="open"
        id="menu-mobile"
        class="absolute inset-x-0 top-full mt-2 rounded-3xl p-2 md:hidden"
        :class="theme"
      >
        <li v-for="link in navLinks" :key="link.href">
          <a :href="link.href" class="block rounded-2xl px-4 py-3 text-lg opacity-85" @click="close">
            {{ link.label }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>