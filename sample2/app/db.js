module.exports={
			'/pa' : {
				method : 'post',
				handler : function (req, res) {				
					return res.json({me:"you"});
				}
			},
			'/pb' : {
				method : 'get',
				handler : function (req, res) {
						return res.json({me:"you"});
				}
			}
		};