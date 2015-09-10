* jquery.Jcrop.min.js v0.9.12 (build:20130202)
 * jQuery Image Cropping Plugin - released under MIT License
 * Copyright (c) 2008-2013 Tapmodo Interactive LLC
 * https://github.com/tapmodo/Jcrop
 */
 * Draggabilly v1.2.1
 * Make that shiz draggable
 * http://draggabilly.desandro.com
 * MIT license
 */
 * set options
 * @param {Object} opts
 */
 * set this.handles and bind start events to 'em
 */
 * emits events via eventEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
 * pointer start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
 * drag move
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
 * drag start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
 * drag move
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
 * drag end
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
 * classie v1.0.1
 * class helper functions
 * from bonzo https://github.com/ded/bonzo
 * MIT license
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */
 * getStyleProperty v1.0.4
 * original by kangax
 * http://perfectionkills.com/feature-testing-css-properties/
 * MIT license
 */
 * getSize v1.2.2
 * measure size of elements
 * MIT license
 */
 * setup vars and functions
 * do it on initial getSize(), rather than on script load
 * For Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
   * WebKit measures the outer-width on style.width on border-box elems
   * IE & Firefox measures the inner-width
   */
 * eventie v1.0.6
 * event binding helper
 *   eventie.bind( elem, 'click', myFn )
 *   eventie.unbind( elem, 'click', myFn )
 * MIT license
 */
 * EventEmitter v4.2.11 - git.io/ee
 * Unlicense - http://unlicense.org/
 * Oliver Caldwell - http://oli.me.uk/
 * @preserve
 */
     * Class for managing events.
     * Can be extended to provide event functionality in other classes.
     * @class EventEmitter Manages event registering and emitting.
     */
     * Finds the index of the listener for the event in its storage array.
     * @param {Function[]} listeners Array of listeners to search through.
     * @param {Function} listener Method to look for.
     * @return {Number} Index of the specified listener, -1 if not found
     * @api private
     */
     * Alias a method while keeping the context correct, to allow for overwriting of target method.
     * @param {String} name The name of the target method.
     * @return {Function} The aliased method
     * @api private
     */
     * Returns the listener array for the specified event.
     * Will initialise the event object and listener arrays if required.
     * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
     * Each property in the object response is an array of listener functions.
     * @param {String|RegExp} evt Name of the event to return the listeners from.
     * @return {Function[]|Object} All listener functions for the event.
     */
     * Takes a list of listener objects and flattens it into a list of listener functions.
     * @param {Object[]} listeners Raw listener objects.
     * @return {Function[]} Just the listener functions.
     */
     * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
     * @param {String|RegExp} evt Name of the event to return the listeners from.
     * @return {Object} All listener functions for an event in an object.
     */
     * Adds a listener function to the specified event.
     * The listener will not be added if it is a duplicate.
     * If the listener returns true then it will be removed after it is called.
     * If you pass a regular expression as the event name then the listener will be added to all events that match it.
     * @param {String|RegExp} evt Name of the event to attach the listener to.
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
     * Alias of addListener
     */
     * Semi-alias of addListener. It will add a listener that will be
     * automatically removed after its first execution.
     * @param {String|RegExp} evt Name of the event to attach the listener to.
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
     * Alias of addOnceListener.
     */
     * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
     * You need to tell it what event names should be matched by a regex.
     * @param {String} evt Name of the event to create.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
     * Uses defineEvent to define multiple events.
     * @param {String[]} evts An array of event names to define.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
     * Removes a listener function from the specified event.
     * When passed a regular expression as the event name, it will remove the listener from all events that match it.
     * @param {String|RegExp} evt Name of the event to remove the listener from.
     * @param {Function} listener Method to remove from the event.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
     * Alias of removeListener
     */
     * Adds listeners in bulk using the manipulateListeners method.
     * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
     * You can also pass it a regular expression to add the array of listeners to all events that match it.
     * Yeah, this function does quite a bit. That's probably a bad thing.
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
     * Removes listeners in bulk using the manipulateListeners method.
     * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be removed.
     * You can also pass it a regular expression to remove the listeners from all events that match it.
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to remove.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
     * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
     * The first argument will determine if the listeners are removed (true) or added (false).
     * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be added/removed.
     * You can also pass it a regular expression to manipulate the listeners of all events that match it.
     * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
     * Removes all listeners from a specified event.
     * If you do not specify an event then all listeners will be removed.
     * That means every event will be emptied.
     * You can also pass a regex to remove all events that match it.
     * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
     * Alias of removeEvent.
     * Added to mirror the node API.
     */
     * Emits an event of your choice.
     * When emitted, every listener attached to that event will be executed.
     * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
     * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
     * So they will not arrive within the array on the other side, they will be separate.
     * You can also pass a regular expression to emit to all events that match it.
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
     * @param {Array} [args] Optional array of arguments to be passed to each listener.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
     * Alias of emitEvent
     */
     * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
     * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
     * @param {...*} Optional additional arguments to be passed to each listener.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
     * Sets the current value to check against when executing listeners. If a
     * listeners return value matches the one set here then it will be removed
     * after execution. This value defaults to true.
     * @param {*} value The new value to check for when executing listeners.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
     * Fetches the current value to check against when executing listeners. If
     * the listeners return value matches this one then it should be removed
     * automatically. It will return true by default.
     * @return {*|Boolean} The current value to check for or the default, true.
     * @api private
     */
     * Fetches the events object and creates one if required.
     * @return {Object} The events storage object.
     * @api private
     */
     * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
     * @return {Function} Non conflicting EventEmitter class.
     */
 * Unipointer v1.1.0
 * base class for doing one thing with pointer event
 * MIT license
 */
 * works as unbinder, as you can ._bindStart( false ) to unbind
 * @param {Boolean} isBind - will unbind if falsey
 */
 * pointer start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
 * pointer move
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
 * pointer cancel
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
 * Unidragger v1.1.1
 * Draggable base class
 * MIT license
 */
 * works as unbinder, as you can .bindHandles( false ) to unbind
 * @param {Boolean} isBind - will unbind if falsey
 */
 * pointer start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
 * drag move
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule Dispatcher
 * @typechecks
 */
 * Dispatcher is used to broadcast payloads to registered callbacks. This is
 * different from generic pub-sub systems in two ways:
 *   1) Callbacks are not subscribed to particular events. Every payload is
 *      dispatched to every registered callback.
 *   2) Callbacks can be deferred in whole or part until other callbacks have
 *      been executed.
 * For example, consider this hypothetical flight destination form, which
 * selects a default city when a country is selected:
 *   var flightDispatcher = new Dispatcher();
 *   // Keeps track of which country is selected
 *   var CountryStore = {country: null};
 *   // Keeps track of which city is selected
 *   var CityStore = {city: null};
 *   // Keeps track of the base flight price of the selected city
 *   var FlightPriceStore = {price: null}
 * When a user changes the selected city, we dispatch the payload:
 *   flightDispatcher.dispatch({
 *     actionType: 'city-update',
 *     selectedCity: 'paris'
 *   });
 * This payload is digested by `CityStore`:
 *   flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'city-update') {
 *       CityStore.city = payload.selectedCity;
 *     }
 *   });
 * When the user selects a country, we dispatch the payload:
 *   flightDispatcher.dispatch({
 *     actionType: 'country-update',
 *     selectedCountry: 'australia'
 *   });
 * This payload is digested by both stores:
 *    CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'country-update') {
 *       CountryStore.country = payload.selectedCountry;
 *     }
 *   });
 * When the callback to update `CountryStore` is registered, we save a reference
 * to the returned token. Using this token with `waitFor()`, we can guarantee
 * that `CountryStore` is updated before the callback that updates `CityStore`
 * needs to query its data.
 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'country-update') {
 *       // `CountryStore.country` may not be updated.
 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
 *       // `CountryStore.country` is now guaranteed to be updated.
 *       // Select the default city for the new country
 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
 *     }
 *   });
 * The usage of `waitFor()` can be chained, for example:
 *   FlightPriceStore.dispatchToken =
 *     flightDispatcher.register(function(payload) {
 *       switch (payload.actionType) {
 *         case 'country-update':
 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
 *           FlightPriceStore.price =
 *             getFlightPriceStore(CountryStore.country, CityStore.city);
 *           break;
 *         case 'city-update':
 *           FlightPriceStore.price =
 *             FlightPriceStore(CountryStore.country, CityStore.city);
 *           break;
 *     }
 *   });
 * The `country-update` payload will be guaranteed to invoke the stores'
 * registered callbacks in order: `CountryStore`, `CityStore`, then
 * `FlightPriceStore`.
 */
   * Registers a callback to be invoked with every dispatched payload. Returns
   * a token that can be used with `waitFor()`.
   * @param {function} callback
   * @return {string}
   */
   * Removes a callback based on its token.
   * @param {string} id
   */
   * Waits for the callbacks specified to be invoked before continuing execution
   * of the current callback. This method should only be used by a callback in
   * response to a dispatched payload.
   * @param {array<string>} ids
   */
   * Dispatches a payload to all registered callbacks.
   * @param {object} payload
   */
   * Is this Dispatcher currently dispatching.
   * @return {boolean}
   */
   * Call the callback stored with the given id. Also do some internal
   * bookkeeping.
   * @param {string} id
   * @internal
   */
   * Set up bookkeeping needed when dispatching.
   * @param {object} payload
   * @internal
   */
   * Clear bookkeeping used for dispatching.
   * @internal
   */
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule invariant
 */
 * Use invariant() to assert state which your program assumes to be true.
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */
 * jQuery JavaScript Library v2.1.3
 * http://jquery.com/
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 * Date: 2014-12-18T15:11Z
 */
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 * Date: 2014-12-16
 */
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
			*/
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
 * Create a callback list using the following parameters:
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 * Possible options:
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *	stopOnFalse:	interrupt callings when a callback returns false
 */
 * The ready event handler and self cleanup method
 */
 * Determines whether an object can have data
 */
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
 * Also sets the responseXXX fields on the jqXHR instance
 */
		*/
 * Load a url into a page
 */
 * Gets a window from an element
 */
 * simple abstraction for dragging events names
 * */
 * get {clientX, clientY} positions of control
 * */
		 * `axis` determines which axis the draggable can move.
		 * 'both' allows movement horizontally and vertically.
		 * 'x' limits movement to horizontal axis.
		 * 'y' limits movement to vertical axis.
		 * Defaults to 'both'.
		 */
		 * `handle` specifies a selector to be used as the handle that initiates drag.
		 * Example:
		 * ```jsx
		 * 	var App = React.createClass({
		 * 	    render: function () {
		 * 	    	return (
		 * 	    	 	<Draggable handle=".handle">
		 * 	    	 	  <div>
		 * 	    	 	      <div className="handle">Click me to drag</div>
		 * 	    	 	      <div>This is some other content</div>
		 * 	    	 	  </div>
		 * 	    		</Draggable>
		 * 	    	);
		 * 	    }
		 * 	});
		 * ```
		 */
		 * `cancel` specifies a selector to be used to prevent drag initialization.
		 * Example:
		 * ```jsx
		 * 	var App = React.createClass({
		 * 	    render: function () {
		 * 	        return(
		 * 	            <Draggable cancel=".cancel">
		 * 	                <div>
		 * 	                	<div className="cancel">You can't drag from here</div>
		 *						<div>Dragging here works fine</div>
		 * 	                </div>
		 * 	            </Draggable>
		 * 	        );
		 * 	    }
		 * 	});
		 * ```
		 */
		 * `grid` specifies the x and y that dragging should snap to.
		 * Example:
		 * ```jsx
		 * 	var App = React.createClass({
		 * 	    render: function () {
		 * 	        return (
		 * 	            <Draggable grid={[25, 25]}>
		 * 	                <div>I snap to a 25 x 25 grid</div>
		 * 	            </Draggable>
		 * 	        );
		 * 	    }
		 * 	});
		 * ```
		 */
		 * `start` specifies the x and y that the dragged item should start at
		 * Example:
		 * ```jsx
		 * 	var App = React.createClass({
		 * 	    render: function () {
		 * 	        return (
		 * 	            <Draggable start={{x: 25, y: 25}}>
		 * 	                <div>I start with left: 25px; top: 25px;</div>
		 * 	            </Draggable>
		 * 	        );
		 * 	    }
		 * 	});
		 * ```
		 */
		 * `zIndex` specifies the zIndex to use while dragging.
		 * Example:
		 * ```jsx
		 * 	var App = React.createClass({
		 * 	    render: function () {
		 * 	        return (
		 * 	            <Draggable zIndex={100}>
		 * 	                <div>I have a zIndex</div>
		 * 	            </Draggable>
		 * 	        );
		 * 	    }
		 * 	});
		 * ```
		 */
		 * Called when dragging starts.
		 * Example:
		 * ```js
		 *	function (event, ui) {}
		 * ```
		 * `event` is the Event that was triggered.
		 * `ui` is an object:
		 * ```js
		 *	{
		 *		position: {top: 0, left: 0}
		 *	}
		 * ```
		 */
		 * Called while dragging.
		 * Example:
		 * ```js
		 *	function (event, ui) {}
		 * ```
		 * `event` is the Event that was triggered.
		 * `ui` is an object:
		 * ```js
		 *	{
		 *		position: {top: 0, left: 0}
		 *	}
		 * ```
		 */
		 * Called when dragging stops.
		 * Example:
		 * ```js
		 *	function (event, ui) {}
		 * ```
		 * `event` is the Event that was triggered.
		 * `ui` is an object:
		 * ```js
		 *	{
		 *		position: {top: 0, left: 0}
		 *	}
		 * ```
		 */
		 * A workaround option which can be passed if onMouseDown needs to be accessed, since it'll always be blocked (due to that there's internal use of onMouseDown)
		 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule AutoFocusMixin
 * @typechecks static-only
 */
 * Copyright 2013-2015 Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule BeforeInputEventPlugin
 * @typechecks static-only
 */
 * Opera <= 12 includes TextEvent in window, but does not fire
 * text input events. Rely on keypress instead.
 */
 * Return whether a native keypress event is assumed to be a command.
 * This is required because Firefox fires `keypress` events for key commands
 * (cut, copy, select-all, etc.) even though no character is inserted.
 */
 * Translate native top level events into event types.
 * @param {string} topLevelType
 * @return {object}
 */
 * Does our fallback best-guess model think this event signifies that
 * composition has begun?
 * @param {string} topLevelType
 * @param {object} nativeEvent
 * @return {boolean}
 */
 * Does our fallback mode think that this event is the end of composition?
 * @param {string} topLevelType
 * @param {object} nativeEvent
 * @return {boolean}
 */
 * Google Input Tools provides composition data via a CustomEvent,
 * with the `data` property populated in the `detail` object. If this
 * is available on the event object, use it. If not, this is a plain
 * composition event and we have nothing special to extract.
 * @param {object} nativeEvent
 * @return {?string}
 */
 * @param {string} topLevelType Record from `EventConstants`.
 * @param {DOMEventTarget} topLevelTarget The listening component root node.
 * @param {string} topLevelTargetID ID of `topLevelTarget`.
 * @param {object} nativeEvent Native browser event.
 * @return {?object} A SyntheticCompositionEvent.
 */
 * @param {string} topLevelType Record from `EventConstants`.
 * @param {object} nativeEvent Native browser event.
 * @return {?string} The string corresponding to this `beforeInput` event.
 */
       * If native `textInput` events are available, our goal is to make
       * use of them. However, there is a special case: the spacebar key.
       * In Webkit, preventing default on a spacebar `textInput` event
       * cancels character insertion, but it *also* causes the browser
       * to fall back to its default spacebar behavior of scrolling the
       * page.
       * Tracking at:
       * https://code.google.com/p/chromium/issues/detail?id=355103
       * To avoid this issue, use the keypress event as if no `textInput`
       * event is available.
       */
 * For browsers that do not provide the `textInput` event, extract the
 * appropriate string to use for SyntheticInputEvent.
 * @param {string} topLevelType Record from `EventConstants`.
 * @param {object} nativeEvent Native browser event.
 * @return {?string} The fallback string for this `beforeInput` event.
 */
       * As of v27, Firefox may fire keypress events even when no character
       * will be inserted. A few possibilities:
       * - `which` is `0`. Arrow keys, Esc key, etc.
       * - `which` is the pressed key code, but no char is available.
       *   Ex: 'AltGr + d` in Polish. There is no modified character for
       *   this key combination and no character is inserted into the
       *   document, but FF fires the keypress for char code `100` anyway.
       *   No `input` event will occur.
       * - `which` is the pressed key code, but a command combination is
       *   being used. Ex: `Cmd+C`. No character is inserted, and no
       *   `input` event will occur.
       */
 * Extract a SyntheticInputEvent for `beforeInput`, based on either native
 * `textInput` or fallback behavior.
 * @param {string} topLevelType Record from `EventConstants`.
 * @param {DOMEventTarget} topLevelTarget The listening component root node.
 * @param {string} topLevelTargetID ID of `topLevelTarget`.
 * @param {object} nativeEvent Native browser event.
 * @return {?object} A SyntheticInputEvent.
 */
 * Create an `onBeforeInput` event to match
 * http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/#events-inputevents.
 * This event plugin is based on the native `textInput` event
 * available in Chrome, Safari, Opera, and IE. This event fires after
 * `onKeyPress` and `onCompositionEnd`, but before `onInput`.
 * `beforeInput` is spec'd but not implemented in any browsers, and
 * the `input` event does not provide any useful information about what has
 * actually been added, contrary to the spec. Thus, `textInput` is the best
 * available event to identify the characters that have actually been inserted
 * into the target node.
 * This plugin is also responsible for emitting `composition` events, thus
 * allowing us to share composition fallback code for both `beforeInput` and
 * `composition` event types.
 */
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule CSSCore
 * @typechecks
 */
 * The CSSCore module specifies the API (and implements most of the methods)
 * that should be used when dealing with the display of elements (via their
 * CSS classes and visibility on screen. It is an API focused on mutating the
 * display and not reading it as no logical state should be encoded in the
 * display of elements.
 */
   * Adds the class passed in to the element if it doesn't already have it.
   * @param {DOMElement} element the element to set the class on
   * @param {string} className the CSS className
   * @return {DOMElement} the element passed in
   */
   * Removes the class passed in from the element
   * @param {DOMElement} element the element to set the class on
   * @param {string} className the CSS className
   * @return {DOMElement} the element passed in
   */
   * Helper to add or remove a class from an element based on a condition.
   * @param {DOMElement} element the element to set the class on
   * @param {string} className the CSS className
   * @param {*} bool condition to whether to add or remove the class
   * @return {DOMElement} the element passed in
   */
   * Tests whether the element has the class specified.
   * @param {DOMNode|DOMWindow} element the element to set the class on
   * @param {string} className the CSS className
   * @return {boolean} true if the element has the class, false if not
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule CSSProperty
 */
 * CSS properties which accept numbers but are not in units of "px".
 */
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */
 * Most style properties can be unset by doing .style[prop] = '' but IE8
 * doesn't like doing that with shorthand properties so for the properties that
 * IE8 breaks on, which are listed here, we instead unset each of the
 * individual properties. See http://bugs.jquery.com/ticket/12385.
 * The 4-value 'clock' properties like margin, padding, border-width seem to
 * behave without any problems. Curiously, list-style works too without any
 * special prodding.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule CSSPropertyOperations
 * @typechecks static-only
 */
   * @param {string} name
   * @param {*} value
   */
 * Operations for dealing with CSS properties.
 */
   * Serializes a mapping of style properties for use as inline styles:
   *   > createMarkupForStyles({width: '200px', height: 0})
   *   "width:200px;height:0;"
   * Undefined values are ignored so that declarative programming is easier.
   * The result should be HTML-escaped before insertion into the DOM.
   * @param {object} styles
   * @return {?string}
   */
   * Sets the value for multiple styles on a node.  If a value is specified as
   * '' (empty string), the corresponding style property will be unset.
   * @param {DOMElement} node
   * @param {object} styles
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule CallbackQueue
 */
 * A specialized pseudo-event module to help keep track of components waiting to
 * be notified when their DOM representations are available for use.
 * This implements `PooledClass`, so you should never need to instantiate this.
 * Instead, use `CallbackQueue.getPooled()`.
 * @class ReactMountReady
 * @implements PooledClass
 * @internal
 */
   * Enqueues a callback to be invoked when `notifyAll` is invoked.
   * @param {function} callback Invoked when `notifyAll` is invoked.
   * @param {?object} context Context to call `callback` with.
   * @internal
   */
   * Invokes all enqueued callbacks and clears the queue. This is invoked after
   * the DOM representation of a component has been created or updated.
   * @internal
   */
   * Resets the internal queue.
   * @internal
   */
   * `PooledClass` looks for this.
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ChangeEventPlugin
 */
 * For IE shims
 */
 * SECTION: handle `change` event
 */
 * SECTION: handle `input` event
 */
 * (For old IE.) Replacement getter/setter for the `value` property that gets
 * set on the active element.
 */
 * (For old IE.) Starts tracking propertychange events on the passed-in element
 * and override the value property so that we can distinguish user events from
 * value changes in JS.
 */
 * (For old IE.) Removes the event listeners from the currently-tracked element,
 * if any exists.
 */
 * (For old IE.) Handles a propertychange event, sending a `change` event if
 * the value of the active element has changed.
 */
 * If a `change` event should be fired, returns the target's ID.
 */
 * SECTION: handle `click` event
 */
 * This plugin creates an `onChange` event that normalizes change events
 * across form elements. This event fires at a time when it's possible to
 * change the element's value without seeing a flicker.
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - select
 */
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ClientReactRootIndex
 * @typechecks
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule DOMChildrenOperations
 * @typechecks static-only
 */
 * Inserts `childNode` as a child of `parentNode` at the `index`.
 * @param {DOMElement} parentNode Parent node in which to insert.
 * @param {DOMElement} childNode Child node to insert.
 * @param {number} index Index at which to insert the child.
 * @internal
 */
 * Operations for updating with DOM children.
 */
   * Updates a component's children by processing a series of updates. The
   * update configurations are each expected to have a `parentNode` property.
   * @param {array<object>} updates List of update configurations.
   * @param {array<string>} markupList List of markup strings.
   * @internal
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule DOMProperty
 * @typechecks static-only
 */
   * Mapping from normalized, camelcased property names to a configuration that
   * specifies how the associated DOM property should be accessed or rendered.
   */
   * Inject some specialized knowledge about the DOM. This takes a config object
   * with the following properties:
   * isCustomAttribute: function that given an attribute name will return true
   * if it can be inserted into the DOM verbatim. Useful for data-* or aria-*
   * attributes where it's impossible to enumerate all of the possible
   * attribute names,
   * Properties: object mapping DOM property name to one of the
   * DOMPropertyInjection constants or null. If your attribute isn't in here,
   * it won't get written to the DOM.
   * DOMAttributeNames: object mapping React attribute name to the DOM
   * attribute name. Attribute names not specified use the **lowercase**
   * normalized name.
   * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
   * Property names not specified use the normalized name.
   * DOMMutationMethods: Properties that require special mutation methods. If
   * `value` is undefined, the mutation method should unset the property.
   * @param {object} domPropertyConfig the config as described above.
   */
 * DOMProperty exports lookup objects that can be used like functions:
 *   > DOMProperty.isValid['id']
 *   true
 *   > DOMProperty.isValid['foobar']
 *   undefined
 * Although this may be confusing, it performs better in general.
 * @see http://jsperf.com/key-exists
 * @see http://jsperf.com/key-missing
 */
   * Checks whether a property name is a standard property.
   * @type {Object}
   */
   * Mapping from lowercase property names to the properly cased version, used
   * to warn in the case of missing properties.
   * @type {Object}
   */
   * Mapping from normalized names to attribute names that differ. Attribute
   * names are used when rendering markup or with `*Attribute()`.
   * @type {Object}
   */
   * Mapping from normalized names to properties on DOM node instances.
   * (This includes properties that mutate due to external factors.)
   * @type {Object}
   */
   * Mapping from normalized names to mutation methods. This will only exist if
   * mutation cannot be set simply by the property or `setAttribute()`.
   * @type {Object}
   */
   * Whether the property must be accessed and mutated as an object property.
   * @type {Object}
   */
   * Whether the property must be accessed and mutated using `*Attribute()`.
   * (This includes anything that fails `<propName> in <element>`.)
   * @type {Object}
   */
   * Whether or not setting a value causes side effects such as triggering
   * resources to be loaded or text selection changes. We must ensure that
   * the value is only set if it has changed.
   * @type {Object}
   */
   * Whether the property should be removed when set to a falsey value.
   * @type {Object}
   */
   * Whether the property must be numeric or parse as a
   * numeric and should be removed when set to a falsey value.
   * @type {Object}
   */
   * Whether the property must be positive numeric or parse as a positive
   * numeric and should be removed when set to a falsey value.
   * @type {Object}
   */
   * Whether the property can be used as a flag as well as with a value. Removed
   * when strictly equal to false; present without a value when strictly equal
   * to true; present with a value otherwise.
   * @type {Object}
   */
   * All of the isCustomAttribute() functions that have been injected.
   */
   * Checks whether a property name is a custom attribute.
   * @method
   */
   * Returns the default property value for a DOM property (i.e., not an
   * attribute). Most default values are '' or false, but not all. Worse yet,
   * some (in particular, `type`) vary depending on the type of element.
   * TODO: Is it better to grab all the possible properties when creating an
   * element to avoid having to create the same element twice?
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule DOMPropertyOperations
 * @typechecks static-only
 */
 * Operations for dealing with DOM properties.
 */
   * Creates markup for the ID property.
   * @param {string} id Unescaped ID.
   * @return {string} Markup string.
   */
   * Creates markup for a property.
   * @param {string} name
   * @param {*} value
   * @return {?string} Markup string, or null if the property was invalid.
   */
   * Sets the value for a property on a node.
   * @param {DOMElement} node
   * @param {string} name
   * @param {*} value
   */
   * Deletes the value for a property on a node.
   * @param {DOMElement} node
   * @param {string} name
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule Danger
 * @typechecks static-only
 */
 * Extracts the `nodeName` from a string of markup.
 * NOTE: Extracting the `nodeName` does not require a regular expression match
 * because we make assumptions about React-generated markup (i.e. there are no
 * spaces surrounding the opening tag and there is at least one attribute).
 * @param {string} markup String of markup.
 * @return {string} Node name of the supplied markup.
 * @see http://jsperf.com/extract-nodename
 */
   * Renders markup into an array of nodes. The markup is expected to render
   * into a list of root nodes. Also, the length of `resultList` and
   * `markupList` should be the same.
   * @param {array<string>} markupList List of markup strings to render.
   * @return {array<DOMElement>} List of rendered nodes.
   * @internal
   */
   * Replaces a node with a string of markup at its current position within its
   * parent. The markup must render into a single root node.
   * @param {DOMElement} oldChild Child node to replace.
   * @param {string} markup Markup to render in place of the child node.
   * @internal
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule DefaultEventPluginOrder
 */
 * Module that is injectable into `EventPluginHub`, that specifies a
 * deterministic ordering of `EventPlugin`s. A convenient way to reason about
 * plugins, without having to package every one of them. This is better than
 * having plugins be ordered in the same order that they are injected because
 * that ordering would be influenced by the packaging order.
 * `ResponderEventPlugin` must occur before `SimpleEventPlugin` so that
 * preventing default on events is convenient in `SimpleEventPlugin` handlers.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule EnterLeaveEventPlugin
 * @typechecks static-only
 */
   * For almost every interaction we care about, there will be both a top-level
   * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
   * we do not extract duplicate events. However, moving the mouse into the
   * browser from outside will not fire a `mouseout` event. In this case, we use
   * the `mouseover` top-level event.
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule EventConstants
 */
 * Types of raw signals from the browser caught at the top level.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * @providesModule EventListener
 * @typechecks
 */
 * Upstream version of event listener. Does not take into account specific
 * nature of platform.
 */
   * Listen to DOM events during the bubble phase.
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */
   * Listen to DOM events during the capture phase.
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule EventPluginHub
 */
 * Internal store for event listeners
 */
 * Internal queue of events that have accumulated their dispatches and are
 * waiting to have their dispatches executed.
 */
 * Dispatches an event and releases it back into the pool, unless persistent.
 * @param {?object} event Synthetic event to be dispatched.
 * @private
 */
 * - `InstanceHandle`: [required] Module that performs logical traversals of DOM
 *   hierarchy given ids of the logical DOM elements involved.
 */
 * This is a unified interface for event plugins to be installed and configured.
 * Event plugins can implement the following properties:
 *   `extractEvents` {function(string, DOMEventTarget, string, object): *}
 *     Required. When a top-level event is fired, this method is expected to
 *     extract synthetic events that will in turn be queued and dispatched.
 *   `eventTypes` {object}
 *     Optional, plugins that fire events must publish a mapping of registration
 *     names that are used to register listeners. Values of this mapping must
 *     be objects that contain `registrationName` or `phasedRegistrationNames`.
 *   `executeDispatch` {function(object, function, string)}
 *     Optional, allows plugins to override how an event gets dispatched. By
 *     default, the listener is simply invoked.
 * Each plugin that is injected into `EventsPluginHub` is immediately operable.
 * @public
 */
   * Methods for injecting dependencies.
   */
     * @param {object} InjectedMount
     * @public
     */
     * @param {object} InjectedInstanceHandle
     * @public
     */
     * @param {array} InjectedEventPluginOrder
     * @public
     */
     * @param {object} injectedNamesToPlugins Map from names to plugin modules.
     */
   * Stores `listener` at `listenerBank[registrationName][id]`. Is idempotent.
   * @param {string} id ID of the DOM element.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @param {?function} listener The callback to store.
   */
   * @param {string} id ID of the DOM element.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @return {?function} The stored callback.
   */
   * Deletes a listener from the registration bank.
   * @param {string} id ID of the DOM element.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   */
   * Deletes all listeners for the DOM element with the supplied ID.
   * @param {string} id ID of the DOM element.
   */
   * Allows registered plugins an opportunity to extract events from top-level
   * native browser events.
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @internal
   */
   * Enqueues a synthetic event that should be dispatched when
   * `processEventQueue` is invoked.
   * @param {*} events An accumulation of synthetic events.
   * @internal
   */
   * Dispatches all synthetic events on the event queue.
   * @internal
   */
   * These are needed for tests only. Do not use!
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule EventPluginRegistry
 * @typechecks static-only
 */
 * Injectable ordering of event plugins.
 */
 * Injectable mapping from names to event plugin modules.
 */
 * Recomputes the plugin list using the injected plugins and plugin ordering.
 * @private
 */
 * Publishes an event so that it can be dispatched by the supplied plugin.
 * @param {object} dispatchConfig Dispatch configuration for the event.
 * @param {object} PluginModule Plugin publishing the event.
 * @return {boolean} True if the event was successfully published.
 * @private
 */
 * Publishes a registration name that is used to identify dispatched events and
 * can be used with `EventPluginHub.putListener` to register listeners.
 * @param {string} registrationName Registration name to add.
 * @param {object} PluginModule Plugin publishing the event.
 * @private
 */
 * Registers plugins so that they can extract and dispatch events.
 * @see {EventPluginHub}
 */
   * Ordered list of injected plugins.
   */
   * Mapping from event name to dispatch config
   */
   * Mapping from registration name to plugin module
   */
   * Mapping from registration name to event name
   */
   * Injects an ordering of plugins (by plugin name). This allows the ordering
   * to be decoupled from injection of the actual plugins so that ordering is
   * always deterministic regardless of packaging, on-the-fly injection, etc.
   * @param {array} InjectedEventPluginOrder
   * @internal
   * @see {EventPluginHub.injection.injectEventPluginOrder}
   */
   * Injects plugins to be used by `EventPluginHub`. The plugin names must be
   * in the ordering injected by `injectEventPluginOrder`.
   * Plugins can be injected as part of page initialization or on-the-fly.
   * @param {object} injectedNamesToPlugins Map from names to plugin modules.
   * @internal
   * @see {EventPluginHub.injection.injectEventPluginsByName}
   */
   * Looks up the plugin for the supplied event.
   * @param {object} event A synthetic event.
   * @return {?object} The plugin that created the supplied event.
   * @internal
   */
   * Exposed for unit testing.
   * @private
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule EventPluginUtils
 */
 * Injected dependencies:
 */
 * - `Mount`: [required] Module that can convert between React dom IDs and
 *   actual node references.
 */
 * Invokes `cb(event, listener, id)`. Avoids using call if no scope is
 * provided. The `(listener,id)` pair effectively forms the "dispatch" but are
 * kept separate to conserve memory.
 */
 * Default implementation of PluginModule.executeDispatch().
 * @param {SyntheticEvent} SyntheticEvent to handle
 * @param {function} Application-level callback
 * @param {string} domID DOM id to pass to the callback.
 */
 * Standard/simple iteration through an event's collected dispatches.
 */
 * Standard/simple iteration through an event's collected dispatches, but stops
 * at the first dispatch execution returning true, and returns that id.
 * @return id of the first dispatch execution who's listener returns true, or
 * null if no listener returned true.
 */
 * @see executeDispatchesInOrderStopAtTrueImpl
 */
 * Execution of a "direct" dispatch - there must be at most one dispatch
 * accumulated on the event or it is considered an error. It doesn't really make
 * sense for an event with multiple dispatches (bubbled) to keep track of the
 * return values at each dispatch execution, but it does tend to make sense when
 * dealing with "direct" dispatches.
 * @return The return value of executing the single dispatch.
 */
 * @param {SyntheticEvent} event
 * @return {bool} True iff number of dispatches accumulated is greater than 0.
 */
 * General utilities that are useful in creating custom Event Plugins.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule EventPropagators
 */
 * Some event types have a notion of different registration names for different
 * "phases" of propagation. This finds listeners by a given phase.
 */
 * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
 * here, allows us to not have to bind or create functions for each event.
 * Mutating the event's members allows us to not have to create a wrapping
 * "dispatch" object that pairs the event with the listener.
 */
 * Collect dispatches (must be entirely collected before dispatching - see unit
 * tests). Lazily allocate the array to conserve memory.  We must loop through
 * each event and perform the traversal for each one. We can not perform a
 * single traversal for the entire collection of events because each event may
 * have a different target.
 */
 * Accumulates without regard to direction, does not look for phased
 * registration names. Same as `accumulateDirectDispatchesSingle` but without
 * requiring that the `dispatchMarker` be the same as the dispatched ID.
 */
 * Accumulates dispatches on an `SyntheticEvent`, but only for the
 * `dispatchMarker`.
 * @param {SyntheticEvent} event
 */
 * A small set of propagation patterns, each of which will accept a small amount
 * of information, and generate a set of "dispatch ready event objects" - which
 * are sets of events that have already been annotated with a set of dispatched
 * listener functions/ids. The API is designed this way to discourage these
 * propagation strategies from actually executing the dispatches, since we
 * always want to collect the entire set of dispatches before executing event a
 * single one.
 * @constructor EventPropagators
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ExecutionEnvironment
 */
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule FallbackCompositionState
 * @typechecks static-only
 */
 * This helper class stores information about text content of a target node,
 * allowing comparison of content before and after a given event.
 * Identify the node where selection currently begins, then observe
 * both its text content and its current position in the DOM. Since the
 * browser may natively replace the target node during composition, we can
 * use its position to find its replacement.
 * @param {DOMEventTarget} root
 */
   * Get current text of input.
   * @return {string}
   */
   * Determine the differing substring between the initially stored
   * text content and the current content.
   * @return {string}
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule HTMLDOMPropertyConfig
 */
     * Standard Properties
     */
     * Non-standard Properties
     */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule LinkedStateMixin
 * @typechecks static-only
 */
 * A simple mixin around ReactLink.forState().
 */
   * Create a ReactLink that's linked to part of this component's state. The
   * ReactLink will have the current value of this.state[key] and will call
   * setState() when a change is requested.
   * @param {string} key state key to update. Note: you may want to use keyOf()
   * if you're using Google Closure Compiler advanced mode.
   * @return {ReactLink} ReactLink instance linking to the state.
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule LinkedValueUtils
 * @typechecks static-only
 */
 * @param {SyntheticEvent} e change event to handle
 */
  * @param {SyntheticEvent} e change event to handle
  */
 * Provide a linked `value` attribute for controlled forms. You should not use
 * this outside of the ReactDOM controlled form components.
 */
   * @param {ReactComponent} input Form component
   * @return {*} current value of the input either from value prop or link.
   */
   * @param {ReactComponent} input Form component
   * @return {*} current checked status of the input either from checked prop
   *             or link.
   */
   * @param {ReactComponent} input Form component
   * @return {function} change callback either from onChange prop or link.
   */
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule LocalEventTrapMixin
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule MobileSafariClickEventPlugin
 * @typechecks static-only
 */
 * Mobile Safari does not fire properly bubble click events on non-interactive
 * elements, which means delegated click listeners do not fire. The workaround
 * for this bug involves attaching an empty click listener on the target node.
 * This particular plugin works around the bug by attaching an empty click
 * listener on `touchstart` (which does fire on every element).
 */
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule Object.assign
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule PooledClass
 */
 * Static poolers. Several custom versions for each potential number of
 * arguments. A completely generic pooler is easy to implement, but would
 * require accessing the `arguments` object. In each of these, `this` refers to
 * the Class itself, not an instance. If any others are needed, simply add them
 * here, or in their own files.
 */
 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
 * itself (statically) not adding any prototypical fields. Any CopyConstructor
 * you give this may have a `poolSize` property, and will look for a
 * prototypical `destructor` on instances (optional).
 * @param {Function} CopyConstructor Constructor that can be used to reset.
 * @param {Function} pooler Customizable pooler.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule React
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactBrowserComponentMixin
 */
   * Returns the DOM node rendered by this component.
   * @return {DOMElement} The root node of this component.
   * @final
   * @protected
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactBrowserEventEmitter
 * @typechecks static-only
 */
 * Summary of `ReactBrowserEventEmitter` event handling:
 *  - Top-level delegation is used to trap most native browser events. This
 *    may only occur in the main thread and is the responsibility of
 *    ReactEventListener, which is injected and can therefore support pluggable
 *    event sources. This is the only work that occurs in the main thread.
 *  - We normalize and de-duplicate events to account for browser quirks. This
 *    may be done in the worker thread.
 *  - Forward these native events (with the associated top-level type used to
 *    trap it) to `EventPluginHub`, which in turn will ask plugins if they want
 *    to extract any synthetic events.
 *  - The `EventPluginHub` will then process each event by annotating them with
 *    "dispatches", a sequence of listeners and IDs that care about that event.
 *  - The `EventPluginHub` then dispatches the events.
 * Overview of React and the event system:
 * +------------+    .
 * |    DOM     |    .
 * +------------+    .
 *       |           .
 *       v           .
 * +------------+    .
 * | ReactEvent |    .
 * |  Listener  |    .
 * +------------+    .                         +-----------+
 *       |           .               +--------+|SimpleEvent|
 *       |           .               |         |Plugin     |
 * +-----|------+    .               v         +-----------+
 * |     |      |    .    +--------------+                    +------------+
 * |     +-----------.--->|EventPluginHub|                    |    Event   |
 * |            |    .    |              |     +-----------+  | Propagators|
 * | ReactEvent |    .    |              |     |TapEvent   |  |------------|
 * |  Emitter   |    .    |              |<---+|Plugin     |  |other plugin|
 * |            |    .    |              |     +-----------+  |  utilities |
 * |     +-----------.--->|              |                    +------------+
 * |     |      |    .    +--------------+
 * +-----|------+    .                ^        +-----------+
 *       |           .                |        |Enter/Leave|
 *       +           .                +-------+|Plugin     |
 * +-------------+   .                         +-----------+
 * | application |   .
 * |-------------|   .
 * |             |   .
 * |             |   .
 * +-------------+   .
 *                   .
 *    React Core     .  General Purpose Event Plugin System
 */
 * To ensure no conflicts with other potential React instances on the page
 */
 * `ReactBrowserEventEmitter` is used to attach top-level event listeners. For
 * example:
 *   ReactBrowserEventEmitter.putListener('myID', 'onClick', myFunction);
 * This would allocate a "registration" of `('onClick', myFunction)` on 'myID'.
 * @internal
 */
   * Injectable event backend
   */
     * @param {object} ReactEventListener
     */
   * Sets whether or not any created callbacks should be enabled.
   * @param {boolean} enabled True if callbacks should be enabled.
   */
   * @return {boolean} True if callbacks are enabled.
   */
   * We listen for bubbled touch events on the document object.
   * Firefox v8.01 (and possibly others) exhibited strange behavior when
   * mounting `onmousemove` events at some node that was not the document
   * element. The symptoms were that if your mouse is not moving over something
   * contained within that mount point (for example on the background) the
   * top-level listeners for `onmousemove` won't be called. However, if you
   * register the `mousemove` on the document object, then it will of course
   * catch all `mousemove`s. This along with iOS quirks, justifies restricting
   * top-level listeners to the document object only, at least for these
   * movement types of events and possibly all events.
   * @see http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
   * Also, `keyup`/`keypress`/`keydown` do not bubble to the window on IE, but
   * they bubble to document.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @param {object} contentDocumentHandle Document which owns the container
   */
   * Listens to window scroll and resize events. We cache scroll values so that
   * application code can access them without triggering reflows.
   * NOTE: Scroll events do not bubble.
   * @see http://www.quirksmode.org/dom/events/scroll.html
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @typechecks
 * @providesModule ReactCSSTransitionGroup
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @typechecks
 * @providesModule ReactCSSTransitionGroupChild
 */
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactChildReconciler
 * @typechecks static-only
 */
 * ReactChildReconciler provides helpers for initializing or updating a set of
 * children. Its output is suitable for passing it onto ReactMultiChild which
 * does diffed reordering and insertion.
 */
   * Generates a "mount image" for each of the supplied children. In the case
   * of `ReactDOMComponent`, a mount image is a string of markup.
   * @param {?object} nestedChildNodes Nested child maps.
   * @return {?object} A set of child instances.
   * @internal
   */
   * Updates the rendered children and returns a new set of children.
   * @param {?object} prevChildren Previously initialized set of children.
   * @param {?object} nextNestedChildNodes Nested child maps.
   * @param {ReactReconcileTransaction} transaction
   * @param {object} context
   * @return {?object} A new set of child instances.
   * @internal
   */
   * Unmounts all rendered children. This should be used to clean up children
   * when this component is unmounted.
   * @param {?object} renderedChildren Previously initialized set of children.
   * @internal
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactChildren
 */
 * PooledClass representing the bookkeeping associated with performing a child
 * traversal. Allows avoiding binding callbacks.
 * @constructor ForEachBookKeeping
 * @param {!function} forEachFunction Function to perform traversal with.
 * @param {?*} forEachContext Context to perform context with.
 */
 * Iterates through children that are typically specified as `props.children`.
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc.
 * @param {*} forEachContext Context for forEachContext.
 */
 * PooledClass representing the bookkeeping associated with performing a child
 * mapping. Allows avoiding binding callbacks.
 * @constructor MapBookKeeping
 * @param {!*} mapResult Object containing the ordered map of results.
 * @param {!function} mapFunction Function to perform mapping with.
 * @param {?*} mapContext Context to perform mapping with.
 */
 * Maps children that are typically specified as `props.children`.
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 * TODO: This may likely break any calls to `ReactChildren.map` that were
 * previously relying on the fact that we guarded against null children.
 * @param {?*} children Children tree container.
 * @param {function(*, int)} mapFunction.
 * @param {*} mapContext Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
 * Count the number of children that are typically specified as
 * `props.children`.
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactClass
 */
 * Policies that describe methods in `ReactClassInterface`.
 */
   * These methods may be defined only once by the class specification or mixin.
   */
   * These methods may be defined by both the class specification and mixins.
   * Subsequent definitions will be chained. These methods must return void.
   */
   * These methods are overriding the base class.
   */
   * These methods are similar to DEFINE_MANY, except we assume they return
   * objects. We try to merge the keys of the return values of all the mixed in
   * functions. If there is a key conflict we throw.
   */
 * Composite components are higher-level components that compose other composite
 * or native components.
 * To create a new type of `ReactClass`, pass a specification of
 * your new class to `React.createClass`. The only requirement of your class
 * specification is that you implement a `render` method.
 *   var MyComponent = React.createClass({
 *     render: function() {
 *       return <div>Hello World</div>;
 *     }
 *   });
 * The class specification supports a specific protocol of methods that have
 * special meaning (e.g. `render`). See `ReactClassInterface` for
 * more the comprehensive protocol. Any other properties and methods in the
 * class specification will available on the prototype.
 * @interface ReactClassInterface
 * @internal
 */
   * An array of Mixin objects to include when defining your component.
   * @type {array}
   * @optional
   */
   * An object containing properties and methods that should be defined on
   * the component's constructor instead of its prototype (static methods).
   * @type {object}
   * @optional
   */
   * Definition of prop types for this component.
   * @type {object}
   * @optional
   */
   * Definition of context types for this component.
   * @type {object}
   * @optional
   */
   * Definition of context types this component sets for its children.
   * @type {object}
   * @optional
   */
   * Invoked when the component is mounted. Values in the mapping will be set on
   * `this.props` if that prop is not specified (i.e. using an `in` check).
   * This method is invoked before `getInitialState` and therefore cannot rely
   * on `this.state` or use `this.setState`.
   * @return {object}
   * @optional
   */
   * Invoked once before the component is mounted. The return value will be used
   * as the initial value of `this.state`.
   *   getInitialState: function() {
   *     return {
   *       isOn: false,
   *       fooBaz: new BazFoo()
   *     }
   *   }
   * @return {object}
   * @optional
   */
   * @return {object}
   * @optional
   */
   * Uses props from `this.props` and state from `this.state` to render the
   * structure of the component.
   * No guarantees are made about when or how often this method is invoked, so
   * it must not have side effects.
   *   render: function() {
   *     var name = this.props.name;
   *     return <div>Hello, {name}!</div>;
   *   }
   * @return {ReactComponent}
   * @nosideeffects
   * @required
   */
   * Invoked when the component is initially created and about to be mounted.
   * This may have side effects, but any external subscriptions or data created
   * by this method must be cleaned up in `componentWillUnmount`.
   * @optional
   */
   * Invoked when the component has been mounted and has a DOM representation.
   * However, there is no guarantee that the DOM node is in the document.
   * Use this as an opportunity to operate on the DOM when the component has
   * been mounted (initialized and rendered) for the first time.
   * @param {DOMElement} rootNode DOM element representing the component.
   * @optional
   */
   * Invoked before the component receives new props.
   * Use this as an opportunity to react to a prop transition by updating the
   * state using `this.setState`. Current props are accessed via `this.props`.
   *   componentWillReceiveProps: function(nextProps, nextContext) {
   *     this.setState({
   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
   *     });
   *   }
   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
   * transition may cause a state change, but the opposite is not true. If you
   * need it, you are probably looking for `componentWillUpdate`.
   * @param {object} nextProps
   * @optional
   */
   * Invoked while deciding if the component should be updated as a result of
   * receiving new props, state and/or context.
   * Use this as an opportunity to `return false` when you're certain that the
   * transition to the new props/state/context will not require a component
   * update.
   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
   *     return !equal(nextProps, this.props) ||
   *       !equal(nextState, this.state) ||
   *       !equal(nextContext, this.context);
   *   }
   * @param {object} nextProps
   * @param {?object} nextState
   * @param {?object} nextContext
   * @return {boolean} True if the component should update.
   * @optional
   */
   * Invoked when the component is about to update due to a transition from
   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
   * and `nextContext`.
   * Use this as an opportunity to perform preparation before an update occurs.
   * NOTE: You **cannot** use `this.setState()` in this method.
   * @param {object} nextProps
   * @param {?object} nextState
   * @param {?object} nextContext
   * @param {ReactReconcileTransaction} transaction
   * @optional
   */
   * Invoked when the component's DOM representation has been updated.
   * Use this as an opportunity to operate on the DOM when the component has
   * been updated.
   * @param {object} prevProps
   * @param {?object} prevState
   * @param {?object} prevContext
   * @param {DOMElement} rootNode DOM element representing the component.
   * @optional
   */
   * Invoked when the component is about to be removed from its parent and have
   * its DOM representation destroyed.
   * Use this as an opportunity to deallocate any external resources.
   * NOTE: There is no `componentDidUnmount` since your component will have been
   * destroyed by that point.
   * @optional
   */
   * Updates the component's currently mounted DOM representation.
   * By default, this implements React's rendering and reconciliation algorithm.
   * Sophisticated clients may wish to override this.
   * @param {ReactReconcileTransaction} transaction
   * @internal
   * @overridable
   */
 * Mapping from class specification keys to special processing functions.
 * Although these are declared like instance properties in the specification
 * when defining classes using `React.createClass`, they are actually static
 * and are accessible on the constructor instead of the prototype. Despite
 * being static, they must be defined outside of the "statics" key under
 * which all other static methods are defined.
 */
   * Special case getDefaultProps which should move into statics but requires
   * automatic merging.
   */
 * Mixin helper which handles policy validation and reserved
 * specification keys when building React classses.
 */
 * Merge two objects, but throw if both contain the same key.
 * @param {object} one The first object, which is mutated.
 * @param {object} two The second object
 * @return {object} one after it has been mutated to contain everything in two.
 */
 * Creates a function that invokes two functions and merges their return values.
 * @param {function} one Function to invoke first.
 * @param {function} two Function to invoke second.
 * @return {function} Function that invokes the two argument functions.
 * @private
 */
 * Creates a function that invokes two functions and ignores their return vales.
 * @param {function} one Function to invoke first.
 * @param {function} two Function to invoke second.
 * @return {function} Function that invokes the two argument functions.
 * @private
 */
 * Binds a method to the component.
 * @param {object} component Component whose method is going to be bound.
 * @param {function} method Method to be bound.
 * @return {function} The bound method.
 */
 * Binds all auto-bound methods in a component.
 * @param {object} component Component whose method is going to be bound.
 */
 * Add more to the ReactClass base class. These are all legacy features and
 * therefore not already part of the modern ReactComponent.
 */
   * TODO: This will be deprecated because state should always keep a consistent
   * type signature and the only use case for this, is to avoid that.
   */
   * Checks whether or not this composite component is mounted.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
   * Sets a subset of the props.
   * @param {object} partialProps Subset of the next props.
   * @param {?function} callback Called after props are updated.
   * @final
   * @public
   * @deprecated
   */
   * Replace all the props.
   * @param {object} newProps Subset of the next props.
   * @param {?function} callback Called after props are updated.
   * @final
   * @public
   * @deprecated
   */
 * Module for creating composite components.
 * @class ReactClass
 */
   * Creates a composite component class given a class specification.
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactComponent
 */
 * Base class helpers for the updating state of a component.
 */
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactComponentBrowserEnvironment
 */
 * Abstracts away all functionality of the reconciler that requires knowledge of
 * the browser context. TODO: These callers should be refactored to avoid the
 * need for this injection.
 */
   * If a particular environment requires that some resources be cleaned up,
   * specify this in the injected Mixin. In the DOM, we would likely want to
   * purge any cached node ID lookups.
   * @private
   */
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactComponentEnvironment
 */
   * Optionally injectable environment dependent cleanup hook. (server vs.
   * browser etc). Example: A browser system caches DOM nodes based on component
   * ID and must remove that cache entry when this instance is unmounted.
   */
   * Optionally injectable hook for swapping out mount images in the middle of
   * the tree.
   */
   * Optionally injectable hook for processing a queue of child updates. Will
   * later move into MultiChildComponents.
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
* @providesModule ReactComponentWithPureRenderMixin
*/
 * If your React component's render function is "pure", e.g. it will render the
 * same result given the same props and state, provide this Mixin for a
 * considerable performance boost.
 * Most React components have pure render functions.
 * Example:
 *   var ReactComponentWithPureRenderMixin =
 *     require('ReactComponentWithPureRenderMixin');
 *   React.createClass({
 *     mixins: [ReactComponentWithPureRenderMixin],
 *     render: function() {
 *       return <div className={this.props.className}>foo</div>;
 *     }
 *   });
 * Note: This only checks shallow equality for props and state. If these contain
 * complex data structures this mixin may have false-negatives for deeper
 * differences. Only mixin to components which have simple props and state, or
 * use `forceUpdate()` when you know deep data structures have changed.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactCompositeComponent
 */
 * ------------------ The Life-Cycle of a Composite Component ------------------
 * - constructor: Initialization of state. The instance is now retained.
 *   - componentWillMount
 *   - render
 *   - [children's constructors]
 *     - [children's componentWillMount and render]
 *     - [children's componentDidMount]
 *     - componentDidMount
 *       Update Phases:
 *       - componentWillReceiveProps (only called if parent updated)
 *       - shouldComponentUpdate
 *         - componentWillUpdate
 *           - render
 *           - [children's constructors or receive props phases]
 *         - componentDidUpdate
 *     - componentWillUnmount
 *     - [children's componentWillUnmount]
 *   - [children destroyed]
 * - (destroyed): The instance is now blank, released by React and ready for GC.
 * -----------------------------------------------------------------------------
 */
 * An incrementing ID assigned to each component when it is mounted. This is
 * used to enforce the order in which `ReactUpdates` updates dirty components.
 * @private
 */
 * @lends {ReactCompositeComponent.prototype}
 */
   * Base constructor for all composite component.
   * @param {ReactElement} element
   * @final
   * @internal
   */
   * Initializes the component, renders markup, and registers event listeners.
   * @param {string} rootID DOM ID of the root node.
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @return {?string} Rendered markup to be inserted into the DOM.
   * @final
   * @internal
   */
   * Releases any resources allocated by `mountComponent`.
   * @final
   * @internal
   */
   * Schedule a partial update to the props. Only used for internal testing.
   * @param {object} partialProps Subset of the next props.
   * @param {?function} callback Called after props are updated.
   * @final
   * @internal
   */
   * Filters the context object to only contain keys specified in
   * `contextTypes`
   * @param {object} context
   * @return {?object}
   * @private
   */
   * Filters the context object to only contain keys specified in
   * `contextTypes`, and asserts that they are valid.
   * @param {object} context
   * @return {?object}
   * @private
   */
   * @param {object} currentContext
   * @return {object}
   * @private
   */
   * Processes props by setting default values for unspecified props and
   * asserting that the props are valid. Does not mutate its argument; returns
   * a new props object with defaults merged in.
   * @param {object} newProps
   * @return {object}
   * @private
   */
   * Assert that the props are valid
   * @param {object} propTypes Map of prop name to a ReactPropType
   * @param {object} props
   * @param {string} location e.g. "prop", "context", "child context"
   * @private
   */
   * If any of `_pendingElement`, `_pendingStateQueue`, or `_pendingForceUpdate`
   * is set, update the component.
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */
   * Compare two contexts, warning if they are different
   * TODO: Remove this check when owner-context is removed
   */
   * Perform an update to a mounted component. The componentWillReceiveProps and
   * shouldComponentUpdate methods are called, then (assuming the update isn't
   * skipped) the remaining update lifecycle methods are called and the DOM
   * representation is updated.
   * By default, this implements React's rendering and reconciliation algorithm.
   * Sophisticated clients may wish to override this.
   * @param {ReactReconcileTransaction} transaction
   * @param {ReactElement} prevParentElement
   * @param {ReactElement} nextParentElement
   * @internal
   * @overridable
   */
   * Merges new props and state, notifies delegate methods of update and
   * performs update.
   * @param {ReactElement} nextElement Next element
   * @param {object} nextProps Next public object to set as properties.
   * @param {?object} nextState Next object to set as state.
   * @param {?object} nextContext Next public object to set as context.
   * @param {ReactReconcileTransaction} transaction
   * @param {?object} unmaskedContext
   * @private
   */
   * Call the component's `render` method and update the DOM accordingly.
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */
   * @protected
   */
   * @protected
   */
   * @private
   */
   * Lazily allocates the refs object and stores `component` as `ref`.
   * @param {string} ref Reference name.
   * @param {component} component Component to store as `ref`.
   * @final
   * @private
   */
   * Detaches a reference name.
   * @param {string} ref Name to dereference.
   * @final
   * @private
   */
   * Get a text description of the component that can be used to identify it
   * in error messages.
   * @return {string} The name or null.
   * @internal
   */
   * Get the publicly accessible representation of this component - i.e. what
   * is exposed by refs and returned by React.render. Can be null for stateless
   * components.
   * @return {ReactComponent} the public component instance.
   * @internal
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactContext
 */
 * Keeps track of the current context.
 * The context is automatically passed down the component ownership hierarchy
 * and is accessible via `this.context` on ReactCompositeComponents.
 */
   * @internal
   * @type {object}
   */
   * Temporarily extends the current context while executing scopedCallback.
   * A typical use case might look like
   *  render: function() {
   *    var children = ReactContext.withContext({foo: 'foo'}, () => (
   *    ));
   *    return <div>{children}</div>;
   *  }
   * @param {object} newContext New context to merge into the existing context
   * @param {function} scopedCallback Callback to run with the new context
   * @return {ReactComponent|array<ReactComponent>}
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactCurrentOwner
 */
 * Keeps track of the current owner.
 * The current owner is the component who should own any components that are
 * currently being constructed.
 * The depth indicate how many composite components are above this render level.
 */
   * @internal
   * @type {ReactComponent}
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactDOM
 * @typechecks static-only
 */
 * Create a factory that creates HTML tag elements.
 * @param {string} tag Tag name (e.g. `div`).
 * @private
 */
 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
 * This is also accessible via `React.DOM`.
 * @public
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactDOMButton
 */
 * Implements a <button> native component that does not receive mouse events
 * when `disabled` is set.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactDOMComponent
 * @typechecks static-only
 */
 * Optionally injectable operations for mutating the DOM
 */
 * @param {?object} props
 */
 * Creates a new React class that is idempotent and capable of containing other
 * React components. It accepts event listeners and DOM properties that are
 * valid according to `DOMProperty`.
 *  - Event listeners: `onClick`, `onMouseDown`, etc.
 *  - DOM properties: `className`, `name`, `title`, etc.
 * The `style` property functions differently from the DOM API. It accepts an
 * object mapping of style properties to values.
 * @constructor ReactDOMComponent
 * @extends ReactMultiChild
 */
   * Generates root tag markup then recurses. This method has side effects and
   * is not idempotent.
   * @internal
   * @param {string} rootID The root DOM ID for this node.
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @return {string} The computed markup.
   */
   * Creates markup for the open tag and all attributes.
   * This method has side effects because events get registered.
   * Iterating over object properties is faster than iterating over arrays.
   * @see http://jsperf.com/obj-vs-arr-iteration
   * @private
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @return {string} Markup of opening tag.
   */
   * Creates markup for the content between the tags.
   * @private
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {object} context
   * @return {string} Content markup.
   */
   * Updates a native DOM component after it has already been allocated and
   * attached to the DOM. Reconciles the root DOM node, then recurses.
   * @param {ReactReconcileTransaction} transaction
   * @param {ReactElement} prevElement
   * @param {ReactElement} nextElement
   * @internal
   * @overridable
   */
   * Reconciles the properties by detecting differences in property values and
   * updating the DOM as necessary. This function is probably the single most
   * critical path for performance optimization.
   * TODO: Benchmark whether checking for changed values in memory actually
   *       improves performance (especially statically positioned elements).
   * TODO: Benchmark the effects of putting this at the top since 99% of props
   *       do not change for a given reconciliation.
   * TODO: Benchmark areas that can be improved with caching.
   * @private
   * @param {object} lastProps
   * @param {ReactReconcileTransaction} transaction
   */
   * Reconciles the children with the various properties that affect the
   * children content.
   * @param {object} lastProps
   * @param {ReactReconcileTransaction} transaction
   */
   * Destroys all event registrations for this instance. Does not remove from
   * the DOM. That must be done by the parent.
   * @internal
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactDOMForm
 */
 * Since onSubmit doesn't bubble OR capture on the top level in IE8, we need
 * to capture it on the <form> element itself. There are lots of hacks we could
 * do to accomplish this, but the most reliable is to make <form> a
 * composite component and use `componentDidMount` to attach the event handlers.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactDOMIDOperations
 * @typechecks static-only
 */
 * Errors for properties that should not be updated with `updatePropertyById()`.
 * @type {object}
 * @private
 */
 * Operations used to process updates to DOM nodes. This is made injectable via
 * `ReactDOMComponent.BackendIDOperations`.
 */
   * Updates a DOM node with new property values. This should only be used to
   * update DOM properties in `DOMProperty`.
   * @param {string} id ID of the node to update.
   * @param {string} name A valid property name, see `DOMProperty`.
   * @param {*} value New value of the property.
   * @internal
   */
   * Updates a DOM node to remove a property. This should only be used to remove
   * DOM properties in `DOMProperty`.
   * @param {string} id ID of the node to update.
   * @param {string} name A property name to remove, see `DOMProperty`.
   * @internal
   */
   * Updates a DOM node with new style values. If a value is specified as '',
   * the corresponding style property will be unset.
   * @param {string} id ID of the node to update.
   * @param {object} styles Mapping from styles to values.
   * @internal
   */
   * Updates a DOM node's innerHTML.
   * @param {string} id ID of the node to update.
   * @param {string} html An HTML string.
   * @internal
   */
   * Updates a DOM node's text content set by `props.content`.
   * @param {string} id ID of the node to update.
   * @param {string} content Text content.
   * @internal
   */
   * Replaces a DOM node that exists in the document with markup.
   * @param {string} id ID of child to be replaced.
   * @param {string} markup Dangerous markup to inject in place of child.
   * @internal
   * @see {Danger.dangerouslyReplaceNodeWithMarkup}
   */
   * Updates a component's children by processing a series of updates.
   * @param {array<object>} updates List of update configurations.
   * @param {array<string>} markup List of markup strings.
   * @internal
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactDOMIframe
 */
 * Since onLoad doesn't bubble OR capture on the top level in IE8, we need to
 * capture it on the <iframe> element itself. There are lots of hacks we could
 * do to accomplish this, but the most reliable is to make <iframe> a composite
 * component and use `componentDidMount` to attach the event handlers.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactDOMImg
 */
 * Since onLoad doesn't bubble OR capture on the top level in IE8, we need to
 * capture it on the <img> element itself. There are lots of hacks we could do
 * to accomplish this, but the most reliable is to make <img> a composite
 * component and use `componentDidMount` to attach the event handlers.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactDOMInput
 */
 * Implements an <input> native component that allows setting these optional
 * props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
 * If `checked` or `value` are not supplied (or null/undefined), user actions
 * that affect the checked state or value will trigger updates to the element.
 * If they are supplied (and not null/undefined), the rendered element will not
 * trigger updates to the element. Instead, the props must change in order for
 * the rendered element to be updated.
 * The rendered element will be initialized as unchecked (or `defaultChecked`)
 * with an empty value (or `defaultValue`).
 * @see http://www.w3.org/TR/2012/WD-html5-20121025/the-input-element.html
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactDOMOption
 */
 * Implements an <option> native component that warns when `selected` is set.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactDOMSelect
 */
 * Validation function for `value` and `defaultValue`.
 * @private
 */
 * @param {ReactComponent} component Instance of ReactDOMSelect
 * @param {*} propValue A stringable (with `multiple`, a list of stringables).
 * @private
 */
 * Implements a <select> native component that allows optionally setting the
 * props `value` and `defaultValue`. If `multiple` is false, the prop must be a
 * stringable. If `multiple` is true, the prop must be an array of stringables.
 * If `value` is not supplied (or null/undefined), user actions that change the
 * selected option will trigger updates to the rendered options.
 * If it is supplied (and not null/undefined), the rendered options will not
 * update in response to user actions. Instead, the `value` prop must change in
 * order for the rendered options to update.
 * If `defaultValue` is provided, any options with the supplied values will be
 * selected.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactDOMSelection
 */
 * While `isCollapsed` is available on the Selection object and `collapsed`
 * is available on the Range object, IE11 sometimes gets them wrong.
 * If the anchor/focus nodes and offsets are the same, the range is collapsed.
 */
 * Get the appropriate anchor and focus node/offset pairs for IE.
 * The catch here is that IE's selection API doesn't provide information
 * about whether the selection is forward or backward, so we have to
 * behave as though it's always forward.
 * IE text differs from modern selection in that it behaves as though
 * block elements end with a new line. This means character offsets will
 * differ between the two APIs.
 * @param {DOMElement} node
 * @return {object}
 */
 * @param {DOMElement} node
 * @return {?object}
 */
 * @param {DOMElement|DOMTextNode} node
 * @param {object} offsets
 */
 * In modern non-IE browsers, we can support both forward and backward
 * selections.
 * Note: IE10+ supports the Selection object, but it does not support
 * the `extend` method, which means that even in modern IE, it's not possible
 * to programatically create a backward selection. Thus, for all IE
 * versions, we use the old IE API to create our selections.
 * @param {DOMElement|DOMTextNode} node
 * @param {object} offsets
 */
   * @param {DOMElement} node
   */
   * @param {DOMElement|DOMTextNode} node
   * @param {object} offsets
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactDOMTextComponent
 * @typechecks static-only
 */
 * Text nodes violate a couple assumptions that React makes about components:
 *  - When mounting text into the DOM, adjacent text nodes are merged.
 *  - Text nodes cannot be assigned a React root ID.
 * This component is used to wrap strings in elements so that they can undergo
 * the same reconciliation that is applied to elements.
 * TODO: Investigate representing React components in the DOM with text nodes.
 * @class ReactDOMTextComponent
 * @extends ReactComponent
 * @internal
 */
   * @param {ReactText} text
   * @internal
   */
   * Creates the markup for this text node. This node is not intended to have
   * any features besides containing text content.
   * @param {string} rootID DOM ID of the root node.
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @return {string} Markup for this text node.
   * @internal
   */
   * Updates this component by updating the text content.
   * @param {ReactText} nextText The next text content
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactDOMTextarea
 */
 * Implements a <textarea> native component that allows setting `value`, and
 * `defaultValue`. This differs from the traditional DOM API because value is
 * usually set as PCDATA children.
 * If `value` is not supplied (or null/undefined), user actions that affect the
 * value will trigger updates to the element.
 * If `value` is supplied (and not null/undefined), the rendered element will
 * not trigger updates to the element. Instead, the `value` prop must change in
 * order for the rendered element to be updated.
 * The rendered element will be initialized with an empty value, the prop
 * `defaultValue` if specified, or the children content (deprecated).
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactDefaultBatchingStrategy
 */
   * Call the provided function in a context within which calls to `setState`
   * and friends are batched such that components aren't updated unnecessarily.
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactDefaultInjection
 */
   * Inject modules for resolving DOM hierarchy and plugin ordering.
   */
   * Some important event plugins included by default (without having to require
   * them).
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactDefaultPerf
 * @typechecks static-only
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactDefaultPerfAnalysis
 */
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactElement
 */
 * Warn for mutations.
 * @internal
 * @param {object} object
 * @param {string} key
 */
 * This is updated to true if the membrane is successfully created.
 */
 * Warn for mutations.
 * @internal
 * @param {object} element
 */
 * Base constructor for all React elements. This is only used to make this
 * work with a dynamic instanceof check. Nothing should live on this prototype.
 * @param {*} type
 * @param {string|object} ref
 * @param {*} key
 * @param {*} props
 * @internal
 */
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactElementValidator
 */
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
 * Gets the instance's name for use in warnings.
 * @internal
 * @return {?string} Display name or undefined
 */
 * Gets the current owner's displayName for use in warnings.
 * @internal
 * @return {?string} Display name or undefined
 */
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it.
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
 * Warn if the key is being defined as an object property but has an incorrect
 * value.
 * @internal
 * @param {string} name Property name of the key.
 * @param {ReactElement} element Component that requires a key.
 * @param {*} parentType element's parent's type.
 */
 * Shared warning and monitoring code for the key warnings.
 * @internal
 * @param {string} message The base warning that gets output.
 * @param {ReactElement} element Component that requires a key.
 * @param {*} parentType element's parent's type.
 */
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
 * Assert that the props are valid
 * @param {string} componentName Name of the component for error messages.
 * @param {object} propTypes Map of prop name to a ReactPropType
 * @param {object} props
 * @param {string} location e.g. "prop", "context", "child context"
 * @private
 */
 * Warn about mutating props when setting `propName` on `element`.
 * @param {string} propName The string key within props that was set
 * @param {ReactElement} element
 */
 * Given an element, check if its props have been mutated since element
 * creation (or the last call to this function). In particular, check if any
 * new props have been added, which we can't directly catch by defining warning
 * properties on the props object.
 * @param {ReactElement} element
 */
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 * @param {ReactElement} element
 */
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactEmptyComponent
 */
 * Mark the component as having rendered to null.
 * @param {string} id Component's `_rootNodeID`.
 */
 * Unmark the component as having rendered to null: it renders to something now.
 * @param {string} id Component's `_rootNodeID`.
 */
 * @param {string} id Component's `_rootNodeID`.
 * @return {boolean} True if the component is rendered to null.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactErrorUtils
 * @typechecks
 */
   * Creates a guarded version of a function. This is supposed to make debugging
   * of event handlers easier. To aid debugging with the browser's debugger,
   * this currently simply returns the original function.
   * @param {function} func Function to be executed
   * @param {string} name The name of the guard
   * @return {function}
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactEventEmitterMixin
 */
   * Streams a fired top-level event to `EventPluginHub` where plugins have the
   * opportunity to create `ReactEvent`s to be dispatched.
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {object} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native environment event.
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactEventListener
 * @typechecks static-only
 */
 * Finds the parent React component of `node`.
 * @param {*} node
 * @return {?DOMEventTarget} Parent container, or `null` if the specified node
 *                           is not nested.
 */
   * Traps top-level events by using event bubbling.
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {string} handlerBaseName Event name (e.g. "click").
   * @param {object} handle Element on which to attach listener.
   * @return {object} An object with a remove function which will forcefully
   *                  remove the listener.
   * @internal
   */
   * Traps a top-level event by using event capturing.
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {string} handlerBaseName Event name (e.g. "click").
   * @param {object} handle Element on which to attach listener.
   * @return {object} An object with a remove function which will forcefully
   *                  remove the listener.
   * @internal
   */
 * Copyright 2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
* @providesModule ReactFragment
*/
 * We used to allow keyed objects to serve as a collection of ReactElements,
 * or nested sets. This allowed us a way to explicitly key a set a fragment of
 * components. This is now being replaced with an opaque data structure.
 * The upgrade path is to call React.addons.createFragment({ key: value }) to
 * create a keyed fragment. The resulting data structure is opaque, for now.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactInjection
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactInputSelection
 */
 * @ReactInputSelection: React input selection module. Based on Selection.js,
 * but modified to be suitable for react and has a couple of bug fixes (doesn't
 * assume buttons have range selections allowed).
 * Input selection module for React.
 */
   * @restoreSelection: If any selection information was potentially lost,
   * restore it. This is useful when performing operations that could remove dom
   * nodes and place them back in, resulting in focus being lost.
   */
   * @getSelection: Gets the selection bounds of a focused textarea, input or
   * contentEditable node.
   * -@input: Look up selection bounds of this input
   * -@return {start: selectionStart, end: selectionEnd}
   */
   * @setSelection: Sets the selection bounds of a textarea or input and focuses
   * the input.
   * -@input     Set selection bounds of this input or textarea
   * -@offsets   Object of same form that is returned from get*
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactInstanceHandles
 * @typechecks static-only
 */
 * Maximum depth of traversals before we consider the possibility of a bad ID.
 */
 * Creates a DOM ID prefix to use when mounting React components.
 * @param {number} index A unique integer
 * @return {string} React root ID.
 * @internal
 */
 * Checks if a character in the supplied ID is a separator or the end.
 * @param {string} id A React DOM ID.
 * @param {number} index Index of the character to check.
 * @return {boolean} True if the character is a separator or end of the ID.
 * @private
 */
 * Checks if the supplied string is a valid React DOM ID.
 * @param {string} id A React DOM ID, maybe.
 * @return {boolean} True if the string is a valid React DOM ID.
 * @private
 */
 * Checks if the first ID is an ancestor of or equal to the second ID.
 * @param {string} ancestorID
 * @param {string} descendantID
 * @return {boolean} True if `ancestorID` is an ancestor of `descendantID`.
 * @internal
 */
 * Gets the parent ID of the supplied React DOM ID, `id`.
 * @param {string} id ID of a component.
 * @return {string} ID of the parent, or an empty string.
 * @private
 */
 * Gets the next DOM ID on the tree path from the supplied `ancestorID` to the
 * supplied `destinationID`. If they are equal, the ID is returned.
 * @param {string} ancestorID ID of an ancestor node of `destinationID`.
 * @param {string} destinationID ID of the destination node.
 * @return {string} Next ID on the path from `ancestorID` to `destinationID`.
 * @private
 */
 * Gets the nearest common ancestor ID of two IDs.
 * Using this ID scheme, the nearest common ancestor ID is the longest common
 * prefix of the two IDs that immediately preceded a "marker" in both strings.
 * @param {string} oneID
 * @param {string} twoID
 * @return {string} Nearest common ancestor ID, or the empty string if none.
 * @private
 */
 * Traverses the parent path between two IDs (either up or down). The IDs must
 * not be the same, and there must exist a parent path between them. If the
 * callback returns `false`, traversal is stopped.
 * @param {?string} start ID at which to start traversal.
 * @param {?string} stop ID at which to end traversal.
 * @param {function} cb Callback to invoke each ID with.
 * @param {?boolean} skipFirst Whether or not to skip the first node.
 * @param {?boolean} skipLast Whether or not to skip the last node.
 * @private
 */
 * Manages the IDs assigned to DOM representations of React components. This
 * uses a specific scheme in order to traverse the DOM efficiently (e.g. in
 * order to simulate events).
 * @internal
 */
   * Constructs a React root ID
   * @return {string} A React root ID.
   */
   * Constructs a React ID by joining a root ID with a name.
   * @param {string} rootID Root ID of a parent component.
   * @param {string} name A component's name (as flattened children).
   * @return {string} A React ID.
   * @internal
   */
   * Gets the DOM ID of the React component that is the root of the tree that
   * contains the React component with the supplied DOM ID.
   * @param {string} id DOM ID of a React component.
   * @return {?string} DOM ID of the React component that is the root.
   * @internal
   */
   * Traverses the ID hierarchy and invokes the supplied `cb` on any IDs that
   * should would receive a `mouseEnter` or `mouseLeave` event.
   * NOTE: Does not invoke the callback on the nearest common ancestor because
   * nothing "entered" or "left" that element.
   * @param {string} leaveID ID being left.
   * @param {string} enterID ID being entered.
   * @param {function} cb Callback to invoke on each entered/left ID.
   * @param {*} upArg Argument to invoke the callback with on left IDs.
   * @param {*} downArg Argument to invoke the callback with on entered IDs.
   * @internal
   */
   * Simulates the traversal of a two-phase, capture/bubble event dispatch.
   * NOTE: This traversal happens on IDs without touching the DOM.
   * @param {string} targetID ID of the target node.
   * @param {function} cb Callback to invoke.
   * @param {*} arg Argument to invoke the callback with.
   * @internal
   */
   * Traverse a node ID, calling the supplied `cb` for each ancestor ID. For
   * example, passing `.0.$row-0.1` would result in `cb` getting called
   * with `.0`, `.0.$row-0`, and `.0.$row-0.1`.
   * NOTE: This traversal happens on IDs without touching the DOM.
   * @param {string} targetID ID of the target node.
   * @param {function} cb Callback to invoke.
   * @param {*} arg Argument to invoke the callback with.
   * @internal
   */
   * Exposed for unit testing.
   * @private
   */
   * Exposed for unit testing.
   * @private
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactInstanceMap
 */
 * `ReactInstanceMap` maintains a mapping from a public facing stateful
 * instance (key) and the internal representation (value). This allows public
 * methods to accept the user facing instance as an argument and map them back
 * to internal methods.
 */
   * This API should be called `delete` but we'd have to make sure to always
   * transform these to strings for IE support. When this transform is fully
   * supported we can rename it.
   */
 * Copyright 2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactLifeCycle
 */
 * This module manages the bookkeeping when a component is in the process
 * of being mounted or being unmounted. This is used as a way to enforce
 * invariants (or warnings) when it is not recommended to call
 * setState/forceUpdate.
 * currentlyMountingInstance: During the construction phase, it is not possible
 * to trigger an update since the instance is not fully mounted yet. However, we
 * currently allow this as a convenience for mutating the initial state.
 * currentlyUnmountingInstance: During the unmounting phase, the instance is
 * still mounted and can therefore schedule an update. However, this is not
 * recommended and probably an error since it's about to be unmounted.
 * Therefore we still want to trigger in an error for that case.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactLink
 * @typechecks static-only
 */
 * ReactLink encapsulates a common pattern in which a component wants to modify
 * a prop received from its parent. ReactLink allows the parent to pass down a
 * value coupled with a callback that, when invoked, expresses an intent to
 * modify that value. For example:
 * React.createClass({
 *   getInitialState: function() {
 *     return {value: ''};
 *   },
 *   render: function() {
 *     var valueLink = new ReactLink(this.state.value, this._handleValueChange);
 *     return <input valueLink={valueLink} />;
 *   },
 *   this._handleValueChange: function(newValue) {
 *     this.setState({value: newValue});
 *   }
 * });
 * We have provided some sugary mixins to make the creation and
 * consumption of ReactLink easier; see LinkedValueUtils and LinkedStateMixin.
 */
 * @param {*} value current value of the link
 * @param {function} requestChange callback to request a change
 */
 * Creates a PropType that enforces the ReactLink API and optionally checks the
 * type of the value being passed inside the link. Example:
 * MyComponent.propTypes = {
 *   tabIndexLink: ReactLink.PropTypes.link(React.PropTypes.number)
 * }
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactMarkupChecksum
 */
   * @param {string} markup Markup string
   * @return {string} Markup string with checksum attribute attached
   */
   * @param {string} markup to use
   * @param {DOMElement} element root React element
   * @returns {boolean} whether or not the markup is the same
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactMount
 */
 * Finds the index of the first character
 * that's not common between the two given strings.
 * @return {number} the index of the character where the strings diverge
 */
 * @param {DOMElement} container DOM element that may contain a React component.
 * @return {?string} A "reactRoot" ID, if a React component is rendered.
 */
 * Accessing node[ATTR_NAME] or calling getAttribute(ATTR_NAME) on a form
 * element can return its control whose name or ID equals ATTR_NAME. All
 * DOM nodes support `getAttributeNode` but this can also get called on
 * other objects so just return '' if we're given something other than a
 * DOM node (such as window).
 * @param {?DOMElement|DOMWindow|DOMDocument|DOMTextNode} node DOM node.
 * @return {string} ID of the supplied `domNode`.
 */
 * Sets the React-specific ID of the given node.
 * @param {DOMElement} node The DOM node whose ID will be set.
 * @param {string} id The value of the ID attribute.
 */
 * Finds the node with the supplied React-generated DOM ID.
 * @param {string} id A React-generated DOM ID.
 * @return {DOMElement} DOM node with the suppled `id`.
 * @internal
 */
 * Finds the node with the supplied public React instance.
 * @param {*} instance A public React instance.
 * @return {?DOMElement} DOM node with the suppled `id`.
 * @internal
 */
 * A node is "valid" if it is contained by a currently mounted container.
 * This means that the node does not have to be contained by a document in
 * order to be considered valid.
 * @param {?DOMElement} node The candidate DOM node.
 * @param {string} id The expected ID of the node.
 * @return {boolean} Whether the node is contained by a mounted container.
 */
 * Causes the cache to forget about one React-specific ID.
 * @param {string} id The ID to forget.
 */
 * Return the deepest cached node whose ID is a prefix of `targetID`.
 */
 * Mounts this component and inserts it into the DOM.
 * @param {ReactComponent} componentInstance The instance to mount.
 * @param {string} rootID DOM ID of the root node.
 * @param {DOMElement} container DOM element to mount into.
 * @param {ReactReconcileTransaction} transaction
 * @param {boolean} shouldReuseMarkup If true, do not insert markup
 */
 * Batched mount.
 * @param {ReactComponent} componentInstance The instance to mount.
 * @param {string} rootID DOM ID of the root node.
 * @param {DOMElement} container DOM element to mount into.
 * @param {boolean} shouldReuseMarkup If true, do not insert markup
 */
 * Mounting is the process of initializing a React component by creating its
 * representative DOM elements and inserting them into a supplied `container`.
 * Any prior content inside `container` is destroyed in the process.
 *   ReactMount.render(
 *     component,
 *     document.getElementById('container')
 *   );
 *   <div id="container">                   <-- Supplied `container`.
 *     <div data-reactid=".3">              <-- Rendered reactRoot of React
 *       // ...                                 component.
 *     </div>
 *   </div>
 * Inside of `container`, the first element rendered is the "reactRoot".
 */
   * This is a hook provided to support rendering React components while
   * ensuring that the apparent scroll position of its `container` does not
   * change.
   * @param {DOMElement} container The `container` being rendered into.
   * @param {function} renderCallback This must be called once to do the render.
   */
   * Take a component that's already mounted into the DOM and replace its props
   * @param {ReactComponent} prevComponent component instance already in the DOM
   * @param {ReactElement} nextElement component instance to render
   * @param {DOMElement} container container to render into
   * @param {?function} callback function triggered on completion
   */
   * Register a component into the instance map and starts scroll value
   * monitoring
   * @param {ReactComponent} nextComponent component instance to render
   * @param {DOMElement} container container to render into
   * @return {string} reactRoot ID prefix
   */
   * Render a new component into the DOM.
   * @param {ReactElement} nextElement element to render
   * @param {DOMElement} container container to render into
   * @param {boolean} shouldReuseMarkup if we should skip the markup insertion
   * @return {ReactComponent} nextComponent
   */
   * Renders a React component into the DOM in the supplied `container`.
   * If the React component was previously rendered into `container`, this will
   * perform an update on it and only mutate the DOM as necessary to reflect the
   * latest React component.
   * @param {ReactElement} nextElement Component element to render.
   * @param {DOMElement} container DOM element to render into.
   * @param {?function} callback function triggered on completion
   * @return {ReactComponent} Component instance rendered in `container`.
   */
   * Constructs a component instance of `constructor` with `initialProps` and
   * renders it into the supplied `container`.
   * @param {function} constructor React component constructor.
   * @param {?object} props Initial props of the component instance.
   * @param {DOMElement} container DOM element to render into.
   * @return {ReactComponent} Component instance rendered in `container`.
   */
   * Constructs a component instance of `constructor` with `initialProps` and
   * renders it into a container node identified by supplied `id`.
   * @param {function} componentConstructor React component constructor
   * @param {?object} props Initial props of the component instance.
   * @param {string} id ID of the DOM element to render into.
   * @return {ReactComponent} Component instance rendered in the container node.
   */
   * Registers a container node into which React components will be rendered.
   * This also creates the "reactRoot" ID that will be assigned to the element
   * rendered within.
   * @param {DOMElement} container DOM element to register as a container.
   * @return {string} The "reactRoot" ID of elements rendered within.
   */
   * Unmounts and destroys the React component rendered in the `container`.
   * @param {DOMElement} container DOM element containing a React component.
   * @return {boolean} True if a component was found in and unmounted from
   *                   `container`
   */
   * Unmounts a component and removes it from the DOM.
   * @param {ReactComponent} instance React component instance.
   * @param {DOMElement} container DOM element to unmount from.
   * @final
   * @internal
   * @see {ReactMount.unmountComponentAtNode}
   */
   * Finds the container DOM element that contains React component to which the
   * supplied DOM `id` belongs.
   * @param {string} id The ID of an element rendered by a React component.
   * @return {?DOMElement} DOM element that contains the `id`.
   */
   * Finds an element rendered by React with the supplied ID.
   * @param {string} id ID of a DOM node in the React component.
   * @return {DOMElement} Root DOM node of the React component.
   */
   * True if the supplied `node` is rendered by React.
   * @param {*} node DOM Element to check.
   * @return {boolean} True if the DOM Element appears to be rendered by React.
   * @internal
   */
   * Traverses up the ancestors of the supplied node to find a node that is a
   * DOM representation of a React component.
   * @param {*} node
   * @return {?DOMEventTarget}
   * @internal
   */
   * Finds a node with the supplied `targetID` inside of the supplied
   * `ancestorNode`.  Exploits the ID naming scheme to perform the search
   * quickly.
   * @param {DOMEventTarget} ancestorNode Search from this root.
   * @pararm {string} targetID ID of the DOM representation of the component.
   * @return {DOMEventTarget} DOM node with the supplied `targetID`.
   * @internal
   */
   * React ID utilities.
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactMultiChild
 * @typechecks static-only
 */
 * Updating children of a component may trigger recursive updates. The depth is
 * used to batch recursive updates to render markup more efficiently.
 * @type {number}
 * @private
 */
 * Queue of update configuration objects.
 * Each object has a `type` property that is in `ReactMultiChildUpdateTypes`.
 * @type {array<object>}
 * @private
 */
 * Queue of markup to be rendered.
 * @type {array<string>}
 * @private
 */
 * Enqueues markup to be rendered and inserted at a supplied index.
 * @param {string} parentID ID of the parent component.
 * @param {string} markup Markup that renders into an element.
 * @param {number} toIndex Destination index.
 * @private
 */
 * Enqueues moving an existing element to another index.
 * @param {string} parentID ID of the parent component.
 * @param {number} fromIndex Source index of the existing element.
 * @param {number} toIndex Destination index of the element.
 * @private
 */
 * Enqueues removing an element at an index.
 * @param {string} parentID ID of the parent component.
 * @param {number} fromIndex Index of the element to remove.
 * @private
 */
 * Enqueues setting the text content.
 * @param {string} parentID ID of the parent component.
 * @param {string} textContent Text content to set.
 * @private
 */
 * Processes any enqueued updates.
 * @private
 */
 * Clears any enqueued updates.
 * @private
 */
 * ReactMultiChild are capable of reconciling multiple children.
 * @class ReactMultiChild
 * @internal
 */
   * Provides common functionality for components that must reconcile multiple
   * children. This is used by `ReactDOMComponent` to mount, update, and
   * unmount child components.
   * @lends {ReactMultiChild.prototype}
   */
     * Generates a "mount image" for each of the supplied children. In the case
     * of `ReactDOMComponent`, a mount image is a string of markup.
     * @param {?object} nestedChildren Nested child maps.
     * @return {array} An array of mounted representations.
     * @internal
     */
     * Replaces any rendered children with a text content string.
     * @param {string} nextContent String of content.
     * @internal
     */
     * Updates the rendered children with new children.
     * @param {?object} nextNestedChildren Nested child maps.
     * @param {ReactReconcileTransaction} transaction
     * @internal
     */
     * Improve performance by isolating this hot code path from the try/catch
     * block in `updateChildren`.
     * @param {?object} nextNestedChildren Nested child maps.
     * @param {ReactReconcileTransaction} transaction
     * @final
     * @protected
     */
     * Unmounts all rendered children. This should be used to clean up children
     * when this component is unmounted.
     * @internal
     */
     * Moves a child component to the supplied index.
     * @param {ReactComponent} child Component to move.
     * @param {number} toIndex Destination index of the element.
     * @param {number} lastIndex Last index visited of the siblings of `child`.
     * @protected
     */
     * Creates a child component.
     * @param {ReactComponent} child Component to create.
     * @param {string} mountImage Markup to insert.
     * @protected
     */
     * Removes a child component.
     * @param {ReactComponent} child Child to remove.
     * @protected
     */
     * Sets this text content string.
     * @param {string} textContent Text content to set.
     * @protected
     */
     * Mounts a child with the supplied name.
     * NOTE: This is part of `updateChildren` and is here for readability.
     * @param {ReactComponent} child Component to mount.
     * @param {string} name Name of the child.
     * @param {number} index Index at which to insert the child.
     * @param {ReactReconcileTransaction} transaction
     * @private
     */
     * Unmounts a rendered child by name.
     * NOTE: This is part of `updateChildren` and is here for readability.
     * @param {ReactComponent} child Component to unmount.
     * @param {string} name Name of the child in `this._renderedChildren`.
     * @private
     */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactMultiChildUpdateTypes
 */
 * When a component's children are updated, a series of update configuration
 * objects are created in order to batch and serialize the required changes.
 * Enumerates all the possible types of update configurations.
 * @internal
 */
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactNativeComponent
 */
 * Get a composite component wrapper class for a specific tag.
 * @param {ReactElement} element The tag for which to get the class.
 * @return {function} The React class constructor function.
 */
 * Get a native internal component class for a specific tag.
 * @param {ReactElement} element The element to create.
 * @return {function} The internal class constructor function.
 */
 * @param {ReactText} text
 * @return {ReactComponent}
 */
 * @param {ReactComponent} component
 * @return {boolean}
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactOwner
 */
 * ReactOwners are capable of storing references to owned components.
 * All components are capable of //being// referenced by owner components, but
 * only ReactOwner components are capable of //referencing// owned components.
 * The named reference is known as a "ref".
 * Refs are available when mounted and updated during reconciliation.
 *   var MyComponent = React.createClass({
 *     render: function() {
 *       return (
 *         <div onClick={this.handleClick}>
 *           <CustomComponent ref="custom" />
 *         </div>
 *       );
 *     },
 *     handleClick: function() {
 *       this.refs.custom.handleClick();
 *     },
 *     componentDidMount: function() {
 *       this.refs.custom.initialize();
 *     }
 *   });
 * Refs should rarely be used. When refs are used, they should only be done to
 * control data that is not handled by React's data flow.
 * @class ReactOwner
 */
   * @param {?object} object
   * @return {boolean} True if `object` is a valid owner.
   * @final
   */
   * Adds a component by ref to an owner component.
   * @param {ReactComponent} component Component to reference.
   * @param {string} ref Name by which to refer to the component.
   * @param {ReactOwner} owner Component on which to record the ref.
   * @final
   * @internal
   */
   * Removes a component by ref from an owner component.
   * @param {ReactComponent} component Component to dereference.
   * @param {string} ref Name of the ref to remove.
   * @param {ReactOwner} owner Component on which the ref is recorded.
   * @final
   * @internal
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactPerf
 * @typechecks static-only
 */
 * ReactPerf is a general AOP system designed to measure performance. This
 * module only has the hooks: see ReactDefaultPerf for the analysis tool.
 */
   * Boolean to enable/disable measurement. Set to false by default to prevent
   * accidental logging and perf loss.
   */
   * Holds onto the measure function in use. By default, don't measure
   * anything, but we'll override this if we inject a measure function.
   */
   * @param {object} object
   * @param {string} objectName
   * @param {object<string>} methodNames
   */
   * Use this to wrap methods you want to measure. Zero overhead in production.
   * @param {string} objName
   * @param {string} fnName
   * @param {function} func
   * @return {function}
   */
     * @param {function} measure
     */
 * Simply passes through the measured function, without measuring it.
 * @param {string} objName
 * @param {string} fnName
 * @param {function} func
 * @return {function}
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactPropTransferer
 */
 * Creates a transfer strategy that will merge prop values using the supplied
 * `mergeStrategy`. If a prop was previously unset, this just sets it.
 * @param {function} mergeStrategy
 * @return {function}
 */
 * Transfer strategies dictate how props are transferred by `transferPropsTo`.
 * NOTE: if you add any more exceptions to this list you should be sure to
 * update `cloneWithProps()` accordingly.
 */
   * Never transfer `children`.
   */
   * Transfer the `className` prop by merging them.
   */
   * Transfer the `style` prop (which is an object) by merging them.
   */
 * Mutates the first argument by transferring the properties from the second
 * argument.
 * @param {object} props
 * @param {object} newProps
 * @return {object}
 */
 * ReactPropTransferer are capable of transferring props to another component
 * using a `transferPropsTo` method.
 * @class ReactPropTransferer
 */
   * Merge two props objects using TransferStrategies.
   * @param {object} oldProps original props (they take precedence)
   * @param {object} newProps new props to merge in
   * @return {object} a new object containing both sets of props merged.
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactPropTypeLocationNames
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactPropTypeLocations
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactPropTypes
 */
 * Collection of methods that allow declaration and validation of props that are
 * supplied to React components. Example usage:
 *   var Props = require('ReactPropTypes');
 *   var MyArticle = React.createClass({
 *     propTypes: {
 *       // An optional string prop named "description".
 *       description: Props.string,
 *       // A required enum prop named "category".
 *       category: Props.oneOf(['News','Photos']).isRequired,
 *       // A prop named "dialog" that requires an instance of Dialog.
 *       dialog: Props.instanceOf(Dialog).isRequired
 *     },
 *     render: function() { ... }
 *   });
 * A more formal specification of how these methods are used:
 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
 *   decl := ReactPropTypes.{type}(.isRequired)?
 * Each and every declaration produces a function with the same signature. This
 * allows the creation of custom validation functions. For example:
 *  var MyLink = React.createClass({
 *    propTypes: {
 *      // An optional string or URI prop named "href".
 *      href: function(props, propName, componentName) {
 *        var propValue = props[propName];
 *        if (propValue != null && typeof propValue !== 'string' &&
 *            !(propValue instanceof URI)) {
 *          return new Error(
 *            'Expected a string or an URI for ' + propName + ' in ' +
 *            componentName
 *          );
 *        }
 *      }
 *    },
 *    render: function() {...}
 *  });
 * @internal
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactPutListenerQueue
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactReconcileTransaction
 * @typechecks static-only
 */
 * Ensures that, when possible, the selection range (currently selected text
 * input) is not disturbed by performing the transaction.
 */
   * @return {Selection} Selection information.
   */
   * @param {Selection} sel Selection information returned from `initialize`.
   */
 * Suppresses events (blur/focus) that could be inadvertently dispatched due to
 * high level DOM manipulations (like temporarily removing a text input from the
 * DOM).
 */
   * @return {boolean} The enabled status of `ReactBrowserEventEmitter` before
   * the reconciliation.
   */
   * @param {boolean} previouslyEnabled Enabled status of
   *   `ReactBrowserEventEmitter` before the reconciliation occured. `close`
   *   restores the previous value.
   */
 * Provides a queue for collecting `componentDidMount` and
 * `componentDidUpdate` callbacks during the the transaction.
 */
   * Initializes the internal `onDOMReady` queue.
   */
   * After DOM is flushed, invoke all registered `onDOMReady` callbacks.
   */
 * Executed within the scope of the `Transaction` instance. Consider these as
 * being member methods, but with an implied ordering while being isolated from
 * each other.
 */
 * Currently:
 * - The order that these are listed in the transaction is critical:
 * - Suppresses events.
 * - Restores selection range.
 * Future:
 * - Restore document/overflow scroll positions that were unintentionally
 *   modified via DOM insertions above the top viewport boundary.
 * - Implement/integrate with customized constraint based layout system and keep
 *   track of which dimensions must be remeasured.
 * @class ReactReconcileTransaction
 */
   * @see Transaction
   * @abstract
   * @final
   * @return {array<object>} List of operation wrap proceedures.
   *   TODO: convert to array<TransactionWrapper>
   */
   * @return {object} The queue to collect `onDOMReady` callbacks with.
   */
   * `PooledClass` looks for this, and will invoke this before allowing this
   * instance to be resused.
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactReconciler
 */
 * Helper to call ReactRef.attachRefs with this composite component, split out
 * to avoid allocations in the transaction mount-ready queue.
 */
   * Initializes the component, renders markup, and registers event listeners.
   * @param {ReactComponent} internalInstance
   * @param {string} rootID DOM ID of the root node.
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @return {?string} Rendered markup to be inserted into the DOM.
   * @final
   * @internal
   */
   * Releases any resources allocated by `mountComponent`.
   * @final
   * @internal
   */
   * Update a component using a new element.
   * @param {ReactComponent} internalInstance
   * @param {ReactElement} nextElement
   * @param {ReactReconcileTransaction} transaction
   * @param {object} context
   * @internal
   */
   * Flush any dirty changes in a component.
   * @param {ReactComponent} internalInstance
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactRef
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactRootIndex
 * @typechecks
 */
   * @param {function} _createReactRootIndex
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @typechecks static-only
 * @providesModule ReactServerRendering
 */
 * @param {ReactElement} element
 * @return {string} the HTML markup
 */
 * @param {ReactElement} element
 * @return {string} the HTML markup, without the extra React ID and checksum
 * (for generating static pages)
 */
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactServerRenderingTransaction
 * @typechecks
 */
 * Provides a `CallbackQueue` queue for collecting `onDOMReady` callbacks
 * during the performing of the transaction.
 */
   * Initializes the internal `onDOMReady` queue.
   */
 * Executed within the scope of the `Transaction` instance. Consider these as
 * being member methods, but with an implied ordering while being isolated from
 * each other.
 */
 * @class ReactServerRenderingTransaction
 * @param {boolean} renderToStaticMarkup
 */
   * @see Transaction
   * @abstract
   * @final
   * @return {array} Empty list of operation wrap proceedures.
   */
   * @return {object} The queue to collect `onDOMReady` callbacks with.
   */
   * `PooledClass` looks for this, and will invoke this before allowing this
   * instance to be resused.
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactStateSetters
 */
   * Returns a function that calls the provided function, and uses the result
   * of that to set the component's state.
   * @param {ReactCompositeComponent} component
   * @param {function} funcReturningState Returned callback uses this to
   *                                      determine how to update state.
   * @return {function} callback that when invoked uses funcReturningState to
   *                    determined the object literal to setState.
   */
   * Returns a single-argument callback that can be used to update a single
   * key in the component's state.
   * Note: this is memoized function, which makes it inexpensive to call.
   * @param {ReactCompositeComponent} component
   * @param {string} key The key in the state that you should update.
   * @return {function} callback of 1 argument which calls setState() with
   *                    the provided keyName and callback argument.
   */
   * Returns a function that calls the provided function, and uses the result
   * of that to set the component's state.
   * For example, these statements are equivalent:
   *   this.setState({x: 1});
   *   this.createStateSetter(function(xValue) {
   *     return {x: xValue};
   *   })(1);
   * @param {function} funcReturningState Returned callback uses this to
   *                                      determine how to update state.
   * @return {function} callback that when invoked uses funcReturningState to
   *                    determined the object literal to setState.
   */
   * Returns a single-argument callback that can be used to update a single
   * key in the component's state.
   * For example, these statements are equivalent:
   *   this.setState({x: 1});
   *   this.createStateKeySetter('x')(1);
   * Note: this is memoized function, which makes it inexpensive to call.
   * @param {string} key The key in the state that you should update.
   * @return {function} callback of 1 argument which calls setState() with
   *                    the provided keyName and callback argument.
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactTestUtils
 */
 * @class ReactTestUtils
 */
 * Todo: Support the entire DOM.scry query syntax. For now, these simple
 * utilities will suffice for testing purposes.
 * @lends ReactTestUtils
 */
   * Finds all instance of components in the rendered tree that are DOM
   * components with the class name matching `className`.
   * @return an array of all the matches.
   */
   * Like scryRenderedDOMComponentsWithClass but expects there to be one result,
   * and returns that one result, or throws exception if there is any other
   * number of matches besides one.
   * @return {!ReactDOMComponent} The one match.
   */
   * Finds all instance of components in the rendered tree that are DOM
   * components with the tag name matching `tagName`.
   * @return an array of all the matches.
   */
   * Like scryRenderedDOMComponentsWithTag but expects there to be one result,
   * and returns that one result, or throws exception if there is any other
   * number of matches besides one.
   * @return {!ReactDOMComponent} The one match.
   */
   * Finds all instances of components with type equal to `componentType`.
   * @return an array of all the matches.
   */
   * Same as `scryRenderedComponentsWithType` but expects there to be one result
   * and returns that one result, or throws exception if there is any other
   * number of matches besides one.
   * @return {!ReactComponent} The one match.
   */
   * Pass a mocked component module to this method to augment it with
   * useful methods that allow it to be used as a dummy React component.
   * Instead of rendering as usual, the component will become a simple
   * <div> containing any provided children.
   * @param {object} module the mock function object exported from a
   *                        module that defines the component to be mocked
   * @param {?string} mockTagName optional dummy root tag name to return
   *                              from render method (overrides
   *                              module.mockTagName if provided)
   * @return {object} the ReactTestUtils object (for chaining)
   */
   * Simulates a top level event being dispatched from a raw event that occured
   * on an `Element` node.
   * @param topLevelType {Object} A type from `EventConstants.topLevelTypes`
   * @param {!Element} node The dom to simulate an event occurring on.
   * @param {?Event} fakeNativeEvent Fake native event to use in SyntheticEvent.
   */
   * Simulates a top level event being dispatched from a raw event that occured
   * on the `ReactDOMComponent` `comp`.
   * @param topLevelType {Object} A type from `EventConstants.topLevelTypes`.
   * @param comp {!ReactDOMComponent}
   * @param {?Event} fakeNativeEvent Fake native event to use in SyntheticEvent.
   */
 * @class ReactShallowRenderer
 */
 * Exports:
 * - `ReactTestUtils.Simulate.click(Element/ReactDOMComponent)`
 * - `ReactTestUtils.Simulate.mouseMove(Element/ReactDOMComponent)`
 * - `ReactTestUtils.Simulate.change(Element/ReactDOMComponent)`
 * - ... (All keys from event plugin `eventTypes` objects)
 */
     * @param {!Element || ReactDOMComponent} domComponentOrNode
     * @param {?object} eventData Fake event data to use in SyntheticEvent.
     */
 * Exports:
 * - `ReactTestUtils.SimulateNative.click(Element/ReactDOMComponent)`
 * - `ReactTestUtils.SimulateNative.mouseMove(Element/ReactDOMComponent)`
 * - `ReactTestUtils.SimulateNative.mouseIn/ReactDOMComponent)`
 * - `ReactTestUtils.SimulateNative.mouseOut(Element/ReactDOMComponent)`
 * - ... (All keys from `EventConstants.topLevelTypes`)
 * Note: Top level event types are a subset of the entire set of handler types
 * (which include a broader set of "synthetic" events). For example, onDragDone
 * is a synthetic event. Except when testing an event plugin or React's event
 * handling code specifically, you probably want to use ReactTestUtils.Simulate
 * to dispatch synthetic events.
 */
   * @param {!Element || ReactDOMComponent} domComponentOrNode
   * @param {?Event} nativeEventData Fake native event to use in SyntheticEvent.
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @typechecks static-only
 * @providesModule ReactTransitionChildMapping
 */
   * Given `this.props.children`, return an object mapping key to child. Just
   * simple syntactic sugar around ReactChildren.map().
   * @param {*} children `this.props.children`
   * @return {object} Mapping of key to child
   */
   * When you're adding or removing children some may be added or removed in the
   * same render pass. We want to show *both* since we want to simultaneously
   * animate elements in and out. This function takes a previous set of keys
   * and a new set of keys and merges them with its best guess of the correct
   * ordering. In the future we may expose some of the utilities in
   * ReactMultiChild to make this easy, but for now React itself does not
   * directly have this concept of the union of prevChildren and nextChildren
   * so we implement it here.
   * @param {object} prev prev children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @param {object} next next children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @return {object} a key set that contains all keys in `prev` and all keys
   * in `next` in a reasonable order.
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactTransitionEvents
 */
 * EVENT_NAME_MAP is used to determine which event fired when a
 * transition/animation ends, based on the style property used to
 * define that event.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactTransitionGroup
 */
 * Copyright 2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactUpdateQueue
 */
 * ReactUpdateQueue allows for state updates to be scheduled into a later
 * reconciliation step.
 */
   * Enqueue a callback that will be executed after all the pending updates
   * have processed.
   * @param {ReactClass} publicInstance The instance to use as `this` context.
   * @param {?function} callback Called after state is updated.
   * @internal
   */
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   * This will not invoke `shouldUpdateComponent`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @internal
   */
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @internal
   */
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @internal
   */
   * Sets a subset of the props.
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialProps Subset of the next props.
   * @internal
   */
   * Replaces all of the props.
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} props New props.
   * @internal
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactUpdates
 */
 * Array comparator for ReactComponents by mount ordering.
 * @param {ReactComponent} c1 first component you're comparing
 * @param {ReactComponent} c2 second component you're comparing
 * @return {number} Return value usable by Array.prototype.sort().
 */
 * Mark a component as needing a rerender, adding an optional callback to a
 * list of functions which will be executed once the rerender occurs.
 */
 * Enqueue a callback to be run at the end of the current batching cycle. Throws
 * if no updates are currently being performed.
 */
   * React references `ReactReconcileTransaction` using this property in order
   * to allow dependency injection.
   * @internal
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ReactWithAddons
 */
 * This module exists purely in the open source project, and is meant as a way
 * to create a separate standalone build of React. This build has "addons", or
 * functionality we've built and think might be useful but doesn't have a good
 * place to live inside React core.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule SVGDOMPropertyConfig
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule SelectEventPlugin
 */
 * Get an object which is a unique representation of the current selection.
 * The return value will not be consistent across nodes or browsers, but
 * two identical selections on the same node will return identical objects.
 * @param {DOMElement} node
 * @param {object}
 */
 * Poll selection to see whether it's changed.
 * @param {object} nativeEvent
 * @return {?SyntheticEvent}
 */
 * This plugin creates an `onSelect` event that normalizes select events
 * across form elements.
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - contentEditable
 * This differs from native browser implementations in the following ways:
 * - Fires on contentEditable fields as well as inputs.
 * - Fires for collapsed selection.
 * - Fires after user input.
 */
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ServerReactRootIndex
 * @typechecks
 */
 * Size of the reactRoot ID space. We generate random numbers for React root
 * IDs and if there's a collision the events and DOM update system will
 * get confused. In the future we need a way to generate GUIDs but for
 * now this will work on a smaller scale.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule SimpleEventPlugin
 */
   * Same as the default implementation, except cancels the event when return
   * value is false. This behavior will be disabled in a future release.
   * @param {object} Event to be dispatched.
   * @param {function} Application-level callback.
   * @param {string} domID DOM ID to pass to the callback.
   */
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule SyntheticClipboardEvent
 * @typechecks static-only
 */
 * @interface Event
 * @see http://www.w3.org/TR/clipboard-apis/
 */
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule SyntheticCompositionEvent
 * @typechecks static-only
 */
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
 */
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule SyntheticDragEvent
 * @typechecks static-only
 */
 * @interface DragEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule SyntheticEvent
 * @typechecks static-only
 */
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
 * Synthetic events are dispatched by event plugins, typically in response to a
 * top-level event delegation handler.
 * These systems should generally use pooling to reduce the frequency of garbage
 * collection. The system should check `isPersistent` to determine whether the
 * event should be released into the pool after being dispatched. Users that
 * need a persisted event should invoke `persist`.
 * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
 * normalizing browser quirks. Subclasses do not necessarily have to implement a
 * DOM interface; custom application-specific events can also subclass this.
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 */
   * We release all dispatched `SyntheticEvent`s after each event loop, adding
   * them back into the pool. This allows a way to hold onto a reference that
   * won't be added back into the pool.
   */
   * Checks if this event should be released back into the pool.
   * @return {boolean} True if this should not be released, false otherwise.
   */
   * `PooledClass` looks for `destructor` on each instance it releases.
   */
 * Helper to reduce boilerplate when creating subclasses.
 * @param {function} Class
 * @param {?object} Interface
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule SyntheticFocusEvent
 * @typechecks static-only
 */
 * @interface FocusEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule SyntheticInputEvent
 * @typechecks static-only
 */
 * @interface Event
 * @see http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105
 *      /#events-inputevents
 */
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule SyntheticKeyboardEvent
 * @typechecks static-only
 */
 * @interface KeyboardEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule SyntheticMouseEvent
 * @typechecks static-only
 */
 * @interface MouseEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule SyntheticTouchEvent
 * @typechecks static-only
 */
 * @interface TouchEvent
 * @see http://www.w3.org/TR/touch-events/
 */
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule SyntheticUIEvent
 * @typechecks static-only
 */
 * @interface UIEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticEvent}
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule SyntheticWheelEvent
 * @typechecks static-only
 */
 * @interface WheelEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticMouseEvent}
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule Transaction
 */
 * `Transaction` creates a black box that is able to wrap any method such that
 * certain invariants are maintained before and after the method is invoked
 * (Even if an exception is thrown while invoking the wrapped method). Whoever
 * instantiates a transaction can provide enforcers of the invariants at
 * creation time. The `Transaction` class itself will supply one additional
 * automatic invariant for you - the invariant that any transaction instance
 * should not be run while it is already being run. You would typically create a
 * single instance of a `Transaction` for reuse multiple times, that potentially
 * is used to wrap several different methods. Wrappers are extremely simple -
 * they only require implementing two methods.
 * <pre>
 *                       wrappers (injected at creation time)
 *                                      +        +
 *                                      |        |
 *                    +-----------------|--------|--------------+
 *                    |                 v        |              |
 *                    |      +---------------+   |              |
 *                    |   +--|    wrapper1   |---|----+         |
 *                    |   |  +---------------+   v    |         |
 *                    |   |          +-------------+  |         |
 *                    |   |     +----|   wrapper2  |--------+   |
 *                    |   |     |    +-------------+  |     |   |
 *                    |   |     |                     |     |   |
 *                    |   v     v                     v     v   | wrapper
 *                    | +---+ +---+   +---------+   +---+ +---+ | invariants
 * perform(anyMethod) | |   | |   |   |         |   |   | |   | | maintained
 * +----------------->|-|---|-|---|-->|anyMethod|---|---|-|---|-|-------->
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | +---+ +---+   +---------+   +---+ +---+ |
 *                    |  initialize                    close    |
 *                    +-----------------------------------------+
 * </pre>
 * Use cases:
 * - Preserving the input selection ranges before/after reconciliation.
 *   Restoring selection even in the event of an unexpected error.
 * - Deactivating events while rearranging the DOM, preventing blurs/focuses,
 *   while guaranteeing that afterwards, the event system is reactivated.
 * - Flushing a queue of collected DOM mutations to the main UI thread after a
 *   reconciliation takes place in a worker thread.
 * - Invoking any collected `componentDidUpdate` callbacks after rendering new
 *   content.
 * - (Future use case): Wrapping particular flushes of the `ReactWorker` queue
 *   to preserve the `scrollTop` (an automatic scroll aware DOM).
 * - (Future use case): Layout calculations before and after DOM updates.
 * Transactional plugin API:
 * - A module that has an `initialize` method that returns any precomputation.
 * - and a `close` method that accepts the precomputation. `close` is invoked
 *   when the wrapped process is completed, or has failed.
 * @param {Array<TransactionalWrapper>} transactionWrapper Wrapper modules
 * that implement `initialize` and `close`.
 * @return {Transaction} Single transaction for reuse in thread.
 * @class Transaction
 */
   * Sets up this instance so that it is prepared for collecting metrics. Does
   * so such that this setup method may be used on an instance that is already
   * initialized, in a way that does not consume additional memory upon reuse.
   * That can be useful if you decide to make your subclass of this mixin a
   * "PooledClass".
   */
   * @abstract
   * @return {Array<TransactionWrapper>} Array of transaction wrappers.
   */
   * Executes the function within a safety window. Use this for the top level
   * methods that result in large amounts of computation/mutations that would
   * need to be safety checked.
   * @param {function} method Member of scope to call.
   * @param {Object} scope Scope to invoke from.
   * @param {Object?=} args... Arguments to pass to the method (optional).
   *                           Helps prevent need to bind in many cases.
   * @return Return value from `method`.
   */
   * Invokes each of `this.transactionWrappers.close[i]` functions, passing into
   * them the respective return values of `this.transactionWrappers.init[i]`
   * (`close`rs that correspond to initializers that failed will not be
   * invoked).
   */
   * Token to look for to determine if an error occured.
   */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule ViewportMetrics
 */
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule accumulateInto
 */
 * Accumulates items that must not be null or undefined into the first one. This
 * is used to conserve memory by avoiding array allocations, and thus sacrifices
 * API cleanness. Since `current` can be null before being passed in and not
 * null after this function, make sure to assign it back to `current`:
 * `a = accumulateInto(a, b);`
 * This API should be sparingly used. Try `accumulate` for something cleaner.
 * @return {*|array<*>} An accumulation of items.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule adler32
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule camelize
 * @typechecks
 */
 * Camelcases a hyphenated string, for example:
 *   > camelize('background-color')
 *   < "backgroundColor"
 * @param {string} string
 * @return {string}
 */
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule camelizeStyleName
 * @typechecks
 */
 * Camelcases a hyphenated CSS property name, for example:
 *   > camelizeStyleName('background-color')
 *   < "backgroundColor"
 *   > camelizeStyleName('-moz-transition')
 *   < "MozTransition"
 *   > camelizeStyleName('-ms-transition')
 *   < "msTransition"
 * As Andi Smith suggests
 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
 * is converted to lowercase `ms`.
 * @param {string} string
 * @return {string}
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @typechecks static-only
 * @providesModule cloneWithProps
 */
 * Sometimes you want to change the props of a child passed to you. Usually
 * this is to add a CSS class.
 * @param {ReactElement} child child element you'd like to clone
 * @param {object} props props you'd like to modify. className and style will be
 * merged automatically.
 * @return {ReactElement} a clone of child with props merged in.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule containsNode
 * @typechecks
 */
 * Checks if a given DOM node contains or is another DOM node.
 * @param {?DOMNode} outerNode Outer DOM node.
 * @param {?DOMNode} innerNode Inner DOM node.
 * @return {boolean} True if `outerNode` contains or is `innerNode`.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule createArrayFromMixed
 * @typechecks
 */
 * Perform a heuristic test to determine if an object is "array-like".
 *   A monk asked Joshu, a Zen master, "Has a dog Buddha nature?"
 *   Joshu replied: "Mu."
 * This function determines if its argument has "array nature": it returns
 * true if the argument is an actual array, an `arguments' object, or an
 * HTMLCollection (e.g. node.childNodes or node.getElementsByTagName()).
 * It will return false for other array-like objects like Filelist.
 * @param {*} obj
 * @return {boolean}
 */
 * Ensure that the argument is an array by wrapping it in an array if it is not.
 * Creates a copy of the argument if it is already an array.
 * This is mostly useful idiomatically:
 *   var createArrayFromMixed = require('createArrayFromMixed');
 *   function takesOneOrMoreThings(things) {
 *     things = createArrayFromMixed(things);
 *     ...
 *   }
 * This allows you to treat `things' as an array, but accept scalars in the API.
 * If you need to convert an array-like object, like `arguments`, into an array
 * use toArray instead.
 * @param {*} obj
 * @return {array}
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule createFullPageComponent
 * @typechecks
 */
 * Create a component that will throw an exception when unmounted.
 * Components like <html> <head> and <body> can't be removed or added
 * easily in a cross-browser way, however it's valuable to be able to
 * take advantage of React's reconciliation for styling and <title>
 * management. So we just document it and throw in dangerous cases.
 * @param {string} tag The tag to wrap
 * @return {function} convenience constructor of new component
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule createNodesFromMarkup
 * @typechecks
 */
 * Dummy container used to render all markup.
 */
 * Pattern used by `getNodeName`.
 */
 * Extracts the `nodeName` of the first element in a string of markup.
 * @param {string} markup String of markup.
 * @return {?string} Node name of the supplied markup.
 */
 * Creates an array containing the nodes rendered from the supplied markup. The
 * optionally supplied `handleScript` function will be invoked once for each
 * <script> element that is rendered. If no `handleScript` function is supplied,
 * an exception is thrown if any <script> elements are rendered.
 * @param {string} markup A string of valid HTML markup.
 * @param {?function} handleScript Invoked once for each rendered <script>.
 * @return {array<DOMElement|DOMTextNode>} An array of rendered nodes.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule cx
 */
 * This function is used to mark string literals representing CSS class names
 * so that they can be transformed statically. This allows for modularization
 * and minification of CSS class names.
 * In static_upstream, this function is actually implemented, but it should
 * eventually be replaced with something more descriptive, and the transform
 * that is used in the main stack should be ported for use elsewhere.
 * @param string|object className to modularize, or an object of key/values.
 *                      In the object case, the values are conditions that
 *                      determine if the className keys should be included.
 * @param [string ...]  Variable list of classNames in the string case.
 * @return string       Renderable space-separated CSS className.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule dangerousStyleValue
 * @typechecks static-only
 */
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule emptyFunction
 */
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule emptyObject
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule escapeTextContentForBrowser
 */
 * Escapes text to prevent scripting attacks.
 * @param {*} text Text value to escape.
 * @return {string} An escaped string.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule findDOMNode
 * @typechecks static-only
 */
 * Returns the DOM node rendered by this element.
 * @param {ReactComponent|DOMElement} componentOrElement
 * @return {DOMElement} The root node of this element.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule flattenChildren
 */
 * @param {function} traverseContext Context passed through traversal.
 * @param {?ReactComponent} child React child component.
 * @param {!string} name String name of key path to child.
 */
 * Flattens children that are typically specified as `props.children`. Any null
 * children will not be included in the resulting object.
 * @return {!object} flattened children keyed by name.
 */
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule focusNode
 */
 * @param {DOMElement} node input/textarea to focus
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule forEachAccumulated
 */
 * @param {array} an "accumulation" of items which is either an Array or
 * a single item. Useful when paired with the `accumulate` module. This is a
 * simple utility that allows us to reason about a collection of items, but
 * handling the case when there is exactly one item (and we do not need to
 * allocate an array).
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule getActiveElement
 * @typechecks
 */
 * Same as document.activeElement but wraps in a try-catch block. In IE it is
 * not safe to call document.activeElement if there is nothing focused.
 * The activeElement will be null only if the document body is not yet defined.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule getEventCharCode
 * @typechecks static-only
 */
 * `charCode` represents the actual "character code" and is safe to use with
 * `String.fromCharCode`. As such, only keys that correspond to printable
 * characters produce a valid `charCode`, the only exception to this is Enter.
 * The Tab-key is considered non-printable and does not have a `charCode`,
 * presumably because it does not produce a tab-character in browsers.
 * @param {object} nativeEvent Native browser event.
 * @return {string} Normalized `charCode` property.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule getEventKey
 * @typechecks static-only
 */
 * Normalization of deprecated HTML5 `key` values
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */
 * Translation from legacy `keyCode` to HTML5 `key`
 * Only special keys supported, all others depend on keyboard layout or browser
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */
 * @param {object} nativeEvent Native browser event.
 * @return {string} Normalized `key` property.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule getEventModifierState
 * @typechecks static-only
 */
 * Translation from modifier key to the associated property in the event.
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule getEventTarget
 * @typechecks static-only
 */
 * Gets the target node from a native browser event by accounting for
 * inconsistencies in browser DOM APIs.
 * @param {object} nativeEvent Native browser event.
 * @return {DOMEventTarget} Target node.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule getIteratorFn
 * @typechecks static-only
 */
 * Returns the iterator method function contained on the iterable object.
 * Be sure to invoke the function with the iterable as context:
 *     var iteratorFn = getIteratorFn(myIterable);
 *     if (iteratorFn) {
 *       var iterator = iteratorFn.call(myIterable);
 *       ...
 *     }
 * @param {?object} maybeIterable
 * @return {?function}
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule getMarkupWrap
 */
 * Dummy container used to detect which wraps are necessary.
 */
 * Some browsers cannot use `innerHTML` to render certain elements standalone,
 * so we wrap them, render the wrapped nodes, then extract the desired node.
 * In IE8, certain elements cannot render alone, so wrap all elements ('*').
 */
 * Gets the markup wrap configuration for the supplied `nodeName`.
 * NOTE: This lazily detects which wraps are necessary for the current browser.
 * @param {string} nodeName Lowercase `nodeName`.
 * @return {?array} Markup wrap configuration, if applicable.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule getNodeForCharacterOffset
 */
 * Given any node return the first leaf node without children.
 * @param {DOMElement|DOMTextNode} node
 * @return {DOMElement|DOMTextNode}
 */
 * Get the next sibling within a container. This will walk up the
 * DOM if a node's siblings have been exhausted.
 * @param {DOMElement|DOMTextNode} node
 * @return {?DOMElement|DOMTextNode}
 */
 * Get object describing the nodes which contain characters at offset.
 * @param {DOMElement|DOMTextNode} root
 * @param {number} offset
 * @return {?object}
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule getReactRootElementInContainer
 */
 * @param {DOMElement|DOMDocument} container DOM element that may contain
 *                                           a React component
 * @return {?*} DOM element that may have the reactRoot ID, or null.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule getTextContentAccessor
 */
 * Gets the key used to access text content on a DOM node.
 * @return {?string} Key used to access text content.
 * @internal
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule getUnboundedScrollPosition
 * @typechecks
 */
 * Gets the scroll position of the supplied element or window.
 * The return values are unbounded, unlike `getScrollPosition`. This means they
 * may be negative or exceed the element boundaries (which is possible using
 * inertial scrolling).
 * @param {DOMWindow|DOMElement} scrollable
 * @return {object} Map with `x` and `y` keys.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule hyphenate
 * @typechecks
 */
 * Hyphenates a camelcased string, for example:
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 * @param {string} string
 * @return {string}
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule hyphenateStyleName
 * @typechecks
 */
 * Hyphenates a camelcased CSS property name, for example:
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 * @param {string} string
 * @return {string}
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule instantiateReactComponent
 * @typechecks static-only
 */
 * Check if the type reference is a known internal type. I.e. not a user
 * provided composite type.
 * @param {function} type
 * @return {boolean} Returns true if this is a valid internal type.
 */
 * Given a ReactNode, create an instance that will actually be mounted.
 * @param {ReactNode} node
 * @param {*} parentCompositeType The composite type that resolved this.
 * @return {object} A new instance of the element's constructor.
 * @protected
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule invariant
 */
 * Use invariant() to assert state which your program assumes to be true.
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule isEventSupported
 */
 * Checks if an event is supported in the current execution environment.
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 * Borrows from Modernizr.
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule isNode
 * @typechecks
 */
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM node.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule isTextInputElement
 */
 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule isTextNode
 * @typechecks
 */
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM text node.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule joinClasses
 * @typechecks static-only
 */
 * Combines multiple className strings into one.
 * http://jsperf.com/joinclasses-args-vs-array
 * @param {...?string} classes
 * @return {string}
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule keyMirror
 * @typechecks static-only
 */
 * Constructs an enumeration with keys equal to their value.
 * For example:
 *   var COLORS = keyMirror({blue: null, red: null});
 *   var myColor = COLORS.blue;
 *   var isColorValid = !!COLORS[myColor];
 * The last line could not be performed if the values of the generated enum were
 * not equal to their keys.
 *   Input:  {key1: val1, key2: val2}
 *   Output: {key1: key1, key2: key2}
 * @param {object} obj
 * @return {object}
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule keyOf
 */
 * Allows extraction of a minified key. Let's the build system minify keys
 * without loosing the ability to dynamically use key strings as values
 * themselves. Pass in an object with a single key/val pair and it will return
 * you the string key of that single record. Suppose you want to grab the
 * value for a key 'className' inside of an object. Key/val minification may
 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
 * reuse those resolutions.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule mapObject
 */
 * Executes the provided `callback` once for each enumerable own property in the
 * object and constructs a new object from the results. The `callback` is
 * invoked with three arguments:
 *  - the property value
 *  - the property name
 *  - the object being traversed
 * Properties that are added after the call to `mapObject` will not be visited
 * by `callback`. If the values of existing properties are changed, the value
 * passed to `callback` will be the value at the time `mapObject` visits them.
 * Properties that are deleted before being visited are not visited.
 * @grep function objectMap()
 * @grep function objMap()
 * @param {?object} object
 * @param {function} callback
 * @param {*} context
 * @return {?object}
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule memoizeStringOnly
 * @typechecks static-only
 */
 * Memoizes the return value of a function that accepts one string argument.
 * @param {function} callback
 * @return {function}
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule onlyChild
 */
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection. The current implementation of this
 * function assumes that a single child gets passed without a wrapper, but the
 * purpose of this helper function is to abstract away the particular structure
 * of children.
 * @param {?object} children Child collection structure.
 * @return {ReactComponent} The first and only `ReactComponent` contained in the
 * structure.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule performance
 * @typechecks
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule performanceNow
 * @typechecks
 */
 * Detect if we can use `window.performance.now()` and gracefully fallback to
 * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
 * because of Facebook's testing infrastructure.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule quoteAttributeValueForBrowser
 */
 * Escapes attribute value to prevent scripting attacks.
 * @param {*} value Value to escape.
 * @return {string} An escaped string.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule setInnerHTML
 */
 * Set the innerHTML property of a node, ensuring that whitespace is preserved
 * even in IE8.
 * @param {DOMElement} node
 * @param {string} html
 * @internal
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule setTextContent
 */
 * Set the textContent property of a node, ensuring that whitespace is preserved
 * even in IE8. innerText is a poor substitute for textContent and, among many
 * issues, inserts <br> instead of the literal newline chars. innerHTML behaves
 * as it should.
 * @param {DOMElement} node
 * @param {string} text
 * @internal
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule shallowEqual
 */
 * Performs equality by iterating through keys on an object and returning
 * false when any key has values which are not strictly equal between
 * objA and objB. Returns true when the values of all keys are strictly equal.
 * @return {boolean}
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule shouldUpdateReactComponent
 * @typechecks static-only
 */
 * Given a `prevElement` and `nextElement`, determines if the existing
 * instance should be updated as opposed to being destroyed or replaced by a new
 * instance. Both arguments are elements. This ensures that this logic can
 * operate on stateless trees without any backing instance.
 * @param {?object} prevElement
 * @param {?object} nextElement
 * @return {boolean} True if the existing instance should be updated.
 * @protected
 */
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule toArray
 * @typechecks
 */
 * Convert array-like objects to arrays.
 * This API assumes the caller knows the contents of the data type. For less
 * well defined inputs use createArrayFromMixed.
 * @param {object|function|filelist} obj
 * @return {array}
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule traverseAllChildren
 */
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */
 * Generate a key string that identifies a component within a set.
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
 * Escape a component key so that it is safe to use in a reactid.
 * @param {*} key Component key to be escaped.
 * @return {string} An escaped string.
 */
 * Wrap a `key` value explicitly provided by the user to distinguish it from
 * implicitly-generated keys generated by a component's index in its parent.
 * @param {string} key Value of a user-provided `key` attribute
 * @return {string}
 */
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!number} indexSoFar Number of children encountered until this point.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule update
 */
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * @providesModule warning
 */
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
 * Created by 95 on 2015/8/4.
 */
*/
*/
			* varsion 2.0
			* time 9/6/15 17:33
			* change dyq
			* 现在默认添加一个空的白模板
			*/
    * version 2.0
    * time 4/6 11:35
    * change ydq
    * 允许每个页面的 item_object 为 [] (空)
	* time 8/6 16:11
	* change ydq
	* 添加 12:电话 14:输入框支持 
	* 备注 12,14暂时以文字显示处理
    */
	*/
	* version 2.0
	* time 9/6/15 17:37
	* add ydq
	* 制作时手机 home 键的预览功能
	*/
 * 全局方法
*/
    * 点击动画事件
    */
         */
 * 新增元素基本属性
*/
	* version 2.0
	* time 8/6 16:00
	* ydq
	* change 添加 case 12 : 电话 case 14 : 输入框
	* 备注 12,14右边栏暂时以文字类型处理
	*/
		*/
        */
    * @method: 版式双击事件
    * @param: tid
    * @param: 作品下标
    * 在调用双击事件之前,会同样的触发单击事件
    */
    * version 2.0
    * time 4/6 10:45
    * add : ydq
    * 添加一个空白页
    */
                * page 列表中的缩略图要根据 page 中的 item_object 元素生成, 现在暂时写为固定的
                */
    * time 4/6 10:45
    * add : ydq
    * 添加一个空白页
    */
	* @param: isMindModul 是否是 "我的"
	*/
 * Created by 95 on 2015/8/4.
 */
 * Created by 95 on 2015/8/5.
 */
*/
*/
*/
*/
*/
 * jQuery Hotkeys Plugin
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * Based upon the plugin by Tzury Bar Yochay:
 * https://github.com/tzuryby/jquery.hotkeys
 * Original idea by:
 * Binny V A, http://www.openjs.com/scripts/events/keyboard_shortcuts/
 */
 * One small change is: now keys are passed by object { keys: '...' }
 * Might be useful, when you want to pass some other data to your handler
 */
*/
 * Created by 95 on 2015/8/3.
 */
*/
 * Created by 95 on 2015/8/3.
 */
* 添加生成效果图
*/
	*/
	*/
			* version 2.0
			* 添加预览功能
			*/
*/
									*/
*/
	*/
	*/
*/
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 * AppDispatcher
 * A singleton that operates as the central hub for application updates.
 */
 * Created by 95 on 2015/8/4.
 */
*/
    * 添加 option
    * 此option为tpl对象的其它属性的  key->value 对
    */
         * clone 用与生成 我的模板 tpl_type:10模板 11作品
         * 非clone 用与发布
        */
	 * 快速保存 (未完成的作品)
	*/
     * @method: 在保存前调用,检查数据是否是对的
    */
	* 获得当前的登录用户
	*/
	* 设置是否是二次编辑
	*/
	* 创建一个 tpl id
	*/
	* 根据 某页 生成一张TPL的效果图
	*/
	* 在调用过 createTplEffectImg 之后,可以获得这个 base64 的图片
	*/
	* 上传 TPL 效果图 
	* @param base64 : base64
	*/
	* 设置 tpl 的music属性
	* @param: object
	*   tpl_music
	*   tpl_music_replay
	*   tpl_music_autoplay
	*/
	* 设置 tpl 的渲染器版本[]
	*/
	* 获得 tpl 的渲染器版本 []
	*/
	* 删除页元素时,要删除相对应的 渲染器 数组中的值
	*/
	* 在 renderVersion 中筛选高版本号
	*/
	* @method: 获得json类型的 tplData 数据
	* @return: tplData(json)
	*/
	* @method: 上一页
	*/
	* @method: 下一页
	*/
	* @method: 删除页元素
	* @param: 页下标 从0开始
	*/
	* @method: 添加一个空白页
    */
	* @method: 获得当前选中页的下标
	* @return: number
    */
	* @method: 设置当前选中页
	* @param: 下标 number 从0开始
	*/
	* @method: 获得页
	* @return: array
	*/
	* @method: 添加一页
	* @param: page 对象
	*/
	 * @method: 移动某页的位置
	 * @param: oldIndex 页原来位置
	 * @param: newIndex 页新位置
	 */
	* @method: 设置某页对象
	* @param: page 页对象
	* @param: index 页对象的下标
	*/
	* @method: 设置 pages 对象
	* @param: pages(array) 页对象数组
	*/
	* @method: 获得某页或当前页对象
	* @param: index(number) 下标
	*/
	* 过滤 生成 时的tpl对象
	*/
	* 过滤 生成 时的 tpl-data 对象
	*/
	* 修改过滤保存时的 items 数据
	*/
	* 过滤 发布 时的 tpl-data 对象
	*/
	* 创建一个空的制作页对象
	* tpl , tpl-data , pages
	*/
	* version 2.0
	* time 8/6 11:24
	* 创建一个空 item_object 的page对象
	*/
    * version 2.0
    * time 4/6 10:45
    * add : ydq
    * 创建一个白色背景图 avos 对象
    */
	*说明: 显示
	*@param container: 预览时的容器
	*@param tplData: tplData
	*@param option: 其它参数
	*/
	*说明: 显示
	*@param container: 预览时的容器
	*@param tid: tid
	*@param option: 其它参数
	*/
	* 过滤 option 信息
	*/
	*说明: 添加尾页
	*@param node: 尾页元素
	*/
*/
    **/
******/
  ***/
  ***/
* version 2.0
* 上传用户头像
*/
**/

******/
**/
*/
 **/
*/
* 删除用户收藏的作品
*/
* PC端表单属性查询，PC端的快捷菜单默认的表单组件可和右下方的表单供选择列表统一用这个查询方法
*/