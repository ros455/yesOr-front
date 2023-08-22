import React, { useState, useEffect } from 'react';
import ModalProjectConfirm from './ModalProjectConfirm';
import { Link } from 'react-router-dom';
import { BiAddToQueue } from 'react-icons/bi';
import { TiDocumentDelete } from 'react-icons/ti';
import { Tooltip } from 'react-tooltip'; 
import axios from 'axios';
import { BASE_URL } from '../../http/baseUrl';
import UserHistoryDonat from './userList/UserHistoryDonat';

const AllProjectAdmin = ({ projectArr, verified, handleChangeFunc, setReloadUserData }) => {
    const [isOpenModalConfirm, setIsOpenModalConfirm] = useState(false);
    const [isOpenModalUnConfirm, setIsOpenModalUnConfirm] = useState(false);
    const [isOpenHistory, setIsOpenHistory] = useState(false);
    const [projectMainPage, setProjectMainPage] = useState([]); 

    useEffect(() => {
        axios.get(`${BASE_URL}/get-project-main-page`)
        .then((res) => {
            setProjectMainPage(res.data)
        })
    },[])

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }

        const truncatedText = text.substr(0, maxLength);
        const lastSpaceIndex = truncatedText.lastIndexOf(' ');

        return truncatedText.substr(0, lastSpaceIndex) + '...';
    };

    // const toggleProjectOnMainPage = (project) => {
    //     if (projectMainPage.some((p) => p._id === project._id)) {
    //         setProjectMainPage(projectMainPage.filter((p) => p._id !== project._id));
    //     } else {
    //         setProjectMainPage([...projectMainPage, project]);
    //     }
    // };

    // const isProjectOnMainPage = (project) => {
    //     return projectMainPage.some((p) => p._id === project._id);
    // };

    const handleSendProjectOnMainPage = (item) => {
        axios.post(`${BASE_URL}/add-project-main-page`, {
            projectId: item?.projects?._id
        }).then((res) => {
            setTimeout(() => {
                alert('Project added to main page')
                console.log('res',res);
            },500)
        })
    }
    const handleRemoveProjectFromMainPage = (item) => {
        axios.delete(`${BASE_URL}/remove-project-main-page`, {
            // projectId: item?.projects?._id,
            // currentId: item._id
        }).then((res) => {
            setTimeout(() => {
                alert('Project added to main page')
                console.log('res',res);
            },500)
        })
    }

    console.log('projectMainPage',projectMainPage);
    return (
        <div className="project_wrap">
            <div className="project_header">
                <h4>Full name</h4>
                <h4>Сategory</h4>
                <h4>Main info</h4>
                <h4>Budget</h4>
                <h4></h4>
            </div>
            {projectArr.map((item, idx) => (
                <div key={item._id} className="project_item admin_project_item">
                    <Link
                        to={`/project/${item.projects._id}`}
                        className="project_item admin_project_item"
                    >
                        <p>{item.projects.name}</p>
                        <p>{item.projects.category}</p>
                        <p>{truncateText(item.projects.description, 50)}</p>
                        <p>{item.projects.target}</p>
                    </Link>
                    <div className="admin_project_item_svg">
                        
<img src="./icons/ph_chat-centered-dots-light.svg" alt="" />
                        {!verified ? (
                            <img
                                onClick={() => setIsOpenModalConfirm(!isOpenModalConfirm)}
                                src="./icons/ph_info-light.svg"
                                alt=""
                            />
                        ) : (
                            <img
                                onClick={() => setIsOpenModalUnConfirm(!isOpenModalUnConfirm)}
                                src="./icons/delete.svg"
                                alt=""
                            />
                        )}
                        <img
                            className="history_icon"
                            src="./icons/solar_history-outline.svg"
                            alt=""
                            onClick={() => setIsOpenHistory(!isOpenHistory)}
                        />
                        <div >
                        {true ? (
                            <TiDocumentDelete
                                title="Remove from main"
                                onClick={() => handleRemoveProjectFromMainPage(item)}
                            />
                        ) : (
                            <BiAddToQueue
                                title="Add to the main page"
                                onClick={() => handleSendProjectOnMainPage(item)}
                            />
                        )}
                        </div>
                    </div>
                    <ModalProjectConfirm
                        title={"Confirm Verification?"}
                        isOpenModal={isOpenModalConfirm}
                        setIsOpen={setIsOpenModalConfirm}
                        handleChangeFunc={handleChangeFunc}
                        item={item}
                    />
                    <ModalProjectConfirm
                        title={"Are you sure you want to delete the request?"}
                        isOpenModal={isOpenModalUnConfirm}
                        setIsOpen={setIsOpenModalUnConfirm}
                        handleChangeFunc={handleChangeFunc}
                        item={item}
                    />
                    {/* {isOpenHistory && <UserHistoryDonat 
                    setIsOpen={setIsOpenHistory} 
                    isUser={false} />} */}
                    {isOpenHistory && <UserHistoryDonat 
                          setIsOpen = {setIsOpenHistory}
                          isUser = {false}
                          project={item.projects} />}
                </div>
            ))}
        </div>
    );
};

export default AllProjectAdmin;




// <img src="./icons/ph_chat-centered-dots-light.svg" alt="" />
//                         {!verified ? (
//                             <img
//                                 onClick={() => setIsOpenModalConfirm(!isOpenModalConfirm)}
//                                 src="./icons/ph_info-light.svg"
//                                 alt=""
//                             />
//                         ) : (
//                             <img
//                                 onClick={() => setIsOpenModalUnConfirm(!isOpenModalUnConfirm)}
//                                 src="./icons/delete.svg"
//                                 alt=""
//                             />
//                         )}
//                         <img
//                             className="history_icon"
//                             src="./icons/solar_history-outline.svg"
//                             alt=""
//                             onClick={() => setIsOpenHistory(!isOpenHistory)}
//                         />