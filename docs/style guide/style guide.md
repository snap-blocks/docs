## Overrides

Always put a space before and after `::`.

```snapblocks
block :: motion // good
block::motion // bad
```

The only reason why no space before `::` was used on the wiki before,
was because of a bug that has since been fixed.

Whenever writing code, try not to set the category or shape, unless the
block doesn't exist in Scratch or Snap*!* (Snap*!* libraries are not
included).

```snapblocks
move (10) steps :: motion command // bad
move (10) steps // good

vee :: looks // good
```

## Comments

Put spaces before and after `//` when writing comments.

```snapblocks
// good
//bad
block // good
block//bad
```

## Inputs

Put spaces around inputs.

```snapblocks
move (10) steps // good
move(10)steps // bad
```

## Indentation

### C-Blocks

Indent scripts inside a c-shape.

```snapblocks
if <> {
    say [Hello!]
    if <> {
    move (10) steps
    }
} // good

if <> {
say [Hello!]
if <> {
move (10) steps
}
} // bad
```

Indents can be 2 or 4 spaces, but should stay consistent.

### Multiline Blocks

Indent multiline reporter and predicate blocks to the
opening bracket.

```snapblocks
multiline\
block

(multiline
    block)

    <multiline
    block>
    
move (x position
        with extra stuff) steps
```

### Multiline Inputs

Don't indent multiline string inputs, as the spaces are placed inside
the input.

```snapblocks
say [Hello
world] // good
say [Hello
        world] // bad
```

This is due to a limitation, it would be indented if spaces weren't
included.

## Shapes

Don't use shape overrides, unless neccessary.

```snapblocks
(block) // good
block :: reporter // bad
```

## Define Block

When creating a Snap*!* define block, use `define+` instead of manually
placing in plusses, so you don\'t accidentally miss a plus sign.

```snapblocks
{custom block} :: define+
```
