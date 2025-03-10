import React, {useState} from 'react';
import ProjectPage from '../project/ProjectPage';
import ProjectListTemplate from '../project/ProjectListTemplate';
import { Link } from 'react-router-dom';
const SavedProject = ({savedProjects}) => {
    return (
        <div className='project_wrap'>
            {savedProjects && savedProjects.length != 0 && savedProjects.map((item,idx) => (
                <Link to={`/project/${item._id}`} key={item._id}>
                <ProjectListTemplate item={item}/>
                </Link>
            ))}
        </div>
    );
};

export default SavedProject;