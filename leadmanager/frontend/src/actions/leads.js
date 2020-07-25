import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from './types';

// GET LEADS
export const getLeads = () => (dispatch, getState) => {
  axios
    .get('/api/leads/', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_LEADS,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE LEAD
export const deleteLead = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/leads/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteLead: 'Image Deleted' }));
      dispatch({
        type: DELETE_LEAD,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// export const addLead = (lead) => (dispatch, getState) => {
//   const config = {
//     headers: {
//       Authorization: `Token a2a3ad1398de12d60456e9a5cc3f769e23b44f63055f361b14fa8995c5f540fa`,
//       'Content-Type': 'multipart/form-data; boundary=--- WebKitFormBoundary7MA4YWxkTrZu0gW',
//     },
//   };
//   axios
//     .post('/api/leads/', lead, config, tokenConfig(getState))
//     .then((res) => {
//       dispatch(createMessage({ addLead: 'Lead Added' }));
//       dispatch({
//         type: ADD_LEAD,
//         payload: res.data,
//       });
//     })
//     .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
// };

// export const addLead = ({ name, email, message, image }) => (dispatch, getState) => {
//   // Headers
//   const config = {
//     headers: {
//       Authorization: `Token ${tokenConfig}`,

//       'Content-Type': 'multipart/form-data',
//     },
//   };

//   const lead = JSON.stringify({ name, email, message, image });

//   axios
//     .post('/api/leads/', lead, config, tokenConfig(getState))
//     .then((res) => {
//       dispatch(createMessage({ addLead: 'Details Updated' }));
//       dispatch({
//         type: ADD_LEAD,
//         payload: res.data,
//       });
//     })
//     .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
// };
