var tape = require( 'tape' ),
    events = require( '../' );

var test = { type: 'test' };

tape( '.on() fires event', function ( t ) {

    var dispatcher = events.dispatcher();

    dispatcher.on( 'test', function () {

        t.pass( '.on() fired' );

    });

    dispatcher.dispatch( test );

    t.end();

});

tape( '.once() events are only called once', function ( t ) {

    var dispatcher = events.dispatcher();
    var calls = 0;
    var cb = function () {

        calls += 1;

    };

    dispatcher.once( 'test', cb );
    dispatcher.dispatch( test );
    dispatcher.dispatch( test );
    t.equal( calls, 1, '.once() event only called once' );
    t.end();

});