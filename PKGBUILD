# Maintainer: Deepjyoti <deep.barman30@gmail.com>
pkgname=python-youtube-search-git

pkgver() {
  cd "$pkgname"
  printf 'r%s.%s' "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}
pkgver=1.1.0
pkgrel=0

pkgdesc="Perform YouTube video searches without the API"
arch=("any")
url="https://github.com/joetats/youtube_search"
license=('MIT')
depends=(
		"python>=3.6"
		"python-requests"
		)
makedepends=("git" "python-setuptools")
optdepends=()
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
replaces=()
backup=()
options=()
install=
changelog=
source=("https://github.com/joetats/youtube_search/archive/master.zip")
noextract=()
md5sums=("SKIP")
validpgpkeys=()

build() {
	cd "youtube_search-master"
	python3 setup.py build
}

package() {
	cd "youtube_search-master"
	python3 setup.py install --prefix=/usr --root="$pkgdir/" --optimize=1 --skip-build
	install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
