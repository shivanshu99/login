import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads, deleteLead } from '../../actions/leads';

export class Leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteLead: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getLeads();
  }

  render() {
    return (
      <Fragment>
        <h2>Images</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>

              <th>Uploaded Image</th>
              <th>Upload Date</th>
              <th>Delete Image</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.leads.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.id}</td>

                <img height="100px" width="200px" src={lead.image}></img>
                <td>{lead.created_at}</td>
                <td>
                  <button
                    onClick={this.props.deleteLead.bind(this, lead.id)}
                    className="btn btn-danger btn-sm"
                  >
                    {' '}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  leads: state.leads.leads,
});

export default connect(mapStateToProps, { getLeads, deleteLead })(Leads);

// import React, { Component, Fragment } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { getLeads, deleteLead } from '../../actions/leads';

// export class Leads extends Component {
//   static propTypes = {
//     leads: PropTypes.array.isRequired,
//     getLeads: PropTypes.func.isRequired,
//     deleteLead: PropTypes.func.isRequired,
//   };

//   componentDidMount() {
//     this.props.getLeads();
//   }

//   render() {
//     return (
//       <Fragment>
//         <h2>Leads</h2>
//         <table className="table table-striped">
//           <thead>
//             <tr>
//               <th>No</th>
//               <th>Image</th>
//               <th />
//             </tr>
//           </thead>
//           <tbody>
//             {this.props.leads.map((lead) => (
//               <tr key={lead.id}>
//                 <td>{lead.id} .</td>
//                 <img height="100px" width="200px" src={lead.image}></img>
//                 <td>
//                   <button
//                     onClick={this.props.deleteLead.bind(this, lead.id)}
//                     className="btn btn-danger btn-sm"
//                   >
//                     {' '}
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </Fragment>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   leads: state.leads.leads,
// });

// export default connect(mapStateToProps, { getLeads, deleteLead })(Leads);
