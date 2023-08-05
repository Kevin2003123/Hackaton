import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, getUsers2 } from "../../redux/actions/user";
import s from "./User.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUse } from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-regular-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import Alert from 'react-bootstrap/Alert';

const User = () => {
  const dispatch = useDispatch();
  const user1Handler = () => {
    dispatch(getUsers());
  };
  const user2Handler = () => {
    dispatch(getUsers2());
  };

  const user1 = useSelector((state) => state.user.users);
  const user2 = useSelector((state) => state.user2.users2);
  return <>
    <div>
      <FontAwesomeIcon icon={faYoutube} />
      <FontAwesomeIcon icon={faCoffee} />
      <FontAwesomeIcon icon={faUser} />
      <div>User</div>

      <button onClick={user1Handler}>GETUSERS1</button>
      <button onClick={user2Handler}>GETUSERS2</button>

      <div className={`d-flex ${s.border} w-100`}>
        <div className="d-flex flex-column w-50">
          {user1?.map((user, index) => (
            <div key={index} className="bg-info">
              <div className="d-flex">
                <label>{"ID: "}</label>
                <div>{user.id}</div>
              </div>
              <div className="d-flex">
                {" "}
                <label>{"Name: "}</label>
                <div>{user.name}</div>
              </div>
              <div className="d-flex">
                <label>{"IsAdmin: "}</label>
                <div>{user.isAdmin ? "true" : "false"}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex flex-column w-50">
          {user2?.map((user, index) => (
            <div key={index} className="bg-danger">
              <div className="d-flex">
                <label>{"ID: "}</label>
                <div>{user.id}</div>
              </div>
              <div className="d-flex">
                {" "}
                <label>{"Name: "}</label>
                <div>{user.name}</div>
              </div>
              <div className="d-flex">
                <label>{"IsAdmin: "}</label>
                <div>{user.isAdmin ? "true" : "false"}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
};

export default User;
