<script setup lang="ts">
import { contact } from '~/data/portofolio'
</script>

<template>
  <section id="contacto" class="scroll-mt-28 bg-night px-6 py-24 md:px-12 lg:px-16 lg:py-32">
    <div class="mx-auto w-full max-w-[1160px]">
      <p class="text-lg text-mist/80">Contacto</p>
      <h2 class="mt-3 max-w-3xl font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-white">
        Vamos construir algo juntos?
      </h2>

      <div class="mt-10 flex flex-wrap items-center gap-3">
        <a :href="`mailto:${contact.email}`" class="glass-button rounded-full px-8 py-4 text-[17px] text-white">
          {{ contact.email }}
        </a>
        <a
          v-for="link in contact.links"
          :key="link.href"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-full px-4 py-4 text-[17px] text-mist/80 underline-offset-4 transition-colors hover:text-white hover:underline"
        >
          {{ link.label }}
        </a>
      </div>

      <p class="mt-20 text-sm text-mist/60">© {{ new Date().getFullYear() }} Jay</p>
    </div>
  </section>
</template>
