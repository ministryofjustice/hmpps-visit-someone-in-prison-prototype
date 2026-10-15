import { configureAllowedScripts } from '@ministryofjustice/hmpps-npm-script-allowlist'

export default configureAllowedScripts({
   allowlist: {
      'node_modules/fsevents@2.3.3': 'ALLOW',
      'node_modules/govuk-prototype-kit/node_modules/@parcel/watcher@2.6.0: 'ALLOW'
   },
})


