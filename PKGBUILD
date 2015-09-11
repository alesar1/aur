# Maintainer: Konstantin Shalygin (k0ste@cn.ru)

pkgname='ovirt-engine-cli'
pkgver='4.0.0.0'
pkgrel='3'
pkgdesc='oVirt Engine Command Line Interface'
arch=('any')
url='http://www.ovirt.org/CLI'
depends=('python2' 'python2-setuptools' 'python2-ply' 'python2-kitchen' 'ovirt-engine-sdk-python')
optdepends=('virt-viewer: SPICE and VNC remote console support')
makedepends=('python2' 'python2-setuptools' 'python2-ply' 'python2-kitchen')
license=('ASL 2.0')
source=("http://resources.ovirt.org/pub/ovirt-master-snapshot/src/${pkgname}/${pkgname}-${pkgver}.tar.gz"
	"add_password_option.patch")
sha256sums=("7702351f8a38413fa2e25fc583e6aeb2b5ce331bc4632633b6a757ccffd8ffa5"
	    "a973931155cefd35ad5686b0a6cfe3ae595c2bfbb8ecaa152790b10966013370")

prepare() {
  cd "${srcdir}/${pkgname}/src/ovirtcli/infrastructure"
  patch -p0 -i "../../../../add_password_option.patch"
}

build() {
  cd "${srcdir}/${pkgname}"
  /usr/bin/python2 setup.py build
}

package() {
  pushd "${srcdir}/${pkgname}"
  /usr/bin/python2 setup.py install -O1 --skip-build --root ${pkgdir}
  popd
}
