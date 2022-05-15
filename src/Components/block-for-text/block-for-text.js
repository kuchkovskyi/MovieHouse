import './block-for-text.css';

const TextBlock = (props) => {
  return(
    <div className={props.class}>
        <h1 class="tb-title">{props.title}</h1>
        <h2 class="tb-subtitle">{props.subtitle}</h2>
        {props.children}
    </div>
  )
}

export default TextBlock;