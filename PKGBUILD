# Maintainer: Uncle Hunto <unclehunto äτ ÝãΗ00 Ð0τ ÇÖΜ>
# Contributor: hagabaka

pkgname='peazip-gtk2-build'
pkgver=6.4.0
pkgrel=1
pkgdesc='Free GTK2 cross-platform file archiver (compiles from source)'
license=('GPL3')
url='http://peazip.org'
arch=('i686' 'x86_64')
depends=( 'gtk2' 'desktop-file-utils' 'balz' 'lpaq' 'paq8o' 'p7zip' 'upx' 'zpaq')
optdepends=('quad' 'unace')
makedepends=('lazarus-gtk2' 'icoutils')
provides=('peazip' 'peazip-gtk2')
conflicts=('peazip' 'peazip-gtk2' 'peazip-qt' 'peazip-qt-build' 'peazip-qt-opensuse' 'peazip-qt-opensuse-latest')
options=('!strip')
install=peazip.install
source=("https://github.com/giorgiotani/PeaZip/releases/download/$pkgver/peazip-$pkgver.src.zip"
        "http://www.peazip.org/downloads/additional/peazip_optional_formats_plugin-1.LINUX.INST.tar.gz")
sha256sums=('e54e29c703ab18beadf3cc27242a8b2f25c411c7aee5da2a51594a4beab83608'
            '7f3fc1ea200d482500360eadda9298c4d5900ca822d21b5a0e11ff9de4d499ff')
sha512sums=('4fabf64a69d379cc697bc30fc870d446e13c155479cf7a9c407192ef53bac63ec64e806ff06aa4a9a791e55424062b2fdec07af25baa9e453bc85520e932e906'
            '8b308510a2c81ad2704cef19ed3fb2baf1dde0e123cf3e4c96e5e42a330e23002f3443c9fce009120492afc82b0ab063344c8029fe6fe851a4bea4814bacdaa8')

build() {
  cp -Rf "$srcdir/res" "$srcdir/peazip-$pkgver.src"
  cd "$srcdir/peazip-$pkgver.src"
  lazbuild --lazarusdir=/usr/lib/lazarus --widgetset=gtk2 --build-all project_pea.lpi && [ -f pea ]
  lazbuild --lazarusdir=/usr/lib/lazarus --widgetset=gtk2 --build-all project_gwrap.lpi && [ -f pealauncher ]
  lazbuild --lazarusdir=/usr/lib/lazarus --widgetset=gtk2 --build-all project_peach.lpi && [ -f peazip ]
  icotool -x -w 256 "./res/icons/PeaZip.ico" -o "$srcdir/peazip-$pkgver.src/peazip.png"
}

package() {
  _resdir="$pkgdir/opt/peazip/res"
  cd "$srcdir/peazip-$pkgver.src/res"
  install -Dm755 "../peazip" "$pkgdir/opt/peazip/peazip"
  install -Dm755 "../pea" "$_resdir/pea"
  install -Dm755 "../pealauncher" "$_resdir/pealauncher"
  install -Dm644 "../peazip.png" "$pkgdir/usr/share/pixmaps/peazip.png"
  ## Install res directory
  for i in arc/{arc,*.sfx}; do install -Dm755 $i "$_resdir"/$i; done
  for i in *.txt lang/* themes/{*-embedded/*,*.7z} arc/arc.{ini,groups}
    do install -Dm644 "$i" "$_resdir/$i"; done
  ln -sf -T /usr/lib/p7zip "$_resdir/7z"
  for i in quad/{balz,quad} unace/unace upx/upx lpaq/lpaq8 paq/paq8o zpaq/zpaq; do
    install -d "$_resdir/$(dirname $i)/"
    ln -sf "/usr/bin/$(basename $i)" "$_resdir/$i";
  done
  install -d "$pkgdir"/usr/bin/
  for i in /opt/peazip/{peazip,res/pea,res/pealauncher}; do
    ln -sf $i "$pkgdir/usr/bin/$(basename $i)"
  done
  ##
  desktop-file-install --dir="$pkgdir/usr/share/applications/" --set-icon="peazip"\
  --remove-key="Name[en_US]" "$srcdir/peazip-$pkgver.src/FreeDesktop_integration/peazip.desktop"
}
