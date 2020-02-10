# Zirka Assets

This repository contains assets for various [Zirka](https://zirka.ga) tools and SVG files for each character in the language!

## Zirka Translator

To use the automatic Zirka translator, simply add this to your HTML:

```
<script src="//assets.zirka.ga/translate.js"></script>
```

When the page loads, the script will search for all instances of the following tags:

- `<zirka></zirka>`: Shows both the Zirka character and the pronunciation above it in Ruby format
- `<zirka-only></zirka-only>`: Shows only the Zirka characters.
- `<zirka-pronounce></zirka-pronounce>`: Shows only the Zirka pronunciation.

Any text inside these tags will be transformed into Zirka. This works best if you use [correct Zirka translation](https://zirka.ga/usage) techniques (i.e. converting English to its "pronounced" form first).

The default font size is `16pt`, but you can set the font size manually if you want by adding a `size` attribute to the tag, for example: `<zirka size="20pt">`.

Check out the [live demo](https://assets.zirka.ga/demo.html) to see how it looks.

## Eventual Features

Someday, I plan to add:

- Script font
- Custom character spacing/kerning
- Write and export tools (with HTML canvas)