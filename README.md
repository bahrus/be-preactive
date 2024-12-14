# be-preactive (🪥) [TODO]

*be-preactive* is a custom element enhancement that provides rendering capabilities based on Preact.  It is one of a family of renderers, based on the common enhancement base class [be-render-neutral](https://github.com/bahrus/be-render-neutral).  Other members include [be-alit](https://github.com/bahrus/be-alit).


In this case, it builds on Preact's [build-less workflows](https://preactjs.com/guide/v10/no-build-workflows).

## Example 1a - Simple list

```html
<ul>
    <script nomodule id=pronouns be-preactive-vm='["He", "She", "They", "Other"]'>
        html `${vm.map(i => html`<li>${i}</li>`)}`;
    </script>
</ul>

...

<script>
setTimeout(() => {
    pronouns.beEnhanced['bePreactive'].vm = ["I", "You", "Us", "Them"]
}, 2000);
</script>
```

A framework can theoretically pass in the view model:

```JavaScript
await whenDefined('be-enhanced');
oScript.beEnhanced.by.beAlit.vm = ["He", "She", "They", "Other"];
```

# Part II Pulling in the View Model

## Example 2a

As suggested above, it is seemingly beyond most frameworks's ability to pass values to the view model in the proscribed  way.  So *be-preactive* can take over the reigns of binding, and tap into the power of [DSS](https://github.com/bahrus/trans-render/wiki/VIII.--Directed-Scoped-Specifiers-(DSS)).

```html
<patient-chart>
        <medical-prescriptions onerror="console.log(href)"
            href="prescriptions.json?patient=zero" 
            enh-be-kvetching>
        </medical-prescriptions>
        <table>
            <thead>
                <th>Prescription</th>
                <th>Prescriber</th>
                <th>Dosage</th>
                <th>Frequency</th>
            </thead>
            <tbody>
                <script nomodule be-preactive-with='~medicalPrescriptions::fetch-complete'>
                    html`${vm.map(prescription => html`
                            <tr itemscope=treatment-order>
                                <td>${prescription.OrderText}</td>
                                <td>
                                    <button disabled>Order Item</button>
                                    <div>${prescription.Prescriber}</div>
                                </td>
                                <td>${prescription.Dosage}</td>
                                <td>${prescription.Freq}</td>
                            </tr>
                        `)}`
                </script>
            </tbody>
        </table>

        <be-hive></be-hive>
        <xtal-element></xtal-element>
</patient-chart>
```

## Using other names

It is easy to choose alternative names.  This package supports one:

```html
<patient-chart>
    <template shadowrootmode=open>
        <table>
            <thead>
                <th>Prescription</th>
                <th>Prescriber</th>
                <th>Dosage</th>
                <th>Frequency</th>
            </thead>
            <tbody 🪥-with='/prescriptions'>
            </tbody>
        </table>
        <be-hive></be-hive>
    </template>
</patient-chart>
```

## Viewing Locally

Any web server that serves static files will do but...

1.  Install git.
2.  Fork/clone this repo.
3.  Install node.
4.  Install Python 3 or later.
5.  Open command window to folder where you cloned this repo.
6.  > npm install
7.  > npm run serve
8.  Open http://localhost:8000/demo in a modern browser.

## Importing in ES Modules:

```JavaScript
import 'be-preactive/be-preactive.js';

```

## Using from CDN:

```html
<script type=module crossorigin=anonymous>
    import 'https://esm.run/be-preactive';
</script>
```


