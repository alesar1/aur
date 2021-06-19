# Maintainer: ransome <ransome@uber.space>
pkgname="sleek"
pkgver=1.0.6
pkgrel=2
pkgdesc="Todo app based on the todo.txt format for Linux, free and open-source"
arch=("x86_64")
url="https://github.com/ransome1/sleek/"
license=("MIT")
options=(!strip)
makedepends=("yarn" "nodejs<16.0.0")
depends=("electron" "nodejs")
source=("${url}archive/refs/tags/v${pkgver}-2.zip" "sleek.desktop" "sleek")
sha512sums=('d6f6736f5cbeab6c9225a8ddd4f0df6e9acdfad4522c9546eb6c11e958111e570e47fab38bedf6dd99a5d30fea1f0ab9a6eed58e1e958aaf39c6b78827d74420'
            '605f49606eb0656846ac5dc3b97eca0acb3a781b07c71aff1e027935d5e8ea569d290c95d67bd7347ddd133c1643e6f3c6fe36bd1b52f49e528b34a458afe316'
            'ea1d322bd56c7944a9eae97f4968a6a2e937b510eb3c1c21266428450c5b2ddcd8576718d0b66b69fbce5694ba94e80a692d04bda1e8c2b24a8d814a5ed50963')

build() {
  msg2 "Unzipping v${pkgver}-2.zip"
  unzip -o "v${pkgver}-2.zip"
  cd "$srcdir/$pkgname-${pkgver}-2"

  msg2 "Installing node modules"
  yarn install
}

package() {
  cd "$srcdir/$pkgname-${pkgver}-2"

  msg2 "Building sleek with packaged Electron"
  yarn run pack
  install -Dm644 "dist/linux-unpacked/resources/app.asar" "$pkgdir/usr/lib/$pkgname.asar"
  install -d -Dm644 "${pkgdir}/usr/share"
  chmod 755 "${pkgdir}/usr/share"
  cp -r "dist/linux-unpacked/${pkgname}" "${pkgdir}/usr/share"

  msg2 "Installing LICENSE"
  install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname"

  msg2 "Installing startup script and desktop file"
  install -Dm755 "../${pkgname}" -t "$pkgdir/usr/bin/"
  install -Dm644 "../${pkgname}.desktop" -t "$pkgdir/usr/share/applications/"

  msg2 "Installing icons"
  for size in 22 24 32 48 64 128 256 512; do
    install -Dm644 "assets/icons/${size}x${size}.png" "${pkgdir}/usr/share/icons/hicolor/${size}x${size}/apps/${pkgname}.png"
  done
  install -Dm644 "assets/icons/512x512.png" "${pkgdir}/usr/share/icons/hicolor/scalable/apps/${pkgname}.png"
}
