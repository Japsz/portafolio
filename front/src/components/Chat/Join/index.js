import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import AvatarSelector, {avatars} from './AvatarSelector';
import SelectedAvatar from './AvatarSelector/selectedAvatar';

const ChatJoin = (props) => {
    const [form, setForm] = useState(() => ({avatar: avatars[Math.floor(Math.random() * 4)], username: ''}))
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
    return (
        <div className="w-100 h-100 d-flex flex-column align-items-center bg-secondary rounded-3">
            <h3>Join and Chat!</h3>
            <form>
                <div className="form-group">
                    <span>Username:</span>
                    <div className="d-flex align-items-center">
                        <SelectedAvatar selected={form.avatar} data={data}/>
                        <input className="form-control" id="username" name="username" placeholder="Enter your username" onChange={(e) => setForm(form => {
                            form[e.target.name] = e.target.value
                            return form
                        })}/>
                    </div>
                </div>
                <div id="collapseAvatars">
                    <AvatarSelector
                        setSelected={(avatar) => setForm(form => {
                            form.avatar = avatar
                            return form
                        })}
                        selected={form.avatar}
                    />
                </div>
            </form>
        </div>
    );
};
export default ChatJoin;