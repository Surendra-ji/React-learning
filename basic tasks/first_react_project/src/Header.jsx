import bcImage from './assets/background.jpg';

export function Title() {
    return <>
        <h1>Title Name</h1>
    </>
}

export function TitleBackground () {
    return <>
    <div style={{'width': '50%'}}>
        <img src={bcImage} alt="background img" />
        
    </div>
</>
}

