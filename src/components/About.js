import React from 'react';
import aboutImage from '../assets/aboutImage.jpg';
import aboutImage2 from '../assets/aboutImage2.jpg';

const About = () => {
    return (
        <div className="about-section">
            <div class="grid-container grid-container--medium-2">
                <article class="about-container">
                    <div class="section-title">
                    <h1 class="about-header">From our family to yours</h1>
                    <div class="section-title__underline"></div>
                    <p class="section-title__text">We're proud to offer the finest quality, most deliciously hand-crafted delicacies in the city today. From our family to yours, we put lots of love and careful attention in each empanada. We hope you enjoy our work as much as we enjoy bringing it to you.</p>
                    </div>
                    <div class="about__img ">
                    <img src={aboutImage2} class="about__img-item" alt="about-img"/>
                    </div>
                </article>
                <article class="about-container">
                    <div class="section-title">
                    <h1 class="about-header">What we do</h1>
                    <p class="section-title__text">We hand make each empanada with the finest ingredients. The sweet yet savoury dough is made with love from a recipe passed down from generation to generation. Each empanada is filled with a delicious meat and vegetable filling!</p>
                    </div>
                    <div class="about__img about__img-special">
                    <img src={aboutImage} class="about__img-item" alt="about-img"/>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default About;
