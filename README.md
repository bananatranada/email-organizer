# Email Organizer

## Intro
I apologize in advance as I have a tendency to have strong opinions on UX. I'm pretty easy going and tolerant for most things (feel free to poke fun at me), but UX is one of few things that can drive me insane.

First, I really hope that the checkbox feature is an obvious red flag that we were supposed to catch right away. Do I actually have to tell it to organize an email **AND** choose a specific folder to put in? How about simply choosing a folder? If we want to specify that an item isn't to be organized, we can simply put it down under an "Uncategorized" or "Inbox (Default)" group. That's what I did.

Second of all, this mockup is forcing users to individually choose a category for each email. Unless there's a machine learning algorithm that  categorizes emails so they're more or less already grouped for us, it's safe to assume that the user will have to update them in batches. At least for the initial use. This means updating 100 entries will require 200 clicks (1 to open the dropdown and 1 to choose a folder). However, we can cut that down by almost a half. We can select, or highlight, all the entries that we want in, say, Shopping. Then move them all in a couple of clicks. Email clients are good examples of this.

Ideally, I would have talked to someone about this prior to making these changes, but I started sort of late due to midterms and presentation preparations for my SQA class (immutable infrastructures using docker - fun!). I hope you don't mind.

Regardless, I thought it was a good exercise. If there's anything I may have missed, please leave me a comment. I'd love to know.

## Libraries
* React
* Redux
* reselect
* semantic ui

## Features
* Fuzzy searching via sender name or email
* Filter by folder name
* Add a folder (it's a bit unintuitive how semantic ui does it, but you have to type something in the dropbox; I prefer youtube's way more)
* Move selected senders to a specific folder

## If I had more time (and getting paid ^^)
* Pagination - I would probably go with pagination over infinite scroll because these aren't sorted in a particular order. Infinite scroll is mostly useful when there is greater weight on the first portion of a list (e.g., newsfeed).
* Search using suggestions - The problem with the current approach is that it's not scalable. Slack has an infamous problem where it tries to match and list every single user in a channel. This can be furiously slow in popular rooms. With suggestions, we can specify a maximum number of matches.
* Checkboxes for each row, and a master checkbox to check/uncheck everything.
* Responsive design
* Better design overall
* Add/Remove folders and update accordingly
* Order them by columns
* Add timestamp - This would be very useful since you're likely going to have to categorize newer items more.
