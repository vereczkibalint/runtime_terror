export class CategoryValidator {
  nameLengthValidator(value: string): boolean {
    return value.length >= 3;
  }

  hexadecimalColorValidator(value: string): boolean {
    let pattern = new RegExp("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$");
    return pattern.test(value);
  }
}
