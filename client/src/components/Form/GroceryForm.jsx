// Dependencies
import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

// Styled-Components + ChakraUI
import { Box, Button, Stack } from '@chakra-ui/core';

// Formik
import { Formik, Form } from 'formik';
import ValidatorField from './Helpers/ValidatorField';
import { formValid } from './Helpers/validators';

// Redux
import addItem from '../../actions/addItem';
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item))
});

const GroceryForm = (props) => {
  return (
    <Formik
      initialValues={{ item: '', quantity: '' }}
      validationSchema={formValid}
      onSubmit={async (data, { resetForm }) => {
        const { item, quantity } = data;
        const uuid = uuidv4();

        props.addItem({ uuid, item, quantity });

        try {
          await axios.post('/groceries', { uuid, item, quantity });
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

const ConnectedForm = connect(null, mapDispatchToProps)(GroceryForm);

export default ConnectedForm;
