# Contributor: Florijan Hamzic <florijanh@gmail.com>

_pkgname="python-rjsmin"
pkgname="${_pkgname}"
pkgver=1.0.10
pkgrel=1
pkgdesc="rJSmin is a javascript minifier written in python"
arch=('i686' 'x86_64')
url="https://github.com/ndparker/rjsmin"
license=('APACHE')
depends=('python>=3.1')
provides=("${_pkgname}")
conflicts=("${_pkgname}")
source=(https://github.com/ndparker/rjsmin/archive/${pkgver}.tar.gz package.cfg.diff)
md5sums=('2dfd534af5511a2629e40d515d718695' 'c1b1135c5dfd0663d1389acbd2c1750d')

build(){
  cd "${srcdir}"
  patch -p1 -i ../package.cfg.diff
}

package() {
    cd "${srcdir}/rjsmin-${pkgver}"

      python setup.py install --root="$pkgdir" --prefix=/usr
}
