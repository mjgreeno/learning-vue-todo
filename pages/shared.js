import axios from 'axios'

export async function init ({store, redirect, isClient}) {
  if (isClient) return

  try {
    const res = await axios.get('https://todos-svefxsiulv.now.sh/todos')
    store.commit('init', res.data)
  } catch (error) {
    redirect('/error')
  }
}
