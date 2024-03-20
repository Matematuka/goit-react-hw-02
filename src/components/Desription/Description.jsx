import css from "./Description.module.css"

const Description = () => {
return (
    <div className={css.decrBox}><h1 className={css.descrHeader}>Sip Happens Café</h1>
    <p className={css.descr}>Please leave your feedback about our service by selecting one of the options below.
    </p>
    </div>
)
}

export default Description