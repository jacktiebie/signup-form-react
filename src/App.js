import React, {useState} from "react"

export default function App() {
    
const [data, setData] = useState(
{
email: "",
pwd: "",
pwd2: "",
news: false
}
)

    function handleChange(event) {
    const {name, value, type, checked} = event.target
    setData(prevData => {
        return {
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }
    })
    }
    
    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */
    
    function handleSubmit(event) {
        event.preventDefault()
        
        if(data.pwd == data.pwd2 && data.news == true) {
            console.log("Succesfully signed up")
            console.log("Thanks for signing up for news")
        } else if (data.pwd == data.pwd2) {
            console.log("Sucesfully signed up")
        } else {
            console.log("Password does not match")
        }
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name='email'
                    value={data.email}
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name='pwd'
                    value={data.pwd}
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name='pwd2'
                    value={data.pwd2}
                    onChange={handleChange}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name='news'
                        value={data.news}
                        onChange={handleChange}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
