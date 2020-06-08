import * as React from "react";
import { connect } from "react-redux";
import { loadUsers } from "./actions";
import "./App.css";

export const App = props => {
  React.useEffect(() => {
    props.loadUsers();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {props.loading ? (
          <div>Loading</div>
        ) : props.error ? (
          <div style={{ color: "red" }}>ERROR: {props.error}</div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Active?</th>
                <th>Posts</th>
                <th>Messages</th>
              </tr>
            </thead>
            <tbody>
              {props.data.map(u => (
                <tr key={u.id}>
                  <td>{u.firstName}</td>
                  <td>{u.lastName}</td>
                  <td>{u.active ? "Yes" : "No"}</td>
                  <td>{u.posts}</td>
                  <td>{u.messages}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </header>
    </div>
  );
};

const mapStateToProps = state => ({
  data: state.reduxThunk.data,
  loading: state.reduxThunk.loading,
  error: state.reduxThunk.error
});

const mapDispatchToProps = {
  loadUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
