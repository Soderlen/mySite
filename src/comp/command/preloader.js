
let Preloader=(props)=>
{
    return <div>
    {props.isFetching? <img src="./Bean.gif" width="50px" /> : null}
    </div>
}

export default Preloader;