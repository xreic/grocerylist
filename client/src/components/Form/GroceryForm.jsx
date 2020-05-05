// Dependencies
import React from 'react';
import axios from 'axios';

// Styled-Components + ChakraUI
import { Box, Button, Stack } from '@chakra-ui/core';

// Formik
import { Formik, Form } from 'formik';
import ValidatorField from './Helpers/ValidatorField';
import { formValid } from './Helpers/validators';

const GroceryForm = () => {
  return (
    <Formik
      initialValues={{ item: '', quantity: '' }}
      validationSchema={formValid}
      onSubmit={async (data, { resetForm }) => {
        const { item, quantity } = data;

        try {
          await axios.post('/groceries', { item, quantity });
        } catch (error) {
          console.error('GroceryForm - Error');
          console.error(error);
        } finally {
          resetForm();
        }
      }}
    >
      {({ values, isSubmitting }) => (
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
            <Button
              isLoading={isSubmitting}
              loadingText={`Adding ${values.item} to groceries`}
              type="submit"
            >
              Add Grocery
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default GroceryForm;
