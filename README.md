# Client side javascript

### Global Vars

* window
  - the global object on the client side.
  - The current window/tab/screen
* navigator
  - It represents the browser.
* document
  - The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree. 

### HTML & the DOM

Document Object Model.

The html document is represented as a tree of javascript objects. kind of like this:

```
{
  tag: body,
  children: [{
    tag: main-course,
    children: []
  }]
}
```

#### Traversal

We'll never traverse the tree like this. But it's a tree, so we can.

```js
document.children[0].children[1].children[1].children[1].children[4]
```

#### Selection

```js
document.getElementByTagName('p');
document.getElementsByClassName('something');
document.getElementByID('something');

document.querySelector('.something #something');
document.querySelectorAll();
```

Query selector is newer, but all are valid ways of selecting an element

#### Manipulation

we can change the text of an item using innerText, or textContent, or many other ways. (or we can just use jQuery, but more about that later.)

```js
item.innerText = item.innerText + "!!!";
```


#### Creation

We can create new html nodes by calling `document.createElement()` and passing in the type of element we want to create.

```js
var newItem = document.createElement('li');
list.appendChild(newItem);
```

--- 

## Including Javascript Files

Include your JS file at the bottom of your HTML and wrap your code inside the "DOMContentLoaded" event.

```js
document.addEventListener("DOMContentLoaded", (event) => {
});
```

Which looks like this in jQuery:

```js
$((event) => {

});
```

## Events

Things that will **might** get executed as a result of "something" (an event). It might get executed a whole bunch of times, or never. Similar to the routes in express.

```js
document.body.addEventListener("click", function(event) {
	console.log(event.target);
// 	alert("You've been turkeyed!");
});
```

---

# A CSS Style Guide

## Specificity

**A note about [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity).**

Overly specific CSS rules can cause a lot of frustration when our css doesn't work as intended. For example, in the following code snippet, what will the color of the title be? 

```css
.header h1 {
  color: blue;
}
.highlight {
  color: yellow;
}
```
```html
<div class="header">
  <h1 class="highlight">What color will I be?</h1>
</div>
```

We want it to be yellow, but because of a specificity mistake, it will be blue.

> For more on this subject:
>   * [CSS Wizardry's article](http://csswizardry.com/2014/07/hacks-for-dealing-with-specificity/) on dealing with specificity.
>   * [CSS trick's article](https://css-tricks.com/strategies-keeping-css-specificity-low/) on keeping css specificity low.

## ID selectors

While it is possible to select elements by ID in CSS, it should generally be considered an anti-pattern. ID selectors introduce an unnecessarily high level of specificity to your rule declarations, and they are not reusable.

**Bad**

```css
#page__title {
  color: red;
}
```

**Good**

```css
.page__title {
  color: red;
}
```

## Flat Selectors

Avoid unnecessarily increasing the specificity by nesting selectors. Instead, try using a single selector. 

**Bad**

```css
body .module .title {
  color: red;
}
```

**Good**

```css
.module__title {
  color: red;
}
```

## Block, Element, Modifier (BEM)

**BEM**, or “Block-Element-Modifier”, is a _naming convention_ for classes in HTML and CSS.

> For a more detailed description of BEM, check out CSS Trick's [BEM 101](https://css-tricks.com/bem-101/)

We encourage using them BEM naming convention for classes in HTML and CSS for these reasons:

* It helps create clear, strict relationships between CSS and HTML
* It allows for less nesting and lower specificity
* It helps in building scalable stylesheets

**Bad**

```html
<article class="tweet featured">
  <header class="header">
    <img class="avatar">
  </header>
</article>
```

**Good**

```html
<article class="tweet tweet--featured">
  <header class="tweet__header">
    <img class="tweet__avatar">
  </header>
</article>
```

```css
.tweet { } /* block */
.tweet--featured { } /* modifier */
.tweet__header { } /* element */
.tweet__avatar { } /* element */
```

* `.tweet` is the "block" and represents an entire component
* `.tweet__header` is an "element" and represents a descendant of `.tweet` that helps compose the block as a whole.
* `.tweet--featured` is a "modifier" and represents a different state or variation on the `.tweet` block.

## Sass

If you are using `sass`, use nesting to generate BEM rules.

**Bad**


```css
.tweet { 
  /* Tweet Rules */ 
}
.tweet__header { 
  /* Header Rules */
}
```

**Good**


```scss
.tweet{
  /* Tweet Rules */
  &__header { /* Header Rules */ }
}
```
