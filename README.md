# be-preactive

*be-preactive* is one of a family of renderers, based on the common enhancement base class [be-render-neutral](https://github.com/bahrus/be-render-neutral).

In this case, it builds on Preact's [build-less workflow](https://preactjs.com/guide/v10/no-build-workflows).

## Example 1a - Simple list

```html
  <ul>
    <script id=pronouns be-preactive-vm='["He", "She", "They", "Other"]'>
        document.currentScript.renderer = (vm, html) => html `${vm.map(i => html`<li>${i}</li>`)}`;
    </script>

  <script>
    setTimeout(() => {
        pronouns.beEnhanced['bePreactive'].vm = ["I", "You", "Us", "Them"]
    }, 2000);
  </script>
</ul>
```