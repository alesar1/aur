# Contributor: EatMyVenom <eat.my.venomm@gamil.com>
# Contributor: Felix Golatofski <contact@xdfr.de>
# Contributor: Uncle Hunto <unclehunto äτ ÝãΗ00 Ð0τ ÇÖΜ>
# Contributor: hagabaka

pkgname='peazip-qt5'
pkgver=8.7.0
pkgrel=1
pkgdesc='Free file archiver utility, open, extract RAR TAR ZIP archives'
license=('GPL3')
url='http://peazip.org'
arch=('i686' 'x86_64')
depends=('brotli' 'zstd' '7-zip' 'qt5pas')
optdepends=('quad' 'unace' 'paq8o' 'upx' 'zpaq')
makedepends=('lazarus' 'git')
provides=('peazip')
conflicts=('peazip')
options=('!strip')
source=("git+https://github.com/peazip/PeaZip.git#tag=$pkgver"
"help-$pkgver.pdf::https://github.com/peazip/PeaZip/releases/download/$pkgver/peazip_help.pdf")
sha512sums=('SKIP'
            'c83d794e3fa988a0a1d85d90214328facb811716ecbd251952fdd4be7b4fccb55067783c13a86d0e194e5d85d6c306792d493ceec10b23a12d3e58f7046aad2e')

build() {
  cd "$srcdir/PeaZip/peazip-sources"
  lazbuild --lazarusdir=/usr/lib/lazarus --widgetset=qt5 --build-all project_pea.lpi && [ -f pea ]
  lazbuild --lazarusdir=/usr/lib/lazarus --widgetset=qt5 --build-all project_peach.lpi && [ -f peazip ]
}

package() {
  # binary
  install -Dm755 "$srcdir/PeaZip/peazip-sources/peazip" "$pkgdir/usr/lib/peazip/peazip"
  install -Dm755 "$srcdir/PeaZip/peazip-sources/pea" "$pkgdir/usr/lib/peazip/pea"
  
  # desktop & icon
  cd "$srcdir/PeaZip/peazip-sources/res/share/batch/freedesktop_integration"
  install -Dm644 peazip{,_alt}.png -t "${pkgdir}/usr/share/icons/hicolor/256x256/apps"
  install -Dm644 peazip_{7z,rar,zip}.png -t "${pkgdir}/usr/share/icons/hicolor/256x256/mimetypes"
  install -Dm644 peazip_{add,extract}.png -t "${pkgdir}/usr/share/icons/hicolor/256x256/actions"
  install -Dm644 peazip.desktop -t "$pkgdir/usr/share/applications"

  # help & res
  install -d "$pkgdir/usr/share/peazip"
  install -Dm644 "$srcdir/help-$pkgver.pdf" "$pkgdir/usr/share/peazip/peazip_help.pdf"
  cd "$srcdir/PeaZip/peazip-sources/res/share"
  cp -r icons lang themes "$pkgdir/usr/share/peazip/"
  install -d "$pkgdir/usr/lib/peazip/res"
  ln -sf /usr/share/peazip "$pkgdir/usr/lib/peazip/res/share"

  # 3rdprart binary
  install -d "$pkgdir/usr/lib/peazip/res/bin"
  install -d "$pkgdir/usr/lib/peazip/res/bin/7z"
  ln -sf /usr/bin/7zz "$pkgdir/usr/lib/peazip/res/bin/7z/7z"
  for _file in brotli/brotli lpaq/lpaq8 paq/paq8o quad/bcm unace/unace upx/upx zpaq/zpaq zstd/zstd; do
    install -d "$pkgdir/usr/lib/peazip/res/bin/$(dirname $_file)/"
    ln -sf "/usr/bin/$(basename $_file)" "$pkgdir/usr/lib/peazip/res/bin/$_file";
  done

  install -d "$pkgdir"/usr/bin/
  ln -sf /usr/lib/peazip/peazip "$pkgdir/usr/bin/peazip"
  ln -sf /usr/lib/peazip/pea "$pkgdir/usr/bin/pea"
}
