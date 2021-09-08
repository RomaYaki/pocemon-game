import style from './Layout.module.css';

const Layout = ({ descr, title, urlBg, colorBg }) => {
    const back = urlBg ?
        { backgroundImage: `url(${urlBg})` } :
        { backgroundColor: { colorBg } };

    return (
        <section style = {back} className={style.root}>
            <div className={style.wrapper}>
                <article>
                    <div className={style.title}>
                        <h3>{title}</h3>
                        <span className={style.separator}></span>
                    </div>
                    <div className={style.descr.full}>
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section>
    )
};

export default Layout;