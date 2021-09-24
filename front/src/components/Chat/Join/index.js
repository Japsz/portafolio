import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import AvatarSelector from './AvatarSelector';
const avatars = ['one', 'two', 'three', 'four']
const ChatJoin = (props) => {
    const {setConnected, credential, setCredentials} = props
    const [form, setForm] = useState(() => ({avatar: avatars[Math.floor(Math.random() * 4)], username: ''}))
    return (
        <div className="w-100 h-100 d-flex flex-column align-items-center bg-secondary rounded-3">
            <h3>Join and Chat!</h3>
            <form>
                <div className="form-group">
                    <label for='username'>Username:</label>
                    <div className="d-flex align-items-center">
                        <a class="rounded-circle" data-toggle="collapse" href="#collapseAvatars" role="button" aria-expanded="false" aria-controls="collapseAvatars">
a
                        </a>
                        <input class="form-control" id="username" placeholder="Enter your username" onChange={(e) => setForm(form => {
                            form[e.target.name] = e.target.value
                            return form
                        })}/>
                    </div>

                </div>
                <div class="collapse" id="collapseAvatars">
                    <AvatarSelector
                        setSelected={(number) => setForm(form => {
                            form.avatar = number
                            return form
                        })}
                        selected={form.number}
                    />
                </div>
            </form>
        </div>
    );
};

export default ChatJoin;