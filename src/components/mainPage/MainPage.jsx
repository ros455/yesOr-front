import React from 'react';
import AboutUsMain from './AboutUsSection';
import ProjectsMain from './ProjectsSection';
import CategoriesSection from './CategoriesSection';
import TeamSection from './TeamSection';
import InformationSection from './InformationSection';
import '../../styles/mainPage.scss'
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div>
            <section className='section banner_head'>
                <h1 className='banner_head_title'>YOUR CHOICE IS TO DO GOOD OR...</h1>
                <p className='banner_head_descript'>The first and only social project of its kind</p>
                <div className='banner_head_buttons'>
                    <Link
                     to='/discover'>
                        <button>Discover</button>
                    </Link>
                    <Link
                    to='/new-project'
                    >
                        <button>Start a project</button>
                    </Link>
                </div>
            </section>
            <AboutUsMain/>
            <ProjectsMain/>
            <CategoriesSection/>
            <TeamSection/>
            <InformationSection/>
        </div>
    );
};

export default MainPage;