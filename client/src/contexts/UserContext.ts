import React from 'react';

interface UserContext{

    user: {Wallet:string} ;
    setUser : (user:{Wallet:string})=>void;
}

const GetWallet: () => string = () => {


    return '';
};

const UserContext = React.createContext<UserContext>({
  user: {Wallet:`${GetWallet()}`}, // default value for the user
  setUser: () => {}, // placeholder function
});

export default UserContext;