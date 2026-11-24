<script setup lang="ts">
import { journey, outlook, vision } from '~/data/portofolio'
</script>

<template>
  <div class="bg-paper px-4 text-ink sm:px-6 lg:px-8">
    <div class="mx-auto w-full max-w-[1160px] divide-y divide-ink/10">
      <!-- Percurso -->
      <section id="percurso" class="scroll-mt-28 py-20 lg:py-28">
        <h2 class="font-serif text-4xl leading-tight sm:text-5xl">Percurso</h2>
        <ol class="mt-12 grid gap-10 md:grid-cols-3">
          <li v-for="step in journey" :key="step.period" class="border-t border-ink/15 pt-5">
            <p class="font-mono text-sm text-stone">{{ step.period }}</p>
            <h3 class="mt-2 font-serif text-2xl">{{ step.title }}</h3>
            <p class="mt-3 leading-relaxed text-stone">{{ step.text }}</p>
          </li>
        </ol>
      </section>

      <!-- Visão -->
      <section id="visao" class="scroll-mt-28 py-20 lg:py-28">
        <h2 class="font-serif text-4xl leading-tight sm:text-5xl">Visão</h2>
        <div class="mt-12 grid gap-8 lg:grid-cols-12">
          <p class="font-serif text-3xl leading-snug lg:col-span-7 lg:text-4xl">{{ vision.title }}</p>
          <p class="text-lg leading-relaxed text-stone lg:col-span-4 lg:col-start-9">{{ vision.text }}</p>
        </div>
      </section>

      <!-- Prospectiva -->
      <section id="prospectiva" class="scroll-mt-28 py-20 lg:py-28">
        <h2 class="font-serif text-4xl leading-tight sm:text-5xl">Prospectiva</h2>
        <ul class="mt-12 grid gap-6 md:grid-cols-3">
          <li v-for="item in outlook" :key="item.title" class="rounded-3xl bg-night p-8 text-mist">
            <h3 class="font-serif text-2xl text-white">{{ item.title }}</h3>
            <p class="mt-3 leading-relaxed text-mist/85">{{ item.text }}</p>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
