# Contributed by ivoarch <ivkuzev@gmail.com>
# Maintainer: Stefan Husmann <stefan-husmann@t-online.de

pkgname=aurel-git
pkgver=0.9.2017_01_14
pkgrel=2
pkgdesc="Search and download AUR packages from Emacs"
arch=('any')
url="https://github.com/alezost/aurel"
license=('GPL')
depends=('emacs-dash' 'emacs-bui')
makedepends=('git')
install=$pkgname.install
source=("git+https://github.com/alezost/aurel.git")
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/${pkgname%-git}"
  printf %s.%s $(git describe --tags|tr - .| cut -c2-) $(git log -1 --format="%cd" --date=short | tr - _) 
}

package() {
  _pkg_emacs="$pkgdir/usr/share/emacs/site-lisp/"

  cd "$srcdir/${pkgname%-git}"
  install -d $_pkg_emacs
  cp *.el $_pkg_emacs
}
