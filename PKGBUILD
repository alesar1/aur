# Maintainer: Bruce Zhang <zttt183525594@gmail.com>
_name=fuo_local
pkgname=feeluown-local
pkgver=0.2.1
pkgrel=1
pkgdesc="feeluown local plugin"
arch=('any')
url="https://github.com/feeluown/feeluown-local"
license=('GPL3')
depends=('feeluown' 'python-marshmallow' 'python-mutagen' 'python-fuzzywuzzy')
makedepends=('python-setuptools' 'python-pip')
source=(
	"https://files.pythonhosted.org/packages/source/${_name::1}/${_name}/${_name}-${pkgver}.tar.gz"
)
sha256sums=('a799a428e5c3cf8696e8dda124d7e7ac7dce1b1525b1100df40c748e4b13d445')
groups=('feeluown-full')

build() {
	cd "$_name-$pkgver"
	LANG=en_US.UTF-8 python setup.py build
}

package() {
	cd "$_name-$pkgver"
	LANG=en_US.UTF-8 python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
}
