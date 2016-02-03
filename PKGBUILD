# Maintainer: Graham Edgecombe <graham@grahamedgecombe.com>
pkgname=openrct2
pkgver=0.0.3.1
pkgrel=1
pkgdesc='Open source clone of RollerCoaster Tycoon 2'
arch=('i686' 'x86_64')
url='https://github.com/OpenRCT2/OpenRCT2'
license=('GPL3')
depends=('gtk-update-icon-cache' 'desktop-file-utils')
makedepends=('git' 'cmake')
options=('!buildflags')
install=openrct2.install
source=('https://github.com/OpenRCT2/OpenRCT2/archive/v0.0.3.1.tar.gz'
        'https://github.com/OpenRCT2/openrct2.github.io/raw/797f5d6b1dbe1cad6a806350866318b7154fdc61/files/orctlibs.zip'
        'openrct2'
        'openrct2.desktop')
sha256sums=('036f40d98fd444b08ed0d04f61e7f9f2a4175c5938830a78abb1582b2081f9ab'
            '31c5e19d9f794bd5f0e75f20c2b4c3c4664d736b0a4d50c8cde14a9a9007b62d'
            '2cead106464f257d64c74333280ee6bf4056167cc69840371e81a77e64858989'
            'b916d4a9f56af82693ba21f43e09ababe9f132fd7c3b78efa1b4387ee1bc3a4d')

if [ "$CARCH" = "i686" ]; then
  depends+=('sdl2' 'sdl2_ttf' 'curl' 'jansson' 'speexdsp')
else
  depends+=('lib32-sdl2' 'lib32-sdl2_ttf' 'lib32-curl' 'lib32-jansson'
            'lib32-speexdsp')
  makedepends+=('gcc-multilib')
fi

prepare() {
  cd "$srcdir/OpenRCT2-$pkgver"

  # Copy local libraries into lib.
  if [ ! -d lib ]; then
    cp -r "$srcdir/local" lib
  fi
}

build() {
  cd "$srcdir/OpenRCT2-$pkgver"

  cmake -DCMAKE_BUILD_TYPE=Debug .
  make

  # openrct2 sprite build segfaults even if it finishes successfully, so we
  # ignore its return code.
  ./openrct2 sprite build data/g2.dat resources/g2 || true
}

package() {
  cd "$srcdir/OpenRCT2-$pkgver"

  # Standard OpenRCT2 distribution files.
  install -Dm755 openrct2 "$pkgdir/usr/share/openrct2/openrct2"
  install -Dm644 openrct2.exe "$pkgdir/usr/share/openrct2/openrct2.exe"

  install -Dm644 data/g2.dat "$pkgdir/usr/share/openrct2/data/g2.dat"

  install -dm755 "$pkgdir/usr/share/openrct2/data/language"
  install -m644 data/language/* "$pkgdir/usr/share/openrct2/data/language/"

  install -dm755 "$pkgdir/usr/share/openrct2/data/title/openrct2"
  install -m644 data/title/openrct2/* "$pkgdir/usr/share/openrct2/data/title/openrct2"

  install -dm755 "$pkgdir/usr/share/openrct2/data/title/rct2"
  install -m644 data/title/rct2/* "$pkgdir/usr/share/openrct2/data/title/rct2"

  # Use root certificates from ArchLinux instead of the ones bundled with
  # OpenRCT2.
  ln -sf /etc/ssl/certs/ca-certificates.crt "$pkgdir/usr/share/openrct2/curl-ca-bundle.crt"

  # ArchLinux-specific stuff (launcher, .desktop file and icon).
  install -Dm755 "$srcdir/openrct2" "$pkgdir/usr/bin/openrct2"
  install -Dm644 "$srcdir/openrct2.desktop" "$pkgdir/usr/share/applications/openrct2.desktop"
  install -Dm644 resources/logo/icon_flag.svg "$pkgdir/usr/share/icons/hicolor/scalable/apps/openrct2.svg"
}
