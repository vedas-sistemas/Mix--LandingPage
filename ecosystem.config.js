module.exports = {
  apps: [
    {
      name: 'landing',
      // cwd: "./food-service-admin",
      script: 'npm',
      args: 'run deploy',
      watch: false,
      ignore_watch: ['node_modules', 'dist'],
      env_production: {
        NODE_ENV: 'production',
        VUE_APP_PORT: 8083,
      },
    },
  ],
  deploy: {
    landing: {
      key: '~/.ssh/id_rsa',
      ssh_options: 'ForwardAgent=yes',
      user: 'node',
      host: 'www.mixentregas.com.br',
      ref: 'origin/master',
      repo: 'git@github.com:vedas-sistemas/Mix--LandingPage.git',
      path: '/home/node/mixentregas/Mix--LandingPage/',
      'pre-setup': '',
      'pre-deploy-local': '',
      'post-deploy':
        'yarn && pm2 startOrRestart ecosystem.config.js --env production',
    },
  },
}
