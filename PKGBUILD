# Maintainer: Chris Nixon <chris.nixon@sigma.me.uk>
pkgname="tesseract-ocr-git"
pkgver=3.04.rc1.r66.g941d870
pkgrel=1
pkgdesc="OCR Engine developed at HP Labs and now sponsored by Google."
arch=('i686' 'x86_64')
url="https://code.google.com/p/tesseract-ocr/"
license=('Apache')
groups=()
depends=('gcc-libs' 'libtiff' 'libpng' 'leptonica' 'giflib' 'libjpeg')
optdepends=('cairo' 'icu' 'pango')
source=('tesseract-ocr::git+https://code.google.com/p/tesseract-ocr')
makedepends=('git' 'pango' 'icu' 'cairo')
provides=('tesseract')
conflicts=('tesseract')
sha256sums=('SKIP')

pkgver() {
    cd tesseract-ocr
    echo $(git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g')
}

build() {
    cd tesseract-ocr
    git checkout $(git describe --tags `git rev-list --tags --max-count=1`)
    ./autogen.sh
    ./configure --prefix=/usr
    make clean
    make
}

package() {
    cd tesseract-ocr
    make DESTDIR="$pkgdir/" install
}
