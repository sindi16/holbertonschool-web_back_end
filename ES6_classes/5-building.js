export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    // Check that subclasses implement evacuationWarningMessage
    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }
}
