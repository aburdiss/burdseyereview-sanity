import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'aoioxcs2',
    dataset: 'production',
  },
  studioHost: 'burdseyereview',
  deployment: {
    autoUpdates: true,
  },
})
