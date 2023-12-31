import React, { useRef } from 'react'
import { Editor as BlogEditor } from '@tinymce/tinymce-react';
import { Heading, Input } from "../index"
import Select from "react-dropdown-select";
import CustomBtn from '../EditProfile/EditProfSub/CustomBtn';
import { useForm, Controller } from 'react-hook-form';
import { postBlog, editBlogs } from "../../services/blogServices.js"
import { useDispatch, useSelector } from 'react-redux';
import { loadBlogData, unloadBlogData } from '../../store/blogDataSlice';
import { useNavigate } from 'react-router-dom';
import { loadBlogs } from '../../store/blogSlice';

function Editor() {
  const navigate = useNavigate()
  const blogToedit = useSelector(state => state.blogData.blogData)
  const user = useSelector(state => state.authAnduser.userData)
  const dispatch = useDispatch()
  const genres = [
    { id: 0, name: "Personal" },
    { id: 1, name: "Business" },
    { id: 2, name: "News" },
    { id: 3, name: "Professional" },
    { id: 4, name: "Niche" },
    { id: 5, name: "Lifestyle" },
    { id: 6, name: "Fitness" },
    { id: 7, name: "Food" },
    { id: 8, name: "Travel" },
    { id: 9, name: "Fashion" },
    { id: 10, name: "Beauty" },
    { id: 11, name: "DIY" },
    { id: 12, name: "Finance" },
    { id: 13, name: "Parenting" },
    { id: 14, name: "Health and Wellness" },
    { id: 15, name: "Music" },
    { id: 16, name: "Movie" },
    { id: 17, name: "Car" },
    { id: 18, name: "Gaming" },
    { id: 19, name: "Tech" }
  ];
  let genreDefault = ""
  let blogId = ""
  if (blogToedit) {
    genreDefault = genres.find(genre => genre.name === blogToedit.genre)
    blogId = blogToedit.blogId
  }
  const editorRef = useRef(null);
  const { register, handleSubmit, setValue, watch, control } = useForm();
  const blogtitle = watch("title")
  const bloggenre = watch("genre")
  const savePost = async (data) => {
    if (!editorRef.current) {
      return
    }
    if (!blogId) {
      const blog =
      {
        blogtitle: data.title,
        blogcontent: editorRef.current.getContent(),
        genre: bloggenre ? bloggenre[0].name : blogToedit.genre,
      }
      try {
        const response = await postBlog(blog)
        dispatch(loadBlogs({ blogs: response }))
        dispatch(unloadBlogData())
        navigate("/dashboard")
      }
      catch (error) {
        console.log(error)
      }
    }
    else {
      const blog =
      {
        blogtitle: data.title,
        blogcontent: editorRef.current.getContent(),
        genre: bloggenre ? bloggenre[0].name : blogToedit.genre,
        _id: blogId,
      }
      try {
        const response = await editBlogs(user.userId, blog)
        dispatch(loadBlogs({ blogs: response }))
        dispatch(unloadBlogData())
        navigate("/dashboard")
      } catch (error) {
        console.log(error);
      }

    }
  };

  const saveChanges = (e) => {
    e.preventDefault()
    const storeData = {
      blogtitle: blogtitle ? blogtitle : blogToedit.blogtitle,
      genre: bloggenre ? bloggenre[0].name : blogToedit.genre,
      blogcontent: editorRef.current.getContent(),
      blogId: blogToedit ? blogToedit.blogId : ""
    }

    dispatch(loadBlogData({ blogdata: storeData }))
  }
  return (
    <form onSubmit={handleSubmit(savePost)}>
      <Heading text="Create a new post" />
      <div className='flex md:gap-[30px] md:flex-row flex-col items-center justify-center'>
        <Input
          labelFor="title"
          labelText="Title"
          type="text"
          name="title"
          id="title"
          required
          defaultValue={blogToedit ? blogToedit.blogtitle : ""}
          {...register("title")}
          placeholder="enter the title of you post"
        />
        <div

          className='md:my-8 my-4 flex flex-col gap-[10px]'>
          <label
            htmlFor="genre"
            className="text-gray-300 text-center md:w-[500px] md:text-base text-[12px]">
            Genres
          </label>
          <Controller
            name="genre"
            id="genre"
            control={control} // control from useForm()
            render={({ field }) => (
              <Select
                options={genres}
                labelField='name'
                valueField='id'
                name='genre'
                defaultValue={Array.isArray(genreDefault) ? genreDefault[0] : ""}
                onChange={value => {
                  field.onChange(value);
                  setValue('genre', value)
                }}
                className='custom-dropdown'
                placeholder="Select a genre"
                required
                values={genreDefault ? [genreDefault] : []} />
            )}
          />
        </div>

      </div>
      <div className='flex justify-center items-center md:pt-[100px] pt-[60px] '>
        <BlogEditor
          apiKey='ahqmu977a8032cbp2uk56x6lbfk5a226dkadrmw1wsa4p9rz'
          onInit={(evt, editor) => editorRef.current = editor}
          initialValue={blogToedit?.blogcontent}
          init={{
            width: 1800,
            height: 1000,
            menubar: true,
            plugins: [
              'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
              'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
              'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
            ],
            toolbar: 'undo redo | blocks | ' +
              'bold italic forecolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help ',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:18px;   color: white; background-color: #242530; padding-top: 50px; padding-left:30px; padding-right:30px;} ',
            selector: 'textarea',  // change this value according to your HTML
            skin: (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'oxide-dark' : 'oxide'),
            content_css: '/tinymce.css'
          }}
        />
      </div>
      <div className='flex justify-center items-center md:gap-[20px] gap-[10px] py-[20px]'>
        <CustomBtn task="Upload Post" />
        <CustomBtn
          onClick={saveChanges}
          task="Save Changes" />

      </div>

    </form>
  )
}

export default Editor