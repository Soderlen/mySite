import { connect } from "react-redux";
import { compose } from "redux";
import { WithAuthRedirect } from "../Hoc/withAutchRedirect";
import Content from "./content";

let mapStatetoProps = (state) => {
    return { ContentPage_: state.ContentPage,tisAuth:state.AuthPage.isAuh };
}
let mapDispatchToProps = (dispatch) => {
    return { Add: (text_) => { dispatch({ type: "Add", text: text_ }) } };
}



const ContentConteiner = connect(mapStatetoProps, mapDispatchToProps)(Content);

export default compose(connect(mapStatetoProps, mapDispatchToProps),WithAuthRedirect)(Content)//ContentConteiner;