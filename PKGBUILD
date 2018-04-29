# Maintainer: sumt <sumt at sci dot fi>

_name=Mini-AMF
pkgname=python2-mini-amf
pkgver=0.9.1
pkgrel=1
pkgdesc="Minimal AMF encoder and decoder for Python"
arch=('x86_64')
url="https://github.com/zackw/mini-amf"
license=('MIT')
depends=('python2-six' 'python2-defusedxml')
makedepends=('python2-setuptools')
provides=(python2-mini-amf=$pkgver)
conflicts=(python2-mini-amf)
source=("https://files.pythonhosted.org/packages/source/${_name::1}/${_name}/${_name}-${pkgver}.tar.gz")
md5sums=('fb6dc76e798ee76a2d58408427b2b341')

package() {
  cd "$_name-$pkgver"
  python2 setup.py install --root="$pkgdir/" --optimize=1
}

