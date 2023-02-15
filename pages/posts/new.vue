<template>
  <main>
    <div id="editor">
      <h1 class="text-3xl font-semibold tracking-wide mt-4">
        Crear nuevo artículo
      </h1>
      <input
        name="title"
        placeholder="Título"
        v-model="post.title"
        class="border-b pl-2 pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2 h-12"
      />
      <md-editor language="en-US" v-model="post.content"></md-editor>
      <button
        type="button"
        class="mb-4 mt-4 w-full shadow-md bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 "
        @click="createPost"
      >
        CREAR
      </button>
    </div>
  </main>
</template>

<script setup >
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'

const user = useSupabaseUser()
const supabase = useSupabaseClient();

definePageMeta({
  middleware: ['auth'],
})

const post = reactive({
  title: '',
  content: '',
})

const createPost = async () => {
    if(!post.title || !post.content){
        alert("Título o contenido vacío")
        return;
    }


    const { data : result, error }  = await supabase.from('posts').insert([
        {title:post.title, content:post.content, user_id: user.value.id, user_email: user.value.email}
    ])
    if(error){
        alert(error.message)
    } else{
        console.log(result)
    }

}

</script>

<style scoped></style>
