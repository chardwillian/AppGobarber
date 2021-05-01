import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach(error => {
    const key = error.path as string;

    validationErrors[key] = error.message;
  });

  return validationErrors;
}
