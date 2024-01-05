export class ResponseModel<T> {
  constructor(public status: number, public message: string, public data?: T) {}
}
