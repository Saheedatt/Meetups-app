import FirstNavigation from './FirstNavigation';
import classes from './Layout.module.css';
function Layout(props){
    return(
        <div>
            <FirstNavigation />
            <main className={classes.main}>{props.children}</main>
        </div>
    );
    
}
export default Layout;