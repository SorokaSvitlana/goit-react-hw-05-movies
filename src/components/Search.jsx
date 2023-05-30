import { useForm } from 'react-hook-form';

const Search = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmitForm = (data, e) => {
    if (!data.movieSearch) {
      errors.movieSearch = {
        type: 'required',
        message: 'Search field cannot be empty',
      };
    }
    if (Object.keys(errors).length === 0) {
      onSubmit({ query: data.movieSearch });
      reset();
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      {errors.movieSearch && <div>{errors.movieSearch?.message}</div>}
      <input name="movieSearch" type="text" {...register('movieSearch')} />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;