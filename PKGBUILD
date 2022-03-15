# Maintainer: eggy <eggyrules at gmail dot com>

pkgname=mandown-git
pkgver=r85.b7a92f7
pkgrel=1
pkgdesc="Comic/manga downloader and EPUB/CBZ converter application and Python library"
url="https://github.com/potatoeggy/mandown"
replaces=()
arch=("any")
license=("LGPL3")
depends=(
	"python-requests"
	"python-typer"
	"python-feedparser"
	"python-beautifulsoup4"
	"python-natsort"
	"python-lxml"
)
makedepends=("git" "python-build" "python-installer")
optdepends=(
	"python-pillow: Image processing"
)
provides=()
conflicts=("mandown")
source=("git+$url.git")
sha256sums=("SKIP")

pkgver() {
  cd "$srcdir/mandown"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
    cd "$srcdir/mandown"
    python -m build --wheel --no-isolation
}

package() {
    cd "$srcdir/mandown"
    python -m installer --destdir="$pkgdir" dist/*.whl
}
