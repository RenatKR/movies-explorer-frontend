import React from "react";

function AboutMe({ src = 'https://st.depositphotos.com/1008939/3281/i/600/depositphotos_32817757-stock-photo-smiling-man.jpg' }) {
    return (
        <section className="about-me">
            <div className="about-me__container">
                <h2 className="about-me__title">Студент</h2>
                <hr className="about-me__line"></hr>
                <div className="about-me__description">
                    <div><img className="about-me__photo" src={src} alt='Моё фото' /></div>
                    <div className="about-me__text-container">
                        <h3 className="about-me__text_big">Ренат</h3>
                        <p className="about-me__text_medium">Фронтенд-разработчик, 35 лет</p>
                        <p className="about-me__text_small">Меня зовут Ренат. Окончил университет путей сообщений по специальности инженер-прооектировщик. В свободное время увлекаюсь спортом (бег, плавание), люблю слушать музыку. Недавно начал кодить. С 2017 года работаю в проектном бюро.</p>
                        <div className="about-me__container_link">
                            <a className="about-me__text_link" href="https://vk.com/id669040713" target="_blank">Vkontakte</a>
                            <a className="about-me__text_link" href="https://github.com/RenatKR" target="_blank">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;