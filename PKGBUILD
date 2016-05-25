# Maintainer: Konstantin Shalygin <k0ste@cn.ru>
# Contributor: Konstantin Shalygin <k0ste@cn.ru>

pkgname='ovirt-engine-cli'
pkgver='3.6.2.1'
pkgrel='2'
pkgdesc='oVirt Engine Command Line Interface'
arch=('any')
url="http://www.ovirt.org/develop/release-management/features/infra/cli"
depends=('python2' 'python2-setuptools' 'python2-ply' 'python2-kitchen' 'ovirt-engine-sdk-python')
optdepends=('virt-viewer: SPICE and VNC remote console support')
makedepends=('python2' 'python2-setuptools' 'python2-ply' 'python2-kitchen')
license=('ASL 2.0')
source=("http://resources.ovirt.org/pub/ovirt-4.0-snapshot/src/${pkgname}/${pkgname}-${pkgver}.tar.gz"
	"add_password_option.patch")
sha256sums=('4e27066db1a1dcf551cac04d139f019fa004fac7b1449c96b1efdba20829d55d'
            'a973931155cefd35ad5686b0a6cfe3ae595c2bfbb8ecaa152790b10966013370')

prepare() {
  pushd "${srcdir}/${pkgname}/src/ovirtcli/infrastructure"
  patch -p0 -i "../../../../add_password_option.patch"
  popd
}

build() {
  pushd "${srcdir}/${pkgname}"
  python2 setup.py build
  popd
}

package() {
  pushd "${srcdir}/${pkgname}"
  python2 setup.py install -O1 --skip-build --root ${pkgdir}
  popd
}
