      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyCIryndxA7urXOYK0YZGcGNUODe-1NdY6w",
        authDomain: "copy-board.firebaseapp.com",
        databaseURL: "https://copy-board.firebaseio.com",
        projectId: "copy-board",
        storageBucket: "copy-board.appspot.com",
        messagingSenderId: "824071354726"
      };
      firebase.initializeApp(config);

$(document).ready(function(){
    var firebaseData;

    var database = firebase.database();

    let odm_mobile_data = [ {
        "id" : 0,
        "mask" : "this is my mask",
        "miniapp" : "",
        "name" : "Sample mask",
        "posted_by" : "Anonymous",
        "timestamp" : "2017-09-27T09:43:58Z",
        "tinyurl" : "https://copy-board.firebaseapp.com/boards/lifion/0"
      }, {
        "id" : 1,
        "mask" : "{\n    \"action\": \"editing\",\n    \"editContext\": \"global\",\n    \"editing\": \"b0800c994e68426e93e1146b877ff02d\",\n    \"viewing\": [\n        \"a4f3cdf0207540fa84e536e07fb5c744\",\n        \"c9d8aa37e2b3492a8abf08cc7ba54db6\",\n        \"1c56e8f8e29a43a9b306b63cbaf67919\",\n        \"56c818cb29e04e2e889fe831dcf62754\",\n        \"93da3ebac0e341228ce54b4a6532a277\",\n        \"54f7590d287c3d515fe4a1c8\",\n        \"1bcf948277e34bc5a715faded361b098\",\n        \"194d711e3f6d4132bf3080dde0aae33d\",\n        \"3d16efcc5ca94aef9b6879a2f162ff12\",\n        \"7dcdadb7c7654a7ab662aed640201b42\",\n        \"de008de3606546c2803ea83c051bc795\",\n        \"170f260fa7a248b6a36175e5a255af37\",\n        \"527856dbfa8a4e00a9e49c7f760d267d\",\n        \"42de181f6fbf45dc892f5ce1d6080b4e\",\n        \"9d73d975d297445fb98d4479fdf9b37e\",\n        \"f77daea672fa4556901f01829799183a\",\n        \"9793d5ce73284653a5f32a08ab697970\",\n        \"100000000000000000100000\",\n        \"a08185db28ab4177aa3f1cc22571b987\",\n        \"f23db25e785541d2ac9d9ab5e3db5fa3\",\n        \"35eb549c9b904274b4534312c69e0f6b\",\n        \"0029300df0ec4432a620c84928416da7\",\n        \"041573e3a55c40caac3d1b9538111205\",\n        \"4af6adf9e327482d9bb6693043c8ffe0\",\n        \"fda0ea53bab647849c0fdb409f5c6c74\",\n        \"100000000000000000000710\",\n        \"633a2492013641098082a07ede0ad386\",\n        \"b2f3f4aa2eb34fb990950766f3cf5d97\",\n        \"bcfd71671a9a438f97902d6420b40c06\",\n        \"12bcfd742d1941ee92003740812a12d2\",\n        \"5ae669949a4d485e879601ff6cbc2bb4\",\n        \"12ed8592e0a54dc4a3c6cb4c302e1342\",\n        \"953dd1e19e90486a8f023f9e60be4f72\",\n        \"2afbe36cc544496b9abb23bda6c4f664\",\n        \"4d18e1b83d764e99a6f2b334837070e3\",\n        \"c7b2080266304ef183ee0218e9b71720\",\n        \"5c666ce779fb4a26856d847492a6866c\",\n        \"0dbde31d6e9548b2a156f909f2c6061c\",\n        \"191f28cc8d0e47b5ba7e6440a4fb4f5b\",\n        \"67708b0912f248d3884ffc3ba0ac3b4f\",\n        \"1ff9cbb4c68d4f75a7583cc0b4df2453\",\n        \"02e71b0bf19849fbbab8008ae25c966e\",\n        \"1a3777fb2e3e4cde827f970287f647a4\",\n        \"b45a54f658894f2ca8c5374250568887\",\n        \"7533fc13feec43798fb77bcda155af58\",\n        \"23c68c713b1441e589ca3e60c7dbcc0a\",\n        \"b6b74d12136749929d64e7c7499df96f\",\n        \"42aa8776e17a4310938cd263b69e507e\",\n        \"d850e10b3bfc4802aa6f898db51c9ee9\",\n        \"a27911af8e5a4ab4be86597f2118fac9\",\n        \"19a52f6b7a2746ecac2e102c51c6cf8f\",\n        \"4dc65ae4f8a745f5b202751e6d902363\",\n        \"9ae58fe2adac499da8bfb5a78b33d90d\",\n        \"1b30475b65a64a51865c61e0b175a7f0\",\n        \"aae7a65335bf4273abbfff14bf1e78df\",\n        \"53625a67d35a49ba8210d871f687d09f\",\n        \"3a362ad6e60b4da9bccab5f7a144bc28\",\n        \"26920d6152a647c284240a01f7ff5f10\",\n        \"b281004f037a4c049da11b40e2cfc689\",\n        \"d46f676b63604d05b9faadc204a421bb\",\n        \"60b4b67e6f0f4898a9b84c4a538d543d\",\n        \"d3d95dead24d45cdba23d84bd5ad4d8f\",\n        \"7ebba43c5e1e47bba6a9fd3bb384f774\",\n        \"34a9bb81cde0491a92b3b2f110f242b4\",\n        \"b668742a581a47ad867b8ad1a0370622\",\n        \"517976dad3c04af28a412ba442caf729\",\n        \"d72ed6297a0b402299414f5a0458230f\",\n        \"7a1f1b4717b14fb8b6022a8d79ac650f\",\n        \"dfb3d18c4d104c568e6009b362574a88\",\n        \"ac56c6fbdf124b479b00a39f62af6b69\",\n        \"d9c79b8b539e4db5a06e1ffaf4f88218\",\n        \"1bae44cccd55445d91883992612c455b\",\n        \"100000000000000000000450\",\n        \"100000000000000000000460\",\n        \"ec146354604a48d4ad89aa1cfa5c38c8\",\n        \"4499e047a38a419f9dd821136e3fe712\",\n        \"54746823082c4365b2488067cb2888bd\",\n        \"e35704e476264a44bcdf0c94ed6e5d51\",\n        \"dc01c5cd044e40948f3dd72407bb227d\",\n        \"0c5f51aad70b41e6831b0a3dd99f0815\",\n        \"21787de7d6c04905a9de52a3a0f62266\",\n        \"b9f528b59ab54cbeb97646654bd8f7c9\",\n        \"c0a1b4dc2f424233989c9211eda41b8a\",\n        \"5e8f663672104499ac668fd09f5644ee\",\n        \"dae91041abac41edaabcc4de7a67d71d\",\n        \"54701c11a07745ba93105f8c1ecfda36\",\n        \"a2e82ccef4a4467caab306896bbd0a7c\",\n        \"678fbe312726490896609691811c68c8\",\n        \"93ffc3985b424166aeb9ebd5aeef9714\",\n        \"30a5ae67c1c348e29d1b2d9276d719a2\",\n        \"550cf1ca14ac4479aeaae35a8902b77d\",\n        \"eb9654b76a68428ea96c5727dfeb93d3\",\n        \"100000000000000000000199\",\n        \"bceddb3bc6ac46c5907a5eb86772b2cf\",\n        \"75f5dea82b0044e3a4a3708664d0c0eb\",\n        \"7c4c6d8d132d4de88191dad41de3c2fc\",\n        \"a2fc0cc8dfda415eb9c3574898ec43f9\",\n        \"cc94186fcd344dddab88f277e7c7781a\",\n        \"a0fac3b3224b4fc9937e06b76daa2680\",\n        \"ccb74e3a7a1d425ab2e367ba7596a203\",\n        \"c57564f1467e4e8d989f2c2d067fdef2\",\n        \"6ccf658fb3a848159c5452ab5cca1970\",\n        \"100000000000000000015000\",\n        \"2be9f876ce874c7cb09fbde73c1ed46b\",\n        \"100000000000000000002212\",\n        \"b5a78984354b4840b8cff7d64f7b1f38\",\n        \"1c2b3213f7b749729727812ac9a99c5d\",\n        \"350d42e095aa4764b83bcbc49dc7fc1a\",\n        \"9904ec987fea4002bb519d62e83487b5\",\n        \"165431de4dc94a81a7fd3554560db0c1\",\n        \"3be8e1e11c00461385fcecba4cf2af37\",\n        \"c90fb0f4af054cbb98d1a96bd7de80c0\",\n        \"41510a6dfb0c4c57a0946587bf0a99dc\",\n        \"70be216767494ec3a88d73fe76b28955\",\n        \"afb05cc25b374e0691f9fbae520b7188\",\n        \"7b87b296484c4c8e9fe766f27b363133\",\n        \"a3fc1d7849e04132a2604717aea84247\",\n        \"4ce5f0971e6f4d20ad22a1a856721257\",\n        \"8ff0bf997120427bb4467e0500fb5933\",\n        \"8fbdf3a4d8894b0e90b78922c4277fee\",\n        \"032976e8de7c49d98e861c3694d70cb3\",\n        \"aa5533f1a959469dbf3014c9e0f92ccd\",\n        \"1a7585942e1d40269be28ebfbcb667ce\",\n        \"f30b008398ce487cae6f0f8bb80240cc\",\n        \"b1027100c5a74f12b7207c338345122e\",\n        \"100000000000000000000001\",\n        \"985d712afec8485fa7d396bcaa7f6ef5\",\n        \"100000000000000000000200\",\n        \"be40dd48edbd4d8eb840c4f3a720863b\",\n        \"7ef69a16967e4bc7b9d58e9761b4ab13\",\n        \"694b772c0a334d4196e0f20ac4d7bb19\",\n        \"40dc4cb431be4e2cbbea521687d4418e\",\n        \"44011171c3344e62b2547f4ec5fac58f\",\n        \"c2b4cf3fde454b4499e35ba35373c3c1\",\n        \"95b471aacf01405385932479d26c8bfc\",\n        \"48367b3447f44355a5e13f49697a7a32\",\n        \"93f7c5957e3c4b91960ce3a80ed22e5f\",\n        \"5aec1edefe2f4f15a73261b253b613f0\",\n        \"207ae0a44e4e428da224007bf81d32be\",\n        \"8f6106d77def469597e44fb19dc764f5\",\n        \"99135a627c1d4aa1865c65917650ffce\",\n        \"975f1e04f4dc4c5eab0f862bd1c87a72\",\n        \"dd35099c933b487ca64b81b95b957fda\",\n        \"e4f8b080fada43b0b0fc51cbf63947b3\",\n        \"080e8e8a313d495d8cd71e77c6a23602\",\n        \"9a4852711add4d5d82c4ee800ac7a409\",\n        \"b0800c994e68426e93e1146b877ff02d\",\n        \"5c261d146f454a328000283e4a683946\",\n        \"78d7e8a2d3e849298ed9514581afe8fe\",\n        \"9586803b12b649cfb68172fd6da692b6\",\n        \"67c9fdaf479046918d2e5d6a05caf828\",\n        \"689de328a44f43e0a156eb3f358e1ff9\",\n        \"0ff0c526418f4eb8a8235a5b563e6bee\",\n        \"10c997e9b9ad49bc9d07fd2432d90ee5\",\n        \"7d150da7a85d409b87f6d52eb30d2f88\",\n        \"34d9146b0e5e4fa084eee7fdf22e4a6f\",\n        \"100000000000000000002214\",\n        \"100000000000000000002215\",\n        \"768b2d56d7084813b7176824d76fa76e\",\n        \"f4b9e68ee2ae4573b78f5ecb27063e33\",\n        \"bd74722672004d9f85743e5e1eec781a\",\n        \"4434f422f267472f8abb548a607d82b5\",\n        \"5cd4e0cc4ad340b28032036bbdea3682\",\n        \"f976bbf9039548ba964fbd99d269d07c\",\n        \"2a6da505a41f46598580e57b98a8ce06\",\n        \"e10014aaed42439cb4c3f4a794aaeb0d\",\n        \"4bc7f174830346fd8b9e0154b336e9fb\"\n    ],\n    \"branchId\": \"59c9ef1f3ee3414500ff7e83\",\n    \"parentBranchId\": \"aaaabbbbccccddddeeeeffff\"\n}",
        "miniapp" : "",
        "name" : "delete mask",
        "posted_by" : "spandana.tamilisetti@adp.com",
        "timestamp" : "2017-09-27T09:43:58Z",
        "tinyurl" : "https://copy-board.firebaseapp.com/boards/lifion/1"
      }, {
        "id" : 2,
        "mask" : "{\n    \"action\": \"editing\",\n    \"editContext\": \"global\",\n    \"editing\": \"b0800c994e68426e93e1146b877ff02d\",\n    \"viewing\": [\n        \"a4f3cdf0207540fa84e536e07fb5c744\",\n        \"c9d8aa37e2b3492a8abf08cc7ba54db6\",\n        \"1c56e8f8e29a43a9b306b63cbaf67919\",\n        \"56c818cb29e04e2e889fe831dcf62754\",\n        \"93da3ebac0e341228ce54b4a6532a277\",\n        \"54f7590d287c3d515fe4a1c8\",\n        \"1bcf948277e34bc5a715faded361b098\",\n        \"194d711e3f6d4132bf3080dde0aae33d\",\n        \"3d16efcc5ca94aef9b6879a2f162ff12\",\n        \"7dcdadb7c7654a7ab662aed640201b42\",\n        \"de008de3606546c2803ea83c051bc795\",\n        \"170f260fa7a248b6a36175e5a255af37\",\n        \"527856dbfa8a4e00a9e49c7f760d267d\",\n        \"42de181f6fbf45dc892f5ce1d6080b4e\",\n        \"9d73d975d297445fb98d4479fdf9b37e\",\n        \"f77daea672fa4556901f01829799183a\",\n        \"9793d5ce73284653a5f32a08ab697970\",\n        \"100000000000000000100000\",\n        \"a08185db28ab4177aa3f1cc22571b987\",\n        \"f23db25e785541d2ac9d9ab5e3db5fa3\",\n        \"35eb549c9b904274b4534312c69e0f6b\",\n        \"0029300df0ec4432a620c84928416da7\",\n        \"041573e3a55c40caac3d1b9538111205\",\n        \"4af6adf9e327482d9bb6693043c8ffe0\",\n        \"fda0ea53bab647849c0fdb409f5c6c74\",\n        \"100000000000000000000710\",\n        \"633a2492013641098082a07ede0ad386\",\n        \"b2f3f4aa2eb34fb990950766f3cf5d97\",\n        \"bcfd71671a9a438f97902d6420b40c06\",\n        \"12bcfd742d1941ee92003740812a12d2\",\n        \"5ae669949a4d485e879601ff6cbc2bb4\",\n        \"12ed8592e0a54dc4a3c6cb4c302e1342\",\n        \"953dd1e19e90486a8f023f9e60be4f72\",\n        \"2afbe36cc544496b9abb23bda6c4f664\",\n        \"4d18e1b83d764e99a6f2b334837070e3\",\n        \"c7b2080266304ef183ee0218e9b71720\",\n        \"5c666ce779fb4a26856d847492a6866c\",\n        \"0dbde31d6e9548b2a156f909f2c6061c\",\n        \"191f28cc8d0e47b5ba7e6440a4fb4f5b\",\n        \"67708b0912f248d3884ffc3ba0ac3b4f\",\n        \"1ff9cbb4c68d4f75a7583cc0b4df2453\",\n        \"02e71b0bf19849fbbab8008ae25c966e\",\n        \"1a3777fb2e3e4cde827f970287f647a4\",\n        \"b45a54f658894f2ca8c5374250568887\",\n        \"7533fc13feec43798fb77bcda155af58\",\n        \"42f20e81627f46b4974939511cdd9fd6\",\n        \"b6b74d12136749929d64e7c7499df96f\",\n        \"42aa8776e17a4310938cd263b69e507e\",\n        \"d850e10b3bfc4802aa6f898db51c9ee9\",\n        \"a27911af8e5a4ab4be86597f2118fac9\",\n        \"19a52f6b7a2746ecac2e102c51c6cf8f\",\n        \"4dc65ae4f8a745f5b202751e6d902363\",\n        \"9ae58fe2adac499da8bfb5a78b33d90d\",\n        \"1b30475b65a64a51865c61e0b175a7f0\",\n        \"aae7a65335bf4273abbfff14bf1e78df\",\n        \"53625a67d35a49ba8210d871f687d09f\",\n        \"3a362ad6e60b4da9bccab5f7a144bc28\",\n        \"26920d6152a647c284240a01f7ff5f10\",\n        \"5f143a17d23642f1b0e4c838ee1b8f0e\",\n        \"d46f676b63604d05b9faadc204a421bb\",\n        \"60b4b67e6f0f4898a9b84c4a538d543d\",\n        \"d3d95dead24d45cdba23d84bd5ad4d8f\",\n        \"7ebba43c5e1e47bba6a9fd3bb384f774\",\n        \"34a9bb81cde0491a92b3b2f110f242b4\",\n        \"b668742a581a47ad867b8ad1a0370622\",\n        \"517976dad3c04af28a412ba442caf729\",\n        \"d72ed6297a0b402299414f5a0458230f\",\n        \"7a1f1b4717b14fb8b6022a8d79ac650f\",\n        \"dfb3d18c4d104c568e6009b362574a88\",\n        \"ac56c6fbdf124b479b00a39f62af6b69\",\n        \"d9c79b8b539e4db5a06e1ffaf4f88218\",\n        \"1bae44cccd55445d91883992612c455b\",\n        \"100000000000000000000450\",\n        \"100000000000000000000460\",\n        \"ec146354604a48d4ad89aa1cfa5c38c8\",\n        \"4499e047a38a419f9dd821136e3fe712\",\n        \"54746823082c4365b2488067cb2888bd\",\n        \"e35704e476264a44bcdf0c94ed6e5d51\",\n        \"dc01c5cd044e40948f3dd72407bb227d\",\n        \"0c5f51aad70b41e6831b0a3dd99f0815\",\n        \"21787de7d6c04905a9de52a3a0f62266\",\n        \"b9f528b59ab54cbeb97646654bd8f7c9\",\n        \"c0a1b4dc2f424233989c9211eda41b8a\",\n        \"5e8f663672104499ac668fd09f5644ee\",\n        \"dae91041abac41edaabcc4de7a67d71d\",\n        \"54701c11a07745ba93105f8c1ecfda36\",\n        \"a2e82ccef4a4467caab306896bbd0a7c\",\n        \"678fbe312726490896609691811c68c8\",\n        \"93ffc3985b424166aeb9ebd5aeef9714\",\n        \"30a5ae67c1c348e29d1b2d9276d719a2\",\n        \"550cf1ca14ac4479aeaae35a8902b77d\",\n        \"eb9654b76a68428ea96c5727dfeb93d3\",\n        \"100000000000000000000199\",\n        \"bceddb3bc6ac46c5907a5eb86772b2cf\",\n        \"75f5dea82b0044e3a4a3708664d0c0eb\",\n        \"7c4c6d8d132d4de88191dad41de3c2fc\",\n        \"a2fc0cc8dfda415eb9c3574898ec43f9\",\n        \"cc94186fcd344dddab88f277e7c7781a\",\n        \"a0fac3b3224b4fc9937e06b76daa2680\",\n        \"ccb74e3a7a1d425ab2e367ba7596a203\",\n        \"c57564f1467e4e8d989f2c2d067fdef2\",\n        \"6ccf658fb3a848159c5452ab5cca1970\",\n        \"100000000000000000015000\",\n        \"2be9f876ce874c7cb09fbde73c1ed46b\",\n        \"100000000000000000002212\",\n        \"b5a78984354b4840b8cff7d64f7b1f38\",\n        \"1c2b3213f7b749729727812ac9a99c5d\",\n        \"350d42e095aa4764b83bcbc49dc7fc1a\",\n        \"9904ec987fea4002bb519d62e83487b5\",\n        \"165431de4dc94a81a7fd3554560db0c1\",\n        \"3be8e1e11c00461385fcecba4cf2af37\",\n        \"c90fb0f4af054cbb98d1a96bd7de80c0\",\n        \"a9d1c4b8dce04f72a2f5b2b67a0697d1\",\n        \"70be216767494ec3a88d73fe76b28955\",\n        \"afb05cc25b374e0691f9fbae520b7188\",\n        \"7b87b296484c4c8e9fe766f27b363133\",\n        \"a3fc1d7849e04132a2604717aea84247\",\n        \"4ce5f0971e6f4d20ad22a1a856721257\",\n        \"8ff0bf997120427bb4467e0500fb5933\",\n        \"8fbdf3a4d8894b0e90b78922c4277fee\",\n        \"032976e8de7c49d98e861c3694d70cb3\",\n        \"aa5533f1a959469dbf3014c9e0f92ccd\",\n        \"1a7585942e1d40269be28ebfbcb667ce\",\n        \"f30b008398ce487cae6f0f8bb80240cc\",\n        \"b1027100c5a74f12b7207c338345122e\",\n        \"100000000000000000000001\",\n        \"985d712afec8485fa7d396bcaa7f6ef5\",\n        \"100000000000000000000200\",\n        \"be40dd48edbd4d8eb840c4f3a720863b\",\n        \"7ef69a16967e4bc7b9d58e9761b4ab13\",\n        \"694b772c0a334d4196e0f20ac4d7bb19\",\n        \"40dc4cb431be4e2cbbea521687d4418e\",\n        \"44011171c3344e62b2547f4ec5fac58f\",\n        \"c2b4cf3fde454b4499e35ba35373c3c1\",\n        \"95b471aacf01405385932479d26c8bfc\",\n        \"48367b3447f44355a5e13f49697a7a32\",\n        \"93f7c5957e3c4b91960ce3a80ed22e5f\",\n        \"5aec1edefe2f4f15a73261b253b613f0\",\n        \"207ae0a44e4e428da224007bf81d32be\",\n        \"8f6106d77def469597e44fb19dc764f5\",\n        \"99135a627c1d4aa1865c65917650ffce\",\n        \"975f1e04f4dc4c5eab0f862bd1c87a72\",\n        \"dd35099c933b487ca64b81b95b957fda\",\n        \"e4f8b080fada43b0b0fc51cbf63947b3\",\n        \"080e8e8a313d495d8cd71e77c6a23602\",\n        \"9a4852711add4d5d82c4ee800ac7a409\",\n        \"b0800c994e68426e93e1146b877ff02d\",\n        \"bc4ea29d0afd44e5973d06232ec386ca\",\n        \"78d7e8a2d3e849298ed9514581afe8fe\",\n        \"470625d91ad54afc8e8af78a29514981\",\n        \"67c9fdaf479046918d2e5d6a05caf828\",\n        \"689de328a44f43e0a156eb3f358e1ff9\",\n        \"0ff0c526418f4eb8a8235a5b563e6bee\",\n        \"10c997e9b9ad49bc9d07fd2432d90ee5\",\n        \"7d150da7a85d409b87f6d52eb30d2f88\",\n        \"34d9146b0e5e4fa084eee7fdf22e4a6f\",\n        \"100000000000000000002214\",\n        \"100000000000000000002215\",\n        \"768b2d56d7084813b7176824d76fa76e\",\n        \"f4b9e68ee2ae4573b78f5ecb27063e33\",\n        \"bd74722672004d9f85743e5e1eec781a\",\n        \"4434f422f267472f8abb548a607d82b5\",\n        \"5cd4e0cc4ad340b28032036bbdea3682\",\n        \"f976bbf9039548ba964fbd99d269d07c\",\n        \"2a6da505a41f46598580e57b98a8ce06\",\n        \"e10014aaed42439cb4c3f4a794aaeb0d\",\n        \"4bc7f174830346fd8b9e0154b336e9fb\"\n    ],\n    \"branchId\": \"59c1f9fb4660a34300801afa\",\n    \"parentBranchId\": \"aaaabbbbccccddddeeeeffff\"\n}",
        "miniapp" : "",
        "name" : "FAN",
        "posted_by" : "Akash",
        "timestamp" : "2017-09-27T09:46:53Z",
        "tinyurl" : "https://copy-board.firebaseapp.com/boards/lifion/2"
      }];          
    
    
    //place this on top of function call
    var list = "<ul class='css-treeview'>"

    $.each(odm_mobile_data, loop);
    
    function loop(key, value) {
        list += "<li>"
        list += "<input type='checkbox' id='item-0'/>"
        
        //object
        if(value instanceof Object) {
            list += "<label>"+key+"</label>"
            list += "<ul>"
            $.each(value, loop)
            list += "</ul>"
        } else {
            const type = typeof value;
            if(type === "number") {
                list += "<a>"+key+": "+value+"</a>"
            }
            if(type === "string" && value.length>500) {
                list += "<a>"+key+": \""+value.substr(0,100)+"...\" </a>"
            }
            else if(type === "string") {
                list += "<a>"+key+": \""+value+"\" </a>"
            }
        }

        list += "</li>"
    }

    list += "</ul>"
    
    //$('#treeview').html(list)

    //
    var ref2 = database.ref().child('boards/lifion');
    var list2;

    ref2.on('value', snapshot => {
        
        var data = snapshot.val();
        parse(data)
    });

    var parse = function(data) {
        list2 = "<ul class='css-treeview'>"
        Object.keys(data).map(function(key, value) {
            console.log(typeof value)
            list2 += "<li>"
            list2 += "<input type='checkbox' id='item-0'/>"
            //recursion
            
                list2 += "<label>"+key+"</label>"
                list2 += "<ul>"
                    list2 += "<li>child</li>"
                list2 += "</ul>"
            
        })
        list2 += "</ul>"
    }
    
});





