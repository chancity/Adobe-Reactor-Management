import { connect } from 'react-redux'
import {Paginator as PaginatorC} from "../../../components/Paginator";

const mapStateToProps = (state)=> {
    return {
        pagination: state.meta.pagination,
        loaded: state.loaded
    }
};


const Paginator = connect(mapStateToProps,null)(PaginatorC);
export default 	Paginator;

