module.exports={
	'/connect?*': {
		method: 'post',
		handler: function(req,
		res){
			returnres.json({
				"Url": "/signalr",
				"ConnectionToken": "EO9usQYOJ9VjMVUKmeEDuWb6HxFodOEtIg4WgZNdNg1KYg8Nann7bRq04Fmc/d6SAXrEk/+Lv3oXLXGdT92lPT2pkQrcedkiq8M1bTBbTcalZvewIyg2xxIYmWqgvu6TIUlGDiAHF38ix02W8n12cC/2qis5BQnM+fDUYxLfiztfTfKfjCeARPNSsPlD1MgOnb6qOgahV6yuWABzysleN2Jga1viQKvrK2JJDQIBTSrXCMdYn/iXI7DLfY1uaE/HUzaY0Q5/VQfeoHKEx8WRhqn2LfUpWeFw4CRtFmsPIwLRnJW3ah+z7yxKcD4m3CBq",
				"ConnectionId": "598c97bf-ba77-468d-8a2e-5ec16d2c85a6",
				"KeepAliveTimeout": 20.0,
				"DisconnectTimeout": 30.0,
				"ConnectionTimeout": 110.0,
				"TryWebSockets": false,
				"ProtocolVersion": "1.5",
				"TransportConnectTimeout": 5.0,
				"LongPollDelay": 0.0
			});
		}
	}
};