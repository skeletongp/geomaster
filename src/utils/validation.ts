interface Rule {
  field: string;
  required?: boolean;
  min?: number;
  max?: number;
  pattern?: RegExp;
  message?: string;
  type?: string;
}

const rules: Rule[] = [
  {
    field: "name",
    required: true,
    max: 25,
    message: "El nombre es requerido y debe tener menos de 25 caracteres",
  },
  {
    field: "location",
    required: true,
    message: "La ubicación es requerida",
  },
 
  {
    field: "priority",
    type: "number",
    required: true,
    message: "El campo prioridad es requerido",
  },
  {
    field: "reference",
    type: "string",
    required: true,
    message: "El campo referencia es requerido",
  },
];

function validateForm(form: { [key: string]: any }): { [key: string]: string } {
  const errors: { [key: string]: string } = {};

  rules.forEach((rule) => {
    const value = form[rule.field];
    if (rule.required && !value) {
      errors[rule.field] =
        rule.message || `El campo ${rule.field} es requerido`;
    } else if (rule.min && value.length < rule.min) {
      errors[rule.field] =
        rule.message ||
        `El campo ${rule.field} debe tener al menos ${rule.min} caracteres`;
    } else if (rule.max && value.length > rule.max) {
      errors[rule.field] =
        rule.message ||
        `El campo ${rule.field} no debe tener más de ${rule.max} caracteres`;
    } else if (rule.pattern && !rule.pattern.test(value)) {
      errors[rule.field] =
        rule.message ||
        `El campo ${rule.field} no cumple con el patrón requerido`;
    } else if (rule.type && typeof value !== rule.type) {
      errors[rule.field] =
        rule.message || `El campo ${rule.field} debe ser de tipo ${rule.type}`;
    }
  });

  return errors;
}

export default validateForm;
