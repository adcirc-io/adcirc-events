var tape = require( 'tape' ),
    events = require( '../' );

var test = { type: 'test' };

tape( '.off() removes callback variable queued with .on()', function ( t ) {

    var dispatcher = events.dispatcher();
    var cb = function () {

        t.fail( '.on() still fired' );

    };

    dispatcher.on( 'test', cb );
    dispatcher.off( 'test', cb );
    dispatcher.dispatch( test );
    t.pass( '.on() did not fire' );
    t.end();

});

tape( '.off() removes callback function queued with .on()', function ( t ) {

    function cb () {
        t.fail( '.on() still fired' );
    }

    var dispatcher = events.dispatcher();
    dispatcher.on( 'test', cb );
    dispatcher.off( 'test', cb );
    dispatcher.dispatch( test );
    t.pass( '.on() did not fire' );
    t.end();

});