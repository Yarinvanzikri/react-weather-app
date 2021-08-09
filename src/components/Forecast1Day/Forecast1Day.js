import WeekDays from '../WeekDays/WeekDays';
import ImageMaker from "../ImageMaker";
import './Forecast1Day.css'
export default function Forecast1Day(props) {
    return  (
        <div className='weatherDay'>
            <WeekDays day={props.day}/>
            <ImageMaker icon={props.icon}/>
            <div>
                <span>{props.temperature}°c</span>
                <span>{' '+props.description}</span>
            </div>
        </div>
    );
}