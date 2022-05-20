import { ErrorDetails } from "./errorDetails"

export interface ValidationErrorDetails {
  Errors: ErrorDetails[]
  Message: string
  StatusCode: number
}
