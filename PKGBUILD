# Maintainer: chendaniely
# code adapted from: Meow < a.li.devtty at gmail dot com >

pkgname=rstudio-desktop-preview-bin
pkgver=0.99.732
pkgrel=1
pkgdesc="A new integrated development environment (IDE) for R (binary version from RStudio official website)"
arch=('i686' 'x86_64')
license=('GPL')
url="http://www.rstudio.org/"
depends=('r>=2.11.1' 'shared-mime-info' 'gstreamer0.10-base' 'patchelf')
conflicts=('rstudio-desktop' 'rstudio-desktop-git' 'rstudio-desktop-bin')
provides=("rstudio-desktop-preview=${pkgver}")
#options=(!strip)

_x86md5=4b2f1edf1a077b8651a78df5d138282e
_x64md5=e183e48fe61ebb5b1c3ece7b3027c8cb

case "$CARCH" in
	'i686')
		_arch=i386
		md5sums=($_x86md5)
		;;
	'x86_64')
		_arch=amd64
		md5sums=($_x64md5)
		;;
esac

source=("https://s3.amazonaws.com/rstudio-dailybuilds/rstudio-${pkgver}-${_arch}.deb")
#source=("https://s3.amazonaws.com/rstudio-dailybuilds/rstudio-${pkgver}-amd64.deb")
install="$pkgname".install

package() {
  msg "Converting debian package..."

  cd "$srcdir"
  tar zxpf data.tar.gz -C "$pkgdir"
  install -dm755 "$pkgdir/usr/bin"

  #cd "$pkgdir/usr/lib/rstudio/bin"
  #ls lib*.so.* | grep -v libedit | grep -v libtinfo | tr \\n \\0 |xargs -0 rm
  #rm -rf plugins

  #cd "$pkgdir/usr/lib/rstudio/bin/rsclang"
  #ln -sf /usr/lib/libclang.so ./

  cd "$pkgdir/usr/lib/rstudio/bin"
  ln -sf /usr/lib/libncursesw.so.6 libtinfo.so.5
  ln -sf /usr/lib/libedit.so.0  libedit.so.2

  cd "$pkgdir/usr/lib/rstudio/bin/rsclang"
  patchelf --set-rpath '$ORIGIN/..' libclang.so

  cd "$pkgdir/usr/lib/rstudio/bin/plugins"
  ls */*.so | xargs -n1 patchelf --set-rpath '$ORIGIN/../..'

  find "$pkgdir/usr" -type d -print0 | xargs -0 chmod 755

  cd "$pkgdir/usr/bin"
  #ln -s -f ../lib/rstudio/bin/rstudio rstudio-bin
  echo '#!/bin/sh
export QT_DIR=/usr/lib/rstudio/bin
export QT_PLUGIN_PATH=$QT_DIR/plugins
export QT_QPA_PLATFORM_PLUGIN_PATH=$QT_PLUGIN_PATH/platforms
export KDEDIRS=/usr
exec /usr/lib/rstudio/bin/rstudio
' > "$pkgdir/usr/bin/rstudio-preview-bin"
  chmod 755 "$pkgdir/usr/bin/rstudio-preview-bin"

  sed -i 's|/usr/lib/rstudio/bin/rstudio|/usr/bin/rstudio-preview-bin|' "$pkgdir/usr/share/applications/rstudio.desktop"

  # pandoc fix
  SYS_PANDOC=`which pandoc`
  SYS_PANDOC_CITEPROC=`which pandoc-citeproc`
   cd "$pkgdir/usr/lib/rstudio/bin/pandoc"
   mv pandoc pandoc_rstudio
   # ln -sf /usr/bin/pandoc pandoc
   ln -s $SYS_PANDOC /usr/lib/rstudio/bin/pandoc/pandoc
   mv pandoc-citeproc pandoc-citeproc_rstudio
   # ln -sf /usr/bin/pandoc-citeproc pandoc-citeproc
   ln -s $SYS_PANDOC_CITEPROC /usr/lib/rstudio/bin/pandoc/pandoc-citeproc
}
# vim:ft=sh tabstop=2 expandtab
