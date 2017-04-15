# Email Organizer
## Goal
Organize emails to their respective categories *grouped by sender's email*. We want to do this in real-time.

## Features

#### Table
* Infinite scroll vs pagination: 100% pagination because the list of senders could be very long, and each "section" of the list is equally important because they're sorted by a generic alphabetical order! Infinite scroll makes more sense if ordered by most recent first. Even then, I prefer pagination for data-heavy views.

#### Filter
* Show all
* Filter by folder (include inbox)

#### Search sender
Although we could do it in real-time, it's not scalable if we have thousands of senders. It's better to search and refresh the table of the results. Simple and clean. What we don't want is slack's problem of populating the results in real time.

* Add a suggestions list as the user types

#### Organize
* If checked, move the email to the specified folder
* If unchecked, remain in inbox (default folder).
* **This actually isn't necessary; Just set folder to the default inbox. Drawback: You won't remember where you categorized it previously, but this is almost negligible. Still worth noting during the prototype phase.**

#### Sender
Sender of the email. Can be used to search emails by a specific sender.

#### Domain
Noop

#### Email
Noop

#### Folder
A dropdown of a list of folders the user can transfer their emails to (color coordinated)

#### Misc
* Add re-ordering of each column
* Pagination
*
