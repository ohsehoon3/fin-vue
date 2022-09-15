import { defineStore } from 'pinia'
import axios from 'axios'

export const useWorkspaceStore = defineStore('workspace', {
  state: () => ({ // state는 함수로 객체 반환해야 함.
    
  }),
  actions: {
    readWorkspaces() {
      request({
        method: 'GET',
      })
    }
  }
})

async function request(options) {
  const { id = '', method, body } = options

  const { data } = await axios({
    url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/notion/workspaces/${id}`,
    method,
    headers: {
      'content-type': 'application/json',
      'apikey': 'FinTech202207',
      'username': 'ParkYoungWoong'
    },
    data: body
  })

  console.log(data)
}
