# Maintainer: David Birks <david@birks.dev>

pkgname=lens
pkgdesc='The Kubernetes IDE (previously Kontena Lens)'
pkgver=3.4.0
pkgrel=1
arch=('x86_64')
license=('MIT')
url='https://github.com/lensapp/lens'
makedepends=('nodejs-lts-erbium' 'yarn')
source=("$pkgname-${pkgver/_/-}.tar.gz::https://github.com/lensapp/lens/archive/v${pkgver/_/-}.tar.gz"
        "lens.desktop")
sha256sums=('7903b84cedba3968e9b439d7b666ba1ae4fcd1a57da4c0661576fe77b881a5f5'
            'e81c76d6ae2703c35a6e5d93830402f7a02a4f7bf19a06c91495b2ab52c56c94')

build() {
  cd $pkgname-${pkgver/_/-}

  make build
}

package() {
  # Copy the entire distribution to /opt
  mkdir -p "$pkgdir"/opt/$pkgname
  mv "$srcdir"/$pkgname-${pkgver/_/-}/dist/linux-unpacked/* "$pkgdir"/opt/$pkgname

  # Icon
  install -Dm 644 "$srcdir"/$pkgname-${pkgver/_/-}/build/icons/512x512.png "$pkgdir"/usr/share/icons/hicolor/512x512/apps/$pkgname.png

  # Desktop file
  install -Dm 644 "$srcdir"/$pkgname.desktop "$pkgdir"/usr/share/applications/$pkgname.desktop

  # Symlink binary
  mkdir -p "$pkgdir"/usr/bin
  ln -sf ../../opt/$pkgname/kontena-lens "$pkgdir"/usr/bin/kontena-lens
}
