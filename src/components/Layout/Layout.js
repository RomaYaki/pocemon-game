import style from './Layout.module.css';

const Layout = ({title, urlBg, colorBg, children}) => {
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
                    <div className={`${style.descr} ${style.full}`}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    )
};

export default Layout;