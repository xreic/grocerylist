// Dependencies
import React from 'react';

// Styled-Components + ChakraUI
import { Box, Button, Stack } from '@chakra-ui/core';

// Formik
import { Formik, Form, Field } from 'formik';
import ValidatorField from './Helpers/ValidatorField';
import { formValid } from './Helpers/validators';

const GroceryForm = () => {
  return (
    <Formik
      initialValues={{ item: '', quantity: '' }}
      validationSchema={formValid}
      onSubmit={(data, { resetForm }) => {
        console.log(`Formik Data:`, data);
        resetForm();
      }}
    >
      {({ values }) => (
        <Form>
          <Stack spacing="1rem">
            <Box>
              <ValidatorField
                type="input"
                placeholder="Item"
                name="item"
                value={values.item}
              />
            </Box>
            <Box>
              <ValidatorField
                type="input"
                placeholder="Quantity"
                name="quantity"
                value={values.quantity}
              />
            </Box>
          </Stack>
          <Button type="submit">Add Grocery</Button>
        </Form>
      )}
    </Formik>
  );
};

export default GroceryForm;
