# Maintainer: Deepjyoti <deep.barman30@gmail.com>
pkgname=ytmdl
pkgver=2019.11.16
pkgrel=0
pkgdesc="Download songs from YouTube with metadata from sources like Itunes and Gaana"
arch=("any")
url="https://github.com/deepjyoti30/ytmdl"
license=('MIT')
depends=(
		"python>=3.6"
		"ffmpeg"
		"youtube-dl"
		"python-mutagen"
		"python-beautifulsoup4"
		"python-colorama"
		"downloader-cli"
		)
makedepends=("git" "python-setuptools")
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=ytmdl.install
changelog=
source=("https://github.com/deepjyoti30/ytmdl/archive/2019.11.16.tar.gz")
noextract=()
md5sums=("SKIP")
validpgpkeys=()

build() {
	cd "ytmdl-${pkgver}"
	python setup.py build
}

package() {
	cd "ytmdl-${pkgver}"
	python setup.py install --prefix=/usr --root="$pkgdir/" --optimize=1 --skip-build
	install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
