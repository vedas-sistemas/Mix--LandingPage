import Client from '~/repositories/Client'

export default ($axios) => ({
  post: Client($axios),
})
