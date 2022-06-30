# Maintainer: weearc <qby19981121@gmail.com>
# Co-Maintainer: axon-oicq <axon-oicq@riseup.net>

pkgname=libaxon-bin
_pkgname=libaxon
pkgver=1.0.2
pkgrel=6
pkgdesc='Nodejs backend for purple-oicq'
url='https://github.com/axon-oicq/axon'
license=(Unlicense)
depends=('glibc')
options=('!strip')
install=${_pkgname}.install
arch=(x86_64)
provides=('axon' 'libaxon')
optdepends=('pidgin: For GUI usage of oicq'
            'finch: For cli usage of oicq'
            'purple-oicq: libpurple protocol support for oicq'
            'purple-oicq-git: libpurple protocol support for oicq, git version'
            'systemd: systemd daemon service support')
source=("http://ci.hackflow.org/job/oicq-axon/16/artifact/dist/oicq-axon-linux-x64.gz"
        "libaxon.install"
        "libaxon@.service"
        "libaxon_user.service")
sha256sums=("5b434fec1f9793631914b47681c48063ae3089eae3209accf2a048b9069f84b0"
	    "6251c002f240591219638b1ef487f532a2874cef836f0ec91c62643416de7bca"
	    "060ad920889af99dcbece1351a4373215780c5457df7da8637d4f84594db5a02"
	    "42f97054314ceb0356d007217d5c3781afbd8dc4d1aceaa1877aeb2764ee88fe")

package() {
  install -Dm755 oicq-axon-linux-x64 ${pkgdir}/usr/bin/${_pkgname}
  install -Dm644 "libaxon@.service" "${pkgdir}/usr/lib/systemd/system/libaxon@.service"
   install -Dm644 "libaxon_user.service" "${pkgdir}/usr/lib/systemd/user/libaxon.service"
}
