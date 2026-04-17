Create app

OAuth & Permissions: boards:write

Client-side-code -> Upload via CLI

Webstorm -> make index.html

Run commands

Features -> Create Feature -> Board View -> Start from scratch -> Development Client-side code (Paste app link in sub route)

EXPLAIN WHY USING SDK NOT API

An SDK (Software Development Kit) is basically a set of pre-built tools and functions that make it easier to interact with something complicated, in this case Monday.com.

Think of it like a remote control for Monday:

Instead of writing raw HTTP requests to Monday’s API, you just call functions like monday.api() or monday.listen().

The SDK handles authentication, sending your request, and getting the response for you.

It only works inside Monday because it relies on Monday to know who you are (your user/session) and what board you’re on.