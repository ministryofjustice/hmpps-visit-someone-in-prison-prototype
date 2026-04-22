import { configureAllowedScripts } from '@ministryofjustice/hmpps-npm-script-allowlist'

export default configureAllowedScripts({
   allowlist: {
      'node_modules/govuk-prototype-kit/node_modules/@parcel/watcher@2.5.1': 'ALLOW',
      'node_modules/govuk-prototype-kit/node_modules/fsevents@2.3.2': 'ALLOW',
      'node_modules/hmrc-frontend@7.11.0': 'ALLOW'
   },
})
