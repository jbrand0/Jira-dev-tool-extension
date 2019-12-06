# Fix Jira

Small chrome dev extension that appends a query param to load the old jira  issue view

## Setup

1. Download project
2. Manage Chrome extensions
3. Click `Add unpacked extension` in settings
4. Choose project folder

## Usage
Activate extension by clicking on the icon and selecting checkbox.
If you're currently viewing a jira issue you'll need to refresh.

This extensions listens for url changes and appends a query param if your current url is 'atlassian.net/browse/APP'

## Todo
- Make url matching more configurable - possibly regex
- Make selecting checkbox true immediately trigger adding a param
- Suggestions welcome

## License
[MIT](https://choosealicense.com/licenses/mit/)