
export class ApiBaseError extends Error {
    constructor(message?: string)  {
        super(message)
        this.name = "ApiBaseError"
    }
}

export class NetworkError extends ApiBaseError {
    constructor(message = "Network Error!") {
        super(message)
        this.name = "NetworkError"
    }
}

export class ValidationError extends ApiBaseError {
    constructor(message = "Validation Mismatch!") {
        super(message)
        this.name = "ValidationError"
    }
}

export class ApiError extends ApiBaseError {
    constructor(
        public status: number,
        message = "API error! dsfgsdfgsdfgsdfgsdfgsdfgsdfg"
    ) {
        super(message)
        this.name = "ApiError"
    }
}