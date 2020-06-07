# Maintainer: Bruce Zhang <zttt183525594@gmail.com>
_name=fuo_qqmusic
pkgname=feeluown-qqmusic
pkgver=0.2
pkgrel=1
pkgdesc="feeluown qqmusic plugin"
arch=('any')
url="https://github.com/feeluown/feeluown-qqmusic"
license=('GPL3')
depends=('feeluown' 'python-marshmallow' 'python-requests')
makedepends=('python-setuptools' 'python-pip')
source=(
	"https://files.pythonhosted.org/packages/source/${_name::1}/${_name}/${_name}-${pkgver}.tar.gz"
)
sha256sums=('31a944dcd5e57806bd049adc387b63c8dcef41b8a4cfbf948239fa88b02d4e6a')
groups=('feeluown-full')

build() {
	cd "$_name-$pkgver"
	LANG=en_US.UTF-8 python setup.py build
}

package() {
	cd "$_name-$pkgver"
	LANG=en_US.UTF-8 python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
}
