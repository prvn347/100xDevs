import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { PostCard } from "../components/PostCard";
import { useEffect, useState } from "react";
import axios from "axios";

export function Blogs(){
    const navigate = useNavigate()

    const token = localStorage.getItem("token");
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
          // Assuming you want to redirect to the dashboard if the user is already authenticated
          navigate("/blogs");
        } else {
          navigate("/signin");
        }
      }, [navigate]);

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get("https://medium-app.sahupravin960.workers.dev/api/v1/blog", {
            headers: {
                Authorization: 'Bearer ' + token //the token is a variable which holds the token
            }
        })
        .then(resp => {
            setBlogs(resp.data.userBlogs)
        })
    }, []);

    return (
        <div>
            <div>
                <Header name2="Write" route2={() => {navigate("/postStories")}} />
            </div>
            <div className="flex flex-col items-center"> {/* Ensure PostCard components are stacked vertically */}
                <span className="font-glory text-2xl font-semibold p-3">My Blogs</span>
                {/* Render each PostCard component inside a block-level container */}
                {blogs.map((blog) => (
                    // @ts-ignore
                    <div key={blog.id} className=""> {/* Use a block-level container to ensure each PostCard appears on a new line */}
                        


                                            {/* @ts-ignore */}
                        <PostCard title={blog.title} content={blog.content} userName={blog.author.name}/>
                    </div>
                ))}
            </div>
        </div>
    );
}
