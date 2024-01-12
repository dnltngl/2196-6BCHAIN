export default function Reactdemo2(){
    return(
        <div className= {`${isRainy === true ? 'dark' : 'light' }`} >
            <RainOrShine/>
        </div>
    );
}
