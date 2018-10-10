1. Why does it exist?
  - Library that makes writing client side JS easier. 
  - Write less code. 
  - Cleaner code.
  - More compatible across browsers. (kind of)
2. How much additional behavior does it add to the browser?
  - There's easier ways of accomplishing certain things. But anything you can do with jQuery, you can do without jQuery.
3. Library or framework? Why?
  - Library, and this is not the correct question to be asking.
4. What is `$` or `jQuery` in code exactly? How does it work?
  - jQuery is a function.
  - `$` === `jQuery`
5. jQuery vs jQueryUI
  - Someone remind me to come back to this at the end of the breakout.
6. Why is it important to learn / use jQuery ?
  - In 2015, jQuery was used on 63% of the top 1 million websites (according to BuiltWith), and 17% of all Internet websites.[15] As of June 2018, jQuery is used on 73% of the top 1 million websites, and by 22.4% of all websites (according to BuiltWith).[16]

## Including jQuery

- We need to add jQuery as a script.
  - download jQuery and include it as a native script.
  - use `npm`, but that's a little more inconvenient upfront.
  - use a CDN
    - Content Delivery Network

## The jQuery function can accept 4 different things

1. a css selector. This is similar to querySelectorAll, but we get back jQuery objects. (`document.querySelector`);
2. an html element. Gives you a jQuery object representing that element.
3. an html tag. This will create the new DOM node.
4. A Function, 

```js
$(() => {
	
});
```
is the same as
```js
document.addEventListener("DOMContentLoaded", () => {

});
```
is the same as
```js
$(document).read(() => {

});
```