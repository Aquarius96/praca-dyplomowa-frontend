import React from "react";

const RegisterFormView = props => {
  const {
    data,
    handleChange,
    handleSubmit
  } = props
  return (
    <form id="register" onChange={handleChange} onSubmit={handleSubmit}>
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
      <label htmlFor="username" name="username">
        Username
      </label>
      <input
        name="username"
        value={data.username}
      />
      <label htmlFor="firstname" name="firstname">
        Imię
      </label>
      <input
        name="firstname"
        value={data.firstname}
      />
      <label htmlFor="lastname" name="lastname">
        Nazwisko
      </label>
      <input
        name="lastname"
        value={data.lastname}
      />
      <button type="submit">Zarejestruj się</button>
    </form>
  );
};

export default RegisterFormView;