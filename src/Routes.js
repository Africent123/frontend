import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import decode from "jwt-decode";



// FREE

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ResetPawwordPage from "./pages/ResetPawwordPage";
import TermsofusePage from "./pages/TermsofusePage";
import CpLoginPage from "./pages/CpLoginPage.js";


import ProfilePage from "./pages/ProfilePage";
import EditprofilePage from "./pages/EditprofilePage";
import MovielistPage from "./pages/MovielistPage";
import CategoryPage from "./pages/CategoryPage";

import UserpaymentPage from "./pages/UserpaymentPage";
import UserlistPage from "./pages/UserlistPage";
import PaymentPage from "./pages/PaymentPage";
import RecentlywatchedPage from "./pages/RecentlywatchedPage";
import WatchlaterPage from "./pages/WatchlaterPage";
import SavedvideoPage from "./pages/SavedvideoPage";
import ProviderpaymentPage from "./pages/ProviderpaymentPage";
import ContentproviderprofilePage from "./pages/ContentproviderprofilePage";
import MovieuploadPage from "./pages/MovieuploadPage";
import ProvidermovielistPage from "./pages/ProvidermovielistPage";
import SelectplanPage from "./pages/SelectplanPage";


import AdminCategoryPage from "./pages/AdminCategoryPage";
import AdminContentproviderPage from "./pages/AdminContentproviderPage";
import AdminUserpaymentPage from "./pages/AdminUserpaymentPage";
import AdminMovielistPage from "./pages/AdminMovielistPage";
import AdminUserlistPage from "./pages/AdminUserlistPage"
import ProviderslistPage from "./pages/ProviderslistPage";



import HistoryPage from "./pages/HistoryPage";
import ContentproviderPage from "./pages/ContentproviderPage";
import PlansPage from "./pages/PlansPage";
import Watch from "./pages/watch.js";
import WatchMoviePage from "./pages/WatchMoviePage";


const AppRouter = ({auth,tokenname,Component,path, ...rest}) =>{
  if(auth){
    //get token from local storage
    var authfromstorage = localStorage.getItem(tokenname);
    //console.log(path, "Route path")
    if(authfromstorage){
     return <Route {...rest} render= {renderProps => (<Component />) } />
    }else{
      //No token redirect to login
     return <Redirect to='/login' />
    }
  }else{
    return <Route path={path} render= {renderProps => <Component /> } />
  }
}





class Routes extends React.Component {

  checkAuth () {
    const token = localStorage.getItem('token');
    if(!token) {
      return false;
    }
    try {
      const payload = decode(token);
      if(payload.exp < Date.now() / 1000) {
        //console.log(payload.exp)
        return false;
      }
      else{
        return true;
      }
    }
    catch(e){
      return false;
    }
  } 

  render() {
    const isAuth = this.checkAuth()
    return (
      <Switch>
        <AppRouter path="/movies" Component={MovielistPage} auth={true} tokenname="token" />
        <AppRouter exact path="/WatchMovie" component={WatchMoviePage} auth={true} tokenname="token" />
        <AppRouter exact path="/moviecategory" component={CategoryPage} auth={true} tokenname="token" />
        <AppRouter exact path="/history" component={HistoryPage} auth={true} tokenname="token" />
        <AppRouter exact path="/profile" component={ProfilePage} auth={true} tokenname="token" />
        <AppRouter exact path="/editprofile" component={EditprofilePage} auth={true} tokenname="token" />
        

        <AppRouter exact path="/admin/providerslist" component={ProviderslistPage} auth={true} tokenname="token"/>
        <AppRouter exact path="/admin/moviecategory" component={AdminCategoryPage} auth={true} tokenname="token"/>
        <AppRouter exact path="/admin/movies" component={AdminMovielistPage} auth={true} tokenname="token"/>
        <AppRouter exact path="/admin/registercontentprovider" component={AdminContentproviderPage} auth={true} tokenname="token"/>
        <AppRouter exact path="/admin/Selectplan" component={SelectplanPage} auth={true} tokenname="token"/>
        <AppRouter exact path="/admin/userlist" component={AdminUserlistPage} auth={true} tokenname="token"/>
        <AppRouter exact path="/admin/userpayment" component={AdminUserpaymentPage} auth={true} tokenname="token"/>



        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/reset" component={ResetPawwordPage} />
        <Route exact path="/terms" component={TermsofusePage} />
        <Route exact path="/cp" component={CpLoginPage} />


        <Redirect from="/login" to="/movies" />
        {/* <Route exact path="/movies" component={MovielistPage} /> */}
       
        
        
        
        <Route exact path="/userpayment" component={UserpaymentPage} />
        <Route exact path="/userlist" component={UserlistPage} />
        <Route exact path="/payment" component={PaymentPage} />
        
        <AppRouter exact path="/provider/recentlywatched" component={RecentlywatchedPage} auth={true} tokenname="cptoken"/>
        <AppRouter exact path="/provider/watchlater" component={WatchlaterPage} auth={true} tokenname="cptoken"/>
        <AppRouter exact path="/provider/savedvideo" component={SavedvideoPage} auth={true} tokenname="cptoken"/>
        <AppRouter exact path="/provider/payment" component={ProviderpaymentPage} auth={true} tokenname="cptoken"/>
        <AppRouter exact path="/provider/profile" component={ContentproviderprofilePage} auth={true} tokenname="cptoken"/>
        <AppRouter exact path="/provider/movieupload" component={MovieuploadPage} auth={true} tokenname="cptoken"/>
        <AppRouter exact path="/provider/movielist" component={ProvidermovielistPage} auth={true} tokenname="cptoken"/>
        
	      
       
        <Route exact path="/ContentproviderPage" component={ContentproviderPage} />
        <Route exact path="/plans" component={PlansPage} />
        {/* {
          !isAuth && 
          <Route render={function (){
            return <Redirect to="/login" />
          }}/>
        } */}

        

       
        
        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
