/** Entrance delay for card `i` in a grid, so each row slides in left to right. */
export const queue = (i: number, cols = 4) => (i % cols) * 0.12;
