export class Priority {
  static Low = new Priority(1,"low", "Basse")
  static Normal = new Priority(2,"normal", "Normale")
  static High = new Priority(3,"high", "Haute")

  protected constructor(private _id: number, private _code: string,  private _representation: string) {}

  get code(): string {
    return this._code
  }

  get id(): number {
    return this._id
  }

  static get All(): Priority[] {
    return [Priority.Low, Priority.Normal, Priority.High]
  }

  public is(other: Priority): boolean {
    return this._id === other._id
  }

  public toString(): string {
    return this._representation
  }
  static fromId(id: number): Priority {
    switch (id) {
      case 1:
        return Priority.Low
      case 2:
        return Priority.Normal
      case 3:
        return Priority.High
      default:
        throw new Error(`Unknown priority id: ${id}`)
    }
  }

}