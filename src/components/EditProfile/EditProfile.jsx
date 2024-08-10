import React, { useState } from 'react'
import { Heading, Input } from "../index"
import { useForm } from "react-hook-form"
import { useSelector, useDispatch } from 'react-redux'
import UserImage from '../Dashboard/ProfileComp/SubProfileComp/UserImage'
import defaultimage from "../images/defaultpp.png"
import CustomBtn from './EditProfSub/CustomBtn.jsx'
import { updateUser, changePassword, uploadImage } from "../../services/authServices.js"
import { setAuthenticated } from '../../store/authSlice.js'
import { ErrorDisplay } from '../index'
import Swal from "sweetalert2"
import "../../../node_modules/@sweetalert2/theme-dark/dark.css"



function EditProfile() {

    //* for dispatching and selecting value and declare states
    const dispatch = useDispatch()
    const user = useSelector(state => state.authAnduser.userData)
    const isAuthenticated = useSelector(state => state.authAnduser.isAuthenticated)
    const { register: registerProfile, handleSubmit: handleSubmitProfile } = useForm();
    const { register: registerPassword, handleSubmit: handleSubmitPassword, watch, formState: { errors }, reset } = useForm();
    const { register: registerimage, handleSubmit: handleSubmitimage, control } = useForm()
    const newpassword = watch("newpassword");
    const [error, seterror] = useState("")
    const [errorProf, seterrorProf] = useState("")
    //* to save changes in the user profile
    const saveChanges = async (data) => {
        // console.log(data);
        if (user === data) { return }
        const userDetails = {
            username: data.username,
            email: data.email,
            fullname: data.fullname,
            _id: data.userId,
            bio: data.bio ? data.bio : "",
            quote: data.quote ? data.quote : "",
            links: data.links ? data.links.split(' ') : [],
        }
        seterrorProf("")
        try {
            const response = await updateUser(userDetails)
            //* here if we reach it means we have got a successful response so all we need is to update the store
            const newUser = {
                fullname: response.data.data.user.fullname,
                userId: response.data.data.user._id,
                email: response.data.data.user.email,
                username: response.data.data.user.username,
                quote: response.data.data.user.quote,
                bio: response.data.data.user.bio,
                coverimage: response.data.data.user.coverimage,
                links: response.data.data.user.links.join(" "),
                followers: response.data.data.user.followers,
                following: response.data.data.user.following,
            }
            dispatch(setAuthenticated({ user: newUser }))
            Swal.fire({
                title: "Details saved successfully",
                text: "Your details has been saved",
                icon: "success"
            });
        } catch (error) {
            seterrorProf(error.message)
        }
    }

    //* to save changes to password
    const savePassword = async (passworddata) => {
        seterror("")
        try {
            const response = await changePassword(passworddata)
            Swal.fire({
                title: "Password changed successfully",
                text: "Your password has been changed",
                icon: "success"
            });
        } catch (error) {
            seterror(error.message)
        } finally {
            reset()
        }
    }

    //* to upload coverimage
    const uploadimage = async (data) => {
        const formData = new FormData();
        formData.append('coverimage', data.fileUpload[0]);
        try {
            const response = await uploadImage(formData)
            const updated = {
                fullname: response.fullname,
                userId: response._id,
                email: response.email,
                username: response.username,
                quote: response.quote,
                bio: response.bio,
                coverimage: response.coverimage,
                links: response.links,
                followers: response.followers,
                following: response.following,

            }
            dispatch(setAuthenticated({ user: updated }))




        } catch (error) {
            console.error('Failed to upload file', error);
        }
    }

    if (!isAuthenticated) return null
    return (
        <div className='min-h-[68vh]'>
            <Heading text="Edit your profile" />
            <div className='flex md:flex-row flex-col md:gap-[150px] justify-center md:items-start items-center md:px-[200px]'>

                <form
                    className='flex flex-col justify-center items-center'
                    onSubmit={handleSubmitimage(uploadimage)}
                >
                    <UserImage imageUrl={user.coverimage || defaultimage} />
                    <input
                        type='file'
                        id='fileUpload'
                        name='coverimage'
                        style={{ display: 'none' }}
                        {...registerimage("fileUpload")}
                        onChange={(e) => {
                            registerimage("fileUpload").onChange(e);
                            handleSubmitimage(uploadimage)();
                        }}
                    >
                    </input>
                    <label
                        htmlFor='fileUpload' // when this label is clicked, it will trigger the file input
                        className='group relative md:min-w-fit w-[140px] flex justify-center py-1 px-4 border
                    border-transparent md:text-[17px] text-10px font-medium rounded-md text-black bg-gradient-to-r
                     from-yellow-300 to-orange-500 hover:bg-gradient-to-r hover:from-black
                     hover:to-black hover:border-[2px] hover:border-[#ffc900] hover:text-[#ffc900]
                     focus:outline-none active:scale-105 transition-all duration-400 ease-out md:mt-[40px] mt-[20px] '
                    >
                        Upload image
                    </label>
                </form>
                <form action="" onSubmit={handleSubmitProfile(saveChanges)}>
                    {(errorProf && <ErrorDisplay message={errorProf} />)}

                    <div>
                        <Input
                            labelFor="userId"
                            labelText="user id"
                            name="userId"
                            id="userId"
                            value={isAuthenticated && `Id : ${user.userId}`}
                            readOnly
                            {...registerProfile("userId")}
                        />
                    </div>
                    <div className='flex md:flex-row flex-col md:gap-[30px]'>
                        <Input
                            labelFor="username"
                            labelText="username"
                            name="username"
                            id="username"
                            defaultValue={isAuthenticated && `${user.username}`}
                            {...registerProfile("username", { required: true })}
                        />
                        <Input
                            labelFor="email"
                            labelText="email"
                            name="email"
                            id="email"
                            defaultValue={isAuthenticated && `${user.email}`}
                            {...registerProfile("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                    </div>
                    <div className='flex md:gap-[30px] md:flex-row flex-col'>
                        <Input
                            labelFor="fullname"
                            labelText="fullname"
                            name="fullname"
                            id="fullname"
                            defaultValue={isAuthenticated && `${user.fullname}`}
                            {...registerProfile("fullname", { required: true })}

                        />
                        <Input
                            labelFor="quote"
                            labelText="quote"
                            name="quote"
                            id="quote"
                            defaultValue={user.quote ? `${user.quote}` : ""}
                            placeholder="enter a quote"
                            {...registerProfile("quote")}
                        />
                    </div>
                    <div className='flex md:gap-[30px] md:flex-row flex-col'>
                        <div className='md:my-8 my-4 flex flex-col gap-[10px]'>
                            <label htmlFor="bio" className="text-gray-300 text-center md:w-[500px] md:text-base text-[12px]">
                                bio
                            </label>
                            <textarea
                                name="bio"
                                id="bio"
                                cols="30" rows="5"
                                defaultValue={user.bio ? `${user.bio}` : ""}
                                className='rounded-lg  block md:w-[500px] w-[300px] px-3 md:py-4 py-2
                        border border-gray-300 placeholder-gray-400 focus:text-[#ffc900]
                        focus:outline-none focus:ring-[#ffc900] focus:border-[#ffc900]
                        focus:z-10 md:text-[16px] text-[10px] active:scale-105 transition-all
                        bg-[#222f3e] duration-300 ease-out text-gray-300'
                                placeholder='your bio'
                                {...registerProfile("bio")}
                            ></textarea>
                        </div>

                        <Input
                            labelFor="links"
                            labelText="social media"
                            name="links"
                            id="links"
                            defaultValue={Array.isArray(user.links) ? user.links.join(" ") : ""} placeholder="social media links"
                            {...registerProfile("links")}
                        />
                    </div>

                    <div className='flex md:justify-start items center justify-center'>
                        <CustomBtn task="Save changes" />
                    </div>
                </form>
            </div>
            <Heading text="Change Password" />
            <div className='flex flex-col items-center justify-center flex-1'>
                {(error && <ErrorDisplay message={error} />)}
                <form action="" onSubmit={handleSubmitPassword(savePassword)} className='flex flex-col items-center'>
                    <Input
                        labelFor="oldpassword"
                        labelText="Old Password"
                        type="password"
                        name="oldpassword"
                        id="oldpassword"
                        placeholder="enter old password"
                        {...registerPassword("oldpassword", { required: { value: true, message: "Old password is required" } })}
                    />
                    <Input
                        labelFor="newpassword"
                        labelText="New Password"
                        type="password"
                        name="newpassword"
                        id="newpassword"
                        placeholder="enter new password"
                        {...registerPassword("newpassword", {
                            required: { value: true, message: " new password is required" },
                            minLength: { value: 8, message: "new password must be at least 8 characters long" }
                        })}
                    />
                    {errors.newpassword && <ErrorDisplay message={errors.newpassword.message}></ErrorDisplay>}
                    <Input
                        labelFor="confirmpassword"
                        labelText="Confirm New Password"
                        type="password"
                        name="confirmpassword"
                        id="confirmpassword"
                        placeholder="confirm new password"
                        {...registerPassword("confirmpassword", {
                            required: { value: true, message: "Confirm password is required" },
                            validate: value => value === newpassword || "The passwords do not match",
                        })}
                    />
                    {errors.confirmpassword && <ErrorDisplay message={errors.confirmpassword.message}></ErrorDisplay>}

                    <CustomBtn task="Change Password" />
                </form>
            </div>
        </div>
    )
}

export default EditProfile
