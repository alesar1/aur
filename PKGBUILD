# Contributor: Dmitriy Morozov <archlinux@foxcub.org>

pkgname=ipe
_dirver=7.1
pkgver=7.1.9
pkgrel=2
pkgdesc="The extensible drawing editor"
url="http://tclab.kaist.ac.kr/ipe/"
depends=('lua52' 'qt5-base' 'freetype2' 'zlib' 'poppler' 'python2')
arch=('i686' 'x86_64')
license=("GPL")
conflicts=('ipe')
ipepresenter_version_=5c5b7b225081
source=("https://github.com/otfried/ipe/blob/master/releases/$_dirver/$pkgname-$pkgver-src.tar.gz?raw=true"
        "http://hg.mrzv.org/IpePresenter/archive/$ipepresenter_version_.tar.gz"
        "ipe.bash-completion"
        "config.patch"
        )
md5sums=('8553f8e9fc38c93185514a53a4ea7fb5'
         'ce409e1a01a408d54776ae77bef228f9'
         '694f0d5402655901be385647e5d8d6e3'
         '56c6de89f3def116fac7828f78834d37')

prepare() {
  cd "$srcdir/$pkgname-$pkgver/src"
  patch config.mak < "$srcdir/config.patch"
}

build() {
  # Ipe
  cd "$srcdir/$pkgname-$pkgver/src"
  make IPEPREFIX=/usr

  # IpePresenter
  cd "$srcdir/IpePresenter-$ipepresenter_version_"
  CPPFLAGS+=" -I ../$pkgname-$pkgver/src/include -I ../$pkgname-$pkgver/src/ipecanvas" \
    LIBS=" -L ../$pkgname-$pkgver/build/lib" \
    make
}

package() {
  # Ipe
  cd "$srcdir/$pkgname-$pkgver/src"
  INSTALL_ROOT="$pkgdir" make install IPEPREFIX=/usr

  # IpePresenter
  cd "$srcdir/IpePresenter-$ipepresenter_version_"
  install -m755 ipepresenter "$pkgdir/usr/bin"

  # Lua binding
  mkdir "$pkgdir/usr/lib/lua"
  ln -s /usr/lib/libipelua.so "$pkgdir/usr/lib/lua/ipe.so"

  # Bash completion
  mkdir -p "$pkgdir/etc/bash_completion.d"
  install "$srcdir/ipe.bash-completion" "$pkgdir/etc/bash_completion.d/ipe"
}

# vim: ft=sh syn=sh et ts=2 sw=2
