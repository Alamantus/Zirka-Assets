# Zirka Assets

This repository contains assets for various [Zirka](https://zirka.ga) tools and SVG files for each character in the language!

## Zirka Translator

To use the automatic Zirka translator, simply add this to your HTML:

```
<script src="//zirka.ga/translate-min.js"></script>
```

When the page loads, the script will search for all instances of the following tags:

- `<zirka></zirka>`: Shows both the Zirka character and the pronunciation above it in Ruby format
- `<zirka-only></zirka-only>`: Shows only the Zirka characters.
- `<zirka-pronounce></zirka-pronounce>`: Shows only the Zirka pronunciation.
- `<zirka-ipa></zirka-ipa>`: Shows only the Zirka [International Phonetic Alphabet](https://www.internationalphoneticalphabet.org/) (IPA) pronunciation (does not separate syllables yet).

In environments where you are unable to use custom HTML elements, you can use classes with the same name instead:

- `<span class="zirka"></span>`
- `<span class="zirka-only"></span>`
- `<span class="zirka-pronounce"></span>`
- `<span class="zirka-ipa"></span>`

Any text inside these tags will be transformed into Zirka. This works best if you use [correct Zirka translation](https://zirka.ga/usage.html) techniques (i.e. converting English to its "pronounced" form first).

The default font size is `16pt`, but you can set the font size manually if you want by adding a `size` attribute to the tag, for example: `<zirka size="20pt">`.

Check out the [live demo](https://zirka.ga/demo.html) to see how it looks.

### Setting Defaults

You can change the default size by specifying it in a script tag like so:

```
<script>
window.Zirka = {
  defaultSize: '12pt',
};
</script>
```

## Eventual Features

Someday, I plan to add:

- Script font
- Custom character spacing/kerning
- Write and export tools (with HTML canvas)