import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { storyCreate } from '~redux/actions/storyActions';
import { Default, Section } from '~/layouts';

// @TODO
// Добавить markdown editor
// Добавить drag n drop загрузку изображения

const Create = () => {
  const state = {
    title: '',
    file: useRef(''),
    image: {
      src: '',
      name: '',
    },
    body: '',
  };
  const [form, setForm] = useState(state);

  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    if (e.target.name === 'file') return setFile();

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(
      storyCreate({ title: form.title, body: form.body, image: form.image }),
    );
  };

  const setFile = () => {
    const reader = new FileReader();

    reader.onload = (e) => {
      setForm({
        ...form,
        image: {
          ...form.image,
          src: reader.result,
          name: form.file.current.files[0].name,
        },
      });
    };

    reader.readAsDataURL(form.file.current.files[0]);
  };

  return (
    <Default>
      <Section>
        <h1>Create story</h1>
      </Section>
      <Section>
        <form onSubmit={onSubmitHandler}>
          <div className='row'>
            <div className='input-field col s6'>
              <input
                id='title'
                type='text'
                className='validate'
                name='title'
                onChange={onChangeHandler}
                value={form.title}
              />
              <label htmlFor='title' className='active'>
                Title
              </label>
            </div>
            <div className='col s6'>
              <div className='file-field input-field'>
                <div className='btn'>
                  <span>Image</span>
                  <input
                    type='file'
                    name='file'
                    id='file-image'
                    onChange={onChangeHandler}
                    ref={form.file}
                  />
                </div>
                <div className='file-path-wrapper'>
                  <input
                    className='file-path validate'
                    type='text'
                    placeholder={form.image.name}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
              <textarea
                id='body'
                name='body'
                className='materialize-textarea'
                onChange={onChangeHandler}
                value={form.body}
              ></textarea>
              <label htmlFor='body' className='active'>
                Body
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
              <button type='submit' className='btn'>
                Submit
              </button>
            </div>
          </div>
        </form>
      </Section>
      <Section>
        <img src={form.image.src} alt='' />
      </Section>
    </Default>
  );
};

export default Create;
