# adcirc-events

A lightweight event dispatcher.

## Usage

```javascript
// Create a dispatcher object
var car = adcirc.dispatcher();

// Define a function that will start the car
car.start = function () {
    // Let everyone know we've started the car
    car.dispatch({
        type: 'start',
        message: 'vroom vroom!'
    });
}

// When the car starts, we're going to pop up an alert message
car.on( 'start', function ( event ) {
    alert( event.message );
});

// Start the car
car.start();

```

## API Reference

The adcirc-events module provides a single function, `dispatcher`, which can either return a new dispatcher object or apply the dispatcher functionality to an existing object or function.

### Dispatcher

<a name="adcirc-dispatcher" href="#adcirc-dispatcher">#</a> *adcirc*.**dispatcher**([*object*])

Creates and returns a new dispatcher object if *object* is not provided. If *object* is provided, applies the dispatcher API to that object and returns it.

Returns the dispatcher object.

<a name="dispatcher-on" href="#dispatcher-on">#</a> *dispatcher*.**on**(*type*, *listener*)

Adds an event listener of type *type* to the dispatcher. Every time the dispatcher fires the *type* event, the *listener* callback will be called, passing the event object to that callback.

Returns the dispatcher object.

<a name="dispatcher-once" href="#dispatcher-once">#</a> *dispatcher*.**once**(*type*, *listener*)

Adds and event listener of type *type* to the dispatcher. The next time that the dispatcher fires the *type* event, the *listener* callback will be called, passing the event object to that callback. The *listener* callback is called only once and is removed from the dispatcher.

Returns the dispatcher object.

<a name="dispatcher-off" href="#dispatcher-off">#</a> *dispatcher*.**off**(*type*, *listener*)

Removes the event listener of type *type* that is associated with the callback *listener*. Will not remove event listeners of the same type that are associated with different callbacks.

Returns the dispatcher object.

<a name="dispatcher-dispatch" href="#dispatcher-dispatch">#</a> *dispatcher*.**dispatch**(*event*)

Fires the event *event*. If the *event* object has a *target* field corresponding to any event listeners contained by the dispatcher, those listeners will fire their callbacks, passing *event* as an argument.

Any event listeners added using <a href="#dispatcher-once">*dispatcher*.**once**</a> that were of type *target* will be removed from the dispatcher.

Returns the dispatcher object.