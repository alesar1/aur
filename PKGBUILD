pkgname="rpc-old"
pkgver="1.0.0"
pkgrel="1"
pkgdesc="Old rpc.h files"
arch=("any")
license=("custom")
url="https://sites.uclouvain.be/SystInfo/usr/include/rpc/"
source=(
	"https://sites.uclouvain.be/SystInfo/usr/include/rpc/auth.h"
	"https://sites.uclouvain.be/SystInfo/usr/include/rpc/auth_des.h"
	"https://sites.uclouvain.be/SystInfo/usr/include/rpc/auth_unix.h"
	"https://sites.uclouvain.be/SystInfo/usr/include/rpc/clnt.h"
	"https://sites.uclouvain.be/SystInfo/usr/include/rpc/des_crypt.h"
	"https://sites.uclouvain.be/SystInfo/usr/include/rpc/key_prot.h"
	"https://sites.uclouvain.be/SystInfo/usr/include/rpc/pmap_clnt.h"
	"https://sites.uclouvain.be/SystInfo/usr/include/rpc/pmap_prot.h"
	"https://sites.uclouvain.be/SystInfo/usr/include/rpc/pmap_rmt.h"
	"https://sites.uclouvain.be/SystInfo/usr/include/rpc/rpc.h"
	"https://sites.uclouvain.be/SystInfo/usr/include/rpc/rpc_des.h"
	"https://sites.uclouvain.be/SystInfo/usr/include/rpc/rpc_msg.h"
	"https://sites.uclouvain.be/SystInfo/usr/include/rpc/svc.h"
	"https://sites.uclouvain.be/SystInfo/usr/include/rpc/svc_auth.h"
	"https://sites.uclouvain.be/SystInfo/usr/include/rpc/types.h"
	"https://sites.uclouvain.be/SystInfo/usr/include/rpc/xdr.h"
)
sha512sums=('3f3a6c418eae3d3e6e8eefbcd980692ae6caa38aac540bb904beabad6b3c3a62f8b3d13465179f3953686d91b3f77211d8c8c167d936bfd78792058e5060663a'
            'e43a3e910294f3e636d835a2674ab820c22590c1c48b5dae576665f6657f928b3ea37435fdada181ed234ec4b18868665de36b2f01b0c8fc393617d8e433c7a3'
            'bba450a453189cfe134691889ce1b18dd39f5345d3d1ba71797f21b8bc479d4de7fced32d1c2ab9d0a73a33bc82a993558a7689bd590c6a3ff898136349c7d39'
            '934bbc91250eb41a9b9dd90433eb027209a7383048d8a187b835db6cc8b8a51767cf684ca921f8c22623b1c07f72c293f98885c7023621881a00d7421ae58f6e'
            '99f88bcd4f771897f3cacb5e4df1b59b76bb2a5b7b64084431cd9e7ad384e6ed4be4be7f3b0823eb10a43b895894863f52debb0c2c0cd1ee978166b9d31cb144'
            '944dcb4dccecc9c8ce8146aa0a2a7a2d2c7b01d8f5a5aea0f9237bcbce79ef88a8fe3be2ac723e6c40b5b7de3116adf502200d39f9a5483598386eff7d63fb20'
            '606f281da573655ff2a4e02e92893d0a9da16c0ab3bbffc07f611095678e0d828d76518910f34374633b7f52fbcb10b491734dd74eafe7482d6c716d1a237b1d'
            '38771ace86c9222bb6dbc279da10f7029b045200bbee9793c99a7c5e3859e50b0621a0c9601c437fc9f60a29fc2e1560e5abb651488e24638aa26ba1ff4ad32b'
            '6b2733b7959fadbeb60962189119146dec8ca3b7428c96e520c0a2babe06583d7dd4bf4bd62c4a2376c5d8e07e1fe88859c11a24e2b728add82f5f1eaa6d1314'
            '8a577e51baf89863611dcf2f1a4ff875c0764c98fe634269d160c32cfda14f2f5db2b8966e083ba5849fdc0b6427aa47945296fd419d18496cd8bab43dd0674d'
            'e132cb8da6da0603327427188f0dcaef7955a91748cb73ed4c7b63f6c99953f5fca03feb632ee05625813ed514d08804d21bf4a2e5f47eb7665012b7e5adf63a'
            '40678d8599b8942086d9be7c21e3937995ab789bb2017eea8db25c469396b9e52fb496730027e69130b113913bcf87ebf55de9aca33e6040135fc196d6ad25a1'
            '05369e645d6791ec67f9356bff318dd81aa72fc0d2e9d149190580af081ae54c5d1e8f1055b6053ee56221d994c6a2d0470722d63f5a4e91d5bcd577262aa740'
            'fe65b5d0dcb94b44f0a441771a7a8cc5e4e15d21713447e80f590fe6d3a51c2d29153fed2acd3888bd774840ff3c6d727307c86afd0b7f98a71f516e388d306b'
            '1db9f70d1f602c449a4205dcb1c92b6471788e592ecbf85e2c7e1f5ccfc04f7b6607bc2ad949eaa92a8adc3b2a3f7ce8d2a32d02e965a8beddf93f9ec75d8d3c'
            '55d3eff8b3ddb895f0fb7e7ec60cba0c7600012a63c551610d31bf373f35eec1af0f3be85c65be538c02aa8df0411db63dd1f17b92048b93f19b91bd25925a80')
package(){
	mkdir -p $pkgdir/usr/include/rpc
	cp $srcdir/* $pkgdir/usr/include/rpc
}
