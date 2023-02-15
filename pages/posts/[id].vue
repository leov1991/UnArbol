<template>
  <main>

    <div v-if="post">
      <h3 class="text-3xl text-center text-green-400 underline font-medium mb-4 p-4 shadow-sm rounded">{{ post.title }}</h3>
      <md-editor
        preview-only="true"

        v-model="post.content"
      >
      </md-editor>
    </div>
  </main>
</template>

<script setup>
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
const { id } = useRoute().params

const supabase = useSupabaseClient()
const { data: post, error } = await supabase
  .from('posts')
  .select('*')
  .single('id', id)
</script>

<style scoped>

</style>
