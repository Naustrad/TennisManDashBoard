import './layout.scss'

const Layout = (props:any) =>{
    return <div className='d-flex flex-column'>
        <div className='d-flex flex-column flex-grow-1 main-div'>
            {props.children}
        </div>
    </div>
}
export default Layout;