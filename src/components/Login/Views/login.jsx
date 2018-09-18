import React from "react";

const LoginFormView = props => {
  const {
    data,
    handleChange,
    handleSubmit
  } = props
  return (
    <form id="login" onChange={handleChange} onSubmit={handleSubmit}>
      <label htmlFor="emailAddress" name="emailAddress">
        Adres email
      </label>
      <input
        name="emailAddress"
        value={data.emailAddress}
      />
      <label htmlFor="password" name="password">
        Hasło
      </label>
      <input
        name="password"
        value={data.password}        
      />
      <button type="submit">Zaloguj się</button>
    </form>
  );
};

export default LoginFormView;