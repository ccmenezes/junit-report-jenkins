# junit-report-jenkins

## Description
This project has a intent to run a Jenkins pipeline by script with a junit report.


## How to create a jenkins project

### Jenkins plugins
* Pipeline
* Blue Ocean

## Connecting Jenkins to Github
On this step I'll create a connection between GitHub and Jenkins making possible to access the data from Github.

### GitHub
1. Go to the right side on the top clicks on the Github user photo.
2. Select the menu option Settings.
3. On the left side go to the submenu Developer Settings.
4. On the left side clicks on Personal access token.
5. Clicks on Generate new token button.
6. Give a description - Ex. Jenkins.
7. Select the scope: [repo, admin:repo_hook].
8. Save it.
9. Before leave the page copy the token in a safe place.

_Note._ 
|Once the token is created and the page is left is not possible to have access again, then you need to exclude the current one and create a new one.|
---|

### Jenkins
