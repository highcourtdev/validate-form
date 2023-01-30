import React from 'react';
import Myform from './Myform'
import { useForm, FormProvider } from 'react-hook-form';

function App() {
  const form = useForm({defaultValues:{firstName:""}});
  const onSubmit = (data) =>console.log(data);
  const onError = (data) =>console.log(data);
  return (
   <FormProvider {...form}>
    <form onSubmit={form.handleSubmit(onSubmit,onError)}>
      <Myform />
    </form>
   </FormProvider>
  );
}

export default App;
