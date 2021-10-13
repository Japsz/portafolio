import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import AvatarSelector, {avatars} from './AvatarSelector';

const ChatJoin = (props) => {
    const {setConnected, credential, setCredentials} = props
    const [form, setForm] = useState(() => ({avatar: avatars[Math.floor(Math.random() * 4)], username: ''}))
    const data = useStaticQuery(graphql`
    query AvatarsQuery {
      allImageSharp(filter: {fixed: {originalName: {in: ["one.png", "two.png", "three.png", "four.png"]}}}) {
        edges {
          node {
            id
            fixed {
              originalName
            }
            gatsbyImageData(layout: FIXED)
          }
        }
      }
    }`)
    const selectedAvatar =  data ? data.allImageSharp.edges.find(({node: {fixed: {originalName}}}) => originalName === form.avatar) : null
    return (
        <div className="w-100 h-100 d-flex flex-column align-items-center bg-secondary rounded-3">
            <h3>Join and Chat!</h3>
            <form>
                <div className="form-group">
                    <label for='username'>Username:</label>
                    <div className="d-flex align-items-center">
                        <button data-toggle="collapse" data-target="#collapseAvatars" type="button" aria-expanded="false" aria-controls="collapseAvatars">
                          {selectedAvatar && <GatsbyImage image={selectedAvatar.node.gatsbyImageData} alt="your avatar"/>}  
                        </button>
                        <input className="form-control" id="username" placeholder="Enter your username" onChange={(e) => setForm(form => {
                            form[e.target.name] = e.target.value
                            return form
                        })}/>
                    </div>
                </div>
                <div className="collapse" id="collapseAvatars">
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