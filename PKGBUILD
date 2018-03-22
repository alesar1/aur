# Maintainer Severin Glöckner <severin dot gloeckner at stud dot htwk minus leipzig dot de>
# Contributor: Federico Cinelli <cinelli.federico@gmail.com>

pkgname=ninja-ide-git
pkgver=20180322
pkgrel=1
pkgdesc="Cross-platform IDE focused on Python application development - latest git pull"
arch=('any')
url="http://ninja-ide.org"
license=('GPL')
depends=('python' 'python-pyqt5' 'qt5-declarative')
provides=('ninja-ide')
conflicts=('ninja-ide')
source=(ninja-ide-git.desktop)
md5sums=('ac8287a7d40e2584f3191c5784fb7216')

_gitroot="https://github.com/ninja-ide/ninja-ide.git"
_gitname="ninja-ide"


prepare() {
  cd $startdir
  msg "Connecting to GIT server...."

  if  [ -d $_gitname ] ; then
    cd $_gitname && git pull origin
    msg "The local files are updated."
  else
    git clone $_gitroot $_gitname
  fi

  msg "GIT checkout done or server timeout"
}

pkgver() {
  cd $startdir/$_gitname
  git log -1 --date=short --pretty=format:%ad | sed 's/-//g'
}

package() {
  install -Dm644 "$startdir/$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"
  install -Dm644 "$startdir/ninja-ide/ninja_ide/img/ninja_icon.png" "$pkgdir/usr/share/icons/hicolor/128x128/apps/$pkgname.png"

  mkdir -p "$pkgdir/usr/lib/python3.6/site-packages"
  cp -a "$startdir/ninja-ide/ninja_ide" "$pkgdir/usr/lib/python3.6/site-packages"

  mkdir -p "$pkgdir/usr/bin"
  cp -a "$startdir/ninja-ide/ninja-ide.py" "$pkgdir/usr/bin/$pkgname"
}
