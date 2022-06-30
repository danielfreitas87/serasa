import React, { Component } from "react";
import { Grid } from "antd";
import { UserForm } from "../../components";

const plantations = ["soja", "milho", "algodão", "café", "cana de açúcar"];

export default class UserRegister extends Component {
  render() {
    return (
      <Grid>
        <h1>Cadastre-se</h1>
        <UserForm plantations={plantations} />
      </Grid>
    );
  }
}
