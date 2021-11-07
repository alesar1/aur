# Maintainer: ransome <ransome@uber.space>
pkgname="sleek"
pkgver=1.1.3
pkgrel=1
pkgdesc="Todo app based on the todo.txt format for Linux, free and open-source"
arch=("x86_64")
url="https://github.com/ransome1/sleek/"
license=("MIT")
options=(!strip)
makedepends=("yarn" "nodejs" "unzip")
depends=("electron" "nodejs")

source=("${url}archive/refs/tags/v${pkgver}.zip" "sleek.desktop" "sleek")
sha512sums=('e8f097f0ef3843184d57d979830c3aaa38422356fc23846f6fd8e06d2de3a8f7b5ceba372bb3ed1a02e14fb2faaa6ba9c0ff801cc40c146550ce92397f4fdb78'
            '605f49606eb0656846ac5dc3b97eca0acb3a781b07c71aff1e027935d5e8ea569d290c95d67bd7347ddd133c1643e6f3c6fe36bd1b52f49e528b34a458afe316'
            'ea1d322bd56c7944a9eae97f4968a6a2e937b510eb3c1c21266428450c5b2ddcd8576718d0b66b69fbce5694ba94e80a692d04bda1e8c2b24a8d814a5ed50963')

build() {
  msg2 "Unzipping v${pkgver}.zip"
  unzip -o "v${pkgver}.zip"
  cd "$srcdir/$pkgname-${pkgver}"

  msg2 "Installing node modules"
  yarn install
}

package() {
  cd "$srcdir/$pkgname-${pkgver}"

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
