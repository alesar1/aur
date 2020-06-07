# Maintainer: Bruce Zhang <zttt183525594@gmail.com>
_name=fuo_netease
pkgname=feeluown-netease
pkgver=0.4.2
pkgrel=1
pkgdesc="feeluown netease plugin"
arch=('any')
url="https://github.com/feeluown/feeluown-netease"
license=('GPL3')
depends=('feeluown' 'python-pycryptodome' 'python-requests' 'python-marshmallow' 'python-beautifulsoup4')
makedepends=('python-setuptools' 'python-pip')
source=(
	"https://files.pythonhosted.org/packages/source/${_name::1}/${_name}/${_name}-${pkgver}.tar.gz"
)
sha256sums=('e0b9e1132c64ee9d11a1d881d1418646c1bfd244bae6db42aed46427d1b568b2')
groups=('feeluown-full')

build() {
	cd "$_name-$pkgver"
	LANG=en_US.UTF-8 python setup.py build
}

package() {
	cd "$_name-$pkgver"
	LANG=en_US.UTF-8 python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
}
