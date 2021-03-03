import { errorMessage } from '../mixins/global.js'

export const state = () => ({
  user: null,
  error: null,
  slide: null,
  planSelected: {
    id: 2,
    title: 'Plano Turbo',
    description: 'R$ 150,00 mensal',
    price: 'R$ 0,00',
    button: 'Turbinar vendas',
    image: require('@/assets/images/plans/lighting.svg'),
    stack: [
      '500 pedidos mensais',
      'Produtos ilimitados',
      'Limite $8000,00 em vendas',
      '5 promoções ativa',
    ],
  },
})

export const mutations = {
  setResponse(state, data) {
    state.response = data
  },
  setState(state, payload) {
    state[payload[0]] = payload[1]
  },
}
export const actions = {
  request({ commit }, payload) {
    const response = this.$axios[payload.method](payload.url, payload.data)
    response
      .then((value) => {
        commit('setState', { state: payload.state, data: value.data })
        commit('setState', { state: 'error', data: null })
      })
      .catch((err) => {
        errorMessage(err)
        commit('setState', { state: 'error', data: errorMessage(err) })
      })
    return response
  },
}
