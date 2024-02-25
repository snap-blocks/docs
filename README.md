# Snapblocks Documentation

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Writing documentation

When writing documentation, create a fork of this repository, and write documentation, while previewing it in the local development environment explained below.

Since this is built using Docusaurus, markdown files can use react components. There is a `SnapBlocks` component that is used to display snapblocks. Here's how to use it.

```jsx
<SnapBlocks blockStyle="snap">
  {`
    when green flag clicked
    forever {
      move (10) steps
    }
  `}
</SnapBlocks>
```

Note: currently there is a bug, where if the first snapblocks svg is hidden, then all the other snapblocks svgs don't render properly. This will be fixed in snapblocks `1.2.0`.

Available properties:

| Name          | Default  | Valid Values                                                             | Description                                                                           |
| ------------- | ------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| blockStyle    | "snap"  | "snap", "snap-flat", "scratch2", "scratch3", or "scratch3-high-contrast" | Changes the visual style of the rendered blocks.                                      |
| languages     | ["en"]  | An array of language codes such as ["en", "de"]                          | Enables the use of non-english languages. Requires additional setup.                  |
| wrap          | {true}  | {true} or {false}                                                        | Enables block wrapping.                                                               |
| wrapSize      | {null}  | {number} or {null}                                                       | Set block wrap size.                                                                  |
| zebraColoring | {true}  | {true} or {false}                                                        | Enables zebra coloring.                                                               |
| inline        | {false} | {true} or {false}                                                        | Write snapblocks inline in text. This is not recommended.                             |
| ... and more! |         |                                                                          | All other props (such as "className" and "style") will be passed directly to the div. |

If you feel like there should be a new page, go ahead and make it, just make sure to correctly set it up in `sidebars.js`

## Installation

```
npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
