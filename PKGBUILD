# Maintainer: Morgenstern <charles [at] charlesbwise [dot] com> 
# Contributor: Slithery <aur [at] slithery [dot] uk>

pkgname=linode-cli
pkgver=5.2.0
pkgrel=2
pkgdesc="Linode API wrapper"
arch=('any')
url="https://github.com/${pkgname%%-cli}/${pkgname}"
license=('BSD')
depends=('python-colorclass'
	 'python-requests' 
	 'python-terminaltables' 
	 'python-yaml')
optdepends=('python-boto: Object Storage plugin')
makedepends=('python-setuptools'
	     'python-wheel')
replaces=('linode-cli-dev')
install="${pkgname}".install
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/${pkgname%%-cli}/${pkgname}/archive/${pkgver}.tar.gz"
	no-python2.patch)
sha256sums=('4b76f9b480bd49be76cdcf6de0fc85f572c71bcfb7152c048e249ade6dee412d'
            '7a3f1e454ffac21db74ad1e1b8575f4246566fb25966b89a2e30fa8215dd8c13')

prepare() {
  cd "${pkgname}-${pkgver}"
  patch --strip=1 --input="${srcdir}/no-python2.patch"
}

build() {
  cd "${pkgname}-${pkgver}" 
  make build
}

package() {
  cd "${pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
  install -Dm0644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
