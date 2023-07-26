export class Status {
  static Todo = new Status(1, "todo", "À faire")
  static Ongoing = new Status(2, "ongoing", "En cours")
  static Done = new Status(3, "done", "Terminé")
  static Blocked = new Status(4, "blocked", "Bloqué")

  protected constructor(private _id: number, private _code: string, private _representation: string) {}

  get code(): string {
    return this._code
  }

  get id(): number {
    return this._id
  }

  static get All(): Status[] {
    return [ Status.Todo, Status.Ongoing, Status.Done, Status.Blocked ]
  }

  public is(other: Status): boolean {
    return this._id === other._id
  }

  public toString(): string {
    return this._representation
  }

  static fromId(id: number): Status {
    switch (id) {
      case 1:
        return Status.Todo
      case 2:
        return Status.Ongoing
      case 3:
        return Status.Done
      case 4:
        return Status.Blocked
      default:
        throw new Error(`Unknown status id: ${id}`)
    }
  }
}