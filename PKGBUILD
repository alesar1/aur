# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=gmail-desktop
pkgver=2.25.3
pkgrel=3
pkgdesc="Unofficial Gmail desktop app"
arch=('x86_64')
url="https://github.com/timche/gmail-desktop"
license=('MIT')
depends=('electron')
makedepends=('nvm' 'yarn')
optdepends=('libnotify: desktop notifications'
            'libappindicator-gtk3: tray icon')
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz"
        "$pkgname.sh"
        "$pkgname.desktop")
sha256sums=('0720125a9fcd15f7892bc498de85684f3bc48e89e9c59fd9dc4e1a8c96cb990f'
            'a1f2eb9525dd10556ffde37a4dc9e06636a81d1d9ce815d1167e48954abee1dc'
            '8c30e207fe88455f63f4c0b2ae9087a2ca2bbeaa68b9be244c31a9ec392373c4')

_ensure_local_nvm() {
  # let's be sure we are starting clean
  which nvm >/dev/null 2>&1 && nvm deactivate && nvm unload
  export NVM_DIR="$srcdir/.nvm"

  # The init script returns 3 if version specified
  # in ./.nvrc is not (yet) installed in $NVM_DIR
  # but nvm itself still gets loaded ok
  source /usr/share/nvm/init-nvm.sh || [[ $? != 1 ]]
}

prepare() {
  cd "$pkgname-$pkgver"

  # Disable husky
  sed -i '/husky/d' package.json

  _ensure_local_nvm
  nvm install 14.17.5
}

build() {
  cd "$pkgname-$pkgver"
  _ensure_local_nvm
  yarn install --cache-folder "$srcdir/yarn-cache"
  yarn compile
  ./node_modules/.bin/electron-builder --linux dir
}

package() {
  cd "$pkgname-$pkgver"
  install -d "$pkgdir/usr/lib/$pkgname"
  cp -r --no-preserve=ownership dist/linux-unpacked/resources \
    "$pkgdir/usr/lib/$pkgname"

  install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname"
  install -Dm644 build/icon.png "$pkgdir/usr/share/pixmaps/$pkgname.png"
  install -Dm755 "$srcdir/$pkgname.sh" "$pkgdir/usr/bin/$pkgname"
  install -Dm644 "$srcdir/$pkgname.desktop" -t "$pkgdir/usr/share/applications"
}
