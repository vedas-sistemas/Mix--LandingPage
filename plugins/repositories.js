import createRepository from '~/api/Repository'

export default (ctx, inject) => {
  inject('repositories', createRepository(ctx.$axios))
}
