import React from "react";
import userLove from '../assets/user-love.svg'; 
import costumer from '../assets/Image.png'; 


export const TestimonialsPage: React.FC = () => {


    return (
        <section id="testimonials" className="testimonialsWrapper">
            <h1>CLIENTS LOVE</h1>
            <div className="costumerMessage">
                <div className="costumerBlock">
                    <img src={userLove} alt="" />
                    <p>
                        “Riddhi is a very good front-end developer. The amount of hard word she put into our Design System (building, maintaining and polishing) is very high. I would recommend her with full confidence on any project that requires a good React developer. We've hired and fired many, but she is of very few that remained with us. We will hire 100% for our next project as she is an amazing addition to any team. Don't skip on her as your next potential hire!”
                    </p>
                    <div className="costumerProfile">
                        <img src={costumer} alt="" />
                        <div className="costumerName">
                            <p>Eugen Esanu</p>
                            <span>Founder, Shosho Design</span>
                        </div>
                    </div>
                </div>
                <div className="costumerBlock">
                    <img src={userLove} alt="" />
                    <p>
                        “Riddhi has been an incredible asset to our team and a joy to work with. She leads the project with responsibility and initiative, consistently enhancing features and offering thoughtful suggestions. Her ability to explain technical details to non-technical clients and deliver excellent demos on time is remarkable. Always supportive and collaborative, she truly elevates the team's performance. I’m grateful to have her on board!”
                    </p>
                    <div className="costumerProfile">
                    <img src={costumer} alt="" />
                    <div className="costumerName">
                        <p>Eugen Esanu</p>
                        <span>Founder, Shosho Design</span>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
