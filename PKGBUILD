# Maintainer: willemw <willemw12@gmail.com>

pkgname=ffmpeg-normalize-git
pkgver=1.22.1.r2.ga3eb8bd
pkgrel=1
pkgdesc="Normalize loudness of audio and video files using FFmpeg"
arch=('any')
url="https://github.com/slhck/ffmpeg-normalize"
license=('MIT')
depends=('ffmpeg' 'python-colorama' 'python-ffmpeg-progress-yield' 'python-tqdm')
checkdepends=('python-pytest')
makedepends=('git' 'python-setuptools')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=("$pkgname::git+$url.git")
sha512sums=('SKIP')

pkgver() {
  cd $pkgname
  git describe --long | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd $pkgname
  python setup.py build
}

check() {
  cd $pkgname
  python test/test.py
}

package() {
  cd $pkgname
  python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
}
