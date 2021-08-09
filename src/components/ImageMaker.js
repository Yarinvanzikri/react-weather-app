export default function ImageMaker(props) {
    return <img src={require(`../icons/${props.icon}.png`).default} alt='img'/>
}