var config = {
	client_id: "c6351bf1ec32f93010b1d38ceeaea6e138d8e7d2",
	authorization: "https://launchpad.37signals.com/authorization/new?type=web_server",
	client_secret: "de2b736120821d2ac3436b0f1a46f635fc4236b9",
	redirect_uri: "http://gilberk1.github.io/BC3",
	response_type: 'code',
	token: "https://launchpad.37signals.com/authorization/token"
};

var j = new jso.JSO(config);

j.callback();

var opts = {

};

j.getToken(opts).then((token) => {
    console.log("I got the token: ", token)
 });