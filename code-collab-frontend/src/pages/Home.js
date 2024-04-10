import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    const [roomId, setRoomId] = useState('')
    const [username, setUsername] = useState('')

    const createNewRoom = (e) => {
        e.preventDefault()
        const id = uuidv4()
        setRoomId(id)
        toast.success('Created a new room')
    }

    const joinroom = () => {
        if(!roomId){
            toast.error('Room Id is Required!')
            return
        }
        if(!username){
            toast.error('Username is Required!')
            return
        }
        navigate(`/editor/${roomId}`, {
            state: {
                username,
            }
        })
        toast.success('Joined a room succesfully')
    }

    const handleInputEnter = (e) => {
        if(e.code === 'Enter'){
            joinroom()
        }

    }

    return (
        <div className="bg-black h-screen flex justify-center items-center">

        <form class="max-w-md mx-auto border rounded-md border-blue-400 p-10 pt-2">
        <div className="flex justify-center font-thin border-b border-white mb-7 text-3xl items-center p-2 text-yellow-500">Code Collab</div>
            <div class="mb-5">
            <label
                for="roomId"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                Room Id
            </label>
            <input
                type="text"
                id="roomId"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Room ID"
                onChange={(e) => setRoomId(e.target.value)}
                value={roomId}
                onKeyUp={handleInputEnter}
                required
            />
            </div>
            <div class="mb-5">
            <label
                for="username"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                Username
            </label>
            <input
                type="text"
                id="username"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                onKeyUp={handleInputEnter}
                required
            />
            </div>
            {/* link for new room */}
            <div className="mb-5">
            <span className="createInfo text-gray-400">
                If you don't have an invite then create &nbsp;
                <a onClick={createNewRoom} href="" className="createNewBtn text-blue-500">new room</a>
            </span>
            </div>

                <button
                type="submit"
                onClick={joinroom}
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                Join
                </button>
    
            

        </form>
        </div>
    );
};

export default Home;
