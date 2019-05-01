# Maintainer: t1meshift <kurlykster@mail.ru>

pkgname=tuijam-git
pkgver=r105.65e91c2
pkgrel=1
pkgdesc="A fancy TUI client for Google Play Music"
url="https://github.com/cfangmeier/tuijam"
arch=(any)
license=('MIT')
depends=(
	'python'
	'python-gmusicapi-git'
	'python-google-api-python-client'
	'python-urwid'
	'python-pyaml'
	'python-mpv'
	'python-scrypt'
	'python-pydbus'
	'pygobject-devel'
)
makedepends=(
	'git'
	'python-distribute'
)
source=(git+https://github.com/cfangmeier/tuijam.git)

provides=('tuijam')
conflicts=('tuijam')
md5sums=('SKIP')

pkgver() {
  cd "tuijam"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
    cd "$srcdir/tuijam"
    python setup.py install --root="$pkgdir/" --optimize=1
    mkdir -p "$pkgdir/usr/share/licenses/$pkgname"
    cp LICENSE "$_/LICENSE"
}
