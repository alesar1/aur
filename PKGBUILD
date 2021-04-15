# Maintainer: Ignat Loskutov <ignat.loskutov@gmail.com>
pkgbase='deadbeef-plugin-customizabletb-git'
_gitname='ddb_customizabletb'
pkgname=('deadbeef-plugin-customizabletb-gtk2-git' 'deadbeef-plugin-customizabletb-gtk3-git')
pkgver=95.5df8f49
pkgrel=1
_pkgdesc="Customizable toolbar plugin for DeadBeeF music player."
arch=('i686' 'x86_64')
url="https://github.com/kravich/ddb_customizabletb"
license=('GPL3')
depends=('deadbeef>=0.6')
makedepends=(git)
source=('git+https://github.com/kravich/ddb_customizabletb'
        'build.patch')
sha256sums=('SKIP'
            '7454408e048eb457aae7650ed5d945713bb855daf515f058fd5367a9797f3d94')

pkgver() {
	cd "$srcdir/$_gitname"
	echo "$(git rev-list --count HEAD).$(git describe --always)"
}

prepare() {
    cd $srcdir/$_gitname
    patch -p1 < ../build.patch
}

build() {
  cd $srcdir/$_gitname
  make gtk2
  make gtk3
}

package_deadbeef-plugin-customizabletb-gtk2-git() {
  pkgdesc=$_pkgdesc' The GTK2 version.'
  install -D -m644 $srcdir/$_gitname/ddb_customizabletb_gtk2.so $pkgdir/usr/lib/deadbeef/ddb_customizabletb_gtk2.so
}

package_deadbeef-plugin-customizabletb-gtk3-git() {
  pkgdesc=$_pkgdesc' The GTK3 version.'
  install -D -m644 $srcdir/$_gitname/ddb_customizabletb_gtk3.so $pkgdir/usr/lib/deadbeef/ddb_customizabletb_gtk3.so
}
