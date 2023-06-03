import type { FormEventHandler } from "react";
import React from "react";
import Big from "big.js";

import type { Account } from "../interfaces";

interface FormProps {
  account: Account;
  onSubmit: FormEventHandler;
}

const Form: React.FC<FormProps> = ({ account, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <fieldset id="fieldset">
        <div className="p-2 rounded-lg bg-black text-white text-bold">
          {account.account_id}!
        </div>
        <p className="highlight">
          <label htmlFor="message">Message:</label>
          <input autoComplete="off" autoFocus id="message" required />
        </p>
        <p>
          <label htmlFor="donation">Game fee:</label>
          <input
            autoComplete="off"
            defaultValue={"0"}
            id="donation"
            max={Big(account.amount)
              .div(10 ** 24)
              .toString()}
            min="0"
            step="0.01"
            type="number"
          />
          <span title="NEAR Tokens">Ⓝ</span>
        </p>
        <input id="multiple" type="checkbox" value={0} hidden />
        <button
          className="p-2 rounded-lg bg-black text-white text-bold"
          type="submit"
        >
          Send Club Owner
        </button>
      </fieldset>
    </form>
  );
};

export default Form;
