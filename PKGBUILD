# Contributor: Mathieu.clabaut <mathieu.clabaut@gmail.com>
# Contributor: Stefan Husmann  <stefan-husmann@t-online.de>
# Contributor: Dr. Hammer <dr_hammer@safe-mail.net>

pkgname=noweb
pkgver=2.11b
pkgrel=18
pkgdesc="A Simple, Extensible Tool for Literate Programming build \
against ICON libs and texlive"
url="http://www.cs.tufts.edu/~nr/noweb/"
depends=('bash' 'texlive-core' 'nawk' 'icon')
source=($pkgname-$pkgver.tar.gz::https://github.com/nrnrnr/noweb/archive/v2_11b.tar.gz)
md5sums=('4f37181cbda9829cde3b84cf3bb7c3ed')
arch=('i686' 'x86_64')
license=('custom')

prepare() {
  cd $pkgname-$pkgver
  sed -i -e 's+BIN=/usr/local/noweb+BIN=\$\(MyDestdir\)/usr/bin+' \
    -e 's+LIB=/usr/local/noweb/lib+LIB=\$\(MyDestdir\)/usr/lib/noweb+' \
    -e 's+MAN=/usr/local/noweb/man+MAN=\$\(MyDestdir\)/usr/share/man+' \
    -e 's+/usr/local/tex/inputs+\$\(MyDestdir\)/usr/share/texmf/tex/generic/noweb+' \
    -e 's+$(HOME)/www/noweb/FAQ.html+'$srcdir/$pkgname-$pkgver'/src/FAQ.html+' \
    -e 's+mkdir+install -d+' -e 's+> \$\(BIN\)+> \$pkgdir/bin/+' src/Makefile
  sed -i -e 's+LIB=/dev/null.*$+LIB=\$\(MyDestdir\)/usr/lib/noweb+' \
    contrib/Makefile
  sed -i -e  's+^WWW=.*$+WWW\$\(MyDestdir\)=/usr/share/noweb/www+' \
    src/xdoc/Makefile 
  sed -i -e 's+texhash+/usr/bin/texhash+' src/Makefile
  sed -i -e 's+ELISP=/dev/null+ELISP=\$\(MyDestdir\)/usr/share/emacs/site-lisp+' \
    src/Makefile
}

build() {
  cd $pkgname-$pkgver/src
  make MyDestdir=$pkgdir LIBSRC=icon ICONC=icont
}

package() {
  cd $pkgname-$pkgver/src
  install -Dm644 COPYRIGHT \
    $pkgdir/usr/share/licenses/noweb/COPYRIGHT
  install -d $pkgdir/usr/share/texmf/tex/generic
  install -d $pkgdir/usr/lib/noweb/
  install -d $pkgdir/usr/share/emacs/site-lisp
  ./awkname nawk
  make MyDestdir=$pkgdir LIBSRC=icon ICONC=icont install
  find $pkgdir -type f -exec sed -i "s+${pkgdir}+/+g" '{}' ';'
}

