import { createClient } from 'next-sanity'

export const client = createClient({
  projectId:"60p6d5gm",
  dataset:"production",
  apiVersion:"v2025-01-18",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
