import React from "react";

const LoginForm = props => {
  const {
    loginData,
    handleChange,
    handleSubmit
  } = props
  return (
    <form onChange={handleChange} onSubmit={handleSubmit}>
      <label htmlFor="emailAddress" name="emailAddress">
        Adres email
      </label>
      <input
        name="emailAddress"
        value={loginData.emailAddress}        
      />
      <label htmlFor="password" name="password">
        Hasło
      </label>
      <input
        name="password"
        value={loginData.password}        
      />
      <button type="submit">Zaloguj się</button>
    </form>
  );
};

export default LoginForm;