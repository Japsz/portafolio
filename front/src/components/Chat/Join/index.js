import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import AvatarSelector, { avatars } from './AvatarSelector';
import SelectedAvatar from './AvatarSelector/selectedAvatar';
import {setUser} from '../FirebaseWrapper/auth'
import * as axios from 'axios'
const ChatJoin = ({setCredentials, credential}) => {
    const [form, setForm] = useState(() => {
        console.log({credential})
        if(!!credential) {
            return { avatar: credential.icon, username: credential.username}
        }
        return ({ avatar: avatars[Math.floor(Math.random() * 4)], username: '' })
    })
    const data = useStaticQuery(graphql`
    query AvatarsQuery {
      allFile(filter: {base: {in:["one.png", "two.png", "three.png", "four.png"]}}) {
        nodes {
          base
          name
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
      }
    }`)
    const onSubmit = (e) => {
        e.preventDefault();
        axios.post("http://api.bmeneses.io/chat/join",{icon: form.avatar, username: form.username}).then(res => {
            setUser(res.data)
            setCredentials(res.data)
        })
    }
    const isUsernameValid = /^[a-zA-Z0-9]{3,10}$/i.test(form.username)
    return (
        <div className="d-flex flex-column align-items-center rounded-3 p-4">
            <h3>Join and Chat!</h3>
            <form onSubmit={onSubmit} className="d-flex flex-column">
                <div className="form-group mx-auto" style={{ width: 'fit-content' }}>
                    <div className="d-flex align-items-center">
                        <SelectedAvatar selected={form.avatar} data={data} />
                        <input
                            className={`form-control ms-2 ${isUsernameValid ? 'is-valid' : form.username === '' ? '' : 'is-invalid'}`}
                            id="username"
                            name="username"
                            placeholder="Username"
                            value={form.username}
                            onChange={(e) => setForm({
                                ...form,
                                [e.target.name]: e.target.value,
                            })}
                            required
                        />
                    </div>
                    {isUsernameValid ? (
                        <div className="valid-feedback d-block fs-7 text-end mt-0">
                            Looks Good!
                        </div>
                    ) : form.username === '' ? null : (
                        <div className="invalid-feedback d-block fs-8 text-center mt-0">
                            Must be 3 to 10 characters long and alphanumeric only.
                        </div>
                    )}
                </div>
                <div className="form-group">
                    <div className="d-flex flex-column align-items-center">
                        <span className="fs-7 text-center" role="button" tabIndex={0} data-bs-toggle="collapse" data-bs-target="#collapseAvatars" aria-controls="collapseAvatars">
                            Change Avatar
                        </span>
                        <div className="collapse" id="collapseAvatars">
                            <AvatarSelector
                                data={data}
                                setSelected={(avatar) => setForm({
                                    ...form,
                                    avatar
                                })}
                                selected={form.avatar}
                            />
                        </div>

                    </div>
                </div>
                <button type="submit" className="btn btn-primary mx-auto mt-3" disabled={!isUsernameValid}>Connect</button>
            </form>
        </div>
    );
};
export default ChatJoin;