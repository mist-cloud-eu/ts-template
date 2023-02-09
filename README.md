# ts-template

Demo service for mist-cloud. 

## Explanation

For this example, we implement a system with 4 parts:

1. A client posts either a `hello` or `hola` event containing a name as its _payload_.
2. Service A listens for `hello` events and posts an `intermediate` event.
3. Service B listens for `hola` events and also posts an `intermediate` event.
4. Service C listens for `intermediate` events and posts a `reply` event.

For simplicity services A, B, and C are in the same service repository. 

* The file `rapids` define a nice interface for posting to the rapids.
* Then we have three business logic files, corresponding to each service described above; `english`, `spanish`, `interm`.
* The `app` file maps actions to code and parses the payload then calls the appropriate business logic.

## Structure

`hooks.json` 
: maps event types to 'actions'

`app.ts`
: maps 'actions' to functions, which call business logic

`businessLogic/` 
: holds code for the different business features

`airlocks/` 
: holds code for calling out of this service