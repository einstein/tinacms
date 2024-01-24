export const span = {
  inline: true,
  group: 'inline',
  content: 'inline*',
  toDOM() {
    return ['span', 0]
  },
  parseDOM: [{ tag: 'span' }],
}
