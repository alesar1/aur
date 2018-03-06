# Maintainer: Your Name <youremail@domain.com>
pkgname=gplaycli-git
pkgver=3.20.r4.g8a60f83
pkgrel=1
pkgdesc="Google Play Downloader via Command line, based on https://codingteam.net/project/googleplaydownloader"
arch=('i686' 'x86_64')
url="https://github.com/matlink/gplaycli"
license=('AGPL')
depends=('python'
  "python-requests"
  "python-protobuf"
  "python-pyaxmlparser"
  "python-clint"
  "python-pyopenssl"
  'python-gpapi'
  'python-pycryptodome')
optdepends=('java-runtime: needed for autogeneration of a new AndroiID')
source=("gplaycli::git+https://github.com/matlink/gplaycli.git")
md5sums=("SKIP")

pkgver() {
  cd "gplaycli"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'

}

package() {
  cd gplaycli
  python3 setup.py install --root="$pkgdir/" --optimize=1
}

# vim:set ts=2 sw=2 et:
