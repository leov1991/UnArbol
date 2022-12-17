import { createClient } from '@supabase/supabase-js'

const { supabaseURL, supabaseApiKey } = useRuntimeConfig()
const supabase = createClient(supabaseURL, supabaseApiKey)

export default (_, inject) => {
  inject('supabase', supabase)
}