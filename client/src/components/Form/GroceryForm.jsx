// Dependencies
import React from 'react';

// Styled-Components + ChakraUI
import { Box, Input, Button } from '@chakra-ui/core';

// Formik
import { Formik, Form, Field } from 'formik';

const GroceryForm = () => {
  return (
    <Formik
      initialValues={{ item: '', quantity: '' }}
      onSubmit={(data, { resetForm }) => {
        console.log(`Formik Data:`, data);
        resetForm();
      }}
    >
      {({ values }) => (
        <Form>
          <Field
            as={Input}
            placeholder="Item"
            name="item"
            value={values.item}
          />
          <Field
            as={Input}
            placeholder="Quantity"
            name="quantity"
            value={values.quantity}
          />
          <Button type="submit">Add Grocery</Button>
        </Form>
      )}
    </Formik>
  );
};

export default GroceryForm;
