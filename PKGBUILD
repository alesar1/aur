# Maintainer: Stephen Argent <steve [at] tuxcon [dot] com>

pkgname=rest-server-bin
pkgdesc='Rest Server is a high performance HTTP server that implements restics REST backend API.'
license=('BSD')
url='https://github.com/restic/rest-server'
pkgver=0.9.7
pkgrel=1
package86=rest-server-${pkgver}-linux-386.gz
package64=rest-server-${pkgver}-linux-amd64.gz
packagearm=rest-server-${pkgver}-linux-arm64.gz
arch=('i686' 'x86_64' 'armv7h')
source_i686=(
  "${url}/releases/download/v${pkgver}/rest-server-${pkgver}-linux-386.gz"
)
source_x86_64=(
  "${url}/releases/download/v${pkgver}/rest-server-${pkgver}-linux-amd64.gz"
)
source_armv7h=(
  "${url}/releases/download/v${pkgver}/rest-server-${pkgver}-linux-arm64.gz"
)
sha256sums_i686=(3ff5cac246ef0e563c41181b930b808abcff8ffa98ea691497e2b74374afb5f5)
sha256sums_x86_64=(390b3a396f1c3ad67f9cd8ed6ae2d3c10f7c7e3a8213046009d3a905e1ee7da6)
sha256sums_armv7h=(2d9eb09cdde1f6f39131cd488c4ff35b20c1fe3d6d8c120b0b3c337203902e4f)

package() {
  if [ "$CARCH" = "i686" ] ; then
    package=${package86}
  elif [ "$CARCH" = "x86_64" ] ; then
    package=${package64}
  elif [ "$CARCH" = "armv7h" ] ; then
    package=${packagearm}
  else
    echo "Unknown arch: $CARCH"
    exit 1
  fi

  mkdir -p "$pkgdir/usr/bin/"
  gunzip -c "$package" > "$pkgdir/usr/bin/rest-server"
  chmod +x "$pkgdir/usr/bin/rest-server"
}

