// Dependencies
import * as yup from 'yup';

// HTML Regex
const containsHTML = (string) => /(<(\w)+>|<\/(\w)+>|<\/>)/.test(string);

// Declarations
const errorHTML = 'No HTML. Thanks my dude.';
const errorRequired = 'This is a required field.';
const itemMax = (num) => `Maximum character length of ${num}.`;
const itemMin = (num) => `Minimum character length of ${num}.`;
const quantMax = (num) => `Maximum number of ${num}.`;
const quantMin = (num) => `Minimum number of ${num}.`;

const formValid = yup.object().shape({
  item: yup
    .string()
    .required(errorRequired)
    .test(errorHTML, errorHTML, (value) => !containsHTML(value))
    .max(64, itemMax(64))
    .min(1, itemMin(1)),
  quantity: yup
    .number()
    .typeError('Quantity must be a number between 1 and 2147483647.')
    .required(errorRequired)
    .max(2147483647, quantMax(2147483647))
    .min(1, quantMin(1))
});

export { formValid };
