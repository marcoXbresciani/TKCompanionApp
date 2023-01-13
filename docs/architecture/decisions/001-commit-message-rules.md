<!--
© 2019-2023 Marco Bresciani

Copying and distribution of this file, with or without modification, are
permitted in any medium without royalty provided the copyright notice
and this notice are preserved.
This file is offered as-is, without any warranty.

SPDX-FileCopyrightText: 2019-2023 Marco Bresciani

SPDX-License-Identifier: FSFAP
-->
# 1 Commit Message Rules

## Context

Re-establishing the context of a piece of code is wasteful.
We can't avoid it completely, so our efforts should go to
[reducing it](https://www.osnews.com/story/19266/WTFs_m) [as much] as
possible.
Commit messages can do exactly that and as a result, a commit message
shows whether a developer is a good collaborator.

## Decision

Fortunately, there are well-established conventions as to what makes an
idiomatic commit message.
Indeed, many of them are assumed in the way certain commands function.
There's nothing you need to re-invent.
Just follow the
[seven rules](https://chris.beams.io/posts/git-commit/#seven-rules)
below and you're on your way to committing like a pro.

### The Seven Rules of a Great Commit Message

Keep in mind:
[This](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
[has](https://www.git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project#_commit_guidelines)
[all](https://github.com/torvalds/subsurface-for-dirk/blob/master/README.md#contributing)
[been](http://who-t.blogspot.co.at/2009/12/on-commit-messages.html)
[said](https://github.com/erlang/otp/wiki/writing-good-commit-messages)
[before](https://github.com/spring-projects/spring-framework/blob/30bce7/CONTRIBUTING.md#format-commit-messages).

1. [Separate subject from body with a blank line](https://chris.beams.io/posts/git-commit/#separate)
2. [Limit the subject line to 50 characters](https://chris.beams.io/posts/git-commit/#limit-50)
3. [Capitalize the subject line](https://chris.beams.io/posts/git-commit/#capitalize)
4. [Do not end the subject line with a period](https://chris.beams.io/posts/git-commit/#end)
5. [Use the imperative mood in the subject line](https://chris.beams.io/posts/git-commit/#imperative)
6. [Wrap the body at 72 characters](https://chris.beams.io/posts/git-commit/#wrap-72)
7. [Use the body to explain what and why vs. how](https://chris.beams.io/posts/git-commit/#why-not-how)

## Status

Accepted.

## Consequences

A properly formed commit subject line should always be able to complete
the following sentence:

If applied, this commit will `your subject line here`.

A project's long-term success rests (among other things) on its
maintainability, and a maintainer has few tools more powerful than his
project's log.
It's worth taking the time to learn how to care for one properly.
What may be a hassle at first soon becomes habit, and eventually a
source of pride and productivity for all involved.
