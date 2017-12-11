# Maintainer: Daniel Maslowski <info at orangecms dot org>
_gitname=neopg
pkgname=neopg-git
pkgver=406.9a139fc
pkgrel=1
pkgdesc="The multiversal cryptoengine!"
arch=('i686' 'x86_64')
url="https://github.com/das-labor/neopg"
license=('BSD-2')
depends=('boost' 'botan-with-compression' 'gettext' 'sqlite')
makedepends=('git' 'cmake')
source=('git://github.com/das-labor/neopg.git')
sha256sums=('SKIP')

pkgver()
{
  cd "${srcdir}/${_gitname}"
  echo $(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}

prepare()
{
  cd "${srcdir}/${_gitname}/build"
  git submodule update --init
  cmake -DCMAKE_BUILD_TYPE=Release ..

}

build()
{
  cd "${srcdir}/${_gitname}/build"
  make
}

package()
{
  cd "${srcdir}/${_gitname}/build/src"
  install -Dm 755 neopg "${pkgdir}/usr/bin/neopg"
}
