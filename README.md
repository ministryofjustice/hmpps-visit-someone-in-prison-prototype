# Visit Someone in Prison Prototype

Based on the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk/docs/) and hosted on the [MoJ Cloud Platform](https://user-guide.cloud-platform.service.justice.gov.uk/documentation/getting-started/prototype-kit.html).

Deployed from `main` at: https://hmpps-visit-someone-in-prison-prototype-main.apps.live.cloud-platform.service.justice.gov.uk 

(Password: `visit`)

## Local Development

### Installation
Install the prototype by checking out the repository and installing dependencies:
```
git clone git@github.com:ministryofjustice/hmpps-visit-someone-in-prison-prototype.git

cd hmpps-visit-someone-in-prison-prototype

npm install
```

### Running the prototype

Run the command ```npm run dev``` and open http://localhost:3000 in a web browser.

## Making changes
This repository is set up to require pull requests so you **cannot** commit directly to the `main` branch. Instead, you need to create a new branch to work on. When ready this can be pushed to GitHub and a pull request created.

1. Create a new local branch to work on:
```
git checkout -b my-new-designs-branch
```

2. Make changes and when done commit files:
```
# this will add all changed files
git add .

git commit -m "New designs for X"
```

3. To push the latest changes on your local branch to GitHub (n.b. this won't publish the changes; it just stores them in a branch on GitHub):
```
git push
```

4. After one or more commits, when the branch is ready to be merged into `main`, [create a new pull request](https://github.com/ministryofjustice/hmpps-visit-someone-in-prison-prototype/pulls) for the branch on GitHub.

5. Review and approve the pull request. This will trigger a workflow to publish the changes.

## Deployment
The prototype is configured to build and deploy automatically upon new commits to the `main` branch.

Once a pull request is merged the build that this triggers can be followed on the [Actions tab](https://github.com/ministryofjustice/hmpps-visit-someone-in-prison-prototype/actions). When this completes, the changes should be published.
