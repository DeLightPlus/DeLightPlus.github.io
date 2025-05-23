
import './WorkExperience.css';
import React, { useState } from 'react';

const WorkExperience = () => {
    const [isFollowed, setIsFollowed] = useState(false);
    return (
        <div className="work-experience-container" id="timeline"> {/* Timeline */}
            <div className="work-experience-cards">
                <div className="work-card">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">2019</div>

                    <div className="card-content">
                        <div className="card-header">
                            <div className="header-left">
                            <img
                                className="avatar"
                                alt="EXPO"
                                src="/assets/Expo2.jpg"
                            />
                            <div className="user-info">
                                <h4 className="name">Mentorship Program </h4>
                                <h5 className="username">@Eskom_Expo </h5>
                            </div>
                            </div>
                            <button
                                className={`follow-btn ${isFollowed ? "unfollow" : "follow"}`}
                                onClick={() => setIsFollowed(!isFollowed)}
                            >
                            {isFollowed ? "Unfollow" : "Follow"}
                            </button>
                        </div>

                        <div className="card-body">
                            <p>
                                Participated in the 
                                <span>Eskom Expo for Young Scientists</span> mentorship program, 
                                gaining valuable insights into research, project development, and scientific presentations.
                            </p>
                            <span className="hashtag">
                            #Discover_Your_Future
                            <span role="img" aria-label="computer" className="emoji">
                                💻
                            </span>
                            </span>
                        </div>

                        <div className="card-footer">
                            <div className="footer-item">
                                <p className="footer-number">4</p>
                                <p className="footer-label">Following</p>
                            </div>
                            <div className="footer-item">
                            <p className="footer-number">97.1K</p>
                            <p className="footer-label">Followers</p>
                            </div>
                        </div>
                    </div>                    
                </div>

                <div className="work-card">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">2022</div>
                    <div className="card-content">
                        <div className="card-header">
                            <div className="header-left">
                            <img
                                className="avatar"
                                alt="ICT"
                                src="/assets/ul-logo.jpg"                        
                            />
                            <div className="user-info">
                                <h4 className="name">Computer Laboratory Student Assistant</h4>
                                <h5 className="username">@University_of_Limpopo, ICT</h5>
                            </div>
                            </div>
                            <button
                                className={`follow-btn ${isFollowed ? "unfollow" : "follow"}`}
                                onClick={() => setIsFollowed(!isFollowed)}
                            >
                            {isFollowed ? "Unfollow" : "Follow"}
                            </button>
                        </div>

                        <div className="card-body">
                            <p>
                                Assisted students and staff with technical support in the computer lab, 
                                helped with software installations, and maintained hardware systems.
                            </p>
                            <span className="hashtag">
                            #Finding_Solution_For_Africa
                            <span role="img" aria-label="computer" className="emoji">
                                💻
                            </span>
                            </span>
                        </div>

                        <div className="card-footer">
                            <div className="footer-item">
                            <p className="footer-number">4</p>
                            <p className="footer-label">Following</p>
                            </div>
                            <div className="footer-item">
                            <p className="footer-number">97.1K</p>
                            <p className="footer-label">Followers</p>
                            </div>
                        </div>
                    </div>                    
                </div>

                <div className="work-card">
                    <div className="timeline-dot"></div>
                    <div className="timeline-date">2024-2025</div>
                    <div className="card-content">
                        <div className="card-header">
                            <div className="header-left">
                            <img
                                className="avatar"
                                alt="mlab"
                                src="/assets/codetribe.png"
                            />
                            <div className="user-info">
                                <h4 className="name">Web & Mobile Development <br/>
                            </h4>
                                <h5 className="username">@<span>Code</span>Tribe <span>academy</span>
                                <small> (03/2024 - 03/2025) </small> </h5>
                            </div>
                            </div>
                            <button
                                className={`follow-btn ${isFollowed ? "unfollow" : "follow"}`}
                                onClick={() => setIsFollowed(!isFollowed)}
                            >
                            {isFollowed ? "Unfollow" : "Follow"}
                            </button>
                        </div>

                        <div className="card-body">
                            <p>
                                Enrolled in <strong><span>Code</span>Tribe <span>academy</span></strong>, 
                                focusing on <span>Android, iOS, and Web solutions,</span> 
                                with training in <span>cloud technologies,</span> agile project management, 
                                and soft skills for career development.
                            </p>
                            <span className="hashtag">
                            #CodeTribe
                            <span role="img" aria-label="computer" className="emoji">
                                💻
                            </span>
                            </span>
                        </div>

                        <div className="card-footer">
                            <div className="footer-item">
                            <p className="footer-number">4</p>
                            <p className="footer-label">Following</p>
                            </div>
                            <div className="footer-item">
                            <p className="footer-number">97.1K</p>
                            <p className="footer-label">Followers</p>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>    
        </div>
  );
};

export default WorkExperience;
