# Maintainer: Torben <git at letorbi dot com>

pkgname=processing4
pkgver=4.0b2
pkgrel=3
arch=(x86_64)
pkgdesc='Programming environment for creating images, animations and interactions'
url='https://github.com/processing/processing4'
license=(GPL LGPL)
provides=('processing')
conflicts=('processing')
depends=('libgl')
makedepends=('ant' 'jdk11-openjdk' 'gendesk' 'unzip')
options=(!strip)
source=("https://github.com/processing/processing4/archive/processing-$((1275+${pkgver##4.0b}))-$pkgver.tar.gz"
        'https://download.processing.org/reference.zip'
        disable_update_check.patch
        disable_native_dialogs.patch)
sha256sums=('060a126877d63ddb048cd389c505f0d502ba4f00bb59be38b99250b1f7006b2d'
            'fabe7420a714f450a6b1430f13fc46f14ba52db57af360365c6a7fd96d0b642f'
            '35c4538e6e57c0ea296c6cea590cabeb2b0772f9a431838df270dcc581321e30'
            '500d00811031c0445416b6112972aa1f7a377092dd3b8565d79ead3fdfc62451')

prepare() {
  # Create .desktop file
  gendesk -f -n --pkgname=processing --pkgdesc="$pkgdesc" --name="Processing" --exec="processing %f" --mimetypes="text/x-processing"

  # Symbolic link for not having to repeat the revision number
  ln -sf "processing4-processing-"*"-$pkgver" $pkgname

  # Copy reference.zip to the java directory
  mkdir -p $pkgname/java
  cp reference.zip $pkgname/java/

  # Disable update check in default preferences
  patch $pkgname/build/shared/lib/defaults.txt < disable_update_check.patch

  # Disable native dialogs in default preferences
  patch $pkgname/build/shared/lib/defaults.txt < disable_native_dialogs.patch
}

build() {
  cd "$pkgname/build"

  ant build
}

package() {
  cd "$pkgname"

  install -d "$pkgdir/usr/"{bin/,share/processing/}
  cp -r build/linux/work/* "$pkgdir/usr/share/processing/"

  # MIME type, icon and desktop shortcut
  install -Dm644 "build/linux/processing-pde.xml" \
    "$pkgdir/usr/share/mime/packages/processing-pde.xml"
  install -Dm644 "build/shared/lib/icons/pde-256.png" \
    "$pkgdir/usr/share/pixmaps/processing.png"
  install -Dm644 "$srcdir/processing.desktop" \
    "$pkgdir/usr/share/applications/processing.desktop"

  # Symbolic links in /usr/bin
  ln -s "/usr/share/processing/processing" "$pkgdir/usr/bin/processing"
  ln -s "/usr/share/processing/processing-java" "$pkgdir/usr/bin/processing-java"
}
