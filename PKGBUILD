# Maintainer: David Runge <dave@sleepmap.de>

pkgname=khard-git
_gitname=khard
pkgver=0.5.0.r0.g077b5e6
pkgrel=1
pkgdesc="Console carddav client"
license=("GPL3")
url="https://github.com/scheibler/khard/"
depends=('python2-configobj' 'python2-vobject' 'python2-caldavclientlibrary-svn')
makedepends=('git')
optdepends=('python2-vdirsyncer: Synchronization of address books with a CalDAV server.')
source=("${_gitname}::git+https://github.com/scheibler/khard.git")
md5sums=('SKIP')
install="${pkgname}.install"
provides=('khard' 'davcontroller')
conflicts=('khard')
arch=('any')
options=(!emptydirs)

pkgver() {
  cd "${_gitname}"
  git describe --long | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build(){
  cd "$srcdir/${_gitname}"
}

package() {
  cd "$srcdir/${_gitname}/"
  python2 setup.py install --root=$pkgdir
  install -Dm 644 khard.conf.example "${pkgdir}/etc/skel/khard.conf"
  install -Dm 644 AUTHORS "${pkgdir}/usr/share/doc/khard/AUTHORS"
  install -Dm 644 CHANGES "${pkgdir}/usr/share/doc/khard/CHANGES"
  install -Dm 644 README.md "${pkgdir}/usr/share/doc/khard/README.md"
}
